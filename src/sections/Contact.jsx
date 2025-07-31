import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const contactRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.mes', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.mes',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        }, contactRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div
            ref={contactRef}
            className="min-h-screen flex items-center justify-center px-4 "
        >
            <div className="mes bg-gradient-to-b from-[#ffffff10] to-[#ffffff05] backdrop-blur-lg border border-[#ffffff20] shadow-2xl rounded-2xl p-10 max-w-4xl w-full space-y-10">
                <h2 className="text-center text-4xl font-light text-white">Get in touch</h2>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
                >
                    {/* Left side */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="text-sm mb-1 block font-medium text-white bg-black px-3 py-1 rounded-full w-fit uppercase text-xs tracking-wide">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-white/40 px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-1 block font-medium text-white bg-black px-3 py-1 rounded-full w-fit uppercase text-xs tracking-wide">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-white/40 px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col h-full relative">
                        <label className="text-sm mb-1 block font-medium text-white bg-black px-3 py-1 rounded-full w-fit uppercase text-xs tracking-wide">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full h-full bg-transparent border border-white/40 px-4 py-3 rounded-md text-white resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
                        />

                        {/* Circular submit button */}
                        <button
                            type="submit"
                            className="absolute bottom-2 right-2 bg-white text-black p-4 rounded-full hover:scale-105 transition"
                        >
                            <FiArrowUpRight size={24} />
                        </button>
                    </div>
                </form>

                {/* Contact Links */}
                <div className="border-t border-white/20 pt-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
                    <div className="flex items-center gap-3">
                        <FiMail className="text-lg" />
                        <span>agencysyfus@example.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FiPhone className="text-lg" />
                        <span>+92 320   6033 585</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FiLinkedin className="text-lg" />
                        <a
                            href="https://www.linkedin.com/company/syfus/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-300"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
