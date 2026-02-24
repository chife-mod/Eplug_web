import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;

const metrics = [
    { label: "AVG CHARGE TIME", value: "22", unit: "MIN", description: "City-optimized turnaround" },
    { label: "NETWORK UPTIME", value: "98.6", unit: "%", description: "Fleet-grade reliability" },
    { label: "CHARGING POINTS", value: "2,400+", unit: "", description: "Active urban hubs" }
];

export default function Hero() {
    const container = useRef(null);
    const [currentMetric, setCurrentMetric] = useState(0);

    // GSAP Entrance Animations
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-word', {
                y: "110%",
                opacity: 0,
                stagger: 0.05,
                duration: 1.2,
                ease: 'power4.out',
                delay: 0.1
            });
            gsap.from('.hero-sub', {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.8,
                ease: 'power3.out'
            });
            gsap.to('.hero-signal', {
                scaleY: 1,
                transformOrigin: "top",
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.5
            });
        }, container);
        return () => ctx.revert();
    }, []);

    // Perpetual Motion for Metrics Card
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMetric(prev => (prev + 1) % metrics.length);
        }, 3500); // 3.5 seconds per cycle
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={container} className="relative w-full min-h-[100dvh] bg-[var(--color-brand-violet)] overflow-hidden font-body flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12">

            {/* Brutalist Grid Lines */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                <div className="absolute top-0 left-[5%] w-[1px] h-full bg-white/5"></div>
                <div className="absolute top-0 right-[5%] w-[1px] h-full bg-white/5"></div>
            </div>

            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-105"
                >
                    <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Deep Violet Multiplicative Shield to Darken Video */}
            <div className="absolute inset-0 z-10 bg-[var(--color-brand-violet)] mix-blend-multiply opacity-80 pointer-events-none"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-brand-violet)] via-transparent to-[var(--color-brand-violet)] opacity-90 pointer-events-none"></div>

            {/* Fuchsia energy signal line (left side tension) */}
            <div className="hero-signal absolute top-0 left-[5%] w-[2px] h-[50dvh] bg-[var(--color-brand-fuchsia)] box-glow-fuchsia z-20 scale-y-0"></div>

            <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col items-start mt-[100px] gap-12 lg:gap-24">

                <div className="w-full flex justify-between items-end hero-sub">
                    <p className="text-xl lg:text-3xl text-white/90 leading-[1.3] font-medium border-l-[3px] border-[var(--color-brand-fuchsia)] pl-6 max-w-[65ch]">
                        A DC Fast network built from the ground up for density, speed, and city life.
                    </p>

                    {/* Perpetual Metrics Card (Desktop Only) */}
                    <div className="hidden lg:flex flex-col w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">Live Infrastructure</span>
                            <div className="w-2 h-2 rounded-full bg-[var(--color-brand-fuchsia)] box-glow-fuchsia animate-pulse"></div>
                        </div>

                        <div className="relative h-[90px]">
                            <AnimatePresence mode="wait">
                                <MotionDiv
                                    key={currentMetric}
                                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="absolute inset-0 flex flex-col"
                                >
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-mono text-5xl font-light tracking-tighter text-white">
                                            {metrics[currentMetric].value}
                                        </span>
                                        <span className="text-[var(--color-brand-fuchsia)] font-bold text-sm tracking-widest">{metrics[currentMetric].unit}</span>
                                    </div>
                                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest mt-2">{metrics[currentMetric].label}</span>
                                </MotionDiv>
                            </AnimatePresence>
                        </div>

                        {/* Progress Bar Sync */}
                        <div className="w-full h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden">
                            <MotionDiv
                                key={`timer-${currentMetric}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3.5, ease: "linear" }}
                                className="h-full bg-[var(--color-brand-fuchsia)] box-glow-fuchsia"
                            />
                        </div>
                    </div>
                </div>

                {/* Massive Typography Lockup (Asymmetric Space) */}
                <div className="flex flex-col w-full">
                    <div className="overflow-hidden mb-[-1.5vw]">
                        <h1 className="text-[13vw] lg:text-[11vw] leading-[0.85] font-black tracking-tighter text-white hero-word">URBAN FAST</h1>
                    </div>
                    <div className="overflow-hidden flex items-end w-full relative">
                        <h1 className="text-[13vw] lg:text-[11vw] leading-[0.85] font-black tracking-tighter text-transparent text-stroke-white opacity-80 hero-word outline-text mix-blend-overlay">CHARGING</h1>
                        <span className="text-[var(--color-brand-fuchsia)] text-[11vw] leading-[0.8] font-black hero-word text-glow-fuchsia">.</span>
                    </div>
                    <div className="overflow-hidden mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                        <h2 className="text-[3.5vw] lg:text-[1.5vw] leading-[1] font-bold tracking-[0.2em] text-[#DEDCF9]/70 hero-word uppercase">FOR THE FUTURE OF AMERICA</h2>

                        <div className="hero-sub mt-8 sm:mt-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[var(--color-brand-violet)] font-bold text-xs tracking-widest uppercase hover:bg-[#DEDCF9] transition-colors flex items-center justify-center gap-3 group">
                                View Network Map
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-xs tracking-widest uppercase hover:bg-white/5 transition-colors">
                                Partner with us
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
