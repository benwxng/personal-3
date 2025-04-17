import { NextResponse } from "next/server";

export function GET(request: Request) {
  // Redirect to the static personalOGimage.png instead of generating a dynamic image
  return NextResponse.redirect(new URL("/personalOGimage.png", request.url));
}
