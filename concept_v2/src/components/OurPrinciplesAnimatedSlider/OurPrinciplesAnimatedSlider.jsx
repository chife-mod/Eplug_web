import React from 'react';
import AnimatedPrincipleCard from './AnimatedPrincipleCard';
import './OurPrinciplesAnimatedSlider.css';

// Reuse the city image from static cards
import cityImg from '../OurPrinciplesStaticCards/assets/city-urban.png';

/**
 * OurPrinciplesAnimatedSlider — scroll-driven expanding cards section
 *
 * Figma node: 485:1410
 * Reference animation: q-industrial.com/en-de/services
 *
 * 6 principle cards. As user scrolls, each card's image expands
 * from compact (410 × 204) to full-width (845 × 381).
 */

const PRINCIPLES_DATA = [
    {
        number: '01',
        title: 'Urban-Only',
        description: "We don't build in highway rest areas.\nEver. If it's not dense, it's not Eplug.",
    },
    {
        number: '02',
        title: '100% DC Fast',
        description: 'No Level 2 compromises. 15–25 minutes, always. Speed is infrastructure.',
    },
    {
        number: '03',
        title: 'Driver-First Design',
        description: 'Clean stations. Comfortable spaces. Real amenities. Charging should feel like modern city life, not a gas station.',
    },
    {
        number: '04',
        title: 'Aggressive Deployment',
        description: "We're building faster, denser, and smarter from day one.",
    },
    {
        number: '05',
        title: 'Community Integration',
        description: "We don't drop chargers in empty lots. We partner with retail, property owners, and local businesses to create activated spaces.",
    },
    {
        number: '06',
        title: 'Fleet-Grade Reliability',
        description: "Uber drivers can't afford downtime. Neither can we. 99%+ uptime is the baseline, not the goal.",
    },
];

// Pixel-perfect label icon from Figma (node 487:1467)
// Pink circle with semi-transparent fuchsia background
const LabelIcon = () => (
    <svg
        className="principles-slider__label-icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
    >
        <rect width="16" height="16" rx="8" fill="#FF00C5" fillOpacity="0.2" />
        <circle cx="8" cy="8" r="4" fill="#FF00C5" />
    </svg>
);

export default function OurPrinciplesAnimatedSlider() {
    return (
        <section className="principles-slider">
            <div className="principles-slider__inner">
                {/* Section header */}
                <div className="principles-slider__header">
                    <div className="principles-slider__label">
                        <LabelIcon />
                        <p className="principles-slider__label-text">Our Principles</p>
                    </div>
                    <h2 className="principles-slider__title">
                        How We Build{' '}
                        <span className="principles-slider__title-accent">Different</span>
                    </h2>
                </div>

                {/* Animated cards */}
                <div className="principles-slider__cards">
                    {PRINCIPLES_DATA.map((item) => (
                        <AnimatedPrincipleCard
                            key={item.number}
                            number={item.number}
                            title={item.title}
                            description={item.description}
                            imageSrc={cityImg}
                        />
                    ))}
                </div>

                {/* Extra scroll room so the last card can fully expand */}
                <div className="principles-slider__scroll-spacer" />
            </div>
        </section>
    );
}
