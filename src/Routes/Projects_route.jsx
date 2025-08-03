import React, { useEffect } from "react";
import work1 from "../assets/images/work (1).jpeg";
import work2 from "../assets/images/work (2).jpeg";
import work3 from "../assets/images/work (3).jpeg";
import work4 from "../assets/images/work (4).jpeg";
import work5 from "../assets/images/work (5).jpeg";
import work6 from "../assets/images/work (6).jpeg";
import Minifooter from "../Subcomponnet/Minifooter"

const projects = [
    { image: work1, title: "Narrative Studio", desc: "React/Next.js with GSAP animations" },
    { image: work2, title: "Crypto Wallet", desc: "Next.js and Tailwind CSS" },
    { image: work3, title: "DeFi Tracker", desc: "Blockchain visualization" },
    { image: work4, title: "TeamFlow", desc: "Collaboration platform" },
    { image: work5, title: "AutoPilot AI", desc: "AI automation landing" },
    { image: work6, title: "FieldSync", desc: "Operations workflow" },
];

const Projects = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => observer.observe(el));
        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <section className="min-h-screen w-full bg-black text-[#f7f9ff] px-6 lg:px-20 py-24">
            {/* Section Heading */}
            <h1 className="same text-[10vw] font-light leading-none tracking-tight mb-20 text-left">
                Selected<br />Works
            </h1>

            {/* Projects List */}
            <div className="space-y-20 flex flex-col items-center">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`fade-in opacity-0 translate-y-10 transition-all duration-700 ease-out w-full max-w-6xl`}
                    >
                        <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[75vh] object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                <div className="p-8 w-full text-left">
                                    <h2 className="text-3xl lg:text-4xl font-light">{project.title}</h2>
                                    <p className="text-white/70 text-sm mt-2">{project.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Minifooter />
        </section>
    );
};

export default Projects;
