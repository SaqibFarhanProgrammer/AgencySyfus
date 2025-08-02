import React, { useEffect } from "react";
import work1 from "../assets/images/work (1).jpeg";
import work2 from "../assets/images/work (2).jpeg";
import work3 from "../assets/images/work (3).jpeg";
import work4 from "../assets/images/work (4).jpeg";
import work5 from "../assets/images/work (5).jpeg";
import work6 from "../assets/images/work (6).jpeg";

const projects = [
    { image: work1, title: "Narrative Studio", desc: "React/Next.js with GSAP animations" },
    { image: work2, title: "Crypto Wallet", desc: "Next.js and Tailwind CSS" },
    { image: work3, title: "DeFi Tracker", desc: "Blockchain visualization" },
    { image: work4, title: "TeamFlow", desc: "Collaboration platform" },
    { image: work5, title: "AutoPilot AI", desc: "AI automation landing" },
    { image: work6, title: "FieldSync", desc: "Operations workflow" }
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
        <div className="min-h-screen w-full px-4 py-20 bg-[#0a0a0a] text-white flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-20 tracking-tight text-center">
                Selected Works
            </h1>

            <div className="space-y-20 w-full flex flex-col items-center">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`fade-in opacity-0 translate-y-10 transition-all duration-700 ease-out delay-${idx * 100} w-[90vw] max-w-5xl`}
                    >
                        <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-white/10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="text-center px-6">
                                    <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
                                    <p className="text-lg text-gray-300">{project.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
