import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, product, quantity, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const emailContent = `
New OEM Inquiry — P&N Jewelry Website

Name: ${name}
Email: ${email}
Company: ${company || "—"}
Product Interest: ${product || "—"}
Quantity: ${quantity || "—"}

Message:
${message}

---
Sent from pnjewelrymfg.com contact form
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "P&N Jewelry Website <noreply@pnjewelrymfg.com>",
        to: ["sale@pnjewelrymfg.com"],
        reply_to: email,
        subject: `OEM Inquiry from ${name}${company ? ` — ${company}` : ""}`,
        text: emailContent,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "Contact API is running." });
}
