import React, { useState } from "react";
import { FiMail, FiPhone, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Minifooter from "../Subcomponnet/Minifooter"
const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const contactMethods = [
        {
            icon: <BsWhatsapp size={24} />,
            title: "Whatsapp",
            detail: "+92 320 6033 585",
            link: "https://wa.me/923206033585",
        },
        {
            icon: <FiPhone size={24} />,
            title: "Phone",
            detail: "+92 320 6033 585",
            link: "tel:+923206033585",
        },
        {
            icon: <FiMail size={24} />,
            title: "Email",
            detail: "hello@syfus.com",
            link: "mailto:hello@syfus.com",
        },
        {
            icon: <FiInstagram size={24} />,
            title: "Instagram",
            detail: "@syfusagency",
            link: "https://instagram.com/syfusagency",
        },
    ];

    return (
        <section className="min-h-screen bg-black text-white px-6 lg:px-24 py-24 space-y-20">
            {/* Heading */}
            <div className="text-center">
                <h1 className="same text-5xl font-light tracking-wide">Contact</h1>
                <p className="text-white/50 mt-4 max-w-xl mx-auto">
                    Connect with us through your preferred platform or drop us a message.
                </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {contactMethods.map((method, idx) => (
                    <a
                        key={idx}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/10 rounded-xl p-6 flex flex-col gap-4 items-start hover:bg-white/5 transition group"
                    >
                        <div className="bg-white/10 p-3 rounded-md group-hover:bg-white group-hover:text-black transition">
                            {method.icon}
                        </div>
                        <h3 className="text-xl font-medium">{method.title}</h3>
                        <p className="text-blue-400 text-sm">{method.detail}</p>
                    </a>
                ))}
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-b from-[#ffffff08] to-[#ffffff02] border border-white/10 rounded-2xl backdrop-blur-lg p-10 max-w-5xl mx-auto">
                <h2 className="text-3xl font-light mb-10 text-center">Send a Message</h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Left side */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-sm mb-2 text-white/70">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-white/70">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col h-full relative">
                        <label className="block text-sm mb-2 text-white/70">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full h-full bg-transparent border border-white/20 px-4 py-3 rounded-md text-white resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        {/* Send Button */}
                        <button
                            type="submit"
                            className="absolute bottom-2 right-2 bg-white text-black p-4 rounded-full hover:scale-105 transition"
                        >
                            <FiArrowUpRight size={20} />
                        </button>
                    </div>
                </form>
            </div>
            <Minifooter />
        </section>
    );
};

export default Contact;
