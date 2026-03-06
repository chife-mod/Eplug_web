// AppLoyalty.jsx — v5 (Final)
// Figma: 180:408 — "The App & Loyalty Program"
// Uses Framer Motion for premium slide animations

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppLoyaltySlide3 from './AppLoyaltySlide3';

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgEplugDot = '/assets/d644f2b79aef1661f54cd91ac43ed3ab9c701d2a.svg';
const imgStation = '/assets/c66c5af03c1bac914a34ba01d1ccd3f833dd97e3.png'; // slide 1 bg
const imgHandUi = '/assets/3064c3369d020fcfce5b14e533c52936e54d33fb.png'; // slide 1 hand
const imgFleet = '/assets/bf8a830bfed9870d60c602a1dfc69e5af6e839a3.png'; // slide 2 bg
// CTA card assets (same as AppLoyaltySlide3)
const imgCtaBg = '/assets/6daa838d2f6d8f40231b736620ff996470ffe5ba.svg';
const imgArrow = '/assets/6ae1f5d0d2a1eebeb22a64136931410a8487f315.svg';

// ─── Slide data ───────────────────────────────────────────────────────────────
// Slide 3 map is a rich UI — rendered as a custom component (see MapSlide)
const SLIDES = [
    {
        id: 0,
        title: 'Seamless Charging\nExperience',
        features: [
            'Tap to charge',
            'Real-time stall availability',
            'Charge session tracking & history',
            'Transparent pricing before you plug in',
            'Instant support chat',
        ],
        cta: null,
    },
    {
        id: 1,
        title: 'Fleet & Power\nUser Tools',
        features: [
            'Subscription tiers with priority access',
            'Bulk charging credits for fleets',
            'Consolidated billing & expense reports',
            'Predictive wait time algorithms',
            'Reserved stall booking (fleet members)',
        ],
        cta: null,
    },
    {
        id: 2,
        title: 'Community\nIntegration',
        features: [
            'Find nearby coffee, food, retail while you charge',
            'Partner discounts activated automatically',
            'Charging social — see where your city charges',
        ],
    },
];

const TIMER_MS = 5000;
const SLIDE_W = 'calc(100vw - 160px)'; // leaves 80px right: 64px peek + 16px gap
const SLIDE_GAP = 16;
const CARD_RIGHT = 112; // = 80px (slide right space) + 32px (card padding)
const CARD_W = 355;
const CARD_PAD = 32;   // top offset + internal padding (Figma top-[32px])
const CARD_BOTTOM = 24; // bottom offset: 550 - 32(top) - 294(white) - 8(gap) - 192(cta) = 24
const CTA_H = 192; // pixel perfect height of CTA card
const CTA_GAP = 8;  // gap between white card and CTA card

// ─── Variants for card content ───────────────────────────────────────────────
const contentVariants = {
    enter: {
        opacity: 0,
        x: 48,
        filter: 'blur(6px)',
    },
    center: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1], // expo out — Framer Motion's recommended easing
            staggerChildren: 0.07,
        },
    },
    exit: {
        opacity: 0,
        x: -36,
        filter: 'blur(4px)',
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 0.6],
        },
    },
};

const itemVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.2 } },
};

// ─── Plus icon ────────────────────────────────────────────────────────────────
const PlusIcon = () => (
    <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
        <path d="M6.5 0.75V12.25M0.75 6.5H12.25"
            stroke="#FF00C5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// ─── Feature item ─────────────────────────────────────────────────────────────
const FeatureItem = ({ text }) => (
    <motion.div
        variants={itemVariants}
        style={{ display: 'flex', gap: 12, alignItems: 'flex-start', width: '100%' }}
    >
        <div style={{
            width: 24, height: 24,
            background: 'rgba(255,255,255,0.8)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, marginTop: 1,
        }}>
            <PlusIcon />
        </div>
        <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400, fontSize: 16, lineHeight: 1.2,
            color: '#0c0c0c', margin: 0, paddingTop: 3,
            flex: '1 0 0',
        }}>
            {text}
        </p>
    </motion.div>
);

