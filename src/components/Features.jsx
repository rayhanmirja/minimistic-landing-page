import React, { useState, useEffect, useRef } from 'react';
import { Layers, Activity, Maximize2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Concept Phase', status: 'Refined', delay: '01' },
        { id: 2, title: 'Wireframing', status: 'Active', delay: '02' },
        { id: 3, title: 'Prototyping', status: 'Pending', delay: '03' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center">
            {cards.map((card, idx) => {
                return (
                    <div
                        key={card.id}
                        className="absolute w-full max-w-[260px] bg-white rounded-2xl p-6 border border-min-border shadow-float"
                        style={{
                            transform: `translateY(${idx * -12}px) scale(${1 - idx * 0.05})`,
                            opacity: 1 - idx * 0.2,
                            zIndex: 3 - idx,
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <div className="flex justify-between items-start mb-6 border-b border-min-border pb-4">
                            <div className="w-8 h-8 rounded-full bg-min-bg flex items-center justify-center text-min-text">
                                <Layers size={14} strokeWidth={1.5} />
                            </div>
                            <span className="text-xs font-mono text-min-muted">
                                {card.delay}
                            </span>
                        </div>
                        <h4 className="font-sans font-medium text-min-text mb-1">{card.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-min-muted font-sans font-light">
                            <div className={clsx("w-1.5 h-1.5 rounded-full", card.status === 'Active' ? "bg-min-text animate-pulse" : "bg-min-muted/50")} />
                            {card.status}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const TypewriterCard = () => {
    const messages = [
        "Distilling complex logic...",
        "Refining typographic hierarchy...",
        "Balancing negative space...",
        "Elevating digital craftsmanship..."
    ];
    const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 30 : 60;
        const currentMsg = messages[currentMsgIdx];

        const timer = setTimeout(() => {
            if (!isDeleting && text === currentMsg) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentMsgIdx((prev) => (prev + 1) % messages.length);
            } else {
                setText(currentMsg.substring(0, text.length + (isDeleting ? -1 : 1)));
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, currentMsgIdx]);

    return (
        <div className="h-64 w-full bg-min-bg rounded-2xl p-6 text-min-text flex flex-col justify-between border border-min-border shadow-soft">
            <div className="flex justify-between items-center border-b border-min-border pb-4">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-min-text" strokeWidth={1.5} />
                    <span className="text-[10px] tracking-widest uppercase text-min-muted font-medium">Live Feed</span>
                </div>
            </div>

            <div className="flex-1 mt-6 flex flex-col justify-center">
                <div className="text-sm md:text-base font-display italic text-min-text/80 leading-relaxed">
                    "{text}"<span className="inline-block w-1.5 h-4 bg-min-text ml-1 animate-pulse translate-y-0.5 opacity-50" />
                </div>
            </div>
        </div>
    );
};

const MockCursorCard = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const boxRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

            tl.set(cursorRef.current, { x: 200, y: 150, opacity: 0 })
                .set(boxRef.current, { scale: 1, borderColor: '#EAEAEA' });

            tl.to(cursorRef.current, { opacity: 1, duration: 0.4 })
                .to(cursorRef.current, { x: 100, y: 70, duration: 1.4, ease: "power2.inOut" })
                .to(boxRef.current, { scale: 0.98, duration: 0.15 })
                .to(boxRef.current, {
                    scale: 1,
                    borderColor: '#111111',
                    duration: 0.2,
                    onStart: () => setIsActive(true)
                })
                .to(cursorRef.current, { x: 180, y: 180, duration: 1, ease: "power2.inOut", delay: 0.4 })
                .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
                .to(cursorRef.current, { scale: 1, duration: 0.1, onComplete: () => setIsActive(false) })
                .to(cursorRef.current, { opacity: 0, duration: 0.4, delay: 0.5 });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="h-64 w-full bg-white rounded-2xl p-6 border border-min-border shadow-soft relative overflow-hidden">
            <div className="flex justify-between items-center mb-8 border-b border-min-border pb-4">
                <h4 className="font-sans font-medium text-xs tracking-wider uppercase text-min-text">Interface Engine</h4>
                <Maximize2 size={14} className={clsx("transition-colors", isActive ? "text-min-text" : "text-min-muted/30")} strokeWidth={1.5} />
            </div>

            {/* Target Box */}
            <div className="flex items-center justify-center h-24 mb-4">
                <div
                    ref={boxRef}
                    className="w-32 h-16 border border-min-border rounded-lg flex items-center justify-center font-display italic text-sm text-min-muted transition-colors bg-min-bg"
                >
                    Focus Area
                </div>
            </div>

            {/* SVG Cursor */}
            <div ref={cursorRef} className="absolute top-0 left-0 w-4 h-4 z-10 pointer-events-none drop-shadow-md">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L11.5 21L14.5 14.5L21 11.5L4 4Z" fill="#111111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-32 px-6 md:px-16 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 max-w-2xl text-center mx-auto">
                    <h2 className="text-min-text text-3xl md:text-4xl font-display font-medium mb-6">
                        Curated <span className="italic">Components</span>
                    </h2>
                    <p className="text-min-muted font-sans font-light text-lg">
                        A restrained approach to interactive elements. We strip away the unnecessary, leaving only what serves the narrative.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-card flex flex-col gap-8">
                        <ShufflerCard />
                        <div className="px-2 text-center">
                            <h3 className="font-sans font-medium text-base text-min-text mb-2">Intentional Depth</h3>
                            <p className="font-sans font-light text-min-muted text-sm leading-relaxed">
                                Using gentle overlapping layers to imply structure without overwhelming the senses.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card flex flex-col gap-8">
                        <TypewriterCard />
                        <div className="px-2 text-center">
                            <h3 className="font-sans font-medium text-base text-min-text mb-2">Paced Delivery</h3>
                            <p className="font-sans font-light text-min-muted text-sm leading-relaxed">
                                Revealing information progressively ensures typography receives the focus it deserves.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card flex flex-col gap-8">
                        <MockCursorCard />
                        <div className="px-2 text-center">
                            <h3 className="font-sans font-medium text-base text-min-text mb-2">Guided Focus</h3>
                            <p className="font-sans font-light text-min-muted text-sm leading-relaxed">
                                Subtle micro-interactions guide the eye naturally, creating a serene user journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
