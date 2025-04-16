"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

export function AnimatedHeading({ children }: { children: ReactNode }) {
  return (
    <motion.h1
      className="font-semibold text-2xl mb-8 tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "easeInOut", duration: 0.3, delay: 0 }}
    >
      {children}
    </motion.h1>
  );
}

export function AnimatedContent({ children }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "easeInOut", duration: 0.3, delay: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedFooter({ children }: AnimatedSectionProps) {
  return (
    <motion.footer
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "easeInOut", duration: 0.7, delay: 0.15 }}
    >
      {children}
    </motion.footer>
  );
}
export function AnimatedNav({ children }: AnimatedSectionProps) {
  return (
    <motion.nav
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "easeInOut", duration: 0.4, delay: 0.4 }}
    >
      {children}
    </motion.nav>
  );
}
