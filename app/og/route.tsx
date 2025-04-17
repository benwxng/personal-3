import { NextResponse } from "next/server";

export function GET(request: Request) {
  // Redirect to the static personalOGimage.png with hardcoded URL
  return NextResponse.redirect(
    "https://personal-3.vercel.app/personalOGimage.png"
  );
}
