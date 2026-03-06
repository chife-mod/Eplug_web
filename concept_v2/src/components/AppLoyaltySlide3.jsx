// AppLoyaltySlide3.jsx — Pixel Perfect
// Figma: 355:2072 — "Community Integration"
// Standalone slide, 1280×550px — insert into AppLoyalty slider as slide 3

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgMap = '/assets/64ab791c42faa3e74ef4c4b20cf5f6c96cd691b0.png';
const imgPlaceBase = '/assets/51fd965544a9bb5a24b9a48c43aa5c18efd33eff.png'; // base photo for cards
const imgDominoPark = '/assets/1ee17a74f53517b14278f544c709b0f4a2647720.png'; // Domino Park photo overlay
const imgDominoLogo = '/assets/4e775ac2426e1d0f1d29ee26debe694a297e2bb4.png'; // Domino Park logo
const imgDominoVector = '/assets/6138e57f379eb4c8e85e178dae9bd79d71f8bdeb.svg'; // Domino Park text logo (SVG)
const imgLindustrie = '/assets/3ad359547357b535f4d3bd31f4d852bc029ce773.png'; // L'Industrie photo
const imgLindustrieLo = '/assets/57b6f4471dd1b35e77d1a7eae5cebcf3bfda0380.png'; // L'Industrie logo
const imgMarcy = '/assets/b667b604f2088ea4b6c32307b70724a4466742f9.png'; // Marcy Ave metro photo
const imgEplugLogo = '/assets/eplug-logo-vertical-fixed.svg'; // patched: preserveAspectRatio=xMidYMid meet // ePlug vertical logo
const imgPlusIcon = '/assets/a83e85b496b208bbf54ee8be30b8037af3f54ff3.svg'; // + icon
const imgCtaBg = '/assets/6daa838d2f6d8f40231b736620ff996470ffe5ba.svg'; // CTA bg vector
const imgArrow = '/assets/6ae1f5d0d2a1eebeb22a64136931410a8487f315.svg'; // arrow icon

// ─── Sub-components ───────────────────────────────────────────────────────────

// ─── Breathing pulse keyframes (injected once) ───────────────────────────────
const PIN_STYLES = `
    @keyframes pinOuterBreath {
        0%, 100% { transform: scale(1);    opacity: 1;   }
        50%       { transform: scale(1.22); opacity: 0.55; }
    }
    @keyframes pinMiddleBreath {
        0%, 100% { transform: translate(-50%,-50%) scale(1);    opacity: 1;   }
        50%       { transform: translate(-50%,-50%) scale(1.16); opacity: 0.72; }
    }
    @keyframes pinPinkOuterBreath {
        0%, 100% { transform: scale(1);    opacity: 1;   }
        50%       { transform: scale(1.3);  opacity: 0.5; }
    }
    @keyframes pinPinkMiddleBreath {
        0%, 100% { transform: translate(-50%,-50%) scale(1);    opacity: 1;   }
        50%       { transform: translate(-50%,-50%) scale(1.2);  opacity: 0.7; }
    }
`;

// All pins are now the same 60.827px size — rings are siblings so each
// can animate independently, creating the cascading "breathing" effect.
const PIN_SIZE = 60.827;
const PIN_BLUR = 6.59;
const PIN_BORDER = 0.634;

const BluePinRing = ({ delay = 0 }) => (
    <div style={{ position: 'relative', width: PIN_SIZE, height: PIN_SIZE, flexShrink: 0 }}>
        {/* Outer ring — expands FIRST */}
        <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'rgba(0,123,255,0.2)',
            border: `${PIN_BORDER}px solid white`,
            backdropFilter: `blur(${PIN_BLUR}px)`,
            WebkitBackdropFilter: `blur(${PIN_BLUR}px)`,
            animation: `pinOuterBreath 2.8s ease-in-out ${delay}s infinite`,
        }} />
        {/* Middle ring — follows outer with 0.5s lag */}
        <div style={{
            position: 'absolute',
            width: '66.7%', height: '66.7%',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '50%',
            background: 'rgba(0,123,255,0.5)',
            border: `${PIN_BORDER}px solid white`,
            backdropFilter: `blur(${PIN_BLUR}px)`,
            WebkitBackdropFilter: `blur(${PIN_BLUR}px)`,
            animation: `pinMiddleBreath 2.8s ease-in-out ${delay + 0.5}s infinite`,
        }} />
        {/* Inner dot — static */}
        <div style={{
            position: 'absolute',
            width: '33.3%', height: '33.3%',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '50%',
            background: '#007bff',
            border: `${PIN_BORDER}px solid white`,
            backdropFilter: `blur(${PIN_BLUR}px)`,
            WebkitBackdropFilter: `blur(${PIN_BLUR}px)`,
        }} />
    </div>
);

