import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedLogos from './components/TrustedLogos';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Stats from './components/Stats';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import BookCall from './components/BookCall';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">
          <Hero />
          <SectionDivider />
          <TrustedLogos />
          <SectionDivider />
          <WhoWeAre />
          <SectionDivider />
          <WhatWeDo />
          <SectionDivider />
          <Stats />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <Team />
          <SectionDivider />
          <WhyUs />
          <SectionDivider />
          <FAQ />
          <SectionDivider />
          <BookCall />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
