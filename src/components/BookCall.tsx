import { motion } from 'framer-motion';

const BookCall = () => {
  return (
    <section className="book-call-section py-12" id="book-call-section">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="book-call-heading text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Book a <span className="highlight-gold">free discovery call</span>
        </motion.h2>
        <div className="calendly-embed-container max-w-[63.525rem] mx-auto rounded-xl overflow-hidden shadow-soft border-[1.5px] border-[#dfbf8b]">
          <iframe 
            src="https://calendly.com/vcmedialabs/30min" 
            frameBorder="0" 
            allowFullScreen
            className="w-full min-h-[600px] bg-white"
            title="Calendly Booking"
          />
        </div>
      </div>
    </section>
  );
};

export default BookCall; 
