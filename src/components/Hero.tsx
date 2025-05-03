import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { text: '1000+ MQLs generated', color: 'bg-emerald-50/80 text-emerald-600', xRange: 40, yRange: 20, xDir: 1, yDir: 1, style: { left: '5vw', top: '22vh', leftMobile: '4vw', topMobile: '18vh' } },
    { text: '100M+ impressions', color: 'bg-violet-50/80 text-violet-600', xRange: 40, yRange: 20, xDir: -1, yDir: 1, style: { right: '5vw', top: '28vh', rightMobile: '4vw', topMobile: '28vh' } },
    { text: '$200K+ pipeline generated', color: 'bg-amber-50/80 text-amber-600', xRange: 30, yRange: 20, xDir: 1, yDir: -1, style: { right: '10vw', bottom: '22vh', rightMobile: '8vw', bottomMobile: '18vh' } },
    { text: '17 founder-led brands built', color: 'bg-blue-50/80 text-blue-600', xRange: 30, yRange: 20, xDir: -1, yDir: -1, style: { left: '10vw', bottom: '28vh', leftMobile: '8vw', bottomMobile: '28vh' } }
  ];

  return (
    <section className="min-h-[70vh] w-screen relative overflow-hidden flex flex-col items-center pb-0 mb-0" style={{paddingBottom: '0', marginBottom: '0'}}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-70"
        style={{
          background: `
            repeating-linear-gradient(
              to right,
              rgba(180,180,180,0.13) 0px,
              rgba(180,180,180,0.13) 1px,
              transparent 1px,
              transparent 80px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(180,180,180,0.13) 0px,
              rgba(180,180,180,0.13) 1px,
              transparent 1px,
              transparent 80px
            )
          `,
          transform: 'perspective(900px) rotateX(18deg) scaleY(1.2)'
        }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[70vh] relative z-[2] text-center w-full pt-8">
        <motion.h1 
          className="text-[1.4rem] xs:text-[1.6rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.3rem] font-semibold mb-4 mt-2 leading-[1.13] tracking-[-1px] text-[#111] mx-auto whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We help tech startups turn{' '}
          <span className="text-[#dfbf8b] underline decoration-[#dfbf8b] decoration-[1px] underline-offset-4">
            content
          </span>
          <br />
          marketing into predictable
          <br />
          <span className="text-[#dfbf8b] underline decoration-[#dfbf8b] decoration-[1px] underline-offset-4">
            MQLs and SQLs
          </span>
          .
        </motion.h1>

        <motion.p 
          className="text-[0.95rem] xs:text-[1.05rem] sm:text-[1.1rem] md:text-[1.25rem] text-[#111] mt-3 md:mt-6 mb-6 md:mb-10 max-w-[95vw] sm:max-w-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Use our expertise in high-converting marketing strategies to build your brand, scale qualified leads pipeline, and grow your business.
        </motion.p>

        <motion.a
          href="#book-call-section"
          className="bg-[#dfbf8b] text-[#111] px-6 py-[0.8em] rounded-[8px] font-bold text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] no-underline shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-colors duration-200 inline-block mt-2 hover:bg-[#e9d6b2]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Book a discovery call
        </motion.a>

        <motion.div 
          className="relative mt-[18px] font-['Caveat',cursive] text-[1.1rem] text-[#111] flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>Your growth starts here</span>
          <div className="w-[60px] h-0 border-b-2 border-[#111] rotate-[-10deg] translate-y-2 mt-0.5" />
        </motion.div>

        <div className="hidden lg:block">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.text}
              className={`absolute ${stat.color} px-6 py-2 rounded-full z-10`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: mousePosition.x * stat.xRange * stat.xDir,
                y: mousePosition.y * stat.yRange * stat.yDir
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.8 + index * 0.2 },
                x: { type: "spring", stiffness: 50 },
                y: { type: "spring", stiffness: 50 }
              }}
              style={stat.style}
            >
              <p className="font-medium text-sm whitespace-nowrap">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 