import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '📝',
      title: 'Content marketing',
      desc: 'We create high-converting content that builds your brand, attracts your ideal customers, and turns them into qualified leads.'
    },
    {
      icon: '🎯',
      title: 'Founder branding',
      desc: 'We help you build a strong personal brand through thought leadership content, social media presence, and strategic positioning.'
    },
    {
      icon: '📈',
      title: 'Allbound lead generation',
      desc: 'We layer SEO, paid ads, content syndication, cold email and LinkedIn outreach to keep your pipeline overflowing'
    },
    {
      icon: '🚀',
      title: 'Go-To-Market strategy',
      desc: 'We analyze your market and competitors, define your positioning, pick the highest-impact channels, and set clear milestones and dashboards so you always know you\'re on track.'
    },
    {
      icon: '👥',
      title: 'Developer community',
      desc: 'We create tutorials, code samples, and deep-dive articles, host forums and virtual events, and nurture relationships so developers become your biggest advocates.'
    },
    {
      icon: '📊',
      title: 'Growth analytics',
      desc: 'We set up tracking, build dashboards, and analyze data to optimize your marketing funnel and maximize ROI on every channel.'
    }
  ];

  return (
    <section className="py-12" id="services-section">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-[700px] mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] font-bold mb-6">Our Services</h2>
          <p className="text-[1.18rem] text-[#444]">
            We offer a comprehensive suite of services designed to help tech startups grow their business through effective content marketing and lead generation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-[0_4px_24px_0_rgba(223,191,139,0.18),_0_1.5px_8px_0_rgba(0,0,0,0.07)] border-[1.5px] border-[#dfbf8b]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                boxShadow: "0 20px 40px rgba(223,191,139,0.3)",
                borderColor: "#e9d6b2"
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center text-[1.5rem] bg-[#f8f8f8] rounded-lg flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.5rem] font-bold mb-3 text-[#111]">{service.title}</h3>
                  <p className="text-[1.05rem] text-[#444] leading-[1.6]">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#book-call-section" 
            className="inline-block bg-[#dfbf8b] text-[#111] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e9d6b2] transition-colors"
          >
            Book a Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 