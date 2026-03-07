import React, { useState } from 'react';
import './TeamMemberCard.css';

/**
 * TeamMemberCard — editorial person card
 * Layout: large name + role above a rounded photo with a "+" expand button
 *
 * Props:
 *   firstName  {string}  — first name (renders on its own line)
 *   lastName   {string}  — last name (renders on its own line)
 *   role       {string}  — role/title shown in small caps below name
 *   photo      {string}  — image src (optional; falls back to gradient placeholder)
 *   alt        {string}  — alt text for photo
 *   onExpand   {fn}      — callback when "+" is clicked
 */
export function TeamMemberCard({
    firstName = 'Alex',
    lastName  = 'Morgan',
    role      = 'CO-CEO, CHIEF STRATEGY OFFICER',
    photo     = null,
    alt       = '',
    onExpand  = null,
}) {
    const [pressed, setPressed] = useState(false);

    const handleExpand = () => {
        setPressed(true);
        setTimeout(() => setPressed(false), 200);
        onExpand?.();
    };

    return (
        <article className="tmc">
            {/* ── Header: name + role ── */}
            <header className="tmc__header">
                <h2 className="tmc__name">
                    <span className="tmc__name-first">{firstName}</span>
                    <span className="tmc__name-last">{lastName}</span>
                </h2>
                <p className="tmc__role">{role}</p>
            </header>

            {/* ── Photo ── */}
            <div className="tmc__photo-wrap">
                {photo ? (
                    <img className="tmc__photo" src={photo} alt={alt || `${firstName} ${lastName}`} />
                ) : (
                    <div className="tmc__photo tmc__photo--placeholder" aria-hidden="true" />
                )}

                <button
                    className={`tmc__plus${pressed ? ' tmc__plus--pressed' : ''}`}
                    aria-label="View profile"
                    onClick={handleExpand}
                >
                    <span className="tmc__plus-icon">+</span>
                </button>
            </div>
        </article>
    );
}

/**
 * Demo — single card with test content
 */
export default function TeamMemberCardDemo() {
    return (
        <div className="tmc-demo">
            <TeamMemberCard
                firstName="Alex"
                lastName="Morgan"
                role="CO-CEO, CHIEF INVESTMENT OFFICER"
                photo={null}
            />
        </div>
    );
}
