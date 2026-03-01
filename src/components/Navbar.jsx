import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <nav
                className={clsx(
                    "pointer-events-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 w-full max-w-5xl",
                    isScrolled
                        ? "bg-white/70 backdrop-blur-xl border border-min-border shadow-soft"
                        : "bg-transparent text-min-text"
                )}
            >
                <div className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
                    Mini.
                </div>

                <div className="hidden md:flex items-center gap-8 font-sans font-medium text-xs tracking-wider uppercase text-min-muted">
                    <a href="#features" className="hover:text-min-text transition-colors">Studio</a>
                    <a href="#philosophy" className="hover:text-min-text transition-colors">Thesis</a>
                    <a href="#protocol" className="hover:text-min-text transition-colors">Work</a>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className="hidden md:block px-6 py-2 rounded-full font-sans font-medium text-xs tracking-wider bg-min-text text-white hover:bg-min-text/80 transition-all border border-transparent shadow-sm"
                    >
                        Inquire
                    </button>
                    <button className="md:hidden text-min-text hover:opacity-70">
                        <Menu size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>
        </div>
    );
}
