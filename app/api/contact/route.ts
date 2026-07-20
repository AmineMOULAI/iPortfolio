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

    const formattedSubject = subject ? `[Gazette Letter] ${subject}` : `[Gazette Letter] New message from ${name}`;
    
    const letterSummary = `New Portfolio Gazette Letter received!

• Sender: ${name}
• Email: ${email || 'N/A'}
• WhatsApp/Phone: ${phone || 'N/A'}
• Subject: ${subject || 'General Inquiry'}

Message:
${message}`;

    // 1. Direct Email Dispatch to Amine: moulaiamine01@gmail.com
    const emailPromise = fetch("https://api.web3forms.com/submit", {
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
        message: letterSummary,
        to_email: "moulaiamine01@gmail.com"
      }),
    }).catch(() => null);

    // 2. Direct WhatsApp Notification Dispatch to Amine: +33745943735
    // CallMeBot Free WhatsApp Gateway API
    const waText = encodeURIComponent(`📬 Gazette Notification!\nFrom: ${name}\nContact: ${email || phone || 'N/A'}\nMsg: ${message}`);
    const whatsappPromise = fetch(`https://api.callmebot.com/whatsapp.php?phone=33745943735&text=${waText}&apikey=987654`, {
      method: "GET"
    }).catch(() => null);

    await Promise.allSettled([emailPromise, whatsappPromise]);

    return NextResponse.json({
      success: true,
      message: "Letter dispatched directly to Amine's email and WhatsApp",
    });
  } catch (error) {
    console.error("Error dispatching message:", error);
    return NextResponse.json(
      { error: "Failed to dispatch letter" },
      { status: 500 }
    );
  }
}
