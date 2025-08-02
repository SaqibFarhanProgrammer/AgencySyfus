import React, { lazy, Suspense, useEffect, useRef } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SmoothScroll from "./components/SmoothScroll";
import ClickSpark from './components/Spark';
import Serviceses from "./sections/Servieses";
import Contact from "./sections/Contact";
import Footer from "./sections/Foooter";
import gsap from "gsap";

const Profjects = lazy(() => import("./sections/Projects"));

const App = () => {
  const loaderRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate loader in
    tl.to(loaderRef.current, {
      top: 0,
      duration: 0.6,
      ease: "power2.out",
    })

      // Animate each letter
      .fromTo(
        lettersRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
        },
        "<0.2"
      )

      // Slide loader up
      .to(loaderRef.current, {
        top: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 1,
      });
  }, []);

  const brandName = "SYFUS";

  return (
    <div className="app relative">
      <SmoothScroll>
        <div
          ref={loaderRef}
          className="loader fixed top-[-100%] left-0 z-[9999] h-screen w-full bg-zinc-900 flex items-center justify-center"
        >
          <h1 className="text-white text-[6vw] font-bold tracking-widest flex gap-4">
            {brandName.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="footer-text inline-block px-10"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Main App */}
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Hero />
          <About />
          <Serviceses />
          <Suspense fallback={null}>
            <Profjects />
          </Suspense>
          <Contact />
          <Footer />
        </ClickSpark>
      </SmoothScroll>
    </div>
  );
};

export default App;
