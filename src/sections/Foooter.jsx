import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-black text-white py-24 h-screen px-6 overflow-hidden">
            <h1 className=" footer-text absolute bottom-0 left-0 text-[34vw]  text-white/80 select-none pointer-events-none leading-none z-0">
                Syfus
            </h1>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
                {/* Menu */}
                <div>
                    <h3 className="font-semibold mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Studio</a></li>
                        <li><a href="#" className="hover:underline">Projekte</a></li>
                        <li><a href="#" className="hover:underline">Learn</a></li>
                        <li><a href="#" className="hover:underline">Kontakt</a></li>
                    </ul>
                </div>

                {/* Office */}
                <div>
                    <h3 className="font-semibold mb-4">Office</h3>
                    <p className="leading-relaxed">
                        <strong>Syfus </strong><br />
                        Annenstrasse 29<br />
                        8020 Graz, Austria<br />
                        <a href="mailto:hello@syfus.com" className="underline block mt-2">Email ↗</a>
                    </p>
                </div>

                {/* Extras */}
                <div>
                    <h3 className="font-semibold mb-4">Extras</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Store Waitlist ↗</a></li>
                        <li><a href="#" className="hover:underline">Brandcheck sichern ↗</a></li>
                        <li><a href="#" className="hover:underline">Webdesign Pakete ↗</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-semibold mb-4">Socials</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">TwitterX</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom links */}
            <div className="relative z-10 border-t border-white/10 pt-6 flex justify-between items-center text-sm flex-wrap gap-2">

            </div>
        </footer>
    );
};

export default Footer;
