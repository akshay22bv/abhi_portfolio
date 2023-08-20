"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-screen flex relative font-Rubik">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            Hi there I&apos;m
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[50px] md:text-[80px] font-semibold "
          >
            Abhilash Patil
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-md"
          >
            Experienced software engineer, adept PCB designer, and skilled
            engineering project creator.
          </motion.p>
        </div>
        <div className="w-5/12 bg-white h-full "></div>
        <div className="w-7/12 bg-orange-400 h-full "></div>
      </div>
    </section>
  );
};

export default Hero;
