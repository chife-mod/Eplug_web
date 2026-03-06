import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const MotionDiv = motion.div;
const MotionSpan = motion.span;

// Three-line manifesto — staggered reveal
const manifestoLines = [
    { text: "We're not a highway charging company expanding into cities.", strikethrough: false },
    { text: "We're not a garage accessory company pretending to be infrastructure.", strikethrough: false },
    { text: "We are the urban fast charging network.", strikethrough: false, highlight: true },
];

const stats = [
    { value: "2030", label: "Target Year", unit: "" },
    { value: "250M", label: "Americans We Serve", unit: "+" },
    { value: "100%", label: "DC Fast Only", unit: "" },
];

export default function AboutHero() {
    const sectionRef = useRef(null);
    const headlineRef = useRef(null);
    const [activeStatIdx, setActiveStatIdx] = useState(0);
    const [lineVisible, setLineVisible] = useState([false, false, false]);
    const [hasAnimated, setHasAnimated] = useState(false);

    // GSAP entrance animations
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Eyebrow tag
            gsap.from('.about-eyebrow', {
                opacity: 0,
                y: -16,
                duration: 0.8,
                delay: 0.15,
                ease: 'power3.out',
            });

            // Big headline words — clip-path reveal (mask from bottom)
            gsap.from('.ah-word', {
                y: '110%',
                opacity: 0,
                stagger: 0.055,
                duration: 1.3,
                ease: 'power4.out',
                delay: 0.3,
            });

            // Fuchsia vertical signal line
            gsap.to('.ah-signal', {
                scaleY: 1,
                transformOrigin: 'top',
                duration: 1.6,
                ease: 'power2.out',
                delay: 0.4,
            });

            // Fuchsia horizontal divider
            gsap.from('.ah-divider', {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 0.9,
                delay: 0.7,
                ease: 'power3.out',
            });

            // Manifesto lines — staggered
            gsap.from('.ah-manifesto-line', {
                opacity: 0,
                x: -24,
                stagger: 0.2,
                duration: 0.85,
                delay: 1.1,
                ease: 'power3.out',
            });

            // CTA buttons
            gsap.from('.ah-cta', {
                opacity: 0,
                y: 20,
                stagger: 0.12,
                duration: 0.8,
                delay: 1.6,
                ease: 'power3.out',
            });

            // Stats card
            gsap.from('.ah-stats', {
                opacity: 0,
                x: 40,
                duration: 1,
                delay: 1.0,
                ease: 'power3.out',
            });

            // Scroll-parallax for background
            gsap.to('.ah-bg-img', {
                yPercent: 18,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Cycle stats
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStatIdx(prev => (prev + 1) % stats.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[100dvh] bg-[var(--color-brand-violet)] overflow-hidden flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16"
            aria-label="About Eplug Hero"
        >
            {/* ─── Background Image with Parallax ─── */}
            <div className="absolute inset-0 z-0">
                <div
                    className="ah-bg-img absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                    style={{
                        backgroundImage: `url('/assets/about-hero-bg.jpg')`,
                        filter: 'saturate(1.15)',
                    }}
                />
                {/* Deep violet overlay — multiplicative */}
                <div className="absolute inset-0 bg-[var(--color-brand-violet)] opacity-75 mix-blend-multiply" />
                {/* Gradient — bottom rise */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-violet)] via-[var(--color-brand-violet)]/40 to-transparent" />
                {/* Gradient — left edge */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-violet)]/80 via-transparent to-transparent" />
            </div>

            {/* ─── Brutalist Grid Lines ─── */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">
                <div className="absolute top-0 left-[5%] w-[1px] h-full bg-white/[0.04]" />
                <div className="absolute top-0 right-[5%] w-[1px] h-full bg-white/[0.04]" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/[0.03]" />
            </div>

            {/* ─── Fuchsia Vertical Signal Line (left tension) ─── */}
            <div
                className="ah-signal absolute top-0 left-[5%] w-[2px] h-[55dvh] bg-[var(--color-brand-fuchsia)] z-20 scale-y-0"
                style={{ boxShadow: '0 0 20px rgba(255,0,197,0.5), 0 0 60px rgba(255,0,197,0.2)' }}
            />

            {/* ─── Fuchsia Ambient Glow (bottom-right energy) ─── */}
            <div
                className="absolute bottom-0 right-0 w-[60vw] h-[60vh] pointer-events-none z-[1]"
                style={{
                    background: 'radial-gradient(ellipse at 80% 100%, rgba(255,0,197,0.12) 0%, transparent 65%)',
                }}
            />
            {/* ─── Purple Deep Glow (center) ─── */}
            <div
                className="absolute top-1/3 left-1/3 w-[40vw] h-[40vh] pointer-events-none z-[1]"
                style={{
                    background: 'radial-gradient(ellipse, rgba(46,0,84,0.35) 0%, transparent 70%)',
                }}
            />

            {/* ─── CONTENT LAYER ─── */}
            <div className="relative z-20 w-full max-w-[1380px] mx-auto flex flex-col gap-16 lg:gap-20">

                {/* Row 1: Eyebrow + Stats Card */}
                <div className="flex items-start justify-between">

                    {/* Eyebrow badge */}
                    <div className="about-eyebrow flex items-center gap-3">
                        <div
                            className="w-2 h-2 rounded-full bg-[var(--color-brand-fuchsia)] animate-pulse"
                            style={{ boxShadow: '0 0 8px rgba(255,0,197,0.8)' }}
                        />
                        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 font-heading">
                            About Eplug — Our Story
                        </span>
                    </div>

                    {/* ─── Stats Card (top-right live data) ─── */}
                    <div
                        className="ah-stats hidden lg:flex flex-col w-[280px] rounded-2xl p-6 border border-white/[0.08]"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(24px)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 48px -12px rgba(0,0,0,0.6)',
                        }}
                    >
                        {/* Card header */}
                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                            <span className="text-[9px] font-bold text-white/40 tracking-[0.22em] uppercase font-heading">
                                The Urban Mission
                            </span>
                            <div
                                className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-fuchsia)] animate-pulse"
                                style={{ boxShadow: '0 0 6px rgba(255,0,197,0.9)' }}
                            />
                        </div>

                        {/* Cycling stat */}
                        <div className="relative h-[76px]">
                            <AnimatePresence mode="wait">
                                <MotionDiv
                                    key={activeStatIdx}
                                    initial={{ y: 16, opacity: 0, filter: 'blur(6px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -16, opacity: 0, filter: 'blur(6px)' }}
                                    transition={{ type: 'spring', stiffness: 120, damping: 22 }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="font-heading text-4xl font-black text-white tracking-tight">
                                            {stats[activeStatIdx].value}
                                        </span>
                                        <span className="text-[var(--color-brand-fuchsia)] font-bold text-sm tracking-widest font-heading">
                                            {stats[activeStatIdx].unit}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mt-1 font-heading">
                                        {stats[activeStatIdx].label}
                                    </span>
                                </MotionDiv>
                            </AnimatePresence>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-[1px] bg-white/[0.08] rounded-full mt-3 overflow-hidden">
                            <MotionDiv
                                key={`progress-${activeStatIdx}`}
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 3.2, ease: 'linear' }}
                                className="h-full bg-[var(--color-brand-fuchsia)]"
                                style={{ boxShadow: '0 0 6px rgba(255,0,197,0.6)' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Giant Headline */}
                <div className="flex flex-col w-full -mt-4 lg:-mt-8">

                    {/* Line 1: EPLUG — */}
                    <div className="overflow-hidden">
                        <h1 className="ah-word text-[14vw] lg:text-[12vw] xl:text-[11vw] leading-[0.82] font-black tracking-[-0.02em] text-white font-heading uppercase">
                            EPLUG
                            <span
                                className="text-[var(--color-brand-fuchsia)] ml-3"
                                style={{ textShadow: '0 0 40px rgba(255,0,197,0.4)' }}
                            >—</span>
                        </h1>
                    </div>

                    {/* Line 2: THE FIRST NETWORK */}
                    <div className="overflow-hidden mt-[-1.5vw]">
                        <h1 className="ah-word text-[14vw] lg:text-[12vw] xl:text-[11vw] leading-[0.82] font-black tracking-[-0.02em] font-heading uppercase"
                            style={{
                                WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
                                color: 'transparent',
                            }}
                        >
                            THE FIRST
                        </h1>
                    </div>

                    {/* Line 3: NETWORK + accent dot */}
                    <div className="overflow-hidden mt-[-1.5vw] flex items-end gap-3">
                        <h1
                            className="ah-word text-[14vw] lg:text-[12vw] xl:text-[11vw] leading-[0.82] font-black tracking-[-0.02em] text-white font-heading uppercase"
                        >
                            NETWORK
                        </h1>
                        <span
                            className="ah-word text-[14vw] lg:text-[12vw] xl:text-[11vw] leading-[0.82] font-black text-[var(--color-brand-fuchsia)]"
                            style={{ textShadow: '0 0 40px rgba(255,0,197,0.5)' }}
                        >.</span>
                    </div>

                    {/* Subline: THAT GETS CITIES */}
                    <div className="overflow-hidden mt-2 lg:mt-4">
                        <h2
                            className="ah-word text-[4vw] lg:text-[2.2vw] xl:text-[1.8vw] leading-[1] font-bold tracking-[0.18em] text-[var(--color-brand-grey)]/60 uppercase font-heading"
                        >
                            That Gets Cities
                        </h2>
                    </div>
                </div>

                {/* Row 3: Fuchsia Divider + Manifesto + CTA */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* Fuchsia rule */}
                    <div
                        className="ah-divider hidden lg:block w-[2px] h-40 bg-[var(--color-brand-fuchsia)] self-stretch flex-shrink-0"
                        style={{ boxShadow: '0 0 16px rgba(255,0,197,0.4)' }}
                    />

                    {/* Manifesto block */}
                    <div className="flex flex-col gap-5 flex-1 max-w-[680px]">
                        {manifestoLines.map((line, i) => (
                            <div
                                key={i}
                                className="ah-manifesto-line flex items-start gap-4 group cursor-default"
                            >
                                {/* Index number */}
                                <span className="text-[10px] font-bold text-[var(--color-brand-fuchsia)]/50 tracking-widest pt-1 flex-shrink-0 font-heading select-none">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                <p className={`
                                    text-base lg:text-lg xl:text-xl leading-[1.45] font-medium font-body
                                    transition-all duration-300
                                    ${line.highlight
                                        ? 'text-white font-bold'
                                        : 'text-white/45 group-hover:text-white/65'
                                    }
                                `}>
                                    {line.highlight ? (
                                        <>
                                            <span
                                                className="text-[var(--color-brand-fuchsia)] font-black"
                                                style={{ textShadow: '0 0 20px rgba(255,0,197,0.35)' }}
                                            >
                                                We are
                                            </span>
                                            {' the urban fast charging network.'}
                                        </>
                                    ) : (
                                        line.text
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Group */}
                    <div className="flex flex-col gap-4 lg:ml-auto flex-shrink-0">
                        {/* Primary CTA */}
                        <button
                            className="ah-cta group flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-fuchsia)] text-white font-bold text-xs tracking-[0.18em] uppercase font-heading hover:bg-white hover:text-[var(--color-brand-violet)] transition-all duration-300"
                            style={{ boxShadow: '0 0 24px rgba(255,0,197,0.3)' }}
                        >
                            Our Network
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>

                        {/* Secondary CTA */}
                        <button className="ah-cta group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/15 text-white/70 font-bold text-xs tracking-[0.18em] uppercase font-heading hover:border-white/40 hover:text-white transition-all duration-300">
                            Partner with Us
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>

                        {/* Built from day one footnote */}
                        <p className="ah-cta text-[10px] text-white/25 uppercase tracking-[0.15em] font-heading max-w-[220px] leading-[1.6]">
                            Built from day one for density, movement & reality
                        </p>
                    </div>
                </div>

                {/* ─── Bottom Bar: Scroll hint + City tags ─── */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    {/* City tags */}
                    <div className="flex items-center gap-6 flex-wrap">
                        {['Brooklyn', 'Manhattan', 'Chicago', 'LA', 'Houston'].map((city, i) => (
                            <span
                                key={city}
                                className="text-[9px] font-bold text-white/20 tracking-[0.2em] uppercase font-heading"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {city}
                            </span>
                        ))}
                    </div>

                    {/* Scroll indicator */}
                    <div className="hidden md:flex items-center gap-3 text-white/25">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[1px] h-8 bg-white/15 overflow-hidden">
                                <MotionDiv
                                    className="w-full h-full bg-[var(--color-brand-fuchsia)]"
                                    style={{ boxShadow: '0 0 6px rgba(255,0,197,0.6)' }}
                                    animate={{ y: ['−100%', '200%'] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                                />
                            </div>
                        </div>
                        <span className="text-[9px] font-bold tracking-[0.22em] uppercase font-heading">Scroll</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
