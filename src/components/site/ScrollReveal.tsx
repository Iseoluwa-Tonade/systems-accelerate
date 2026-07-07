import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { scale: 0.93, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const slideRight: Variants = {
  hidden: { x: -28, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const slideLeft: Variants = {
  hidden: { x: 28, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeDown: Variants = {
  hidden: { y: -18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const zoomIn: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } },
};

const variantMap = { fadeUp, fadeIn, scaleIn, slideRight, slideLeft, fadeDown, zoomIn };

interface ScrollRevealProps {
  children: ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  as: Tag = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;
  const vars = { ...variantMap[variant] };
  if (delay > 0) {
    vars.visible = { ...vars.visible, transition: { ...(vars.visible as any).transition, delay } };
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={vars}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const childVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childClassName?: string;
}

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
}
