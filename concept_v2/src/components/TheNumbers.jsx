import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheNumbers() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const counters = gsap.utils.toArray('.counter');
            counters.forEach((counter) => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const hasPlus = counter.getAttribute('data-plus') === 'true';
                const hasPercent = counter.getAttribute('data-percent') === 'true';

                gsap.to(counter, {
                    innerHTML: target,
                    duration: 1.5,
                    ease: 'power2.out',
                    snap: { innerHTML: hasPercent ? 0.1 : 1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    },
                    onUpdate: function () {
                        let val = parseFloat(this.targets()[0].innerHTML);
                        // format 2400 to 2,400 etc
                        let formatted = val;
                        if (!hasPercent) formatted = Math.floor(val).toLocaleString();
                        else formatted = val.toFixed(1);

                        this.targets()[0].innerHTML = formatted + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-[var(--color-brand-violet)] py-32 px-6 lg:px-12 font-montserrat">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-[var(--color-brand-fuchsia)] pt-16 relative">

                    <div className="flex flex-col">
                        <span className="counter text-[64px] lg:text-[80px] font-bold text-white tracking-tighter" data-target="2400" data-plus="true">0</span>
                        <span className="text-[var(--color-brand-fuchsia)] text-xl mt-4 font-normal max-w-[200px]">charging points</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="counter text-[64px] lg:text-[80px] font-bold text-white tracking-tighter" data-target="40" data-plus="true">0</span>
                        <span className="text-[var(--color-brand-fuchsia)] text-xl mt-4 font-normal max-w-[200px]">cities connected</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[64px] lg:text-[80px] font-bold text-white tracking-tighter"><span className="counter" data-target="22">0</span> min</span>
                        <span className="text-[var(--color-brand-fuchsia)] text-xl mt-4 font-normal max-w-[200px]">avg charge time</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="counter text-[64px] lg:text-[80px] font-bold text-white tracking-tighter" data-target="98.6" data-percent="true">0</span>
                        <span className="text-[var(--color-brand-fuchsia)] text-xl mt-4 font-normal max-w-[200px]">network uptime</span>
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-[2px] bg-[var(--color-brand-fuchsia)] shadow-[0_0_15px_rgba(255,0,197,1)]" />
                </div>
            </div>
        </section>
    );
}
