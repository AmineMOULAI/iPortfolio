import { NextRequest, NextResponse } from "next/server";
import {
  getAllContent,
  saveProject,
  deleteProject,
  saveEssay,
  deleteEssay,
  saveBook,
  deleteBook,
} from "@/lib/contentManager";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const data = getAllContent();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch content" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, oldSlug, imageBase64, imageName, payload } = body;

    if (!type || !payload) {
      return NextResponse.json(
        { success: false, error: "Type and payload are required" },
        { status: 400 }
      );
    }

    let uploadedImagePath = "";
    if (imageBase64 && imageName) {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const safeName = `${Date.now()}-${imageName.replace(/[^\w.-]/g, "_")}`;
      const filePath = path.join(uploadsDir, safeName);
      fs.writeFileSync(filePath, buffer);
      uploadedImagePath = `/uploads/${safeName}`;
    }

    if (type === "project") {
      if (uploadedImagePath) {
        // If image uploaded, store in links or metadata if appropriate
      }
      const result = saveProject(payload, oldSlug);
      return NextResponse.json({ success: true, slug: result.slug, type });
    } else if (type === "essay") {
      const result = saveEssay(payload, oldSlug);
      return NextResponse.json({ success: true, slug: result.slug, type });
    } else if (type === "book") {
      if (uploadedImagePath) {
        payload.coverBg = uploadedImagePath;
      }
      const result = saveBook(payload, oldSlug);
      return NextResponse.json({ success: true, slug: result.slug, type });
    } else {
      return NextResponse.json(
        { success: false, error: `Invalid content type: ${type}` },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error saving content item:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save content" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const slug = searchParams.get("slug");

    if (!type || !slug) {
      return NextResponse.json(
        { success: false, error: "Parameters 'type' and 'slug' are required" },
        { status: 400 }
      );
    }

    if (type === "project") {
      deleteProject(slug);
    } else if (type === "essay") {
      deleteEssay(slug);
    } else if (type === "book") {
      deleteBook(slug);
    } else {
      return NextResponse.json(
        { success: false, error: `Invalid content type: ${type}` },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: `Successfully deleted ${type} "${slug}"` });
  } catch (error: any) {
    console.error("Error deleting content item:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete content" },
      { status: 500 }
    );
  }
}
