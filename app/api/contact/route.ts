import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, subject, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const formattedSubject = subject ? `[Gazette Letter] ${subject}` : `[Gazette Letter] New message from ${name}`;
    const emailBody = `Dear Amine,\n\nYou received a new letter from ${name}.\n\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}\n\n— Portfolio Gazette System`;

    // Attempt sending via Web3Forms API to moulaiamine01@gmail.com
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8bf83226-0a25-4c07-9e45-12a4506c1c8a", // Public Form Access Key for moulaiamine01@gmail.com
        name: name,
        email: "moulaiamine01@gmail.com",
        subject: formattedSubject,
        message: emailBody,
        to: "moulaiamine01@gmail.com",
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
