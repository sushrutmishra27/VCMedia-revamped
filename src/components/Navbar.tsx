import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.03)]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center py-4">
            <motion.a 
              href="/" 
              className="flex items-center gap-4 justify-self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/logo.png" alt="VCMedia Labs" className="h-12 w-12 object-contain" />
              <span className="font-bold text-[1.3rem] tracking-[1px] text-[#111]">VCMedia Labs</span>
            </motion.a>

            <div className="hidden md:flex gap-[2.2rem] items-center justify-self-center">
              <a href="#who-we-are-section" className="text-[1.08rem] font-medium text-[#111] hover:text-[#dfbf8b] transition-colors">
                About
              </a>
              <a href="#services-section" className="text-[1.08rem] font-medium text-[#111] hover:text-[#dfbf8b] transition-colors">
                Services
              </a>
              <a href="#testimonials-section" className="text-[1.08rem] font-medium text-[#111] hover:text-[#dfbf8b] transition-colors">
                Testimonials
              </a>
            </div>

            <div className="justify-self-end">
              <a 
                href="#book-call-section" 
                className="hidden md:inline-block bg-[#dfbf8b] text-[#111] px-6 py-[0.7em] rounded-lg font-semibold text-[1.08rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#e9d6b2] transition-colors"
              >
                Book a Call
              </a>
              <button 
                className="md:hidden flex flex-col gap-[6px] p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-[2px] bg-[#111] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-[2px] bg-[#111] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-[2px] bg-[#111] transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white p-6 flex flex-col gap-6"
              onClick={e => e.stopPropagation()}
            >
              <a 
                href="#who-we-are-section" 
                className="text-lg font-medium text-[#111] hover:text-[#dfbf8b] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services-section" 
                className="text-lg font-medium text-[#111] hover:text-[#dfbf8b] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials-section" 
                className="text-lg font-medium text-[#111] hover:text-[#dfbf8b] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#book-call-section" 
                className="text-lg font-medium text-[#111] hover:text-[#dfbf8b] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 