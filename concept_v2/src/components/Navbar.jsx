import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import EplugLogo from './EplugLogo';

export default function Navbar() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (scrolled) {
            gsap.to(navRef.current, {
                background: 'rgba(12, 2, 20, 0.85)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                duration: 0.4,
            });
        } else {
            gsap.to(navRef.current, {
                background: 'transparent',
                backdropFilter: 'blur(0px)',
                borderBottom: '1px solid transparent',
                duration: 0.4,
            });
        }
    }, [scrolled]);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 z-50 w-full transition-all border-b border-transparent">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-12 py-6">
                <EplugLogo />

                <ul className="hidden xl:flex items-center gap-10 font-bold text-xs uppercase tracking-widest text-white/50">
                    {['About', 'Network', 'App & Rewards', 'Partners'].map((item) => (
                        <li key={item} className="relative group cursor-pointer hover:text-white transition-colors">
                            <span>{item}</span>
                            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--color-brand-fuchsia)] group-hover:w-full transition-all duration-300 ease-out" />
                        </li>
                    ))}
                </ul>

                <button className="hidden md:block px-6 py-3 border border-white/20 text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[var(--color-brand-violet)] transition-colors">
                    Contact
                </button>
            </div>
        </nav>
    );
}
