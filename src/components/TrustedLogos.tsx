import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TrustedLogos = () => {
  const logos = [
    '/1718870553007.jpeg',
    '/Logo-Bito-Black-cropped.svg',
    '/images.png',
    '/RevSolutions.png',
    '/logo_full.png',
    '/fountane_logo.jpeg',
    '/hutte_io_logo.jpeg',
    '/screenshot1.png',
    '/screenshot2.png'
  ];

  return (
    <section className="trusted-logos py-16 bg-white">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Trusted by the industry leaders
      </motion.h2>

      <div className="logo-container overflow-hidden relative">
        <div className="logo-row flex items-center gap-16 animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => {
            const isLarge = [
              '/fountane_logo.jpeg',
              '/hutte_io_logo.jpeg',
              '/screenshot1.png',
              '/screenshot2.png',
              '/images.png'
            ].includes(logo);
            return (
              <motion.img
                key={index}
                src={logo}
                alt="Company logo"
                className={`object-contain transition-all duration-300${isLarge ? ' logo-large' : ' h-12 w-auto'}`}
                style={isLarge ? { height: 97, width: 'auto' } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            );
          })}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => {
            const isLarge = [
              '/fountane_logo.jpeg',
              '/hutte_io_logo.jpeg',
              '/screenshot1.png',
              '/screenshot2.png'
            ].includes(logo);
            return (
              <motion.img
                key={`duplicate-${index}`}
                src={logo}
                alt="Company logo"
                className={`object-contain transition-all duration-300${isLarge ? ' logo-large' : ' h-12 w-auto'}`}
                style={isLarge ? { height: 97, width: 'auto' } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos; 