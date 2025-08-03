import React from "react";

import Minifooter from "../Subcomponnet/Minifooter"
const About = () => {
    return (
        <section className="min-h-screen w-full bg-black text-[#f7f9ff] flex flex-col lg:flex-row px-6 lg:px-20 py-24 gap-16 relative">
            {/* LEFT COLUMN — TEXT & CONTACT INFO */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 max-w-[550px]">
                <p className="text-base leading-relaxed text-white/80">
                    We are a creative software agency based in Pakistan. Through close collaboration with clients, we design and develop exceptional front-end experiences that are tailored, intuitive, and future-proof.
                </p>
                <p className="text-base leading-relaxed text-white/80">
                    Like the roots of a strong tree, our foundation is built on clean code, creativity, and clear communication. Our mission is to craft digital presences that last — not just websites, but impactful experiences.
                </p>

                {/* CONTACT DETAILS */}
                <div className="pt-8 space-y-2 text-white/60 text-sm">
                    <p className="uppercase tracking-widest text-white/70">Syfus Software Agency</p>
                    <p>Karachi, Pakistan</p>
                    <p>+92 123 4567890</p>
                    <p>hello@syfus.com</p>

                    {/* SOCIAL LINKS */}
                    <div className="pt-4 flex gap-6">
                        <a href="#" className="hover:text-white transition">LinkedIn</a>
                        <a href="#" className="hover:text-white transition">Instagram</a>
                        <a href="#" className="hover:text-white transition">GitHub</a>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN — HEADINGS */}
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-center justify-center text-left lg:text-center">
                <h1 className=" same text-[10vw] leading-none font-light tracking-tight">
                    ABOUT
                </h1>
                <h2 className="text-[6vw] font-light text-white/60 -mt-2">
                    Informations
                </h2>
            </div>

            {/* BOTTOM NAVIGATION */}

            <Minifooter />
        </section>
    );
};

export default About;
