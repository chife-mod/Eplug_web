import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

import winterCarImg from '../../assets/images/winter-car.png';
import nightGasStationImg from '../../assets/images/night-gas_station.png';
import cheetahImg from '../../assets/images/cheetah.png';

// Data structure following the required order: Winter, Night, Cheetah
const sections = [
    {
        id: 'winter',
        title: '5 min',
        subtitle: 'WINTER RANGE',
        statTitle: '50 MILES',
        image: winterCarImg,
    },
    {
        id: 'night',
        title: '12 min',
        subtitle: '0-80% CHARGE',
        statTitle: 'TYPICAL EV',
        image: nightGasStationImg,
    },
    {
        id: 'cheetah',
        title: '20 min',
        subtitle: 'NIGHT RANGE',
        statTitle: '180 MILES',
        image: cheetahImg,
    }
];

const TheNumbers = () => {
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Variants for text animations (Framer Motion handles the dynamic swapping better than GSAP scroll scrub here)
    const fadeUpVariants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalSections = sections.length;

            // Initial GSAP Setup
            imagesRef.current.forEach((img, index) => {
                if (index > 0) {
                    gsap.set(img, { xPercent: 100 });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: `+=${totalSections * 150}%`, // Longer scroll duration
                    pin: true,
                    scrub: 0.5, // Slight smoothing
                    onUpdate: (self) => {
                        // Determine which section is predominantly in view
                        const progress = self.progress;

                        // Small buffer to snap the React state at the right point relative to the GSAP animation
                        const segmentProgress = progress * totalSections;
                        let newIndex = Math.floor(segmentProgress);

                        // Adjust threshold to sync text change with image intersection
                        if (segmentProgress - newIndex > 0.4 && newIndex < totalSections - 1) {
                            newIndex += 1;
                        }

                        if (newIndex >= totalSections) newIndex = totalSections - 1;

                        if (newIndex !== activeIndex) {
                            setActiveIndex(newIndex);
                        }
                    }
                }
            });

            // Build the staggered scroll animations
            for (let i = 1; i < totalSections; i++) {

                // The new image slides in from the right, starting slightly blurred and scaling down
                tl.fromTo(imagesRef.current[i],
                    { xPercent: 100 },
                    {
                        xPercent: 0,
                        ease: "power2.inOut",
                        duration: 1
                    },
                    i - 1 // Start at timeline relative position
                );

                // The old image gets pushed out slightly to the left behind the new one
                tl.to(imagesRef.current[i - 1], {
                    xPercent: -30,
                    ease: "power2.inOut",
                    duration: 1
                }, i - 1);
            }

        }, containerRef);

        return () => ctx.revert();
    }, [activeIndex]);

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-[#0A0A0A] flex items-center justify-center font-['Montserrat',sans-serif]">

            {/* The Background Images that slide over each other */}
            <div className="absolute inset-0 w-[96vw] h-[94vh] m-auto z-0 overflow-hidden rounded-3xl">
                {sections.map((section, idx) => (
                    <div
                        key={section.id}
                        ref={el => imagesRef.current[idx] = el}
                        className="absolute inset-0 w-full h-full will-change-transform bg-black shadow-[rgba(0,0,0,0.8)_0px_0px_30px_10px]"
                        style={{ zIndex: idx }} // Ensure newer images layer on top
                    >
                        {/* We use border left to simulate the transparent gap in the displacement */}
                        <div className="absolute inset-0 md:border-l-[4px] border-[#0A0A0A]">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover opacity-60 md:opacity-80"
                            />
                            {/* Linear Gradient for Text Readability exactly like reference */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 md:from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-black/90 md:to-[#0A0A0A]/60"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative w-full h-full max-w-[1440px] px-8 md:px-24 flex flex-col md:flex-row items-start md:items-center justify-between z-10 py-24 md:py-0">
                {/* Left Sidebar Content (Static List) */}
                <div className="flex md:flex-col w-full md:w-1/3 overflow-x-auto md:overflow-visible pb-12 md:pb-0 scrollbar-hide">
                    <ul className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-6 text-left min-w-max md:min-w-0">
                        {sections.map((section, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <li
                                    key={`nav-${idx}`}
                                    className={`flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 md:pl-4' : 'opacity-30 hover:opacity-50'}`}
                                >
                                    <div className={`w-2 h-2 rounded-full hidden md:block transition-colors duration-500 ${isActive ? 'bg-[#FF00C5]' : 'bg-white'}`}></div>
                                    <span className="text-white text-[20px] md:text-[28px] font-semibold tracking-[-0.02em]">{section.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Right Side Content (Dynamic Stat based on active index) */}
                <div className="flex flex-col w-full md:w-1/2 text-left md:text-right mt-auto md:mt-0">

                    {/* Subtitle with Framer Motion for immediate swap */}
                    <div className="overflow-hidden h-8 mb-2 md:mb-4">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`sub-${activeIndex}`}
                                variants={fadeUpVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#FF00C5] font-semibold text-lg md:text-xl tracking-[0.15em] uppercase"
                            >
                                {sections[activeIndex].subtitle}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Main Title Title with split letter animation effect */}
                    <div className="overflow-hidden min-h-[80px] md:min-h-[100px]">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={`stat-${activeIndex}`}
                                variants={fadeUpVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="text-5xl md:text-[80px] leading-tight font-bold tracking-tighter text-white"
                            >
                                {sections[activeIndex].statTitle}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheNumbers;
