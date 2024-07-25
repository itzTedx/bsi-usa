"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedText";

function Explore({ head, text }: { head: string; text: string }) {
  // Placeholder text data, as if from API
  const placeholderText = [{ type: "heading2", text: text }];
  const containers = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <div className="w-full bg-primary dark:bg-neutral text-white text-4xl md:text-[6rem] leading-none font-bold uppercase text-center py-9 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: 360 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="stroke-text text-transparent"
      >
        {head}
      </motion.h2>
      <motion.div
        className=""
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        variants={containers}
      >
        <div className="text-6xl">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Explore;
