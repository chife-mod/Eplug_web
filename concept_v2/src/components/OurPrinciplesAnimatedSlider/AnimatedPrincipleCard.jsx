import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * AnimatedPrincipleCard — scroll-driven expanding card
 *
 * Desktop: pixel-based animation (410→845px width, 204→381px height).
 *   Card gets overflow:hidden in CSS so image never bleeds past the border.
 * Mobile (≤768px): animation overridden by CSS — stacked layout, 4:3 image.
 */
export default function AnimatedPrincipleCard({ number, title, description, imageSrc }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start 1', 'start 0'],
    });

    // Approved pixel values from Figma
    const imageWidth = useTransform(scrollYProgress, [0, 1], [410, 845]);
    const imageHeight = useTransform(scrollYProgress, [0, 1], [204, 381]);
    const cardHeight = useTransform(scrollYProgress, [0, 1], [252, 429]);

    return (
        <motion.div
            ref={cardRef}
            className="principle-acard"
            style={{ height: cardHeight }}
        >
            {/* Text column — header top, description bottom */}
            <div className="principle-acard__text">
                <div className="principle-acard__header">
                    <p className="principle-acard__number">{number}</p>
                    <p className="principle-acard__title">{title}</p>
                </div>
                <p className="principle-acard__description">{description}</p>
            </div>

            {/* Image column — pixel-animated, clipped by card overflow:hidden */}
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
