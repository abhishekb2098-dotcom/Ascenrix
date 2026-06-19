import { NextRequest, NextResponse } from "next/server";

interface ConsultationRequest {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  preferredDate?: string;
  message?: string;
  timestamp: string;
}

// In-memory storage (for demo purposes)
let consultations: ConsultationRequest[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { fullName, email, company, phone, service, preferredDate, message } = body;

    // Validation
    if (!fullName || !email || !company || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const consultation: ConsultationRequest = {
      fullName,
      email,
      company,
      phone,
      service,
      preferredDate,
      message,
      timestamp: new Date().toISOString(),
    };

    consultations.push(consultation);

    // TODO: Send confirmation email
    console.log("New consultation request:", consultation);

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully",
        consultation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(consultations);
}
