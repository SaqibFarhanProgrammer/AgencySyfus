import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from '../components/Button';
import bg from "../assets/videos/imgi_30_QbTBqyfFKMk8wQvTbSZA0Lzl6g0.png"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const paraContainer = useRef(null);

  const para =
    "Syfus crafts sleek, high-performance front-end experiences with React, Next.js, Tailwind, GSAP, and Framer Motion";
  const para2 =
    "We blend minimalism and innovation to deliver clean, design-driven websites that empower startups, personal brands, and forward-thinking companies.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".word", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: paraContainer.current,
          start: "top 80%",
        },
      });

      gsap.from(buttonRef.current, {
        y: 10,
        opacity: 0,
        delay: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[70vh] w-full  relative flex justify-between items-end px-16 py-20 gap-10"
    >
      <img src={bg} alt="" className="aboutimg absolute top-0 w-[110%] h-[100%] bottom-[62%] object-cover blur left-0 mix-blend-screen" />
      <div className="w-[65%] text-[2.3vw] leading-tight text-[#f7f9ff] flex flex-col gap-10 tracking-wide">
        <div ref={paraContainer} className="drop-shadow-[0_0_5px_white] flex flex-wrap overflow-hidden">
          {para.split(" ").map((word, index) => (
            <p key={index} className="  overflow-hidden">
              <span className="word  inline-block pr-2">{word}</span>
            </p>
          ))}
        </div>

        <div ref={paraContainer} className="flex drop-shadow-[0_0_5px_white]  flex-wrap overflow-hidden">
          {para2.split(" ").map((word, index) => (
            <p key={index} className="overflow-hidden">
              <span className="word inline-block pr-2">{word}</span>
            </p>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <div ref={buttonRef} className="w-[25%] flex justify-center relative h-[46vh]">
        <div className="backdrop-blur-[100px] bg-[#161515] border h-[7vh] absolute bottom-8  border-[#474747] rounded-full p-3 group cursor-pointer text-lg font-medium flex items-center transition-all hover:gap-4">
          <ShinyText
            text="Explore More"
            disabled={false}
            speed={4}
            className="custom-class px-6 drop-shadow-[0_0px_4px_white]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
