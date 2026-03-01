import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Gentle parallax background scale
            gsap.to(bgRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                scale: 1.05,
            });

            const animateText = (element, delay = 0) => {
                const words = element.querySelectorAll('.word');
                gsap.from(words, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    },
                    y: 20,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "power2.out",
                    delay: delay
                });
            };

            animateText(text1Ref.current, 0);
            animateText(text2Ref.current, 0.3);

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const splitWords = (text) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-2 md:mr-3 leading-[1.3]">{word}</span>
        ));
    };

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="relative min-h-[70vh] bg-min-text flex items-center justify-center overflow-hidden py-32 px-6"
        >
            {/* Subtle Dark Background Pattern */}
            <div ref={bgRef} className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)] mix-blend-overlay" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
                <h2
                    ref={text1Ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-sans font-light text-white/40 tracking-tight"
                >
                    {splitWords("The loudest interfaces")}
                    <br className="hidden md:block" />
                    {splitWords("often say the least.")}
                </h2>

                <h2
                    ref={text2Ref}
                    className="text-4xl sm:text-5xl md:text-7xl font-display text-white font-medium"
                >
                    {splitWords("We believe in")}
                    <span className="block mt-2 italic text-white/90">{splitWords("quiet brilliance.")}</span>
                </h2>
            </div>
        </section>
    );
}
