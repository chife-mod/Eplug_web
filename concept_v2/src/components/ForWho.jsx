import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Truck, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ForWho() {
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.who-card', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 80%',
                }
            });
        }, cardsRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full pt-32 pb-48 font-montserrat">
            {/* Background Split */}
            <div className="absolute top-0 left-0 w-full h-[60%] bg-[var(--color-brand-violet)] z-0" />
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[var(--color-brand-white)] z-0" />

            <div ref={cardsRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Drivers */}
                <div className="who-card group bg-[var(--color-brand-violet)] border border-[rgba(255,0,197,0.3)] min-h-[480px] p-12 flex flex-col justify-between overflow-hidden relative cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-fuchsia)] to-purple-500 group-hover:box-glow-fuchsia transition-all duration-300" />
                    <div className="w-16 h-16 rounded-full bg-[rgba(255,0,197,0.1)] flex items-center justify-center text-[var(--color-brand-fuchsia)] mb-8">
                        <User size={32} />
                    </div>
                    <div>
                        <span className="text-[var(--color-brand-fuchsia)] font-bold tracking-widest uppercase text-sm mb-4 block">For Drivers</span>
                        <h3 className="text-white text-[32px] font-bold leading-tight">Charge in minutes.<br />Drive for hours.</h3>
                    </div>
                </div>

                {/* Fleets */}
                <div className="who-card group bg-[var(--color-brand-purple)] min-h-[480px] p-12 flex flex-col justify-between overflow-hidden relative cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand-fuchsia)] opacity-0 group-hover:opacity-100 group-hover:box-glow-fuchsia transition-all duration-300" />
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-8">
                        <Truck size={32} />
                    </div>
                    <div>
                        <span className="text-white/70 font-bold tracking-widest uppercase text-sm mb-4 block">For Fleets</span>
                        <h3 className="text-white text-[32px] font-bold leading-tight">City-scale energy management for urban mobility operators.</h3>
                    </div>
                </div>

                {/* Cities */}
                <div className="who-card group bg-[var(--color-brand-grey)] min-h-[480px] p-12 flex flex-col justify-between overflow-hidden relative cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand-fuchsia)] opacity-0 group-hover:opacity-100 group-hover:box-glow-fuchsia transition-all duration-300" />
                    <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-[var(--color-brand-violet)] mb-8">
                        <Building2 size={32} />
                    </div>
                    <div>
                        <span className="text-[var(--color-brand-violet)]/60 font-bold tracking-widest uppercase text-sm mb-4 block">For Cities</span>
                        <h3 className="text-[var(--color-brand-violet)] text-[32px] font-bold leading-tight">Infrastructure that makes your city investable.</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}
