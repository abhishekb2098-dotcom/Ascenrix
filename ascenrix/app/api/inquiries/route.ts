import { NextRequest, NextResponse } from "next/server";

interface Inquiry {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  projectDetails: string;
  timestamp: string;
}

// In-memory storage (for demo purposes)
let inquiries: Inquiry[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, email, company, phone, projectDetails } = body;

    // Validation
    if (!fullName || !email || !company || !projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const inquiry: Inquiry = {
      fullName,
      email,
      company,
      phone,
      projectDetails,
      timestamp: new Date().toISOString(),
    };

    inquiries.push(inquiry);

    // TODO: Send confirmation email and notify sales team
    console.log("New inquiry:", inquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        inquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(inquiries);
}
