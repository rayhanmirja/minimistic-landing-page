import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-min-bg text-min-text py-20 px-6 sm:px-12 lg:px-24 border-t border-min-border">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

                {/* Brand Col */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-display font-medium tracking-tight mb-2">
                            Mini.
                        </h2>
                        <p className="font-sans font-light text-sm text-min-muted max-w-xs leading-relaxed">
                            Crafting minimal digital architecture for discerning brands.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 mt-12 md:mt-24">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-min-muted text-xs font-sans font-medium">Accepting new projects.</span>
                    </div>
                </div>

                {/* Links Cols */}
                <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-sans font-medium text-xs tracking-wider uppercase mb-6 text-min-text">Studio</h4>
                        <ul className="space-y-4 font-sans font-light text-sm text-min-muted">
                            <li><a href="#features" className="hover:text-min-text transition-colors">Approach</a></li>
                            <li><a href="#protocol" className="hover:text-min-text transition-colors">Process</a></li>
                            <li><a href="#philosophy" className="hover:text-min-text transition-colors">Manifesto</a></li>
                            <li><a href="#pricing" className="hover:text-min-text transition-colors">Engagements</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans font-medium text-xs tracking-wider uppercase mb-6 text-min-text">Contact</h4>
                        <ul className="space-y-4 font-sans font-light text-sm text-min-muted">
                            <li><button className="hover:text-min-text transition-colors">Inquiries</button></li>
                            <li><button className="hover:text-min-text transition-colors">Careers</button></li>
                            <li><button className="hover:text-min-text transition-colors">Terms of Service</button></li>
                            <li><button className="hover:text-min-text transition-colors">Privacy Policy</button></li>
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="font-sans font-medium text-xs tracking-wider uppercase mb-6 text-min-text">Connect</h4>
                        <ul className="space-y-4 font-sans font-light text-sm text-min-muted">
                            <li><a href="#" className="hover:text-min-text transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-min-text transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-min-text transition-colors">Read.cv</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-min-border flex flex-col md:flex-row items-center justify-between gap-4 font-sans font-light text-xs text-min-muted">
                <p>© {new Date().getFullYear()} Mini Studio. All rights reserved.</p>
                <p>Curated in the United States.</p>
            </div>
        </footer>
    );
}
