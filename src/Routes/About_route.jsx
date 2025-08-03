import React from "react";

const About = () => {
    return (
        <section className="min-h-screen w-full bg-black text-[#f7f9ff] flex flex-col lg:flex-row px-6 lg:px-20 py-20 gap-10 lg:gap-0 relative">
            {/* LEFT SIDE: Info Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between text-left space-y-6 max-w-[550px]">
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                    We are a software agency based in Pakistan. We design and develop
                    high-quality front-end experiences through close collaboration with
                    our clients. Every project is unique — we listen, adapt, and craft
                    it with precision.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                    Just like a strong root system supports a growing tree, our work
                    is grounded in creativity, collaboration, and clean code. Our goal
                    is not just to build websites — it's to build digital presence
                    with lasting impact.
                </p>

                {/* Contact Info */}
                <div className="mt-6 space-y-2 text-white/70 text-sm">
                    <p>Syfus Software Agency</p>
                    <p>Karachi, Pakistan</p>
                    <p>+92 123 4567890</p>
                    <p>hello@syfus.com</p>
                    <div className="pt-2 flex gap-4">
                        <a href="#" className="hover:text-[#0040ff] transition">LinkedIn</a>
                        <a href="#" className="hover:text-[#0040ff] transition">Instagram</a>
                        <a href="#" className="hover:text-[#0040ff] transition">GitHub</a>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Title */}
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-center justify-center text-left lg:text-center">
                <h1 className="text-[10vw] leading-none font-light tracking-tight text-[#f7f9ff]">
                    ABOUT
                </h1>
                <h2 className="text-[6vw] leading-tight font-light text-[#f7f9ff] opacity-80 -mt-2">
                    Informations
                </h2>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-5 left-0 w-full flex justify-between items-center px-6 lg:px-20 text-sm text-white/70">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-[#0040ff]">WORKS</a>
                    <a href="#" className="hover:text-[#0040ff]">SERVICES</a>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-red-600 font-semibold italic">ABOUT</a>
                    <a href="#" className="hover:text-[#0040ff]">LEGAL</a>
                </div>
            </div>

            {/* Bottom Center Logo */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-red-600 text-2xl font-bold">
                {/* Logo placeholder or SVG */}
                W
            </div>
        </section>
    );
};

export default About;
