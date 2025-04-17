import { NextResponse } from "next/server";
import { baseUrl } from "app/config";

export function GET(request: Request) {
  // Redirect to the static personalOGimage.png with absolute URL
  return NextResponse.redirect(`${baseUrl}/personalOGimage.png`);
}
