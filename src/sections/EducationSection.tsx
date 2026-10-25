import React from 'react';
import FadeIn from '../components/FadeIn';

const EDUCATION_ITEMS = [
  {
    number: '01',
    name: 'B.TECH IN INFORMATION TECHNOLOGY',
    description:
      "Currently pursuing my Bachelor's degree at the Indian Institute of Engineering Science and Technology (IIEST), Shibpur, building a strong theoretical and practical foundation in software engineering.",
  },
  {
    number: '02',
    name: 'CORE COURSEWORK',
    description:
      'Specializing in foundational computer science subjects, including Data Structures and Algorithms, Automata Theory, Digital Logic and Circuit Design, Signals and Systems and Linear Programming.',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            color: '#0C0C0C',
            fontSize: 'clamp(3rem, 12vw, 160px)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          EDUCATION
        </h2>
      </FadeIn>

      {/* Education list */}
      <div className="max-w-5xl mx-auto">
        {EDUCATION_ITEMS.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  color: '#0C0C0C',
                  lineHeight: 1,
                }}
              >
                {item.number}
              </span>

              {/* Name + description */}
              <div className="flex flex-col gap-2 pt-2 md:pt-4">
                <span
                  className="font-medium uppercase"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                    color: '#0C0C0C',
                  }}
                >
                  {item.name}
                </span>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    color: '#0C0C0C',
                    opacity: 0.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
