import React from "react";
import card1 from "../assets/images/cardimg.jfif";
import card2 from "../assets/images/cards (2).jfif";
import card3 from "../assets/images/cardsimg (3).jfif";
import card4 from "../assets/images/cardsimg (5).jfif";

const services = [
    {
        title: "Portfolio Website",
        desc: "Showcase your creativity with elegant, modern interfaces built for impact.",
        img: card1,
        num: "01"
    },
    {
        title: "Landing Page",
        desc: "Conversion-focused pages that capture attention and drive user action.",
        img: card2,
        num: "02"
    },
    {
        title: "Single Page Website",
        desc: "High-performance one-pagers with clear narratives and stunning visuals.",
        img: card3,
        num: "03"
    },
    {
        title: "Business Website",
        desc: "Professional, scalable web presence to elevate your brand and reach.",
        img: card4,
        num: "04"
    }
];

const ServicesPage = () => {
    return (
        <section className="min-h-screen w-full bg-black text-[#f7f9ff] px-6 lg:px-20 py-28 relative">
            {/* Heading */}
            <div className="max-w-5xl mx-auto text-center mb-24">
                <h1 className="same text-[9vw] lg:text-[7vw] leading-none font-light tracking-tight">
                    SERVICES
                </h1>
                <h2 className="text-2xl lg:text-3xl font-light opacity-70 mt-4">
                    What We Offer
                </h2>
                <p className="text-base lg:text-lg text-white/60 max-w-xl mx-auto mt-6">
                    At Syfus, we specialize in crafting modern, responsive, and visually refined front-end solutions using the latest technologies.
                </p>
            </div>

            {/* Service Cards with gradient */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-3xl shadow-xl"
                    >
                        {/* Image */}
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

                        {/* Text on Image */}
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-1">
                                {service.num}. {service.title}
                            </h3>
                            <p className="text-sm lg:text-base text-white/70 max-w-xs leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-8 left-0 w-full flex justify-between items-center px-6 lg:px-20 text-xs text-white/50 uppercase tracking-wider">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">Works</a>
                    <a href="#" className="text-white font-semibold">Services</a>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Legal</a>
                </div>
            </div>

            {/* Bottom Logo */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm tracking-widest font-light opacity-40">
                © 2025 SYFUS
            </div>
        </section>
    );
};

export default ServicesPage;
