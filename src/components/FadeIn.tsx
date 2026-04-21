import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "", ...props }: FadeInProps) {
  const directionOffset = 40;
  const yOffset = direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0;
  const xOffset = direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
