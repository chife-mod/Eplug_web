export default function Footer() {
    return (
        <footer className="w-full bg-[var(--color-brand-violet)] px-6 lg:px-12 pt-24 pb-12 font-montserrat text-white relative z-40 border-t border-[var(--color-brand-fuchsia)]/20">

            {/* Top Border Glow */}
            <div className="absolute top-0 left-[5%] w-[90%] h-[1px] bg-[var(--color-brand-fuchsia)] opacity-20 box-glow-fuchsia hidden md:block" />

            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-32">

                {/* Left */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[var(--color-brand-violet)] border border-[var(--color-brand-fuchsia)]/40 flex items-center justify-center text-[var(--color-brand-fuchsia)] relative">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <span className="font-bold text-3xl tracking-tighter uppercase relative z-10">Eplug</span>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed font-medium">
                        Charging the urban future.<br />
                        Built for precision, speed, and city life.
                    </p>
                </div>

                {/* Center */}
                <div className="flex flex-col sm:flex-row gap-16 uppercase tracking-widest text-xs font-bold text-white/50">
                    <div className="flex flex-col gap-6">
                        <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">The Network</a>
                        <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Speed & Tech</a>
                        <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Rewards App</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Investors</a>
                        <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Newsroom</a>
                        <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Contact</a>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 bg-[var(--color-brand-violet)] border border-white/10 px-6 py-4">
                    <div className="relative flex items-center justify-center w-3 h-3">
                        <div className="w-2 h-2 bg-[var(--color-brand-fuchsia)] rounded-full animate-pulse box-glow-fuchsia absolute" />
                        <div className="w-3 h-3 border border-[var(--color-brand-fuchsia)] rounded-full animate-ping absolute" />
                    </div>
                    <span className="text-sm font-bold tracking-widest opacity-80 uppercase text-[var(--color-brand-fuchsia)]">Network Live</span>
                </div>

            </div>

            {/* Bottom */}
            <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-white/30 text-xs font-bold uppercase tracking-widest gap-6">
                <span>© 2026 Eplug. Urban Energy Network.</span>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--color-brand-fuchsia)] transition-colors">Terms of Service</a>
                </div>
            </div>

        </footer>
    );
}
