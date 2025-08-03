import React from "react";

const About = () => {
    return (
        <section className="min-h-screen w-full bg-black text-[#f7f9ff] flex items-center justify-center px-6 lg:px-24 py-20">
            <div className="max-w-5xl w-full space-y-10">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-4 relative z-10">
                    We craft{" "}
                    <span className="relative text-[#0040ff] inline-block">
                        exceptional digital experiences
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0040ff] opacity-60 rounded-full translate-y-1"></span>
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
                    <strong className="text-[#f7f9ff]">Syfus</strong> is a forward-thinking software agency specializing in premium front-end development. We build stunning{" "}
                    <strong>portfolio websites</strong>, sleek{" "}
                    <strong>landing pages</strong>, and high-performance{" "}
                    <strong>single-page websites</strong> using the latest technologies in the web ecosystem.
                </p>

                {/* Founder Section */}
                <div className="border-t border-white/10 pt-8">
                    <h2 className="text-2xl md:text-3xl font-medium mb-3">Meet the Founder</h2>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                        I’m <strong className="text-[#f7f9ff]">Saqib Farhan</strong>, a passionate software developer and the founder of Syfus. I launched this company in{" "}
                        <strong className="text-[#0040ff]">2025</strong> with a vision to push the boundaries of modern UI/UX on the web. At Syfus, every pixel we build is intentional, and every experience we create is refined to perfection.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
