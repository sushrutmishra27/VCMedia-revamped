import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/company/vcmedialabs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfbf8b] transition-colors" aria-label="LinkedIn">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" fill="currentColor"/></svg>
          </a>
          <a href="https://twitter.com/vcmedialabs" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfbf8b] transition-colors" aria-label="Twitter">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 0 0-.66 2.48c0 1.71.87 3.22 2.19 4.1-.8-.03-1.56-.25-2.22-.62v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.84.17-1.28.17-.31 0-.61-.03-.9-.08.61 1.91 2.39 3.3 4.5 3.34a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a10.1 10.1 0 0 0 2.46-2.57z" fill="currentColor"/></svg>
          </a>
          <a href="mailto:hello@vcmedialabs.com" className="hover:text-[#dfbf8b] transition-colors" aria-label="Email">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.99c.01-.01.01-.02.02-.03.2-.21.47-.34.77-.34h22.44c.3 0 .57.13.77.34.01.01.01.02.02.03l-11.99 7.99zm11.99-6.07v12.01c0 .55-.45 1-1 1h-22c-.55 0-1-.45-1-1v-12.01l11.99 7.99 11.99-7.99z" fill="currentColor"/></svg>
          </a>
        </div>
        <div className="text-[#dfbf8b] text-2xl font-black font-caveat tracking-wide">I vibe coded this website in 70 minutes. - Sushrut</div>
        <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} VCMedia Labs. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer; 