// Pink Eplug charging pin — same breathing effect as blue pins
const EPLUG_PIN_SIZE = 35.661;
const EPLUG_BLUR = 4.139;
const EPLUG_BORDER = '0.398px solid #FF00C5';

const EplugPin = () => (
    <div style={{ position: 'relative', width: EPLUG_PIN_SIZE, height: EPLUG_PIN_SIZE, flexShrink: 0 }}>
        {/* Outer ring — pulses first */}
        <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'rgba(255,0,197,0.2)',
            border: EPLUG_BORDER,
            backdropFilter: `blur(${EPLUG_BLUR}px)`,
            WebkitBackdropFilter: `blur(${EPLUG_BLUR}px)`,
            animation: 'pinPinkOuterBreath 2.4s ease-in-out infinite',
        }} />
        {/* Inner dot — follows with 0.5s lag */}
        <div style={{
            position: 'absolute',
            width: '53.6%', height: '53.6%', // 19.104 / 35.661
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '50%',
            background: '#FF00C5',
            backdropFilter: `blur(${EPLUG_BLUR}px)`,
            WebkitBackdropFilter: `blur(${EPLUG_BLUR}px)`,
            animation: 'pinPinkMiddleBreath 2.4s ease-in-out 0.5s infinite',
        }} />
    </div>
);

// Location card (dark purple, blurred, with photo + logo)
const LocationCard = ({ left, top, width, height, photo, photoBase, logo, logoW, logoH, label }) => (
    <div style={{
        position: 'absolute',
        left, top, width, height,
        background: '#2E0054',
        border: '0.796px solid #007bff',
        backdropFilter: 'blur(3.184px)',
        WebkitBackdropFilter: 'blur(3.184px)',
        display: 'flex', flexDirection: 'column',
        gap: 6.368,
        alignItems: 'center',
        overflow: 'hidden',
        paddingBottom: 12.736,
        boxSizing: 'border-box',
    }}>
        {/* Photo area — aspect ratio 870/547 */}
        <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '870/547',
            flexShrink: 0, overflow: 'hidden',
        }}>
            {photoBase && (
                <img alt="" src={photoBase} style={{
                    position: 'absolute',
                    height: '106.03%', top: '-4.2%', left: 0,
                    width: '100%', objectFit: 'cover',
                    pointerEvents: 'none',
                }} />
            )}
            {photo && (
                <img alt="" src={photo} style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', pointerEvents: 'none',
                }} />
            )}
        </div>
        {/* Logo / label area */}
        {logo && (
            <div style={{
                position: 'relative', flexShrink: 0,
                width: logoW, height: logoH,
            }}>
                <img alt={label} src={logo} style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'contain', pointerEvents: 'none',
                }} />
            </div>
        )}
        {label && !logo && (
            <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600, fontSize: 15.92, lineHeight: 1.1,
                color: 'white', textAlign: 'center',
                letterSpacing: 0.1592,
                margin: 0, flexShrink: 0,
                whiteSpace: 'nowrap',
            }}>
                {label}
            </p>
        )}
    </div>
);

// Street label (rotated text on map)
const StreetLabel = ({ left, top, rotate, children }) => (
    <div style={{
        position: 'absolute',
        left, top,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        transformOrigin: 'center center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600, fontSize: 15.92, lineHeight: 1.1,
        color: '#2E0054', textAlign: 'center',
        letterSpacing: 0.1592,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
    }}>
        {children}
    </div>
);

