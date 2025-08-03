import Navbar from "../components/Navbar";
import "../App.css";
import { MdOutlineArrowForward } from "react-icons/md";
import ShinyText from "../components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" relative h-screen w-full overflow-hidden text-white hero-container">
      <Navbar />

      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-20 hero-content">
        <p className="drop-shadow-[0_0px_10px_rgba(0,64,255,0.6)] tracking-widest text-gray-400 uppercase mb-4 sm:mb-6 hero-tagline">
          <span className=" hero-text ">Creating Future-Ready Interfaces</span>
        </p>

        <h1 className="font-bold leading-[0.9] hero-title">
          <span className="same lowercase pb-1 text-start block">Syfus</span>
        </h1>

        <p className="font-medium leading-tight flex flex-wrap justify-center gap-x-2 sm:gap-x-4 mb-6 sm:mb-10 hero-subtitle">
          <span className="same lowercase">Engineering Web Experiences</span>
        </p>

        <div className="backdrop-blur-[100px] absolute bg-[#161515] border border-[#474747] rounded-full group cursor-pointer transition-all hover:gap-4 flex items-center hero-button">
          <Link to="/contact">
            <ShinyText
              text="Contact"
              disabled={false}
              speed={4}
              className="custom-class drop-shadow-[0_0px_4px_white]"
            />
          </Link>
          <div className="bg-gray-400 transition-all duration-300 hero-button-line" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
