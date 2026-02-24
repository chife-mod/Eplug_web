import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Investor() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const dotsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // SVG Draw Line
            const path = pathRef.current;
            const length = path.getTotalLength();

            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

            gsap.to(path, {
                strokeDashoffset: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });

            // City Dots fade in
            gsap.from('.city-dot', {
                opacity: 0,
                scale: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-[var(--color-brand-white)] py-32 font-montserrat text-[var(--color-brand-violet)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <div className="max-w-xl">
                    <h2 className="text-[48px] lg:text-[64px] font-bold leading-tight mb-8">Trust Architecture.</h2>
                    <p className="text-[20px] opacity-70 mb-12 leading-relaxed">
                        We are not just deploying hardware. We are architecting a high-yield urban utility network designed for unmatched reliability, rapid ROI, and seamless scaling across primary American cities.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-[var(--color-brand-fuchsia)] text-white font-bold tracking-widest uppercase text-sm relative overflow-hidden group hover:scale-[1.04] transition-transform duration-300 ease-[cubic-bezier(0.34,1.2,0.64,1)]">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 group-hover:text-[var(--color-brand-violet)] transition-colors duration-300">Partner With Us</span>
                    </button>
                </div>

                <div className="relative w-full h-[400px] border-l border-b border-[#2E0054]/20 pt-8 pl-8 flex items-end">
                    <svg className="absolute inset-0 w-full h-full overflow-visible z-10" viewBox="0 0 500 400" preserveAspectRatio="none">
                        <path
                            ref={pathRef}
                            d="M 40 360 Q 150 360, 200 240 T 350 160 T 480 40"
                            fill="none"
                            stroke="var(--color-brand-fuchsia)"
                            strokeWidth="4"
                            className="drop-shadow-[0_0_12px_rgba(255,0,197,0.6)]"
                        />
                    </svg>

                    <div ref={dotsRef} className="absolute inset-0 z-20 w-full h-full pointer-events-none">
                        <div className="city-dot absolute left-[40px] bottom-[40px] w-6 h-6 rounded-full bg-[var(--color-brand-violet)] border-[4px] border-white drop-shadow-xl" />
                        <div className="city-dot absolute left-[200px] bottom-[160px] w-6 h-6 rounded-full bg-[var(--color-brand-violet)] border-[4px] border-white drop-shadow-xl" />
                        <div className="city-dot absolute left-[350px] bottom-[240px] w-6 h-6 rounded-full bg-[var(--color-brand-violet)] border-[4px] border-white drop-shadow-xl" />
                        <div className="city-dot absolute right-[10px] top-[30px] w-8 h-8 rounded-full bg-[var(--color-brand-fuchsia)] border-[4px] border-white box-glow-fuchsia z-30 flex items-center justify-center text-white"><span className="animate-ping w-full h-full rounded-full bg-[var(--color-brand-fuchsia)] opacity-50 absolute"></span></div>
                    </div>

                    <div className="absolute top-4 left-4 bg-[var(--color-brand-grey)]/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-[var(--color-brand-violet)]/10 text-[var(--color-brand-violet)] font-bold tracking-tight">
                        Revenue Growth
                    </div>
                </div>

            </div>
        </section>
    );
}
