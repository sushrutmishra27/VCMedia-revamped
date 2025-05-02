import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section className="py-12" id="who-we-are-section">
      <motion.h2 
        className="text-[2.5rem] font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About us
      </motion.h2>

      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-12 bg-[#F6E6D5] rounded-[18px] p-10 border-[1.5px] border-[#dfbf8b] hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:w-[420px] max-w-[90vw]">
            <div className="rounded-[18px] overflow-hidden border-[1.5px] border-[#dfbf8b] shadow-[0_2px_12px_rgba(223,191,139,0.10)]">
              <img 
                src="/photo123.png" 
                alt="Growth Architects at work" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-[540px] text-[1.18rem] leading-[1.7]">
            <h3 className="text-[2rem] font-bold mb-5">
              Growth Architects
            </h3>
            
            <div className="space-y-5">
              <p>
                We call ourselves Growth Architects.
              </p>

              <p>
                Think of us as the mechanics for your startup's growth machine: we slot together branding & content marketing, allbound lead generation and go-to-market strategy, then fine-tune every part until leads flow and launches land.
              </p>

              <p>
                We sweat the details behind the scenes so you don't have to.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre; 