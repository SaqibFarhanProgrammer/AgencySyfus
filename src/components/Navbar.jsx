import React, { useState } from "react";
import logo from "../assets/videos/Picsart_25-07-30_03-25-35-135.png";
import { FaBars, FaTimes } from "react-icons/fa";
import ShinyText from "./Button";
import FlipLink from "../components/ui/text-effect-flipper";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="fixed w-full z-50 px-6 sm:px-10 lg:px-16 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10">
      {/* Logo */}
      <div className="logo">
        <img className="h-[4vh] sm:h-[5vh]" src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10 items-center">
        {navLinks.map((link, idx) => (
          <FlipLink key={idx} to={link.to}>
            {link.label.toLowerCase()}
          </FlipLink>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex">
        <div className="backdrop-blur-[100px] h-[50px] pl-5 bg-[#161515] border border-[#474747] rounded-full p-3 group cursor-pointer text-lg font-medium flex items-center gap-2 transition-all hover:gap-4">
          <ShinyText
            text="Let's Work"
            disabled={false}
            speed={4}
            className="custom-class px-6 drop-shadow-[0_0px_4px_white]"
          />
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden z-50 text-2xl text-white cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-[#0f0f0f] flex flex-col items-center justify-center gap-10 text-xl font-medium transition-all duration-500 ${navOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            onClick={() => setNavOpen(false)}
            className="hover:text-[#b18aff] transition-all"
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-4">
          <div className="backdrop-blur-[100px] h-[50px] pl-5 bg-[#161515] border border-[#474747] rounded-full p-3 group cursor-pointer text-lg font-medium flex items-center gap-2 transition-all hover:gap-4">
            <ShinyText
              text="Let's Work"
              disabled={false}
              speed={4}
              className="custom-class px-6 drop-shadow-[0_0px_4px_white]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
