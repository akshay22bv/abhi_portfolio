"use client";
import { useEffect, useState } from "react";
import { BsPhone } from "react-icons/bs";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div
        className="cursor-pointer fixed top-2 right-2 z-[999]  rounded-lg bg-white backdrop-blur-md p-2"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <h4 className="text-orange-400 text-xl animate-pulse ">
          <HiMenuAlt2 />
        </h4>
      </div>

      {showMenu && (
        <nav
          className={`fixed text-black bottom-10 flex justify-around gap-10 bg-slate-200/60 rounded-full p-3 md:p-5 z-20 backdrop-blur-md`}
        >
          <a
            onClick={() => setActive("hero")}
            href={"#hero"}
            className={` ${
              active === "hero" && "bg-dark_primary text-orange-500"
            }  rounded-full`}
          >
            <FaHome />
          </a>

          <a
            onClick={() => setActive("about")}
            href={"#about"}
            className={` ${
              active === "about" && "bg-dark_primary text-orange-500"
            }  rounded-full`}
          >
            <FaUser />
          </a>
          <a
            // key={i}
            onClick={() => setActive("projects")}
            href={"#projects"}
            className={` ${
              active === "projects" && "bg-dark_primary text-orange-500"
            }  rounded-full`}
          >
            <FaProjectDiagram />
          </a>
          <a
            onClick={() => setActive("contact")}
            href={"#contact"}
            className={` ${
              active === "contact" && "bg-dark_primary text-orange-500"
            }  rounded-full`}
          >
            <MdCall />
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
