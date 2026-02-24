import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyDCFast() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.dc-card', {
                y: 60, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: '.dc-grid', start: 'top 80%' }
            });
            gsap.from('.dc-title', {
                x: -40, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: container.current, start: 'top 70%' }
            });
            // Massive typography scroll effect
            gsap.fromTo('.dc-callout-text',
                { scale: 0.9, opacity: 0, y: 50 },
                {
                    scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power4.out',
                    scrollTrigger: { trigger: '.dc-callout', start: 'top 75%' }
                }
            );
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="w-full bg-[var(--color-brand-purple)] text-white py-32 lg:py-48 font-body relative z-20 overflow-hidden">

            {/* Brutalist Grid Lines */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden md:block opacity-20">
                <div className="absolute top-0 left-[5%] w-[1px] h-full bg-white/10"></div>
                <div className="absolute top-0 left-[95%] w-[1px] h-full bg-white/10"></div>
                <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/10"></div>
            </div>

            <div className="max-w-[1440px] mx-auto relative z-20 px-6 lg:px-12">

                <div className="border-l-[4px] border-[var(--color-brand-fuchsia)] pl-8 lg:pl-12 mb-24 lg:mb-32 dc-title">
                    <h2 className="text-[48px] lg:text-[80px] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-8">
                        15–25 Minutes.<br />
                        <span className="text-white/40">Always. Everywhere.</span>
                    </h2>
                    <p className="text-2xl lg:text-4xl text-white/80 max-w-3xl leading-[1.3] font-medium">
                        Level 2 chargers are garage accessories. <br />
                        DC Fast is city infrastructure.
                    </p>
                </div>

                {/* Asymmetrical Layout instead of generic 3-col grid */}
                <div className="dc-grid flex flex-col lg:flex-row gap-8 lg:gap-12 mb-32 lg:mb-48">

                    {/* Left Column: Featured Large Block */}
                    <div className="dc-card lg:w-7/12 bg-white/5 backdrop-blur-md p-10 lg:p-16 flex flex-col justify-end gap-8 border border-white/10 rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_-15px_rgba(0,0,0,0.5)] relative group overflow-hidden min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-violet)]/80 to-transparent z-0"></div>
                        <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--color-brand-fuchsia)] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-fuchsia)]">For Drivers</h3>
                            <p className="text-2xl lg:text-4xl leading-[1.4] font-medium text-white group-hover:text-white transition-colors duration-500">
                                Charge while you live your life. Coffee run. Grocery stop. Quick break. No 4-hour waits. No overnight planning.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Stacked Blocks */}
                    <div className="lg:w-5/12 flex flex-col gap-8 lg:gap-12">

                        <div className="dc-card flex-1 bg-[var(--color-brand-violet)] p-8 lg:p-12 flex flex-col gap-6 border border-white/10 rounded-[2rem] relative group overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-[var(--color-brand-fuchsia)] transition-colors duration-500">For Fleets</h3>
                            <p className="text-lg leading-[1.6] text-white/70 group-hover:text-white transition-colors duration-500">
                                Uber, Lyft, delivery — every hour offline is money lost. DC Fast gets drivers back on the road in 20 minutes, not 4 hours. Maximum uptime. Maximum earnings.
                            </p>
                        </div>

                        <div className="dc-card flex-1 bg-[var(--color-brand-violet)] p-8 lg:p-12 flex flex-col gap-6 border border-white/10 rounded-[2rem] relative group overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-[var(--color-brand-fuchsia)] transition-colors duration-500">For Cities</h3>
                            <p className="text-lg leading-[1.6] text-white/70 group-hover:text-white transition-colors duration-500">
                                Higher turnover = more access. Smaller footprint = better land use. Faster deployment = infrastructure that keeps pace with adoption.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Full-width Cinematic Typography Reveal */}
            <div className="dc-callout w-full py-24 lg:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden bg-[var(--color-brand-violet)] border-y border-[var(--color-brand-fuchsia)]/20 shadow-[0_0_100px_rgba(255,0,197,0.1)]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

                <div className="dc-callout-text relative z-10 w-full max-w-[1440px] px-6">
                    <h2 className="text-[12vw] md:text-[8vw] font-heading font-black tracking-tighter uppercase leading-[0.85] mb-8">
                        <span className="text-transparent text-stroke-white opacity-40">WE DON'T DO</span>
                        <br />
                        <span className="text-[var(--color-brand-fuchsia)] text-glow-fuchsia drop-shadow-[0_0_40px_rgba(255,0,197,0.8)]">SLOW CHARGING</span>
                    </h2>
                    <div className="w-24 h-[1px] bg-[var(--color-brand-fuchsia)] mx-auto mb-8 box-glow-fuchsia"></div>
                    <p className="text-xl lg:text-3xl font-medium max-w-2xl mx-auto leading-[1.4] text-white/80">
                        If it takes hours, it doesn't belong in a city. Period.
                    </p>
                </div>
            </div>

        </section>
    );
}
