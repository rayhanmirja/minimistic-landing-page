import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return;

                gsap.to(card, {
                    scale: 0.95,
                    opacity: 0.4,
                    filter: "blur(4px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative bg-min-bg">
            {/* Card 1: Discovery */}
            <div className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-6 sm:p-12 z-[1]">
                <div className="w-full h-[85vh] bg-white rounded-3xl text-min-text flex flex-col md:flex-row items-center p-12 md:p-24 overflow-hidden relative shadow-soft border border-min-border">
                    <div className="flex-1 z-10">
                        <h3 className="text-min-muted text-xs font-sans uppercase tracking-widest mb-6 border-b border-min-border inline-block pb-1">Phase 01: Discovery</h3>
                        <h2 className="text-4xl md:text-6xl font-display font-medium mb-6">Uncover Intent</h2>
                        <p className="font-sans text-lg text-min-muted max-w-md leading-relaxed font-light">
                            We begin by stripping away preconceptions. Through rigorous questioning, we arrive at the core truth of your computational needs.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative w-full h-full">
                        <div className="w-48 h-48 border border-min-border rounded-full flex items-center justify-center relative bg-min-bg/50">
                            <div className="w-32 h-32 border border-min-border rounded-full flex items-center justify-center">
                                <div className="w-16 h-16 bg-min-text rounded-full animate-pulse opacity-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Architecture */}
            <div className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-6 sm:p-12 z-[2]">
                <div className="w-full h-[85vh] bg-[#F5F5F5] rounded-3xl text-min-text flex flex-col md:flex-row items-center p-12 md:p-24 overflow-hidden relative shadow-float border border-white">
                    <div className="flex-1 z-10">
                        <h3 className="text-min-muted text-xs font-sans uppercase tracking-widest mb-6 border-b border-min-border inline-block pb-1">Phase 02: Architecture</h3>
                        <h2 className="text-4xl md:text-6xl font-display font-medium mb-6">Structural Poetics</h2>
                        <p className="font-sans text-lg text-min-muted max-w-md leading-relaxed font-light">
                            We draft systems that are beautiful in their logic. Code is not just functional; it is a meticulously crafted manuscript.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative w-full h-full">
                        <div className="grid grid-cols-3 gap-4 w-48 h-48">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="bg-white border border-min-border/50 rounded-sm" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3: Execution */}
            <div className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-6 sm:p-12 z-[3]">
                <div className="w-full h-[85vh] bg-white rounded-3xl text-min-text flex flex-col md:flex-row items-center p-12 md:p-24 overflow-hidden relative shadow-float border border-min-border">
                    <div className="flex-1 z-10">
                        <h3 className="text-min-muted text-xs font-sans uppercase tracking-widest mb-6 border-b border-min-border inline-block pb-1">Phase 03: Delivery</h3>
                        <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 italic text-min-accent">Silent Precision</h2>
                        <p className="font-sans text-lg text-min-muted max-w-md leading-relaxed font-light">
                            Deployment is absolute. The resulting architecture breathes quietly, scaling without friction or noise.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative">
                        <div className="w-1 h-32 bg-min-border rounded-full relative overflow-hidden">
                            <div className="absolute top-0 w-full h-8 bg-min-text rounded-full animate-[bounce_2s_ease-in-out_infinite]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
