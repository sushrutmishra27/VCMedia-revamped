import { motion } from 'framer-motion';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sushrut Mishra',
      title: 'Co-founder',
      specialties: 'Branding, content marketing, technical writing',
      linkedin: 'https://linkedin.com/in/sushrutkm',
      twitter: 'https://x.com/sushrutkm',
      image: '/team/sushrut.jpg'
    },
    {
      name: 'Yashika Sharma',
      title: 'Co-founder',
      specialties: 'Lead generation, sales assets, customer acquisition',
      linkedin: 'https://www.linkedin.com/in/yashika-s-15852618b/',
      twitter: 'https://x.com/yayyashika',
      image: '/team/yashika.png'
    }
  ];

  return (
    <section className="team-section py-12">
      <motion.h2 
        className="text-[2.5rem] font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="mr-2">👥</span> Meet the team
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="team-cards grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card bg-white rounded-2xl p-8 shadow-soft border-2 border-[#dfbf8b] hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.title}</p>
                <p className="text-gray-500 text-sm mb-4">{member.specialties}</p>
                <div className="flex gap-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0077b5] text-2xl hover:text-[#005983] transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black text-2xl hover:text-[#dfbf8b] transition-colors"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 