import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const features = [
    { 
      icon: '💡',
      desc: 'MQLs flood your top of funnel without endless outreach'
    },
    { 
      icon: '🎯',
      desc: 'Your founder story opens doors to bigger business opportunities'
    },
    { 
      icon: '🚀',
      desc: 'SQLs convert at record pace into paying customers'
    }
  ];

  return (
    <section className="what-we-do py-12">
      <div className="container mx-auto px-4">
        <div className="what-we-do__header text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="what-we-do__tag inline-block bg-[#dfbf8b] text-[#111] font-semibold tracking-wider px-6 py-2 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHAT WE DO
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We engineer your growth engine from{' '}
            <span className="highlight">content marketing</span> to{' '}
            <span className="highlight">SQLs</span>
          </motion.h2>

          <motion.p 
            className="what-we-do__sub text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft content marketing strategies, build magnetic founder brands & optimize lead-generation funnels, so:
          </motion.p>
        </div>

        <div className="what-we-do__features grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card bg-white rounded-2xl p-8 border-2 border-[#dfbf8b] shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -4,
                boxShadow: "0 8px 30px rgba(223,191,139,0.25)"
              }}
              transition={{ 
                duration: 0.05,
                ease: "linear"
              }}
              viewport={{ once: true }}
            >
              <div className="feature-icon text-4xl mb-4">{feature.icon}</div>
              <div className="feature-desc text-lg text-gray-800 font-medium">{feature.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 