// ─── Glass card content ───────────────────────────────────────────────────────
const CardContent = ({ slide }) => (
    <motion.div
        key={slide.id}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
        }}
    >
        {/* Title — Figma: Montserrat Bold 32px uppercase */}
        <motion.p
            variants={itemVariants}
            style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700, fontSize: 32, lineHeight: 1.1,
                color: '#0c0c0c', textTransform: 'uppercase',
                margin: 0, whiteSpace: 'pre-line',
            }}
        >
            {slide.title}
        </motion.p>

        {/* Features — Figma: gap-[12px], width 234px */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 234 }}>
            {slide.features.map(f => <FeatureItem key={f} text={f} />)}
        </div>
    </motion.div>
);

// ─── Nav button with timer border ─────────────────────────────────────────────
const NavButton = ({ onClick, progress, showProgress, label, children }) => {
    const W = 56, H = 40, R = 16;
    const P = 2 * (W - 2 * R) + 2 * (H - 2 * R) + 2 * Math.PI * R;
    const offset = P * (1 - progress);

    return (
        <button
            aria-label={label}
            onClick={onClick}
            style={{
                position: 'relative', width: W, height: H, borderRadius: R,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', outline: 'none', padding: 0, flexShrink: 0,
            }}
        >
            <svg width={W} height={H} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}>
                {/* Static dim outline — same on both buttons */}
                <rect x={0.5} y={0.5} width={W - 1} height={H - 1} rx={R - 0.5} ry={R - 0.5}
                    fill="none" stroke="rgba(46,0,84,0.2)" strokeWidth={1.5} />
                {/* Animated timer stroke — only on next button */}
                {showProgress && (
                    <rect x={0.5} y={0.5} width={W - 1} height={H - 1} rx={R - 0.5} ry={R - 0.5}
                        fill="none" stroke="#2E0054" strokeWidth={2.5}
                        strokeDasharray={P} strokeDashoffset={offset}
                        strokeLinecap="round" />
                )}
            </svg>
            {children}
        </button>
    );
};

