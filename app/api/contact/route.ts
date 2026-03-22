import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, product, quantity, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // If SMTP credentials are configured, send email via nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

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

      await transporter.sendMail({
        from: `"P&N Jewelry Website" <${process.env.SMTP_USER}>`,
        to: "sale@pnjewelrymfg.com",
        replyTo: email,
        subject: `OEM Inquiry from ${name}${company ? ` — ${company}` : ""}`,
        text: emailContent,
      });

      return NextResponse.json({ success: true });
    }

    // No SMTP configured — log to console in dev, return success in prod
    // (Frontend will open mailto as fallback if this returns error)
    console.log("Contact form submission (no SMTP configured):", {
      name,
      email,
      company,
      product,
      quantity,
      message,
    });

    // Return 200 so client shows success; operator should configure SMTP for real sending
    return NextResponse.json({ success: true, note: "SMTP not configured. Message logged." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "Contact API is running." });
}
