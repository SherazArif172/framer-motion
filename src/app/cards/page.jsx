"use client";

import React from "react";
import Card from "./card";
import cardData from "../../data/cards.json";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="px-16">
      <h1 className="mt-5 text-4xl font-bold text-center text-green-800">
        Framer Motion
      </h1>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 15 }}
        transition={{ delay: 0.25, ease: "easeInOut", duration: 0.5 }}
        className="grid grid-cols-3 gap-3 mt-16"
      >
        {cardData.map((data) => (
          <Card
            title={data.title}
            description={data.description}
            footer={data.footer}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default page;
