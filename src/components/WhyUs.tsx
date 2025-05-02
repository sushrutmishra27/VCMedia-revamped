import { motion } from 'framer-motion';

const WhyUs = () => {
  const reasons = [
    {
      number: '1.',
      title: 'Unlimited-High Intent Prospecting to book qualified calls',
      description: 'With a qualified team of SDRs, we utilize trigger events to filter the prospects that require your product and services.'
    },
    {
      number: '2.',
      title: 'A transferable system that gets you leads with-or-without us',
      description: 'Our system is designed to be transferable, ensuring you get leads with or without us, making your process seamless and efficient.'
    },
    {
      number: '3.',
      title: 'A hyper-personalised content system to build a personal brand',
      description: 'We offer a hyper-personalized content system to help build your personal brand, making you stand out in your industry.'
    }
  ];

  return (
    <section className="why-us-section py-12">
      <motion.h2 
        className="text-[2.5rem] font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Why us?
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="why-us-cards grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              className="why-us-card bg-white rounded-2xl p-8 shadow-soft relative border-2 border-[#dfbf8b] hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="why-us-number absolute -top-4 -left-4 text-6xl font-bold text-gray-100">
                {reason.number}
              </div>
              <h3 className="why-us-text text-xl font-semibold mb-4 relative z-10">
                {reason.title}
              </h3>
              <p className="why-us-detail text-gray-600 relative z-10">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 