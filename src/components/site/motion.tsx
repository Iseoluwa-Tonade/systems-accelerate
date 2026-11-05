import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.2, 0.7, 0.1, 1] as const;

/** Fades and lifts content into view once. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Splits a line into words that rise from a mask. */
export function MaskText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 0.9, ease } },
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * A pinned panel: it sticks while the next panel slides over it,
 * shrinking and dimming so the next section feels like it was behind.
 */
export function StackPanel({
  children,
  className,
  innerClassName,
  last = false,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  last?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, last ? 1 : 0.9]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 0.55]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 28]);
  return (
    <div ref={ref} className={cn("sticky top-0", className)}>
      <motion.div
        style={reduce ? {} : { scale, borderRadius: radius }}
        className={cn("relative origin-top overflow-hidden", innerClassName)}
      >
        {children}
        {!reduce && (
          <motion.div
            style={{ opacity: dim }}
            className="pointer-events-none absolute inset-0 bg-ink"
          />
        )}
      </motion.div>
    </div>
  );
}

/** A vertical scroll distance that drives a horizontal track. */
export function HorizontalRail({
  children,
  className,
  heightVh = 300,
  header,
}: {
  children: ReactNode;
  className?: string;
  heightVh?: number;
  header?: (p: MotionValue<number>) => ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [travel, setTravel] = useState(0);
  useEffect(() => {
    // End with the last card centred in the viewport, so nothing is left cut off.
    const measure = () => {
      const el = track.current;
      if (!el) return;
      const last = el.lastElementChild as HTMLElement | null;
      const lastW = last?.offsetWidth ?? 0;
      setTravel(Math.max(0, el.scrollWidth - lastW / 2 - window.innerWidth / 2));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (track.current) observer.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  return (
    <section
      ref={ref}
      style={{ height: reduce ? "auto" : `${heightVh}vh` }}
      className={cn("relative", className)}
    >
      <div
        className={
          reduce
            ? "py-24 overflow-x-auto"
            : "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
        }
      >
        {header?.(scrollYProgress)}
        <motion.div
          ref={track}
          style={reduce ? {} : { x }}
          className="flex gap-6 pl-[6vw] will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/** A small photographic window opens into an immersive full-width section. */
export function ExpandingImage({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 10%"] });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(14% 16% 14% 16%)", "inset(0% 0% 0% 0%)"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1]);
  return (
    <section ref={ref} className="expanding-image">
      <motion.div className="image-window" style={reduce ? {} : { clipPath }}>
        <motion.img src={src} alt={alt} loading="lazy" style={reduce ? {} : { scale }} />
        <div className="absolute inset-0 image-shade" />
        <div className="image-copy">
          <div className="max-w-2xl">{children}</div>
        </div>
      </motion.div>
    </section>
  );
}

/** Parallax image inside a frame. */
export function ParallaxImage({
  src,
  alt,
  className,
  w,
  h,
}: {
  src: string;
  alt: string;
  className?: string;
  w: number;
  h: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.img
        style={{ y, scale: 1.18 }}
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function ProgressLine({ progress }: { progress: MotionValue<number> }) {
  const scaleX = useTransform(progress, [0, 1], [0, 1]);
  return (
    <div className="h-px w-full bg-ink-line">
      <motion.div style={{ scaleX }} className="h-px origin-left bg-gold" />
    </div>
  );
}
