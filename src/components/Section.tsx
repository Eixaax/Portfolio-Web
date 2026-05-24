import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  delay?: number;
}

export function Section({ children, className, delay = 0, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn("py-20 md:py-32 container mx-auto px-6", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
