import React, { useState } from "react";
import logo from "../assets/videos/Picsart_25-07-30_03-25-35-135.png";
import { FaBars, FaTimes } from "react-icons/fa";
import ShinyText from "./Button";
import FlipLink from "../components/ui/text-effect-flipper"


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
  ];

  return (
    <div className="fixed w-full z-50 px-16 py-5 flex justify-between items-center bg-transparent backdrop-blur-lg">
      {/* Logo */}
      <div className="logo">
        <img className="h-[4vh]" src={logo} alt="logo" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 m-2 items-center">
        <FlipLink >home</FlipLink>
        <FlipLink >work</FlipLink>
        <FlipLink >services</FlipLink>
        <FlipLink >contect</FlipLink>

      </div>

      <div className="hidden md:flex " >
        <div className="backdrop-blur-[100px] h-[50px] pl-5 bg-[#161515] border border-[#474747] rounded-full p-3 group cursor-pointer text-lg sm:text-xl font-medium flex items-center gap-2 transition-all hover:gap-4">
          <ShinyText
            text="Lets Work "
            disabled={false}
            speed={4}
            className="custom-class px-6 drop-shadow-[0_0px_4px_white]"
          />
        </div>
      </div>

      <div className="md:hidden text-xl cursor-pointer z-50" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-[#0f0f0f] flex flex-col items-center justify-center gap-10 text-lg transition-all duration-500 ${navOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-[#b18aff] transition"
            onClick={() => setNavOpen(false)} // close menu on click
          >
            {link.label}
          </a>
        ))}

      </div>
    </div>
  );
};

export default Navbar;
