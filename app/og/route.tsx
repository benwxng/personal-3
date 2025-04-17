import { NextResponse } from "next/server";

export function GET(request: Request) {
  // Get the base URL from the request
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  // Redirect to the static personalOGimage.png with a relative path
  return NextResponse.redirect(`${baseUrl}/personalOGimage.png`);
}
