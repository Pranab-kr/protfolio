import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Check for API key at runtime
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // console.log("Sending email to pranabm406@gmail.com from:", email);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["pranabm406@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Name:</strong><br/>
              <span style="color: #333;">${name}</span>
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #555;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #555;">Message:</strong><br/>
              <span style="color: #333; white-space: pre-wrap;">${message}</span>
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

          <p style="color: #888; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // console.log("Resend response - data:", data, "error:", error);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    // console.log("Email sent successfully with ID:", data?.id);

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
