import Navbar from "../components/Navbar";
import "../App.css";
import { MdOutlineArrowForward } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BlurText from "../components/Text";
import ShinyText from "../components/Button";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const ctv = gsap.context(() => {
      gsap.from(".btn", {
        opacity: 0,
        duration: 1,
      });
    });
    return () => ctv.revert();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <Navbar />

      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <p className="drop-shadow-[0_0px_10px_rgba(0,64,255,0.6)] tracking-widest text-gray-400 uppercase mb-6">
          <BlurText
            text="Creating Future-Ready Interfaces"
            animateBy="words"
            direction="bottom"
            className="text-[1vw] hero-text"
          />
        </p>

        <h1 className="hero-word font-bold leading-[0.9] mb-4">
          <BlurText
            text="Syfus"
            animateBy="words"
            direction="bottom"
            className="text-[8vw] lowercase pb-1 text-start"
          />
        </h1>

        <p className="hero-word font-medium leading-tight flex flex-wrap justify-center gap-x-4 mb-4">
          <BlurText
            text="Engineering Web Experiences"
            animateBy="words"
            direction="bottom"
            className="text-[6.5vw] lowercase"
          />
        </p>

        <div className="btn backdrop-blur-[100px] absolute bottom-50 px-10 pl-10 bg-[#161515] border border-[#474747] rounded-full p-3 mt-12 group cursor-pointer text-lg font-medium flex items-center gap-2 transition-all hover:gap-4">
          <ShinyText
            text="Lets Explore"
            disabled={false}
            speed={4}
            className="custom-class drop-shadow-[0_0px_4px_white]"
          />
          <div className="ml-2 mt-1 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-24" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
