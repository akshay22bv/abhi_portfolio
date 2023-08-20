"use client";
import React from "react";
import { ImInstagram } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdPlace, MdCall } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
import { social_media } from "@/data/data";
function Contact() {
  const InputField = () => {
    return (
      <>
        <motion.input
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="border-black border  p-2 rounded"
        ></motion.input>

        <motion.input
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          type="email"
          name="user_emmail"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          placeholder="Email"
          required
          className="border-black border p-2 rounded"
        ></motion.input>

        <motion.textarea
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          placeholder="Message"
          name="message"
          required
          className="border border-black  p-2 rounded "
        ></motion.textarea>

        <motion.button
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="border-black border rounded py-1 text-xl font-semibold font-Passion bg-white md:bg-orange-400 text-black"
        >
          Submit
        </motion.button>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col py-2 mx-auto"
        >
          <div className="flex items-center gap-2">
            <MdEmail />
            AbhilashPatilece@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <MdCall /> 9620122867
          </div>
          <div className="flex items-center gap-2">
            <MdPlace /> <span>Bengaluru</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" flex justify-around text-[20px]"
        >
          <a
            target="_blank"
            href={social_media.instagram}
            className="bg-white p-1 rounded-full"
          >
            <ImInstagram className="text-red-400 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={social_media.linkedin}
            className="bg-white p-1 rounded-full"
          >
            <BsLinkedin className="text-blue-700 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={social_media.mail}
            download
            className="bg-white p-1 rounded-full"
          >
            <MdEmail className="text-red-600 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={social_media.whatsapp}
            className="bg-white p-1 rounded-full"
          >
            <IoLogoWhatsapp className="text-green-500 cursor-pointer" />
          </a>
        </motion.div>
      </>
    );
  };

  return (
    <section id="contact">
      <div className="h-screen flex relative">
        <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-5">
          <h1 className="text-black flex text-4xl font-semibold font-Passion py-1 m-auto">
            Contact Us
          </h1>
          <form
            action="https://getform.io/f/d855387a-02c1-49a0-bfd4-40b57807ea9b"
            method="POST"
            className="h-full flex flex-col justify-center max-w-sm m-auto gap-5"
          >
            <InputField />
          </form>
        </div>

        <div className="w-7/12 h-full font-Rubik bg-white ">
          <form
            action="https://getform.io/f/d855387a-02c1-49a0-bfd4-40b57807ea9b"
            method="POST"
            className="h-full hidden md:flex flex-col justify-center max-w-sm m-auto gap-5"
          >
            <InputField />
          </form>
        </div>

        <div className="w-5/12 bg-orange-400 h-full font-Rubik flex justify-center relative -z-10">
          <div className="m-auto rotate-90 ">
            <div className="">
              <h1 className="text-black hidden md:flex text-xl md:text-6xl font-semibold font-Passion">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
