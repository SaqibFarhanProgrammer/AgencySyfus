import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                delay: .02,
                scrollTrigger: {
                    trigger: footer.current,
                    start: '550% 70%',
                    markers: true,
                },
            });
        }, footer);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footer}
            className="footer relative bg-black text-white py-24 h-screen px-6 overflow-hidden"
        >
            {/* Large background text */}
            <div className="footer-text absolute bottom-0 left-0 text-[31vw] text-white/80 select-none pointer-events-none leading-none z-0">
                <div className="animated-text flex overflow-hidden">
                    <p>S</p>
                    <p>y</p>
                    <p>f</p>
                    <p>u</p>
                    <p>S</p>
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap justify-between gap-16 px-8 mb-24">
                {/* Menu */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Menu</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Work</a></li>
                        <li><a href="#" className="hover:underline">Projekte</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Socials</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">TwitterX</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom section */}
            <div className="absolute bottom-0 z-10 border-t backdrop-blur-[5px] border-white/10 pt-6 w-full px-18 pb-16 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-3">
                <span>© 2025 Syfus. All rights reserved.</span>
                <div className="flex space-x-4 pt-10">
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
