"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className = "",
  external = false,
}: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate the appropriate props based on the external flag
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}; // Empty object for internal links

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        className={`${className}`}
        {...linkProps}
        target={external ? "_blank" : undefined}
      >
        {children}
      </a>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-current"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          transformOrigin: isHovered ? "left" : "right",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </span>
  );
}
