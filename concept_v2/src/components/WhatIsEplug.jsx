import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckIcon, LightningBoltIcon, TargetIcon, LayersIcon } from '@radix-ui/react-icons';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { text: "100% DC Fast — no slow Level 2 dilution", icon: LightningBoltIcon },
    { text: "Urban-only focus — we go where you live & work", icon: TargetIcon },
    { text: "Integrated retail & community spaces", icon: LayersIcon },
    { text: "Fleet-grade reliability for maximum uptime", icon: CheckIcon },
];

export default function WhatIsEplug() {
    const containerRef = useRef(null);
    const leftColRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the left column while the right side (visuals) scrolls
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: leftColRef.current,
                pinSpacing: false,
            });

            // Parallax image effects on the right
            gsap.fromTo('.parallax-img',
                { y: -50, scale: 1.1 },
                {
                    y: 50,
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[150vh] bg-[var(--color-brand-violet)] text-white font-body selection:bg-[var(--color-brand-fuchsia)] selection:text-white">

            <div className="flex flex-col lg:flex-row w-full h-full relative max-w-[1440px] mx-auto">

                {/* Left Text content (Sticky 50%) */}
                <div ref={leftColRef} className="lg:w-1/2 h-[100dvh] flex flex-col justify-center px-6 lg:px-12 relative z-20">
                    <span className="text-[var(--color-brand-fuchsia)] font-bold tracking-widest uppercase text-xs mb-6">What is Eplug?</span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter leading-[1.1] mb-8 max-w-[15ch]">
                        The Charging Infrastructure Modern Cities Deserve
                    </h2>

                    <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-[45ch] mb-12 border-l border-white/10 pl-6">
                        While others build for highways and suburbs, we're building for the 80% of Americans who will live in cities by 2050.
                        Fast to charge. Fast to build. Zero compromise.
                    </p>

                    {/* Glassmorphism Feature List */}
                    <div className="flex flex-col gap-4 max-w-[500px]">
                        {features.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/10 transition-colors duration-300">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-brand-fuchsia)]/20 border border-[var(--color-brand-fuchsia)]/50 flex items-center justify-center text-[var(--color-brand-fuchsia)]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-white/90 text-sm md:text-base">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Visual content (Scrollable 50%) */}
                <div className="lg:w-1/2 w-full h-full relative z-10 flex flex-col justify-center gap-24 py-24 px-6 lg:px-12">

                    {/* Visual 1: Highway Desolation (Contrast) */}
                    <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 opacity-60 grayscale">
                        <div className="absolute top-6 left-6 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase text-white/50">
                            The Past: Highway Sprawl
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1620067644265-5c179c3ee5e8?q=80&w=1200&auto=format&fit=crop"
                            alt="Desolate highway charger"
                            className="parallax-img absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[var(--color-brand-violet)]/50 mix-blend-multiply pointer-events-none"></div>
                    </div>

                    {/* Visual 2: Urban Integration (Signal) */}
                    <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--color-brand-fuchsia)]/30 box-glow-fuchsia">
                        <div className="absolute top-6 left-6 z-20 bg-[var(--color-brand-fuchsia)]/20 backdrop-blur-xl px-4 py-2 rounded-full border border-[var(--color-brand-fuchsia)]/50 text-xs font-bold tracking-widest uppercase text-white shadow-[0_0_15px_rgba(255,0,197,0.5)]">
                            The Future: Urban Density
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1200&auto=format&fit=crop"
                            alt="Vibrant modern city street at night"
                            className="parallax-img absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[var(--color-brand-fuchsia)]/10 mix-blend-overlay pointer-events-none"></div>
                    </div>

                </div>

            </div>

        </section>
    );
}
