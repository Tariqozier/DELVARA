import { NextResponse } from "next/server";
import {
  buildEnquiryPayload,
  validateEnquirySubmission,
} from "@/lib/enquirySubmission";

export const runtime = "nodejs";

type AppsScriptSuccess = {
  success: true;
  enquiryId?: string;
};

type AppsScriptFailure = {
  success?: false;
  error?: string;
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid enquiry payload." },
      { status: 400 },
    );
  }

  const validated = validateEnquirySubmission(body);
  if (!validated.ok) {
    return NextResponse.json(
      { success: false, error: validated.error },
      { status: 400 },
    );
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  const webhookSecret = process.env.ENQUIRY_WEBHOOK_SECRET?.trim();

  if (!scriptUrl || !webhookSecret) {
    console.error(
      "[DELVARA] Missing GOOGLE_APPS_SCRIPT_URL or ENQUIRY_WEBHOOK_SECRET",
    );
    return NextResponse.json(
      {
        success: false,
        error:
          "Enquiry service is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  const payload = buildEnquiryPayload(validated.data);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Delvara-Webhook-Secret": webhookSecret,
      },
      body: JSON.stringify({
        ...payload,
        notificationEmail: process.env.DELVARA_NOTIFICATION_EMAIL?.trim() || "",
        webhookSecret,
      }),
      signal: controller.signal,
      cache: "no-store",
      redirect: "follow",
    });

    let upstreamBody: AppsScriptSuccess | AppsScriptFailure | null = null;
    try {
      upstreamBody = (await upstream.json()) as
        | AppsScriptSuccess
        | AppsScriptFailure;
    } catch {
      upstreamBody = null;
    }

    if (!upstream.ok || !upstreamBody || upstreamBody.success !== true) {
      console.error("[DELVARA] Apps Script enquiry rejected", {
        status: upstream.status,
        body: upstreamBody,
      });
      return NextResponse.json(
        {
          success: false,
          error:
            "We could not send your enquiry just now. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      enquiryId: upstreamBody.enquiryId || payload.enquiryId,
    });
  } catch (error) {
    const aborted =
      error instanceof Error &&
      (error.name === "AbortError" || error.name === "TimeoutError");
    console.error("[DELVARA] Enquiry forward failed", error);
    return NextResponse.json(
      {
        success: false,
        error: aborted
          ? "The enquiry service took too long to respond. Please try again."
          : "We could not send your enquiry just now. Please try again.",
      },
      { status: aborted ? 504 : 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
