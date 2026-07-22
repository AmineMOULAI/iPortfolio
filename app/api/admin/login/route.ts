import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const expectedPassword = process.env.ADMIN_PASSWORD || "amine2026";

    if (password === expectedPassword) {
      return NextResponse.json({
        success: true,
        token: "admin-session-active",
        message: "Authenticated successfully as Editor",
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid passcode. Access denied." },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Authentication error" },
      { status: 500 }
    );
  }
}
