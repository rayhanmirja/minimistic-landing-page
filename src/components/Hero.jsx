import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-element", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.to(".float-element", {
                y: -15,
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-min-bg"
        >
            {/* Subtle Accent Elements */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="absolute w-[800px] h-[800px] border-[1px] border-min-border rounded-full" />
                <div className="absolute w-[600px] h-[600px] border-[1px] border-min-border rounded-full" />
            </div>

            {/* Floating UI Elements (Abstract) */}
            <div className="float-element absolute top-1/4 right-[10%] w-32 h-40 bg-white border border-min-border shadow-float rounded-2xl hidden lg:flex flex-col p-4 opacity-50 z-0">
                <div className="w-1/2 h-2 bg-min-border rounded-full mb-3" />
                <div className="w-full h-1 bg-min-border/50 rounded-full mb-1" />
                <div className="w-3/4 h-1 bg-min-border/50 rounded-full mb-auto" />
                <div className="w-8 h-8 rounded-full border border-min-border self-end" />
            </div>

            {/* Content */}
            <div className="w-full max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center mt-12">
                <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-min-border bg-white shadow-sm mb-10 text-min-muted text-xs font-sans tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-min-text" />
                    Digital Craftsmen
                </div>

                <h1 className="hero-element text-min-text text-5xl md:text-7xl lg:text-[6rem] font-display font-medium leading-[1.1] tracking-tight">
                    Software, refined.
                </h1>

                <p className="hero-element text-min-muted text-lg md:text-xl max-w-xl mt-8 font-sans font-light leading-relaxed">
                    We bring editorial elegance to digital architecture. Pure logic wrapped in purposeful whitespace.
                </p>

                <div className="hero-element mt-12 flex items-center justify-center gap-6">
                    <button className="bg-min-text text-white px-8 py-3.5 rounded-full font-sans font-medium text-sm hover:bg-opacity-90 transition-all shadow-float flex items-center gap-2 group">
                        Start a project
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <a href="#features" className="text-min-muted font-sans font-medium text-sm hover:text-min-text transition-colors border-b border-transparent hover:border-min-text pb-0.5">
                        View our approach
                    </a>
                </div>
            </div>
        </section>
    );
}
