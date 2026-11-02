import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactRequestBody>;
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "sajinpp77@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    // 1. If RESEND_API_KEY is configured, send email via Resend REST API
    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `[Portfolio Contact] ${subject} - from ${name}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
              <h2 style="color: #ff4d00; margin-bottom: 8px;">New Transmission from Portfolio</h2>
              <hr style="border: 1px solid #eee; margin: 16px 0;" />
              <p><strong>Sender:</strong> ${name} &lt;${email}&gt;</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="background-color: #f8f8f8; border-left: 4px solid #ff4d00; padding: 16px; margin-top: 16px; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="font-size: 12px; color: #888; margin-top: 24px;">Sent from portfolio contact uplink.</p>
            </div>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email transmission" },
          { status: 502 }
        );
      }
    }

    // 2. If a Webhook URL is configured (Discord, Slack, Make/Zapier)
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `**New Transmission from Portfolio**\n**Name:** ${name}\n**Email:** ${email}\n**Subject:** ${subject}\n**Message:**\n${message}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    // 3. Fallback / development log
    if (!resendApiKey && !webhookUrl) {
      console.log("-----------------------------------------");
      console.log("📨 PORTFOLIO CONTACT FORM SUBMISSION:");
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("Note: Set RESEND_API_KEY or CONTACT_WEBHOOK_URL in .env to receive live notifications.");
      console.log("-----------------------------------------");
    }

    return NextResponse.json(
      { success: true, message: "Transmission received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

