import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type ValidMotionTag = 'div' | 'span' | 'section' | 'nav' | 'ul' | 'li' | 'p' | 'h1' | 'h2' | 'h3' | 'article' | 'header' | 'footer';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: ValidMotionTag;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px', amount: 0 }}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
