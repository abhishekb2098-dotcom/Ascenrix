import { NextRequest, NextResponse } from "next/server";

interface Lead {
  id: string;
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  source: "consultation" | "inquiry" | "direct";
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  notes?: string;
  createdAt: string;
  lastUpdated: string;
}

// In-memory storage (for demo purposes)
let leads: Lead[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, email, company, phone, service, source, notes } = body;

    // Validation
    if (!fullName || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fullName,
      email,
      company,
      phone,
      service: service || "General Inquiry",
      source: source || "direct",
      status: "new",
      notes,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("New lead created:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead created successfully",
        lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const status = request.nextUrl.searchParams.get("status");
  const service = request.nextUrl.searchParams.get("service");

  let filteredLeads = [...leads];

  if (status) {
    filteredLeads = filteredLeads.filter((lead) => lead.status === status);
  }

  if (service) {
    filteredLeads = filteredLeads.filter((lead) => lead.service === service);
  }

  return NextResponse.json({
    success: true,
    total: filteredLeads.length,
    leads: filteredLeads,
  });
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
    }

    const lead = leads.find((l) => l.id === id);
    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    if (status) lead.status = status;
    if (notes !== undefined) lead.notes = notes;
    lead.lastUpdated = new Date().toISOString();

    return NextResponse.json(
      {
        success: true,
        message: "Lead updated successfully",
        lead,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating lead:", error);
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    );
  }
}