// Feature item for the glass card
const FeatureItem = ({ text }) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', width: '100%' }}>
        <div style={{
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            padding: 2, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
            <div style={{ width: 20, height: 20, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: '20.83%' }}>
                    <div style={{ position: 'absolute', inset: '-6.43%' }}>
                        <img alt="" src={imgPlusIcon} style={{ display: 'block', width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            flex: '1 0 0', paddingTop: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 1, minWidth: 1,
        }}>
            <p style={{
                flex: '1 0 0',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400, fontSize: 16, lineHeight: 1.2,
                color: '#0c0c0c', margin: 0,
            }}>
                {text}
            </p>
        </div>
    </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
export default function AppLoyaltySlide3({ inSlider = false }) {
    return (
        <div style={{
            position: 'relative',
            width: '100%', height: '100%',
            background: '#DEDCF9',
            overflow: 'hidden',
        }}>
            <style>{PIN_STYLES}</style>

            {/* ─── MAP LAYER ─────────────────────────────────────────────── */}
            {/* Always fills container width */}
            <div style={{
                position: 'absolute',
                left: 0, top: 0,
                width: '100%', height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
            }}>
                {/* Map image — overflows beyond the container edges */}
                <img
                    alt=""
                    src={imgMap}
                    style={{
                        position: 'absolute',
                        left: '-23.27%',   // -246.9px
                        top: '-15.68%',    // -86.2px
                        width: '125.89%',  // 1335.7px
                        height: '121.86%', // 670.2px
                        maxWidth: 'none',
                        pointerEvents: 'none',
                    }}
                />
                {/* Right-side fade: #DEDCF9 → transparent */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(-90deg, #DEDCF9 0%, rgba(222,220,249,0) 24.788%)',
                }} />
            </div>

            {/* ─── LOCATION CARDS ────────────────────────────────────────── */}

            {/* Domino Park — top-left area */}
            <LocationCard
                left={178.14} top={114.38}
                width={152.832} height={140.096}
                photoBase={imgPlaceBase}
                photo={imgDominoPark}
                logo={imgDominoVector}
                logoW={91.606} logoH={25.472}
                label="Domino Park"
            />

            {/* Peter Luger — center, lower */}
            <LocationCard
                left={461.51} top={283.13}
                width={152.832} height={151.24}
                photo={imgPlaceBase}
                logo={imgDominoLogo}
                logoW={126.554} logoH={36.851}
                label="Peter Luger"
            />

            {/* L'Industrie — right-center, top */}
            <LocationCard
                left={652.55} top={123.93}
                width={152.832} height={150.334}
                photoBase={imgPlaceBase}
                photo={imgLindustrie}
                logo={imgLindustrieLo}
                logoW={85.968} logoH={35.71}
                label="L'Industrie"
            />

            {/* Marcy Ave — right-center, bottom */}
            <div style={{
                position: 'absolute',
                left: 652.55, top: 345.22,
                width: 152.832, height: 149.648,
                background: '#2E0054',
                border: '0.796px solid #007bff',
                backdropFilter: 'blur(3.184px)',
                WebkitBackdropFilter: 'blur(3.184px)',
                display: 'flex', flexDirection: 'column',
                gap: 6.368, alignItems: 'center',
                overflow: 'hidden', paddingBottom: 12.736,
                boxSizing: 'border-box',
            }}>
                <img alt="" src={imgMarcy} style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', pointerEvents: 'none',
                    position: 'absolute', inset: 0,
                }} />
                <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600, fontSize: 15.92, lineHeight: 1.1,
                    color: 'white', textAlign: 'center',
                    letterSpacing: 0.1592, margin: 0,
                    position: 'absolute', bottom: 12.736,
                    whiteSpace: 'nowrap',
                }}>
                    Marcy Ave<br />(J/M/Z)
                </p>
            </div>

            {/* ─── LOCATION PINS ─────────────────────────────────────────── */}

            {/* Peter Luger */}
            <div style={{ position: 'absolute', left: 440.82, top: 303.82 }}>
                <BluePinRing delay={0} />
            </div>

            {/* Marcy Ave (right column, lower) */}
            <div style={{ position: 'absolute', left: 631.86, top: 356.36 }}>
                <BluePinRing delay={0.4} />
            </div>

            {/* L'Industrie (right column, upper) */}
            <div style={{ position: 'absolute', left: 631.86, top: 222.63 }}>
                <BluePinRing delay={0.8} />
            </div>

            {/* Ferry Terminal */}
            <div style={{ position: 'absolute', left: 151.07, top: 354.77 }}>
                <BluePinRing delay={1.2} />
            </div>

            {/* Domino Park — updated: 60.827px, pos 224/78 (Figma 483:1076) */}
            <div style={{ position: 'absolute', left: 224, top: 78 }}>
                <BluePinRing delay={1.6} />
            </div>

            {/* Pink Eplug charging pin */}
            <div style={{ position: 'absolute', left: 408.98, top: 265.62 }}>
                <EplugPin />
            </div>

            {/* ─── EPLUG LOGO ────────────────────────────────────────────── */}
            {/* Figma exact px: 29.71%×1280=380 / 30.35%×550=167. Bolt tip ≈ (432,274) = EplugPin area */}
            <img
                alt="Eplug"
                src={imgEplugLogo}
                style={{
                    position: 'absolute',
                    left: 380,
                    top: 167,
                    height: 118,
                    width: 'auto',
                    display: 'block',
                    pointerEvents: 'none',
                }}
            />

            {/* ─── STREET LABELS ─────────────────────────────────────────── */}
            <StreetLabel left={109.72} top={131.89} rotate={19.46}>
                Williamsburg<br />Bridge
            </StreetLabel>
            <StreetLabel left={171.65} top={310.19} rotate={0}>
                Ferry<br />Terminal
            </StreetLabel>
            <StreetLabel left={234.76} top={313.18} rotate={-92.25}>
                Kent Ave
            </StreetLabel>
            <StreetLabel left={291.52} top={303.55} rotate={-80.65}>
                Wythe Ave
            </StreetLabel>
            <StreetLabel left={341.13} top={326.92} rotate={-80.57}>
                Berry Str
            </StreetLabel>

            {/* ─── RIGHT PANEL ─────────────────────────────────────── */}
            {/* Hidden when inSlider=true — AppLoyalty handles its own right panel */}
            {!inSlider && (
                <div style={{
                    position: 'absolute',
                    right: 32, top: 32,
                    display: 'flex', flexDirection: 'column',
                    gap: 8, alignItems: 'flex-start',
                }}>
                    {/* Glass info card */}
                    <div style={{
                        width: 355,
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        background: 'rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        borderRadius: 8,
                        padding: 32,
                        boxSizing: 'border-box',
                        display: 'flex', flexDirection: 'column', gap: 16,
                        boxShadow: [
                            '0px 152px 43px 0px rgba(78,70,98,0.01)',
                            '0px 98px 39px 0px rgba(78,70,98,0.04)',
                            '0px 55px 33px 0px rgba(78,70,98,0.15)',
                            '0px 24px 24px 0px rgba(78,70,98,0.26)',
                            '0px 6px 13px 0px rgba(78,70,98,0.29)',
                        ].join(', '),
                    }}>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700, fontSize: 32, lineHeight: 1.1,
                            color: '#0c0c0c', textTransform: 'uppercase',
                            margin: 0,
                        }}>
                            Community Integration
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 234 }}>
                            <FeatureItem text="Find nearby coffee, food, retail while you charge" />
                            <FeatureItem text="Partner discounts activated automatically" />
                            <FeatureItem text="Charging social — see where your city charges" />
                        </div>
                    </div>

                    {/* CTA dark card */}
                    <div style={{
                        width: 355, height: 192,
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        background: '#2E0054',
                        borderRadius: 16,
                        padding: 32,
                        boxSizing: 'border-box',
                        display: 'flex', flexDirection: 'column',
                        gap: 16,
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        {/* Background vector decoration */}
                        <div style={{
                            position: 'absolute',
                            left: 0, top: 0,
                            width: 219, height: 400,
                            pointerEvents: 'none',
                        }}>
                            <img alt="" src={imgCtaBg} style={{
                                display: 'block', width: '100%', height: '100%',
                                position: 'absolute', inset: 0, maxWidth: 'none',
                            }} />
                        </div>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 400, fontSize: 18, lineHeight: 1.2,
                            color: '#DEDCF9', margin: 0,
                            letterSpacing: 0.18,
                            position: 'relative', zIndex: 1,
                        }}>
                            Rewards you actually want,<br />
                            UX that actually works, and a network you can trust.
                        </p>
                        {/* Join button — full width, text left / icon right */}
                        <div style={{
                            background: '#FF00C5',
                            borderRadius: 8,
                            height: 48,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingLeft: 24, paddingRight: 24,
                            boxSizing: 'border-box',
                            flexShrink: 0,
                            position: 'relative', zIndex: 1,
                            cursor: 'pointer',
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
                    </div>
                </div>
            )}

        </div>
    );
}
