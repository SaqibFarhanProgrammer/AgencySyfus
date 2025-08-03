import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ to, href, children, external = false }) => {
  const Wrapper = external ? motion.a : motion(Link);
  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { to };

  return (
    <Wrapper
      {...props}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap cursor-pointer text-[1vw] font-semibold uppercase dark:text-white/90 sm:text-base md:text-[1.5vw]"
      style={{ lineHeight: 0.75 }}
    >
      {/* Normal state text */}
      <div>
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Hover state text */}
      <div className="absolute inset-0 top-0 left-0">
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </Wrapper>
  );
};

export default FlipLink;
