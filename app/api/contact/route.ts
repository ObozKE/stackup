import { NextResponse } from "next/server";

// ============================================================================
// GOOGLE FORM CONFIGURATION (stackup kenya website)
// Verified Action URL and Entry IDs extracted directly from form schema
// ============================================================================
const GOOGLE_FORM_ACTION_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSdfKWbT7wMOLjmjNI4OAx6A4_3ub9zqAXcppGYHgZjU371bTA/formResponse";

const ENTRY_IDS = {
  name: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_NAME || "entry.47284777",
  phone: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_PHONE || "entry.1630308019",
  email: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_EMAIL || "entry.1438439933",
  service: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_SERVICE || "entry.448324612",
  message: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_MESSAGE || "entry.387243583",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const formData = new URLSearchParams();
    formData.append(ENTRY_IDS.name, name.trim());
    formData.append(ENTRY_IDS.phone, phone.trim());
    formData.append(ENTRY_IDS.email, email?.trim() || "");
    formData.append(ENTRY_IDS.service, service?.trim() || "Web Development");
    formData.append(ENTRY_IDS.message, message?.trim() || "");

    const googleResponse = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: formData.toString(),
    });

    // Google Forms returns 200 or 302 on successful submission
    if (googleResponse.status === 200 || googleResponse.status === 302 || googleResponse.status === 303 || googleResponse.ok) {
      return NextResponse.json({ success: true });
    }

    // Google Forms might return status 200 with HTML
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact Form Server Error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to transmit form data." },
      { status: 500 }
    );
  }
}
