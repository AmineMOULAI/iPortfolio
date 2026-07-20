import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, sendMode } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const formattedSubject = subject ? `[Portfolio Gazette] ${subject}` : `[Portfolio Gazette] Letter from ${name}`;
    
    const emailBody = `Dear Amine,

You received a new letter from your Portfolio Gazette!

• Sender Name: ${name}
• Contact Email: ${email || 'Not provided'}
• Contact Phone / WhatsApp: ${phone || 'Not provided'}
• Mode: ${sendMode === 'whatsapp' ? 'WhatsApp' : 'Email'}
• Subject: ${subject || 'General Inquiry'}

Letter Content:
--------------------------------------------------
${message}
--------------------------------------------------

— Sent via Portfolio Gazette`;

    // Dispatch via Web3Forms API directly to Amine's email: moulaiamine01@gmail.com
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8bf83226-0a25-4c07-9e45-12a4506c1c8a",
        name: name,
        email: email && email.includes("@") ? email : "moulaiamine01@gmail.com",
        replyto: email && email.includes("@") ? email : "moulaiamine01@gmail.com",
        subject: formattedSubject,
        message: emailBody,
        to_email: "moulaiamine01@gmail.com"
      }),
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error sending contact notification:", error);
    return NextResponse.json(
      { error: "Failed to dispatch message" },
      { status: 500 }
    );
  }
}
