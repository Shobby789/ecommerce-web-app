import { motion } from "motion/react";
import React from "react";

const marqueeVariants = {
  animate: {
    x: [0, -1280],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <section className="w-full padding-y overflow-hidden">
      <section className="w-full py-5 border-2 flex items-center gap-5">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]?.map((_, i) => {
          return (
            <motion.p
              variants={marqueeVariants}
              animate="animate"
              key={i}
              className="uppercase text-neutral-400 font-medium text-xl 2xl:text-3xl tracking-tight whitespace-nowrap"
            >
              the best hoodies clothing 2025
            </motion.p>
          );
        })}
      </section>
    </section>
  );
};

export default Marquee;
