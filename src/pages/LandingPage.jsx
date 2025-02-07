import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';


const LandingPage = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Stats /> 
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;