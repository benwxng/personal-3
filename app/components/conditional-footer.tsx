"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Only render the Footer component if the current path is the home page (about page)
  if (pathname === "/") {
    return <Footer />;
  }

  // Return null when on other pages
  return null;
}
