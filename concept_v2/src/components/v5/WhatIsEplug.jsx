import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IconBolt,
    IconBlocks,
    IconArrowsMaximize,
    IconStar,
    IconClockBolt,
    IconBuildingSkyscraper,
    IconSteeringWheel,
    IconBuildingStore,
    IconShieldCheck
} from '@tabler/icons-react';

import whatIs1 from '../../assets/images/what-is-1.png';
import whatIs2 from '../../assets/images/what-is-2.png';
import whatIs3 from '../../assets/images/what-is-3.png';

const tabs = [
    {
        id: 'urban',
        title: 'The Urban Reality',
        image: whatIs1,
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                    We're not expanding a highway network into cities. <span className="text-[#FF00C5] font-normal">We're building the city network from scratch.</span>
                </p>
                <div className="mt-8 text-gray-400 text-sm md:text-base leading-relaxed">
                    While others build for highways and suburbs, we're building for the 80% of Americans who will live in cities by 2050.
                    <br /><br />
                    Eplug is a DC Fast network designed exclusively for urban density — where people don't have driveways, where fleets run 24/7, where every block counts.
                </div>
            </div>
        )
    },
    {
        id: 'built',
        title: 'Built From Scratch',
        image: whatIs2,
        content: (
            <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-4 text-white">
                    <IconBolt className="w-6 h-6 text-gray-400" stroke={1.5} />
                    <span className="text-xl font-light tracking-wide">Fast to charge</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                    <IconBlocks className="w-6 h-6 text-gray-400" stroke={1.5} />
                    <span className="text-xl font-light tracking-wide">Fast to build</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                    <IconArrowsMaximize className="w-6 h-6 text-gray-400" stroke={1.5} />
                    <span className="text-xl font-light tracking-wide">Fast to scale</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                    <IconStar className="w-6 h-6 text-gray-400" stroke={1.5} />
                    <span className="text-xl font-light tracking-wide font-semibold text-white">Zero compromise</span>
                </div>
            </div>
        )
    },
    {
        id: 'different',
        title: 'What Makes Us Different',
        image: whatIs3,
        content: (
            <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4">
                    <IconClockBolt className="w-6 h-6 text-[#FF00C5] shrink-0 mt-1" stroke={1.5} />
                    <div className="flex flex-col">
                        <span className="text-lg font-medium text-white">100% DC Fast</span>
                        <span className="text-sm text-gray-400">no slow Level 2 dilution</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <IconBuildingSkyscraper className="w-6 h-6 text-[#FF00C5] shrink-0 mt-1" stroke={1.5} />
                    <div className="flex flex-col">
                        <span className="text-lg font-medium text-white">Urban-only focus</span>
                        <span className="text-sm text-gray-400">we go where people actually live and work</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <IconSteeringWheel className="w-6 h-6 text-[#FF00C5] shrink-0 mt-1" stroke={1.5} />
                    <div className="flex flex-col">
                        <span className="text-lg font-medium text-white">Driver-first design</span>
                        <span className="text-sm text-gray-400">not utility boxes in parking lots</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <IconBuildingStore className="w-6 h-6 text-[#FF00C5] shrink-0 mt-1" stroke={1.5} />
                    <div className="flex flex-col">
                        <span className="text-lg font-medium text-white">Integrated retail & community spaces</span>
                        <span className="text-sm text-gray-400">charging becomes a destination</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <IconShieldCheck className="w-6 h-6 text-[#FF00C5] shrink-0 mt-1" stroke={1.5} />
                    <div className="flex flex-col">
                        <span className="text-lg font-medium text-white">Fleet-grade reliability</span>
                        <span className="text-sm text-gray-400">because downtime costs money</span>
                    </div>
                </div>
            </div>
        )
    }
];

