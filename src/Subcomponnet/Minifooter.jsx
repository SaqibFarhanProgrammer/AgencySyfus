import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-[#f7f9ff] py-16 px-6 lg:px-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Left Column: Info */}
                <div className="space-y-4 text-sm text-white/80">
                    <h3 className="text-lg font-semibold text-[#f7f9ff]">Syfus Software Agency</h3>
                    <p>Karachi, Pakistan</p>
                    <p>+92 123 4567890</p>
                    <p>hello@syfus.com</p>
                </div>

                {/* Right Column: Links */}
                <div className="grid grid-cols-2 gap-10 text-sm text-white/70">
                    <div className="space-y-2">
                        <h4 className="text-base font-medium text-[#f7f9ff] mb-2">Navigation</h4>
                        <a href="#" className="hover:text-[#0040ff] block">Home</a>
                        <a href="#" className="hover:text-[#0040ff] block">Work</a>
                        <a href="#" className="hover:text-[#0040ff] block">Services</a>
                        <a href="#" className="hover:text-[#0040ff] block">Contact</a>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-base font-medium text-[#f7f9ff] mb-2">Social</h4>
                        <a href="#" className="hover:text-[#0040ff] block">Instagram</a>
                        <a href="#" className="hover:text-[#0040ff] block">LinkedIn</a>
                        <a href="#" className="hover:text-[#0040ff] block">GitHub</a>
                        <a href="#" className="hover:text-[#0040ff] block">TwitterX</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-12 pt-6 text-xs flex flex-col md:flex-row justify-between items-center text-white/50 gap-3">
                <span>© 2025 Syfus. All rights reserved.</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-[#0040ff]">Privacy</a>
                    <a href="#" className="hover:text-[#0040ff]">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
