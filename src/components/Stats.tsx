import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const Stats = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (statsAnimated) return;
      const statsSection = document.querySelector('.stats-section');
      if (!statsSection) return;
      const rect = statsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        setStatsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsAnimated]);

  const stats = [
    { number: 150000000, label: 'Views generated' },
    { number: 100000, label: 'Followers earned' },
    { number: 500, label: 'Calls booked' }
  ];

  const AnimatedNumber = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      if (statsAnimated) {
        const controls = animate(count, value, {
          duration: 2,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }, [statsAnimated, count, value]);

    return (
      <motion.span>
        {useTransform(rounded, (latest) => {
          if (latest >= 1000000) {
            return `${Math.round(latest / 1000000)}M+`;
          } else if (latest >= 1000) {
            return `${Math.round(latest / 1000)}K+`;
          } else {
            return `${latest}+`;
          }
        })}
      </motion.span>
    );
  };

  return (
    <section className="stats-section py-12">
      <div className="container mx-auto px-4">
        <div className="stats-row flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-block flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="stat-box bg-white rounded-2xl p-6 border-2 border-[#dfbf8b] shadow-soft hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                <div className="stat-number text-4xl md:text-5xl font-bold text-[#dfbf8b] text-center">
                  {statsAnimated ? (
                    <AnimatedNumber value={stat.number} />
                  ) : (
                    '0'
                  )}
                </div>
              </div>
              <div className="stat-label text-lg text-[#111] mt-4 text-center">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 