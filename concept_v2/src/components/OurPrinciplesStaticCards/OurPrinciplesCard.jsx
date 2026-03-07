import React from 'react';
import './OurPrinciplesCard.css';

// Import the image — path relative to this component
import cityImg from './assets/city-urban.png';

/**
 * OurPrinciplesCard — static card component for the "Our Principles" slider
 * Two variants: Default (compact) and Active (expanded image)
 *
 * Figma node: 491:1561
 * Design tokens from Figma:
 *   - Graphit Black: #0C0C0C
 *   - Electric Purple: #2E0054
 *   - Font: Montserrat (Regular 400, Bold 700)
 */

export function PrincipleCard({ variant = 'default' }) {
    const isActive = variant === 'active';

    return (
        <div className={`principle-card ${isActive ? 'principle-card--active' : 'principle-card--default'}`}>
            {/* Text column */}
            <div className="principle-card__text">
                <div className="principle-card__header">
                    <p className="principle-card__number">01</p>
                    <p className="principle-card__title">Urban-Only</p>
                </div>
                <p className="principle-card__description">
                    We don't build in highway rest areas.
                    <br />
                    Ever. If it's not dense, it's not Eplug.
                </p>
            </div>

            {/* Image column */}
            <div className="principle-card__image-wrapper">
                <img
                    className="principle-card__image"
                    src={cityImg}
                    alt="Urban cityscape at dusk"
                />
            </div>
        </div>
    );
}

/**
 * Demo page showing both states side by side
 */
export default function OurPrinciplesStaticCards() {
    return (
        <div className="principles-demo">
            <div className="principles-demo__container">
                <h2 className="principles-demo__label">Default State</h2>
                <PrincipleCard variant="default" />

                <div className="principles-demo__spacer" />

                <h2 className="principles-demo__label">Active State</h2>
                <PrincipleCard variant="active" />
            </div>
        </div>
    );
}
