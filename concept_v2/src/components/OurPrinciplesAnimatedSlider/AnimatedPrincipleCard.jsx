import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * AnimatedPrincipleCard — scroll-driven expanding card
 *
 * Modified for fluid responsiveness:
 * Width and aspect-ratio are animated via CSS custom properties.
 * On desktop they scale as we scroll. On mobile, the CSS ignores the custom
 * properties and enforces a 100% width and 4:3 aspect ratio.
 */
export default function AnimatedPrincipleCard({ number, title, description, imageSrc }) {
    const cardRef = useRef(null);

    // Track *this* card's scroll position relative to the viewport.
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start 1', 'start 0'],
    });

    // Animated values — passed as CSS custom properties
    // Instead of fixed pixels, we use percentages for width and a ratio for height.
    // Equivalent of 410px -> 845px out of max ~1280px is roughly 32% to 66%.
    const dynamicWidth = useTransform(scrollYProgress, [0, 1], ['32%', '66%']);

    // Equivalent Aspect Ratios:
    // Compact: 410 / 204 ≈ 2.01
    // Expanded: 845 / 381 ≈ 2.21
    const dynamicAspect = useTransform(scrollYProgress, [0, 1], [410 / 204, 845 / 381]);

    return (
        <motion.div
            ref={cardRef}
            className="principle-acard"
        // Card height is now natural, dictated by content & image
        >
            {/* Text column */}
            <div className="principle-acard__text">
                <div className="principle-acard__header">
                    <p className="principle-acard__number">{number}</p>
                    <p className="principle-acard__title">{title}</p>
                </div>
                <p className="principle-acard__description">{description}</p>
            </div>

            {/* Image column — animated via CSS variables */}
            <motion.div
                className="principle-acard__image-wrapper"
                style={{
                    '--dynamic-width': dynamicWidth,
                    '--dynamic-aspect': dynamicAspect,
                }}
            >
                <img
                    className="principle-acard__image"
                    src={imageSrc}
                    alt={title}
                />
            </motion.div>
        </motion.div>
    );
}
