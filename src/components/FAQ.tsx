import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Our systems are tailored for tech businesses and founders looking to build a legitimate brand and generate revenue.'
  },
  {
    q: 'What is the timeline of results?',
    a: 'All of our clients see results within the first 3–4 months (Getting viral content, inbound leads, and qualified meetings).'
  },
  {
    q: 'Is there any guarantee?',
    a: "If we don't get you results, we work for free until you get there. All the backend systems are covered by us."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section py-20">
      <div className="container mx-auto px-4">
        <div className="faq-header text-center mb-12">
          <h2 className="faq-title text-3xl font-bold mb-4">Popular <span className="faq-highlight highlight">FAQs</span></h2>
          <div className="faq-desc text-gray-600 text-lg">Have question? We got answers. Here are the most frequently asked questions.</div>
        </div>
        <div className="faq-list max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="faq-row hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faq-q flex items-center justify-between">
                <span>{faq.q}</span>
                <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openIndex === i && (
                <motion.div
                  className="faq-a mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 