import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * AnimatedPrincipleCard — scroll-driven expanding card
 *
 * Behaviour (ref: q-industrial.com):
 *   - Default state: image wrapper is 410px wide, card height ~252px
 *   - As the card scrolls into the top 30% of viewport the image wrapper
 *     expands to 845px and its height grows to 381px.
 *   - Card height animates from 252px compact to ~429px expanded.
 *
 * Figma dimensions:
 *   Compact:  card h=252px, image 410×(full height)
 *   Expanded: image 845×381px
 */
export default function AnimatedPrincipleCard({ number, title, description, imageSrc }) {
    const cardRef = useRef(null);

    // Track *this* card's scroll position relative to the viewport.
    // offset: ['start 1', 'start 0']
    //   scrollYProgress = 0 → top of card is at the BOTTOM of viewport (card just entered)
    //   scrollYProgress = 1 → top of card is at the TOP of viewport (fully expanded)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        // 'start 0' → 100% width when the top of the card touches the top of the viewport
        offset: ['start 1', 'start 0'],
    });

    // Animated values — compact → expanded
    const imageWidth = useTransform(scrollYProgress, [0, 1], [410, 845]);
    const imageHeight = useTransform(scrollYProgress, [0, 1], [204, 381]);
    const cardHeight = useTransform(scrollYProgress, [0, 1], [252, 429]);

    return (
        <motion.div
            ref={cardRef}
            className="principle-acard"
            style={{ height: cardHeight }}
        >
            {/* Text column */}
            <div className="principle-acard__text">
                <div className="principle-acard__header">
                    <p className="principle-acard__number">{number}</p>
                    <p className="principle-acard__title">{title}</p>
                </div>
                <p className="principle-acard__description">{description}</p>
            </div>

            {/* Image column — animated */}
            <motion.div
                className="principle-acard__image-wrapper"
                style={{
                    width: imageWidth,
                    height: imageHeight,
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
