import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import work1 from "../assets/images/work (1).jpeg";
import work2 from "../assets/images/work (2).jpeg";
import work3 from "../assets/images/work (3).jpeg";
import work4 from "../assets/images/work (4).jpeg";
import work5 from "../assets/images/work (5).jpeg";
import work6 from "../assets/images/work (6).jpeg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const works = [
        {
            img: work1,
            text: "Clean UI design with React and Next.js, featuring GSAP animations for dynamic storytelling"
        },
        {
            img: work2,
            text: "Web3 wallet comparison interface built with Next.js and Tailwind CSS for responsive crypto experiences"
        },
        {
            img: work3,
            text: "Blockchain trade visualization dashboard using Next.js with decentralized data mapping"
        },
        {
            img: work4,
            text: "Productivity collaboration platform with modern UI components from Shadcn and Tailwind"
        },
        {
            img: work5,
            text: "AI automation landing page crafted with React, Next.js and GSAP scroll effects"
        },
        {
            img: work6,
            text: "Field operations workflow interface with data visualization using Next.js and Tailwind"
        }
    ];

    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        // Initialize animations
        gsap.from(sectionRef.current.querySelector("h1"), {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%"
            }
        });

        itemsRef.current.forEach((item, index) => {
            if (!item) return;

            gsap.from(item, {
                opacity: 0,
                y: 80,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                delay: index * 0.1
            });

            // Hover animations
            const img = item.querySelector("img");
            gsap.to(img, {
                scale: 1.05,
                duration: 1.5,
                ease: "power3.out",
                paused: true,
            });

            item.addEventListener("mouseenter", () => {
                gsap.to(img, { scale: 1.05, duration: 1.5 });
                gsap.to(item.querySelector(".overlay-content"), {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            item.addEventListener("mouseleave", () => {
                gsap.to(img, { scale: 1, duration: 1.5 });
                gsap.to(item.querySelector(".overlay-content"), {
                    y: 30,
                    opacity: 0,
                    duration: 0.5
                });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen w-full px-4 py-16 overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0">
                Selected Works
            </h1>

            <div className="max-w-7xl mx-auto">
                {works.map((work, index) => (
                    <div
                        key={index}
                        ref={el => itemsRef.current[index] = el}
                        className="work-item mb-24 last:mb-0 group cursor-pointer opacity-0"
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            <div className="aspect-video w-full h-auto overflow-hidden">
                                <img
                                    src={work.img}
                                    className="w-full h-full object-cover will-change-transform"
                                    alt={`Project ${index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="overlay-content transform translate-y-8 opacity-0">
                                    <span className="text-sm text-white/80 mb-2 block">0{index + 1}</span>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                        Project Title
                                    </h2>
                                    <p className="text-white/90 text-lg max-w-2xl">
                                        {work.text}
                                    </p>
                                    <button className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                                        View Case Study
                                    </button>
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