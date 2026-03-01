import React from 'react';
import clsx from 'clsx';
import { Plus } from 'lucide-react';

export default function Membership() {
    const tiers = [
        {
            name: "Edition One",
            price: "$2,500",
            period: "monthly",
            desc: "An entry point for brands seeking curated digital presence.",
            features: ["Typography Selection", "Monthly Revisions", "Standard Performance", "Email Correspondence"],
            isPopular: false,
        },
        {
            name: "Studio Standard",
            price: "$6,500",
            period: "monthly",
            desc: "Full architectural oversight for scale and refinement.",
            features: ["Custom Component Library", "Bi-weekly Strategy", "Performance Audits", "Priority Access", "CMS Integration"],
            isPopular: true,
        },
        {
            name: "Bespoke",
            price: "Custom",
            period: "retainer",
            desc: "Tailored architecture for those requiring absolute perfection.",
            features: ["Dedicated Lead Designer", "Daily Code Commits", "Unrestricted Scope", "SLA Guarantee", "In-person Workshops"],
            isPopular: false,
        }
    ];

    return (
        <section id="pricing" className="py-32 px-6 bg-min-bg">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 pb-8 border-b border-min-border gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-min-text mb-4">
                            Engagement <span className="italic text-min-muted">Models</span>
                        </h2>
                        <p className="font-sans font-light text-min-muted max-w-md">
                            Clear, transparent partnerships for creating exceptional digital products.
                        </p>
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-min-muted">
                        01/24 — Active
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={clsx(
                                "rounded-2xl p-10 transition-all duration-300 relative",
                                tier.isPopular
                                    ? "bg-white border-2 border-min-text shadow-float -mt-4 lg:py-12"
                                    : "bg-white border border-min-border shadow-soft"
                            )}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-display font-medium text-min-text">{tier.name}</h3>
                                {tier.isPopular && (
                                    <span className="text-[10px] font-sans uppercase tracking-widest text-min-text bg-min-bg px-2 py-1 rounded-sm border border-min-border">
                                        Recommended
                                    </span>
                                )}
                            </div>

                            <p className="font-sans font-light text-sm mb-8 h-12 text-min-muted leading-relaxed">
                                {tier.desc}
                            </p>

                            <div className="flex items-baseline gap-2 mb-10 pb-8 border-b border-min-border">
                                <span className="text-4xl font-sans font-medium tracking-tight text-min-text">{tier.price}</span>
                                <span className="font-sans font-light text-xs text-min-muted">
                                    / {tier.period}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-4 font-sans font-light text-sm">
                                        <Plus size={14} className="mt-0.5 shrink-0 text-min-muted" strokeWidth={1} />
                                        <span className="text-min-text">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={clsx(
                                    "w-full py-3.5 rounded-full font-sans font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group",
                                    tier.isPopular
                                        ? "bg-min-text text-white hover:opacity-90 mt-2"
                                        : "bg-white text-min-text border border-min-border hover:bg-min-bg mt-0"
                                )}
                            >
                                Inquire
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
