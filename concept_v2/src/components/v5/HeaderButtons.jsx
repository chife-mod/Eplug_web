import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconDeviceMobileCharging, IconMail } from '@tabler/icons-react';

const HeaderButtons = () => {
    // Define out tabs with exact naming from Figma
    const tabs = [
        { id: 'app', label: 'App', Icon: IconDeviceMobileCharging },
        { id: 'contact', label: 'Contact Us', Icon: IconMail }
    ];

    // We set "contact" as default to match the Figma "highlighted" state, 
    // but let's make it track hover. If not hovered, it stays on 'contact'.
    const [hoveredTab, setHoveredTab] = useState('contact');

    return (
        <div
            className="flex items-center justify-center p-[4px] gap-[4px] bg-white/40 backdrop-blur-[10px] rounded-[12px] shadow-sm border border-white/20"
            onMouseLeave={() => setHoveredTab('contact')}
        >
            {tabs.map((tab) => {
                const isActive = hoveredTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onMouseEnter={() => setHoveredTab(tab.id)}
                        // Exact size and padding from Figma: h-[48px], pl-[16px], pr-[24px]
                        className="relative flex items-center justify-center gap-[8px] pl-[16px] pr-[24px] h-[48px] rounded-[8px] focus:outline-none"
                    >
                        {/* The sliding background pill across tabs */}
                        {isActive && (
                            <motion.div
                                layoutId="header-active-pill"
                                className="absolute inset-0 bg-[#FF00C5] rounded-[8px]"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }}
                            />
                        )}

                        {/* Front Icon & Text Container */}
                        <div className="relative z-10 flex items-center gap-[8px]">
                            <tab.Icon
                                size={24}
                                stroke={1.5}
                                className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#0c0c0c]'
                                    }`}
                            />
                            <span
                                className={`font-['Montserrat',sans-serif] font-medium text-[16px] leading-[1.54] tracking-[0.16px] whitespace-nowrap transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#0c0c0c]'
                                    }`}
                            >
                                {tab.label}
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default HeaderButtons;
