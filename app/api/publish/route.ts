import { NextRequest, NextResponse } from "next/server";
import { publishProject, publishEssay, publishBook } from "@/lib/publisher";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, imageBase64, imageName, ...payload } = body;

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    let uploadedImagePath = "";
    if (imageBase64 && imageName) {
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const safeName = `${Date.now()}-${imageName.replace(/[^\w.-]/g, "_")}`;
      const filePath = path.join(uploadsDir, safeName);
      fs.writeFileSync(filePath, buffer);
      uploadedImagePath = `/uploads/${safeName}`;
    }

    let result;
    if (type === "project") {
      result = publishProject(payload);
    } else if (type === "book") {
      result = publishBook(payload);
    } else {
      result = publishEssay(payload);
    }

    return NextResponse.json({
      success: true,
      slug: result.slug,
      imagePath: uploadedImagePath,
      message: `Successfully published ${type || "essay"} "${result.slug}"`,
    });
  } catch (error: any) {
    console.error("Error publishing content:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to publish content" },
      { status: 500 }
    );
  }
}
