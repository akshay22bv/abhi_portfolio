"use client";
import React from "react";
import { projects } from "../data/data.js";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Projects = () => {
  return (
    <section id="projects">
      <div className="bg-white to-white flex relative p-3">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          <div className="p-1">
            <div className="rounded h-[220px]">
              <h1 className="text-3xl font-semibold font-Rubik text-orange-500">
                What I Did
              </h1>
              <ol className="p-2 font-Rubik font-semibold">
                <li>
                  &#9654; Design and development Embedded systems and Internet
                  of things (IOT).
                </li>
                <li>
                  &#9654; Worked on different Microcontrollers, Sensors and
                  Actuators.
                </li>
                <li>&#9654; PCB designing using Easy EDA software.</li>
              </ol>
            </div>
          </div>
          {projects?.map((item, i) => {
            return (
              <div key={i} className="relative group p-1 h-auto duration-300">
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative "
                >
                  <Image
                    src={item.image}
                    alt="The guitarist in the concert."
                    layout="responsive"
                    loading="lazy"
                    className="transition duration-300 group-hover:scale-105 group-hover:brightness-50 rounded-sm drop-shadow-xl"
                  />
                  <h1 className="absolute text-white font-Rubik text-2xl font-semibold opacity-0 -bottom-full left-3 group-hover:bottom-5  group-hover:opacity-100 duration-500">
                    {item.title}
                  </h1>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
