import { motion } from 'framer-motion';
import './testimonials.css';

const Testimonials = () => {
  const testimonials1 = [
    {
      name: 'Aditya Farrad',
      title: 'CEO Framed Media',
      text: 'VCMedia Labs is exceptionally talented at developing content for social media and websites. As a client, I rarely had to send Sushrut\'s work back to him for revisions or corrections because of his ability to turn out quality copy the first time.'
    },
    {
      name: 'Patrick Campbell',
      title: 'CEO of ProfitWell\n(profitwell.com)',
      text: 'VCMedia\'s work was nothing short of phenomenal. In just 2 months, they brought us over 500 qualified leads. Their deep understanding of our business and laser-focused approach made all the difference. Our team is thrilled with the results.'
    },
    {
      name: 'Des Traynor',
      title: 'Co-Founder of Intercom\n(intercom.com)',
      text: 'VCMedia\'s ability to drive results is unmatched. We saw 50 conversions in just 1 month, thanks to their precision-targeted lead generation. Their insights into our audience were spot on, leading to a noticeable boost in our bottom'
    },
    {
      name: 'Wade Foster',
      title: 'CEO of Pipedream\n(pipedream.com)',
      text: 'VCMedia Labs is a master at combining lead generation with branding. They didn\'t just help us bring in leads; they transformed our brand\'s credibility and set us on a path to scale. Their strategies are innovative, and the impact was'
    },
    {
      name: 'David Cancel',
      title: 'CEO of Drift\n(drift.com)',
      text: 'Partnering with VC Media Labs was a game-changer for Drift. The quality of leads they brought in was exceptional, and their data-driven approach made the entire process seamless. We\'ve never been this confident in our outreach.'
    }
  ];

  const testimonials2 = [
    {
      name: 'Mathilde Collin',
      title: 'CEO of Front (front.com)',
      text: 'VCMedia has a unique ability to attract the right kind of attention. Their lead generation efforts brought in high-quality traffic, which converted far better than we expected. We saw a noticeable improvement in just a few'
    },
    {
      name: 'Alex MacCaw',
      title: 'CEO of Clearbit (clearbit.com)',
      text: 'Working with VC Media Labs was a breath of fresh air. Their understanding of the SaaS landscape is unparalleled. They not only delivered top-notch leads but also provided strategic insights that have been instrumental in our'
    },
    {
      name: 'Jay Simons',
      title: 'President of Atlassian (atlassian.com)',
      text: 'VCMedia\'s approach to lead generation and branding is both innovative and effective. Our customer acquisition costs dropped by 25% after implementing their strategies. They\'re an asset to any team looking to grow.'
    },
    {
      name: 'Christian Owens',
      title: 'CEO of Paddle (paddle.com)',
      text: 'VCMedia Labs helped us rethink our approach to branding and lead generation. Their strategies were creative, data-driven, and most importantly, they worked. We\'ve scaled our business to new heights with their'
    },
    {
      name: 'David Darmanin',
      title: 'CEO of Hotjar (hotjar.com)',
      text: 'VCMedia Labs is a powerhouse when it comes to lead generation. Their targeted strategies resulted in a 40% increase in qualified leads within the first month. Their branding advice also set us on a trajectory for long-term'
    }
  ];

  return (
    <section id="testimonials-section" className="testimonials-section py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <motion.h2 
          className="text-[2rem] md:text-[2.8rem] font-black text-center mb-8 md:mb-12 tracking-[1px] text-[#111]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What our clients say
        </motion.h2>
      </div>

      <div className="marquee-container">
        {/* First Row - Moving Right */}
        <div className="relative">
          <div className="flex gap-4 md:gap-8 animate-marquee-right">
            {[...testimonials1, ...testimonials1].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white rounded-2xl p-4 md:p-8 shadow-soft border-2 border-[#dfbf8b] min-w-[280px] md:min-w-[400px] max-w-[280px] md:max-w-[400px] hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-[0.9rem] md:text-[1.08rem] leading-[1.6] text-[#111] mb-4">{testimonial.text}</div>
                <div className="font-bold text-[1rem] md:text-[1.18rem] text-[#111]">{testimonial.name}</div>
                <div className="text-[0.8rem] md:text-[0.98rem] text-[#444] italic whitespace-pre-line">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative mt-4 md:mt-8">
          <div className="flex gap-4 md:gap-8 animate-marquee-left">
            {[...testimonials2, ...testimonials2].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white rounded-2xl p-4 md:p-8 shadow-soft border-2 border-[#dfbf8b] min-w-[280px] md:min-w-[400px] max-w-[280px] md:max-w-[400px] hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-[0.9rem] md:text-[1.08rem] leading-[1.6] text-[#111] mb-4">{testimonial.text}</div>
                <div className="font-bold text-[1rem] md:text-[1.18rem] text-[#111]">{testimonial.name}</div>
                <div className="text-[0.8rem] md:text-[0.98rem] text-[#444] italic whitespace-pre-line">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 