// ─── Slide background components ────────────────────────────────────────────
const SlideBackground = ({ slide }) => {
    if (slide.id === 0) {
        return (
            <>
                <img alt="" src={imgStation} style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', transform: 'scaleY(-1) rotate(180deg)', pointerEvents: 'none',
                }} />
                <img alt="Eplug App" src={imgHandUi} style={{
                    position: 'absolute', left: 200, top: 41,
                    width: 393, height: 509, objectFit: 'cover',
                    pointerEvents: 'none', zIndex: 2,
                }} />
            </>
        );
    }
    if (slide.id === 1) {
        return (
            <img alt="" src={imgFleet} style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', pointerEvents: 'none',
            }} />
        );
    }
    // Slide 3: pixel-perfect map from Figma (map-only, no right panel—AppLoyalty renders it)
    return <AppLoyaltySlide3 inSlider />;
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AppLoyalty() {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);

    const rafRef = useRef(null);
    const startRef = useRef(null);
    const currentRef = useRef(0);
    const goRef = useRef(null);
    const prevCurrentRef = useRef(0); // tracks previous slide for exit sequence

    const goTo = useCallback((idx) => {
        const next = ((idx % SLIDES.length) + SLIDES.length) % SLIDES.length;
        prevCurrentRef.current = currentRef.current; // save prev for exit sequence
        currentRef.current = next;
        setCurrent(next);
        setProgress(0);
        startRef.current = null;
    }, []);

    goRef.current = goTo;

    const prev = useCallback(() => goTo(currentRef.current - 1), [goTo]);
    const next = useCallback(() => goTo(currentRef.current + 1), [goTo]);

    // Clean RAF timer — resets on each slide
    useEffect(() => {
        startRef.current = null;
        let alive = true;

        const tick = (ts) => {
            if (!alive) return;
            if (!startRef.current) startRef.current = ts;
            const p = Math.min((ts - startRef.current) / TIMER_MS, 1);
            setProgress(p);
            if (p >= 1) {
                goRef.current(currentRef.current + 1);
            } else {
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => { alive = false; cancelAnimationFrame(rafRef.current); };
    }, [current]);

    const slide = SLIDES[current];

    return (
        <section style={{
            background: '#fff',
            display: 'flex', flexDirection: 'column',
            paddingTop: 40, paddingBottom: 80,
            width: '100%', boxSizing: 'border-box',
        }}>

            {/* ── HEADER ────────────────────────────────────────────────── */}
            <div style={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                paddingLeft: 80, paddingRight: 80,
                paddingBottom: 32, boxSizing: 'border-box', width: '100%',
            }}>
                {/* Left: eyebrow + H2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <img src={imgEplugDot} alt="" style={{ width: 16, height: 16 }} />
                        <span style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 400, fontSize: 16, lineHeight: 1.54,
                            color: '#0c0c0c', whiteSpace: 'nowrap',
                        }}>
                            The App &amp; Loyalty Program
                        </span>
                    </div>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700, fontSize: 48, lineHeight: 1.1,
                        color: '#0c0c0c', textTransform: 'uppercase',
                        margin: 0, whiteSpace: 'nowrap',
                    }}>
                        Charge Smarter.<br />
                        Earn Faster.<br />
                        <span style={{ color: '#FF00C5' }}>Live Better.</span>
                    </p>
                </div>

                {/* Right: description + section label */}
                <div style={{ width: 387, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400, fontSize: 16, lineHeight: 1.54,
                        color: '#0c0c0c', margin: 0,
                    }}>
                        Most charging networks treat you like a transaction. We treat you like a member.
                    </p>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700, fontSize: 32, lineHeight: 1.1,
                        color: '#0c0c0c', margin: 0,
                        textTransform: 'uppercase', whiteSpace: 'nowrap',
                    }}>
                        What&apos;s Coming:
                    </p>
                </div>
            </div>

            {/* ── SLIDER ────────────────────────────────────────────────── */}
            <div style={{ position: 'relative', width: '100%', height: 550, overflow: 'hidden' }}>

                {/* Image track — slides horizontally */}
                <motion.div
                    style={{
                        display: 'flex', gap: SLIDE_GAP, height: 550,
                        paddingLeft: 80, boxSizing: 'border-box',
                    }}
                    animate={{
                        x: `calc(${current} * (-1 * (${SLIDE_W}) - ${SLIDE_GAP}px))`,
                    }}
                    transition={{
                        duration: 0.65,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    {SLIDES.map(s => (
                        <div key={s.id} style={{
                            width: SLIDE_W, flexShrink: 0, height: 550,
                            borderRadius: 16, overflow: 'hidden',
                            position: 'relative',
                            // Slide 3 uses #DEDCF9 map background
                            background: s.id === 2 ? '#DEDCF9' : '#111',
                        }}>
                            <SlideBackground slide={s} />
                        </div>
                    ))}
                </motion.div>

                {/* Glass card — appears growing from bottom on mount, compresses on slide 3 */}
                <motion.div
                    initial={{
                        top: CARD_PAD,
                        bottom: CARD_BOTTOM,
                        right: CARD_RIGHT,
                        clipPath: 'inset(100% 0 0 0 round 8px)',
                    }}
                    animate={{
                        top: CARD_PAD,
                        bottom: current === 2 ? CARD_BOTTOM + CTA_H + CTA_GAP : CARD_BOTTOM,
                        right: CARD_RIGHT,
                        clipPath: 'inset(0 0 0 0 round 8px)',
                    }}
                    transition={{
                        duration: 0.65, ease: [0.4, 0, 0.2, 1],
                        // When leaving slide 3: wait for CTA to exit first (0.45s)
                        bottom: {
                            duration: 0.65, ease: [0.4, 0, 0.2, 1],
                            delay: prevCurrentRef.current === 2 && current !== 2 ? 0.45 : 0,
                        },
                    }}
                    style={{
                        position: 'absolute',
                        width: CARD_W,
                        borderRadius: 8,
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        background: 'rgba(255,255,255,0.55)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        boxShadow: [
                            '0px 152px 43px 0px rgba(78,70,98,0.01)',
                            '0px 98px 39px 0px rgba(78,70,98,0.04)',
                            '0px 55px 33px 0px rgba(78,70,98,0.15)',
                            '0px 24px 24px 0px rgba(78,70,98,0.26)',
                            '0px 6px 13px 0px rgba(78,70,98,0.29)',
                        ].join(', '),
                        padding: CARD_PAD, boxSizing: 'border-box',
                        zIndex: 10, overflow: 'hidden',
                    }}
                >
                    <AnimatePresence mode="wait">
                        <CardContent key={current} slide={slide} />
                    </AnimatePresence>
                </motion.div>

                {/* CTA block — grows from bottom via clipPath, content fades in after */}
                <AnimatePresence>
                    {current === 2 && (
                        <motion.div
                            key="cta-block"
                            initial={{ clipPath: 'inset(100% 0 0 0 round 16px)' }}
                            animate={{ clipPath: 'inset(0% 0 0 0 round 16px)' }}
                            exit={{ clipPath: 'inset(100% 0 0 0 round 16px)' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            style={{
                                position: 'absolute',
                                right: CARD_RIGHT,
                                bottom: CARD_BOTTOM,
                                width: CARD_W,
                                height: CTA_H,
                                borderRadius: 16,
                                background: '#2E0054',
                                zIndex: 10,
                                overflow: 'hidden',
                            }}
                        >
                            {/* Triangle bg — always visible, no fade */}
                            <div style={{
                                position: 'absolute', left: 0, top: 0,
                                width: 219, height: 400, pointerEvents: 'none',
                            }}>
                                <img alt="" src={imgCtaBg} style={{
                                    display: 'block', width: '100%', height: '100%',
                                    position: 'absolute', inset: 0, maxWidth: 'none',
                                }} />
                            </div>

                            {/* Content: fades in after block has grown */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35, delay: 0.65 }}
                                style={{
                                    position: 'absolute', inset: 0,
                                    padding: 32, boxSizing: 'border-box',
                                    display: 'flex', flexDirection: 'column',
                                    gap: 16, alignItems: 'flex-start',
                                    justifyContent: 'flex-end',
                                    zIndex: 1,
                                }}
                            >
                                <p style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 400, fontSize: 18, lineHeight: 1.2,
                                    color: '#DEDCF9', margin: 0, letterSpacing: 0.18,
                                }}>
                                    Rewards you actually want,<br />
                                    UX that actually works, and a network you can trust.
                                </p>
                                {/* Full-width button */}
                                <div style={{
                                    background: '#FF00C5', borderRadius: 8,
                                    height: 48, width: '100%',
                                    display: 'flex', alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingLeft: 24, paddingRight: 24,
                                    boxSizing: 'border-box', flexShrink: 0, cursor: 'pointer',
                                }}>
                                    <p style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 500, fontSize: 16, lineHeight: 1,
                                        color: 'white', margin: 0, whiteSpace: 'nowrap',
                                    }}>
                                        Join the App Waitlist
                                    </p>
                                    <div style={{ width: 24, height: 24, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                                        <div style={{ position: 'absolute', inset: '29.17%' }}>
                                            <div style={{ position: 'absolute', inset: '-10%' }}>
                                                <img alt="" src={imgArrow} style={{ display: 'block', width: '100%', height: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>

            {/* ── NAV BUTTONS ───────────────────────────────────────────── */}
            <div style={{
                display: 'flex', gap: 8, alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: 80, paddingTop: 16,
                width: '100%', boxSizing: 'border-box',
            }}>
                <NavButton onClick={prev} progress={0} showProgress={false} label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="#2E0054" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavButton>
                <NavButton onClick={next} progress={progress} showProgress={true} label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="#2E0054" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavButton>
            </div>
        </section>
    );
}
