import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheApp() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.app-panel');

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1.5, // Buttery smooth scrubbing
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        duration: { min: 0.2, max: 0.8 },
                        delay: 0.1,
                        ease: "power1.inOut"
                    },
                    end: () => "+=" + (window.innerWidth * sections.length)
                }
            });

            // Entrance animation for phone and text
            gsap.from('.app-header-text', {
                y: 50, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const panels = [
        {
            title: "Seamless Charging Experience",
            points: [
                "Tap to charge",
                "Real-time stall availability",
                "Charge session tracking & history",
                "Transparent pricing before you plug in",
                "Instant support chat"
            ]
        },
        {
            title: "Rewards That Actually Matter",
            points: [
                "Earn points on every kWh charged",
                "Redeem at local retail partners",
                "Free charging credits for loyalty milestones",
                "Member-exclusive rates during off-peak",
                "Early access to new station locations"
            ]
        },
        {
            title: "Fleet & Power User Tools",
            points: [
                "Subscription tiers with priority access",
                "Bulk charging credits for fleets",
                "Consolidated billing & expense reports",
                "Predictive wait time algorithms",
                "Reserved stall booking (fleet members)"
            ]
        },
        {
            title: "Community Integration",
            points: [
                "Find nearby coffee, food, retail while you charge",
                "Partner discounts activated automatically",
                "Charging social — see where your city charges"
            ]
        }
    ];

    return (
        <section ref={containerRef} className="w-full h-[100dvh] bg-[var(--color-brand-violet)] text-white overflow-hidden font-body flex items-center relative z-30">

            {/* Background / Static Elements */}
            <div className="absolute top-0 left-0 w-full h-[30dvh] bg-transparent z-10 pointer-events-none">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="text-white app-header-text">
                        <h2 className="text-[32px] lg:text-[56px] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
                            Charge Smarter.<br />Earn Faster.<br />Live Better.
                        </h2>
                        <p className="text-[var(--color-brand-fuchsia)] font-bold text-lg lg:text-xl tracking-widest uppercase">
                            The App & Loyalty Program
                        </p>
                    </div>
                    <div className="text-white/70 max-w-sm mb-2 text-sm lg:text-base font-medium app-header-text">
                        <p className="mb-4">The Eplug app launches in 2026 — and it's unlike anything else in EV charging.</p>
                        <p>Most charging networks treat you like a transaction. We treat you like a member.</p>
                    </div>
                </div>
            </div>

            <div className="app-scroll-wrapper flex w-[400vw] h-full pt-[20dvh]" style={{ width: '400vw' }}>

                {panels.map((p, i) => (
                    <div key={i} className="app-panel w-[100vw] h-[80dvh] flex items-center justify-center p-6 lg:p-12 relative">

                        {/* Panel Background Number */}
                        <div className="absolute top-[15%] left-[5%] text-[20vw] font-heading font-black text-transparent text-stroke-white opacity-[0.03] select-none pointer-events-none z-0">
                            0{i + 1}
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] mx-auto gap-16 h-full">

                            {/* Content Column */}
                            <div className="flex-1 flex flex-col justify-center max-w-xl lg:pl-16">
                                <div className="w-16 h-[3px] bg-[var(--color-brand-fuchsia)] mb-8 box-glow-fuchsia"></div>
                                <h3 className="text-[32px] lg:text-[48px] font-heading font-black mb-12 tracking-tighter uppercase leading-[0.9]">
                                    {p.title}
                                </h3>
                                <ul className="space-y-6">
                                    {p.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="w-2 h-2 mt-2 bg-[var(--color-brand-fuchsia)] rounded-full flex-shrink-0 box-glow-fuchsia"></span>
                                            <span className="text-lg lg:text-xl font-medium text-white/80">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Phone Mockup Column */}
                            <div className="hidden lg:flex flex-1 justify-center items-center relative h-full">

                                {/* Premium Glassmorphic Device Mockup */}
                                <div className="w-[340px] h-[700px] rounded-[3.5rem] p-3 relative shadow-2xl z-10 
                                    bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl 
                                    border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1),_0_40px_80px_-20px_rgba(0,0,0,0.8)]">

                                    {/* Physical Volume Buttons (Left) & Power Button (Right) */}
                                    <div className="absolute top-[120px] -left-1 w-1 h-12 bg-white/20 rounded-l-md"></div>
                                    <div className="absolute top-[180px] -left-1 w-1 h-12 bg-white/20 rounded-l-md"></div>
                                    <div className="absolute top-[150px] -right-1 w-1 h-16 bg-white/20 rounded-r-md"></div>

                                    {/* Inner Screen */}
                                    <div className="w-full h-full bg-[#08010E] rounded-[2.8rem] relative overflow-hidden flex flex-col pt-12 border border-black/50 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">

                                        {/* Dynamic Island / Notch */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-brand-fuchsia)] animate-pulse shadow-[0_0_10px_rgba(255,0,197,0.8)]"></div>
                                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                        </div>

                                        <div className="px-6 pb-6 h-full flex flex-col z-10">
                                            <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-brand-fuchsia)] mb-8">{p.title}</div>

                                            {i === 0 && (
                                                <div className="flex-1 flex flex-col gap-4">
                                                    <div className="w-full h-1/2 bg-[var(--color-brand-violet)] border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center">
                                                        {/* Radar/Ping effect */}
                                                        <div className="absolute w-24 h-24 border border-[var(--color-brand-fuchsia)]/30 rounded-full animate-ping"></div>
                                                        <div className="absolute w-12 h-12 border border-[var(--color-brand-fuchsia)]/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                                        <div className="w-4 h-4 bg-[var(--color-brand-fuchsia)] rounded-full box-glow-fuchsia z-10"></div>
                                                    </div>
                                                    <div className="p-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl">
                                                        <div className="flex justify-between items-center mb-4">
                                                            <span className="font-heading font-bold text-lg">Stall 04</span>
                                                            <span className="text-[var(--color-brand-fuchsia)] font-bold text-xs uppercase tracking-widest bg-[var(--color-brand-fuchsia)]/10 px-3 py-1 rounded-full">Available</span>
                                                        </div>
                                                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-2">
                                                            <div className="w-full h-full bg-[var(--color-brand-fuchsia)] w-[85%] box-glow-fuchsia"></div>
                                                        </div>
                                                        <div className="text-xs text-white/50 flex justify-between">
                                                            <span>Max Output</span>
                                                            <span className="text-white font-bold">350kW</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {i === 1 && (
                                                <div className="flex-1 flex flex-col gap-4 justify-center items-center">
                                                    <div className="text-[72px] font-heading font-black text-[var(--color-brand-fuchsia)] leading-none mb-2 tracking-tighter text-glow-fuchsia drop-shadow-2xl">8,450</div>
                                                    <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-8">Available Points</div>

                                                    <div className="w-full space-y-3">
                                                        <div className="w-full p-4 bg-white/5 border border-white/10 hover:border-[var(--color-brand-fuchsia)]/50 transition-colors rounded-2xl flex justify-between items-center group cursor-pointer">
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-sm">Free Coffee</span>
                                                                <span className="text-[10px] text-white/40">Partner Café</span>
                                                            </div>
                                                            <span className="text-xs font-bold bg-white text-[var(--color-brand-violet)] group-hover:bg-[var(--color-brand-fuchsia)] group-hover:text-white transition-colors px-4 py-2 rounded-full">Redeem</span>
                                                        </div>
                                                        <div className="w-full p-4 bg-white/5 border border-white/10 hover:border-[var(--color-brand-fuchsia)]/50 transition-colors rounded-2xl flex justify-between items-center group cursor-pointer">
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-sm">50 kWh Credit</span>
                                                                <span className="text-[10px] text-white/40">Network Use</span>
                                                            </div>
                                                            <span className="text-xs font-bold bg-white text-[var(--color-brand-violet)] group-hover:bg-[var(--color-brand-fuchsia)] group-hover:text-white transition-colors px-4 py-2 rounded-full">Redeem</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {i === 2 && (
                                                <div className="flex-1 flex flex-col gap-4">
                                                    <div className="p-6 bg-gradient-to-br from-[var(--color-brand-fuchsia)]/20 to-transparent text-white rounded-2xl border border-[var(--color-brand-fuchsia)]/30 relative overflow-hidden">
                                                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--color-brand-fuchsia)] rounded-full blur-3xl opacity-20"></div>
                                                        <div className="text-xs text-[var(--color-brand-fuchsia)] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-fuchsia)] animate-pulse"></div>
                                                            Pro Tier Active
                                                        </div>
                                                        <div className="font-heading font-bold text-3xl mb-2 tracking-tight">Priority Access</div>
                                                        <div className="text-sm text-white/50">Wait times reduced by 40%</div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="flex-1 p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between">
                                                            <span className="block text-[32px] font-heading font-black text-white">12</span>
                                                            <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest mt-2">Active<br />Vehicles</span>
                                                        </div>
                                                        <div className="flex-1 p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between">
                                                            <span className="block text-[32px] font-heading font-black text-[var(--color-brand-fuchsia)]">0</span>
                                                            <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest mt-2">Est. Wait<br />(min)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {i === 3 && (
                                                <div className="flex-1 flex flex-col gap-4">
                                                    <div className="w-full h-40 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-2xl flex flex-col justify-end text-left p-5 relative overflow-hidden border border-white/10">
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                                        <div className="relative z-10">
                                                            <span className="font-heading font-bold text-xl leading-tight block mb-1">Downtown Hub</span>
                                                            <span className="text-[var(--color-brand-fuchsia)] font-bold text-xs uppercase tracking-widest">3 Partners Nearby</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {[
                                                            { name: 'Blue Bottle Coffee', perk: '10% Off' },
                                                            { name: 'Sweetgreen', perk: '$5 Credit' },
                                                            { name: 'Erewhon', perk: 'VIP Entrance' }
                                                        ].map((partner, j) => (
                                                            <div key={j} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">{partner.name[0]}</div>
                                                                    <span className="font-bold text-sm">{partner.name}</span>
                                                                </div>
                                                                <span className="text-[var(--color-brand-fuchsia)] font-bold text-xs">{partner.perk}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}

            </div>

            <div className="absolute bottom-0 left-0 w-full bg-[var(--color-brand-violet)]/90 backdrop-blur-xl z-20 py-8 border-t border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/80 font-medium max-w-md text-sm lg:text-base border-l-[3px] border-[var(--color-brand-fuchsia)] pl-6">
                        Rewards you actually want, UX that actually works, and a network you can trust.
                    </p>
                    <div className="flex w-full md:w-auto h-14">
                        <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-white/5 border border-white/20 text-white px-6 h-full outline-none w-full md:w-64 font-bold tracking-widest text-xs placeholder-white/30 focus:border-[var(--color-brand-fuchsia)] transition-colors rounded-l-md" />
                        <button className="bg-[var(--color-brand-fuchsia)] text-white font-bold px-8 h-full uppercase tracking-widest text-xs hover:bg-white hover:text-[var(--color-brand-violet)] transition-colors rounded-r-md">
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
