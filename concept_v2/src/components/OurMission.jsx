import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
    { id: '01', stat: '65%', text: "of urban households can\u2019t charge at home" },
    { id: '02', stat: null, text: 'Existing networks focus on highways, not neighborhoods' },
    { id: '03', stat: null, text: 'Level 2 chargers are too slow for city turnover' },
    { id: '04', stat: null, text: 'Fleets have nowhere to charge at scale' },
    { id: '05', stat: null, text: 'Retail and mixed-use properties are underserved' },
];

export default function OurMission() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Eyebrow
            gsap.from('.om-eyebrow', {
                opacity: 0,
                y: -12,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.om-eyebrow',
                    start: 'top 88%',
                },
            });

            // Headline — word-by-word clip reveal
            gsap.from('.om-word', {
                y: '105%',
                opacity: 0,
                stagger: 0.045,
                duration: 1.1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.om-headline',
                    start: 'top 85%',
                },
            });

            // Body intro
            gsap.from('.om-body-intro', {
                opacity: 0,
                y: 20,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.om-body-intro',
                    start: 'top 88%',
                },
            });

            // Right accent block
            gsap.from('.om-accent-block', {
                opacity: 0,
                x: 32,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.om-accent-block',
                    start: 'top 85%',
                },
            });

            // Divider line
            gsap.from('.om-divider', {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.om-divider',
                    start: 'top 90%',
                },
            });

            // Problem items
            gsap.from('.om-problem-item', {
                opacity: 0,
                x: -20,
                stagger: 0.12,
                duration: 0.75,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.om-problems',
                    start: 'top 82%',
                },
            });

            // Solution block
            gsap.from('.om-solution', {
                opacity: 0,
                x: 24,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.om-solution',
                    start: 'top 82%',
                },
            });

            // Tagline letters
            gsap.from('.om-tagline-word', {
                opacity: 0,
                y: '80%',
                stagger: 0.1,
                duration: 0.9,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.om-tagline',
                    start: 'top 88%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[var(--color-brand-violet)] text-white overflow-hidden py-24 lg:py-36 px-6 lg:px-20"
            aria-label="Our Mission"
        >
            {/* ─── Background: fuchsia glow (bottom-left) ─── */}
            <div
                className="absolute bottom-0 left-0 w-[55vw] h-[55vh] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 10% 100%, rgba(255,0,197,0.08) 0%, transparent 60%)',
                }}
            />
            {/* Purple deep glow (top-right) */}
            <div
                className="absolute top-0 right-0 w-[45vw] h-[50vh] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 90% 0%, rgba(46,0,84,0.3) 0%, transparent 65%)',
                }}
            />

            {/* ─── Grid lines (decorative) ─── */}
            <div className="absolute inset-0 pointer-events-none hidden xl:block">
                <div className="absolute top-0 left-[5%] w-[1px] h-full bg-white/[0.03]" />
                <div className="absolute top-0 right-[5%] w-[1px] h-full bg-white/[0.03]" />
            </div>

            {/* ─── CONTENT ─── */}
            <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col gap-20 lg:gap-28">

                {/* ══ BLOCK 1: Overline + Headline + Intro ══ */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

                    {/* Left: eyebrow + headline + body */}
                    <div className="flex flex-col gap-6 lg:w-[58%]">
                        {/* Eyebrow */}
                        <div className="om-eyebrow flex items-center gap-3">
                            <div
                                className="w-2 h-2 rounded-full bg-[var(--color-brand-fuchsia)] animate-pulse flex-shrink-0"
                                style={{ boxShadow: '0 0 10px rgba(255,0,197,0.9)' }}
                            />
                            <span className="font-heading font-bold text-[10px] tracking-[0.28em] uppercase text-white/45">
                                Our Mission
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="om-headline overflow-hidden">
                            <h2 className="font-heading font-black uppercase leading-[1.05] tracking-[-0.02em] text-[clamp(36px,4vw,60px)] text-white">
                                {['Make', 'Fast', 'Charging', 'as', 'Essential', 'as', 'Streetlights'].map((word, i) => (
                                    <span key={i} className="om-word inline-block mr-[0.22em] last:mr-0">
                                        {word}
                                    </span>
                                ))}
                            </h2>
                        </div>

                        {/* Body intro */}
                        <p className="om-body-intro font-body text-[17px] leading-[1.65] text-white/60 max-w-[520px]">
                            American cities are going electric faster than anyone predicted.
                            But the infrastructure is failing them.
                        </p>
                    </div>

                    {/* Right: accent card */}
                    <div
                        className="om-accent-block lg:w-[38%] flex-shrink-0 rounded-2xl p-8 border border-white/[0.07] flex flex-col gap-5 self-start"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 48px -16px rgba(0,0,0,0.5)',
                        }}
                    >
                        <span className="font-heading font-bold text-[9px] tracking-[0.24em] uppercase text-white/30 border-b border-white/[0.07] pb-4">
                            The scale of the problem
                        </span>

                        <div className="flex flex-col gap-4">
                            {[
                                { value: '250M+', label: 'Americans living in urban zones', color: 'text-white' },
                                { value: '65%', label: "Can\u2019t charge at home", color: 'text-[var(--color-brand-fuchsia)]' },
                                { value: '0', label: 'Urban-first DC Fast networks (before Eplug)', color: 'text-white' },
                            ].map(({ value, label, color }) => (
                                <div key={value} className="flex items-baseline gap-3">
                                    <span
                                        className={`font-heading font-black text-[28px] leading-none tracking-tight flex-shrink-0 ${color}`}
                                        style={color.includes('fuchsia') ? { textShadow: '0 0 20px rgba(255,0,197,0.4)' } : {}}
                                    >
                                        {value}
                                    </span>
                                    <span className="font-body text-[13px] text-white/45 leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ═══ Fuchsia divider ═══ */}
                <div
                    className="om-divider w-full h-[1px]"
                    style={{ background: 'linear-gradient(to right, rgba(255,0,197,0.5) 0%, rgba(255,0,197,0.1) 50%, transparent 100%)' }}
                />

                {/* ══ BLOCK 2: Problem + Rule + Solution ══ */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">

                    {/* Left: The Problem */}
                    <div className="om-problems flex flex-col gap-7 lg:w-[44%]">
                        <span className="font-heading font-bold text-[9px] tracking-[0.28em] uppercase text-[var(--color-brand-fuchsia)]/60">
                            The Problem
                        </span>
                        <div className="flex flex-col gap-0">
                            {problems.map((p, i) => (
                                <div
                                    key={p.id}
                                    className={`om-problem-item flex gap-5 items-start py-5 ${i !== problems.length - 1 ? 'border-b border-white/[0.07]' : ''}`}
                                >
                                    <span className="font-heading font-bold text-[9px] tracking-[0.18em] text-white/20 flex-shrink-0 pt-[3px]">
                                        {p.id}
                                    </span>
                                    <p className="font-body text-[15px] leading-[1.6] text-white/55">
                                        {p.stat ? (
                                            <>
                                                <span
                                                    className="font-heading font-black text-[var(--color-brand-fuchsia)] text-[18px] mr-1"
                                                    style={{ textShadow: '0 0 16px rgba(255,0,197,0.35)' }}
                                                >
                                                    {p.stat}
                                                </span>
                                                {p.text}
                                            </>
                                        ) : (
                                            p.text
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical fuchsia rule */}
                    <div
                        className="hidden lg:block w-[2px] mx-16 self-stretch flex-shrink-0"
                        style={{
                            background: 'linear-gradient(to bottom, var(--color-brand-fuchsia) 0%, rgba(255,0,197,0.1) 100%)',
                            boxShadow: '0 0 12px rgba(255,0,197,0.25)',
                        }}
                    />

                    {/* Right: Our Solution */}
                    <div className="om-solution flex flex-col gap-7 lg:w-[44%]">
                        <span className="font-heading font-bold text-[9px] tracking-[0.28em] uppercase text-white/30">
                            Our Solution
                        </span>

                        <p className="font-body text-[17px] leading-[1.7] text-white/70">
                            DC Fast charging where it matters —{' '}
                            <span className="text-white font-semibold">
                                high-density residential zones, fleet corridors, retail clusters, transit hubs.
                            </span>
                        </p>

                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                'Not scattered. Not slow. Not suburban.',
                            ].map((line) => (
                                <p key={line} className="font-body text-[15px] text-white/45 leading-[1.6]">
                                    {line}
                                </p>
                            ))}
                        </div>

                        {/* Tagline */}
                        <div className="om-tagline mt-6 flex flex-wrap gap-x-4 gap-y-1 items-baseline">
                            {['Dense.', 'Fast.', 'Urban.'].map((word) => (
                                <span
                                    key={word}
                                    className="om-tagline-word font-heading font-black text-[clamp(28px,2.8vw,44px)] uppercase leading-none tracking-tight text-[var(--color-brand-fuchsia)] inline-block"
                                    style={{ textShadow: '0 0 28px rgba(255,0,197,0.35)' }}
                                >
                                    {word}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <button
                            className="mt-2 self-start flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-fuchsia)] text-white font-heading font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-white hover:text-[var(--color-brand-violet)]"
                            style={{ boxShadow: '0 0 24px rgba(255,0,197,0.3)' }}
                        >
                            See Our Network
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
