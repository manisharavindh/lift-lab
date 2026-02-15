
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-obsidian border-t border-zinc-900 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Logo */}
                    <div className="mb-10">
                        <a href="#" className="font-archivo text-5xl font-black uppercase tracking-tighter text-white">
                            LIFT<span className="text-transparent bg-clip-text bg-gradient-to-b from-voltage to-red-800">LAB</span>
                        </a>
                    </div>

                    {/* Sitemap */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        {['Home', 'About', 'Training', 'Facility', 'Contact', 'Privacy'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-gray-400 uppercase tracking-widest text-sm font-medium hover:text-voltage transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6 mb-12">
                        {[Instagram, Twitter, Facebook].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-voltage hover:text-white hover:border-voltage transition-all duration-300"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-zinc-600 text-xs uppercase tracking-wider">
                        &copy; {new Date().getFullYear()} LiftLab Inc. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
