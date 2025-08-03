import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footer = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animated-text p", {
                y: 400,
                duration: 2,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.02,
                scrollTrigger: {
                    trigger: footer.current,
                    start: '550% 70%',
                },
            });
        }, footer);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footer}
            className="relative bg-black text-white py-24 h-screen px-6 overflow-hidden"
        >
            {/* Animated Text */}
            <div className="absolute bottom-0 left-0 text-[31vw] text-white/80 select-none pointer-events-none leading-none z-0">
                <div className="same uppercase animated-text flex overflow-hidden">
                    {["S", "y", "f", "u", "S"].map((char, i) => (
                        <p key={i}>{char}</p>
                    ))}
                </div>
            </div>

            {/* Footer Links */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap justify-between gap-16 px-8 mb-24">
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Menu</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/work" className="hover:underline">Work</Link></li>
                        <li><Link to="/services" className="hover:underline">Services</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-lg">Socials</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><a href="https://www.linkedin.com/company/syfus/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/syfusagency" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                        <li><a href="mailto:syfusagency@gmail.com" className="hover:underline">Email</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="absolute bottom-0 z-10 border-t backdrop-blur-[5px] border-white/10 pt-6 w-full px-6 pb-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-3">
                <span>© 2025 Syfus. All rights reserved.</span>
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
