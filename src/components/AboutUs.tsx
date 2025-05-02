import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-12">
      <motion.h2 
        className="text-[2.5rem] font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About us
      </motion.h2>

      <motion.div 
        className="max-w-[900px] mx-auto flex flex-col lg:flex-row items-start gap-12 bg-[#F6E6D5] rounded-[2rem] p-10 border-[1.5px] border-[#dfbf8b]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="lg:w-[320px]">
          <div className="rounded-[1.5rem] overflow-hidden">
            <img 
              src="/about-illustration.png" 
              alt="Growth Architects at work" 
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        <div className="flex-1 pt-2">
          <h3 className="text-[2rem] font-bold mb-6">
            Growth Architects
          </h3>
          
          <div className="space-y-6 text-[1.25rem] leading-relaxed">
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
    </section>
  );
};

export default AboutUs; 