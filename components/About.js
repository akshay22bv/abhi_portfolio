"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const About = () => {
  return (
    <section id="about">
      <div className="h-screen flex relative">
        <div className="absolute  md:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h-[100px] border drop-shadow-md rounded-md py-10 px-5 bg-white items-center flex flex-col justify-center"
          >
            <h3 className="text-5xl font-semibold text-orange-500 text">1+</h3>
            <p className="">
              <span className="font-semibold text-[10px] sm:text-xl">
                Years of Experiance
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h-[100px] border drop-shadow-md rounded-md py-10 px-5 bg-white items-center flex flex-col justify-center"
          >
            <h3 className="text-5xl font-semibold text-orange-500 text">50+</h3>
            <p className="">
              <span className="font-semibold text-[10px] sm:text-xl">
                Projects
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h-[100px] border drop-shadow-md rounded-md py-10 px-5 bg-white items-center flex flex-col justify-center"
          >
            <h3 className="text-5xl font-semibold text-orange-500 text">2+</h3>
            <p className="">
              <span className="font-semibold text-[10px] sm:text-xl">
                IEEE Papers
              </span>
            </p>
          </motion.div>
        </div>

        <div className="w-5/12 bg-orange-400 h-full font-Rubik">
          <h1 className="text-3xl font-semibold font-Rubik text-black p-5">
            About
          </h1>
        </div>

        <div className="hidden md:flex w-7/5 justify-center place-items-center m-auto  bg-white h-full">
          <div className="flex flex-col justify-center gap-10">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="h-[100px] border drop-shadow-md rounded-md py-10 px-5 bg-white items-center flex flex-col justify-center"
            >
              <h3 className="text-5xl font-semibold text-orange-500 text">
                1+
              </h3>
              <p className="">
                <span className="font-semibold text-[10px] sm:text-xl">
                  Years of Experiance
                </span>
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="h-[100px] border drop-shadow-md rounded-md py-10 px-5 bg-white items-center flex flex-col justify-center"
            >
              <h3 className="text-5xl font-semibold text-orange-500 text">
                50+
              </h3>
              <p className="">
                <span className="font-semibold text-xl ">Projects</span>
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="h-[100px] border drop-shadow-md rounded-md py-10 px-5 bg-white items-center flex flex-col justify-center"
            >
              <h3 className="text-5xl font-semibold text-orange-500 text">
                2+
              </h3>
              <p className="">
                <span className="font-semibold text-xl ">IEEE Papers</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
