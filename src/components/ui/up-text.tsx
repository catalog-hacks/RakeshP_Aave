import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  children: React.ReactNode;
};

export function FadeText({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  },
  children,
}: FadeTextProps) {
  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
        transform: "translateY(25%)",
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
        transform: "translateY(0%)",
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_ANIMATION_VARIANTS}
    >
      <motion.div className={className}>{children}</motion.div>
    </motion.div>
  );
}