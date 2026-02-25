import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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

import winterCar from '../../assets/images/winter-car.png';
import nightGasStation from '../../assets/images/night-gas_station.png';
import cheetah from '../../assets/images/cheetah.png';
import trianglePattern from '../../assets/images/triangle-pattern.svg';

// ─── Tab definitions ──────────────────────────────────────────────────────────
const tabs = [
    {
        id: 'urban',
        title: 'The Urban Reality',
        image: winterCar,
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 387 }}>
                {/* Large paragraph — white, 24px */}
                <p style={{ fontSize: '24px', lineHeight: 1.3, letterSpacing: '0.24px', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 400, margin: 0 }}>
                    While others build for highways and suburbs, we're building for the 80% of Americans who will live in cities by 2050.
                </p>
                {/* Small paragraph — 70% opacity, 16px, 24px gap above */}
                <p style={{ fontSize: '16px', lineHeight: 1.54, letterSpacing: '0.16px', color: '#fff', opacity: 0.7, fontFamily: "'Montserrat', sans-serif", fontWeight: 400, margin: 0 }}>
                    Eplug is a DC Fast network designed exclusively for urban density — where people don't have driveways, where fleets run 24/7, where every block counts.
                </p>
            </div>
        )
    },
    {
        id: 'built',
        title: 'Built From Scratch',
        image: nightGasStation,
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 387 }}>
                {/* Subheadline — 24px gap below before icon list */}
                <p style={{ fontSize: '24px', lineHeight: 1.3, letterSpacing: '0.24px', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 400, margin: '0 0 24px 0' }}>
                    We're not expanding a highway network into cities. <span style={{ color: '#FF00C5' }}>We're building the city network from scratch.</span>
                </p>
                {/* Icon list — 16px gap between each row */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                        { Icon: IconBolt, label: 'Fast to charge', bold: false },
                        { Icon: IconBlocks, label: 'Fast to build', bold: false },
                        { Icon: IconArrowsMaximize, label: 'Fast to scale', bold: false },
                        { Icon: IconStar, label: 'Zero compromise', bold: true },
                    ].map(({ Icon, label, bold }) => (
                        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            {/* Icon box is exactly 20×20 as per Figma */}
                            <Icon style={{ width: 20, height: 20, color: '#A1A1AA', flexShrink: 0 }} stroke={1.5} />
                            <span style={{ fontSize: '16px', lineHeight: 1.54, color: bold ? '#fff' : '#A1A1AA', fontFamily: "'Montserrat', sans-serif", fontWeight: bold ? 700 : 400 }}>
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'different',
        title: 'What Makes Us Different',
        image: cheetah,
        content: (
            /* Icon list — 16px gap between each row as per Figma */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 387 }}>
                {[
                    { Icon: IconClockBolt, title: '100% DC Fast', sub: 'no slow Level 2 dilution' },
                    { Icon: IconBuildingSkyscraper, title: 'Urban-only focus', sub: 'we go where people actually live and work' },
                    { Icon: IconSteeringWheel, title: 'Driver-first design', sub: 'not utility boxes in parking lots' },
                    { Icon: IconBuildingStore, title: 'Integrated retail & community spaces', sub: 'charging becomes a destination' },
                    { Icon: IconShieldCheck, title: 'Fleet-grade reliability', sub: 'because downtime costs money' },
                ].map(({ Icon, title, sub }) => (
                    <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        {/* Icon box is exactly 20×20 as per Figma */}
                        <Icon style={{ width: 20, height: 20, color: '#A1A1AA', flexShrink: 0, marginTop: 2 }} stroke={1.5} />
                        <div>
                            <p style={{ fontSize: '16px', lineHeight: 1.4, color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, margin: 0 }}>{title}</p>
                            <p style={{ fontSize: '16px', lineHeight: 1.54, color: '#A1A1AA', fontFamily: "'Montserrat', sans-serif", fontWeight: 400, margin: '2px 0 0 0' }}>{sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
];

// ─── Component ────────────────────────────────────────────────────────────────
const WhatIsEplug = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance every 8 s
    useEffect(() => {
        const t = setInterval(() => setActiveIndex(p => (p + 1) % tabs.length), 8000);
        return () => clearInterval(t);
    }, [activeIndex]);

    const handleTabClick = (idx) => { if (idx !== activeIndex) setActiveIndex(idx); };

    // Exact 5-layer shadow from Figma
    const imageShadow = '0px 52px 15px 0px rgba(0,0,0,0.01), 0px 33px 13px 0px rgba(0,0,0,0.04), 0px 19px 11px 0px rgba(0,0,0,0.15), 0px 8px 8px 0px rgba(0,0,0,0.26), 0px 2px 5px 0px rgba(0,0,0,0.29)';

    // Scroll-triggered entrance: fires once when the section enters the viewport
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.15 });

    return (
        <div
            ref={sectionRef}
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                background: '#0c0214',
                /* overflow:hidden removed — it was clipping the photo drop-shadow */
                fontFamily: "'Montserrat', sans-serif",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* ── Triangle SVG pattern (left edge) ── */}
            <div style={{ position: 'absolute', left: 0, top: -86, width: 622, height: 985, pointerEvents: 'none', zIndex: 0 }}>
                <img src={trianglePattern} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>


            {/* ── Header block: slides down on scroll into view ── */}
            <motion.div
                initial={{ opacity: 0, y: -24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                    marginTop: 56,
                    /* Wide enough to hold 3-line headline at 1440px desktop */
                    width: '100%',
                    maxWidth: 960,
                    padding: '0 24px',
                    boxSizing: 'border-box',
                }}
            >
                {/* ── Overline pill: inner dot 8×8 solid fuchsia, 4px gap, outer ring 20% fuchsia ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 20 }}
                        style={{
                            /* Outer ring: 20% fuchsia, size = inner(8) + gap(4)*2 = 16px */
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            background: 'rgba(255,0,197,0.20)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Inner dot: 8×8 solid fuchsia */}
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF00C5' }} />
                    </motion.div>
                    <span style={{ fontSize: 16, lineHeight: 1.54, color: '#fff', letterSpacing: '0.04em' }}>What Is Eplug?</span>
                </div>

                {/* Headline: exactly 48px (not clamp) so "INFRASTRUCTURE MODERN" fits on one line */}
                <h2 style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: '#fff',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    lineHeight: 1.1,
                    margin: 0,
                    letterSpacing: '-0.02em',
                    width: '100%',
                }}>
                    {['THE CHARGING', 'INFRASTRUCTURE MODERN', 'CITIES DESERVE'].map((line, li) => (
                        <motion.span
                            key={line}
                            style={{ display: 'block' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 * (li + 1), duration: 0.55, ease: 'easeOut' }}
                        >
                            {line}
                        </motion.span>
                    ))}
                </h2>
            </motion.div>

            {/* ── 3-column body ──
                 Glow is a sibling here (same coordinate space as image), so top:0 = image top.
                 Image at left: calc(50% - 204.5px), glow offset +30px right, +30px down. */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                height: 540,
                marginTop: 64,
                flexShrink: 0,
            }}>
                {/* ── Ambient glow: behind everything (zIndex 0) ──
                     Container is 20% larger (492×564) so the blurred halo bleeds further.
                     Shifted +30px right, +30px down → anchored to bottom-right of the card.
                     opacity 0.78 = brighter than before. */}
                <div style={{
                    position: 'absolute',
                    left: 'calc(50% - 204.5px + 30px)',
                    top: 30,
                    width: 409,
                    height: 470,
                    overflow: 'visible',
                    pointerEvents: 'none',
                    zIndex: 0,  /* BELOW everything — glow goes under photo */
                }}>
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={`glow-${tabs[activeIndex].id}`}
                            src={tabs[activeIndex].image}
                            alt=""
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.72 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.9, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 24,
                                filter: 'blur(55px)',
                            }}
                        />
                    </AnimatePresence>
                </div>
                {/* 1. Left tab list — slides in from left on scroll */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        left: 'calc(8.33% + 230px)',
                        top: 0,
                        width: 217,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 31,
                    }}
                >
                    {tabs.map((tab, idx) => {
                        const isActive = activeIndex === idx;
                        return (
                            <div
                                key={tab.id}
                                onClick={() => handleTabClick(idx)}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: 8, cursor: 'pointer' }}
                            >
                                {/* Bolt icon – visible only when active */}
                                <div style={{ width: 24, height: 24, flexShrink: 0, opacity: isActive ? 1 : 0, transition: 'opacity 0.3s' }}>
                                    <IconBolt style={{ width: 24, height: 24, color: '#FF00C5' }} fill="currentColor" stroke={0} />
                                </div>
                                <span style={{
                                    fontSize: 24,
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    letterSpacing: '0.24px',
                                    color: '#fff',
                                    opacity: isActive ? 1 : 0.5,
                                    transition: 'opacity 0.3s',
                                    userSelect: 'none',
                                }}>
                                    {tab.title}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* 2. Image slider — cinematic horizontal REEL
                     Entrance: scale up from 0.96 + fade, triggered by scroll */}
                {/* ── Image slider ──
                     SHADOW DIV: separate from the clip container so the shadow always
                     looks like it belongs to ONE photo card, not the overflow:hidden container.
                     Position matches the clip container exactly, but no overflow:hidden. */}
                <div style={{
                    position: 'absolute',
                    left: 'calc(50% - 204.5px)',
                    top: 0,
                    width: 409,
                    height: 470,
                    borderRadius: 16,
                    boxShadow: imageShadow,
                    zIndex: 2,
                    pointerEvents: 'none',
                }} />

                {/* CLIP/MASK CONTAINER: overflow:hidden clips images, but NO boxShadow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                    transition={{ delay: 0.25, duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                    style={{
                        position: 'absolute',
                        left: 'calc(50% - 204.5px)',
                        top: 0,
                        width: 409,
                        height: 470,
                        borderRadius: 16,
                        overflow: 'hidden',
                        /* NO boxShadow here — shadow is on the sibling div above */
                        zIndex: 3,
                    }}
                >
                    {/* Sliding track */}
                    <motion.div
                        style={{ display: 'flex', height: '100%', position: 'absolute', left: 0, top: 0 }}
                        animate={{ x: -(activeIndex * (409 + 16)) }}
                        transition={{
                            type: 'spring',
                            stiffness: 55,
                            damping: 20,
                            mass: 1.1,
                        }}
                    >
                        {tabs.map((tab, idx) => (
                            <div
                                key={tab.id}
                                style={{
                                    width: 409,
                                    height: '100%',
                                    flexShrink: 0,
                                    /* 16px gap visible as a dark slice during transition */
                                    marginRight: idx < tabs.length - 1 ? 16 : 0,
                                    /* Each card rounded — visible during slide-in from the right */
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={tab.image}
                                    alt={tab.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 16 }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* 3. Right content — slides in from right on scroll, then per-tab right→left slide */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        left: 'calc(66.67% + 13px)',
                        top: 0,
                        width: 387,
                        minHeight: 320,
                    }}
                >
                    {/* Tab content: slides RIGHT→LEFT on switch
                         Enter: spring (stiffness 55 = same feel as image reel)
                         Exit: fast ease (0.2s) — spring exit would make mode="wait" hang forever */}
                    <AnimatePresence mode="wait">
                        {tabs.map((tab, idx) => {
                            if (idx !== activeIndex) return null;
                            return (
                                <motion.div
                                    key={`c-${tab.id}`}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{
                                        opacity: 0,
                                        x: -20,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        /* inline transition overrides the spring for exit only */
                                        transition: { duration: 0.2, ease: 'easeIn' },
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 55,
                                        damping: 20,
                                        mass: 1.0,
                                    }}
                                >
                                    {tab.content}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default WhatIsEplug;