const WhatIsEplug = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Auto-advance timer
    useEffect(() => {
        let startTime = Date.now();
        let raf;
        const duration = 5000; // 5 seconds per slide

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const p = Math.min(elapsed / duration, 1);
            setProgress(p);

            if (p === 1) {
                setActiveIndex((prev) => (prev + 1) % tabs.length);
                startTime = Date.now(); // Reset timer for next slide
            } else {
                raf = requestAnimationFrame(updateProgress);
            }
        };

        raf = requestAnimationFrame(updateProgress);

        return () => cancelAnimationFrame(raf);
    }, [activeIndex]);

    const handleTabClick = (index) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <div className="relative w-full min-h-screen bg-[#0A0A0A] flex items-center justify-center font-['Montserrat',sans-serif] overflow-hidden py-24">

            {/* Very faint background elements to simulate the triangles/gradients in Figma */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#1a052b] rounded-full blur-[150px] opacity-40 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* 1. Left Sidebar (Tabs) */}
                <div className="flex flex-col w-full lg:w-1/4 select-none shrink-0 z-20">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-2 h-2 rounded-full bg-[#FF00C5]"></div>
                        <span className="text-gray-400 text-sm tracking-widest uppercase font-semibold">What Is Eplug?</span>
                    </div>

                    <div className="flex flex-col space-y-6">
                        {tabs.map((tab, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={tab.id}
                                    onClick={() => handleTabClick(idx)}
                                    className="relative group cursor-pointer pl-6 transition-all duration-300"
                                >
                                    {/* Progress Indicator Track */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden">
                                        {/* Progress Fill */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute top-0 left-0 right-0 bg-[#FF00C5]"
                                                style={{ height: `${progress * 100}%` }}
                                            />
                                        )}
                                    </div>

                                    {/* Tab Content */}
                                    <div className="flex items-center gap-3 py-2">
                                        {/* Bolt Icon shows only when active */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <IconBolt className="w-5 h-5 text-[#FF00C5]" fill="currentColor" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <span className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300 transition-all'}`}>
                                            {tab.title}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Center Column (Image with Premium Transition & Trailing Blur Shadow) */}
                <div className="relative w-full lg:w-[460px] aspect-[4/5] rounded-[2rem] shrink-0 pointer-events-none z-10">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {/* 
                            Premium Transition Logic:
                            - Incoming Image: Slides in slightly from right, starts blurred, scales out normal.
                            - Outgoing Image: Scales down slightly, moves left, blurs HEAVILY (like a layered shadow), and fades out.
                            We use two elements per render: The main image, and a trailing duplicate with intense blur for the premium effect.
                        */}

                        {/* The Trailing Blur Shadow (creates the volume effect from audio) */}
                        <motion.div
                            key={`shadow-${activeIndex}`}
                            initial={{ x: 30, opacity: 0, scale: 0.95 }}
                            animate={{ x: -10, opacity: 0.5, scale: 1, filter: "blur(0px)" }}
                            exit={{ x: -80, opacity: 0, scale: 0.9, filter: "blur(40px)" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 z-0 origin-left"
                        >
                            <img
                                src={tabs[activeIndex].image}
                                alt=""
                                className="w-full h-full object-cover rounded-[2rem]"
                            />
                        </motion.div>

                        {/* The Main Image */}
                        <motion.div
                            key={`image-${activeIndex}`}
                            initial={{ x: 60, opacity: 0, filter: "blur(20px)" }}
                            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ x: -40, opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                            className="absolute inset-0 z-10 overflow-hidden shadow-2xl shadow-black/50 rounded-[2rem] border border-white/10"
                        >
                            <img
                                src={tabs[activeIndex].image}
                                alt="Eplug Visual"
                                className="w-full h-full object-cover rounded-[2rem]"
                            />
                            {/* Inner Vignette for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Right Sidebar (Content & Feature Lists) */}
                <div className="flex flex-col w-full lg:w-[35%] shrink-0 min-h-[400px] justify-center z-20">

                    {/* Main Headline */}
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={`title-${activeIndex}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-12 hidden lg:block"
                        >
                            THE CHARGING<br />INFRASTRUCTURE MODERN<br />CITIES DESERVE
                        </motion.h2>
                    </AnimatePresence>

                    {/* Dynamic Swap Content */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${activeIndex}`}
                                initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -30, opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                {tabs[activeIndex].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhatIsEplug;
