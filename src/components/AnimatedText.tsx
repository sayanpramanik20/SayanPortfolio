import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      <span style={{ position: 'relative', display: 'inline' }}>
        {chars.map((char, index) => {
          const start = index / chars.length;
          const end = (index + 1) / chars.length;

          return (
            <CharSpan
              key={index}
              char={char}
              start={start}
              end={end}
              scrollYProgress={scrollYProgress}
            />
          );
        })}
      </span>
    </p>
  );
};

interface CharSpanProps {
  char: string;
  start: number;
  end: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const CharSpan: React.FC<CharSpanProps> = ({ char, start, end, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      {/* Invisible placeholder to reserve space */}
      <span style={{ opacity: 0, display: 'inline' }}>{char}</span>
      {/* Animated absolute span */}
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
          display: 'inline',
          whiteSpace: 'pre',
        }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
