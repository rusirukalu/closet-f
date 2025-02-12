import { useEffect, useState } from 'react';
import { ChevronsUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">closetIQ</span>
            </div>
            <p className="text-gray-600">Your personal AI fashion assistant, available 24/7.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-black">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-black">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-black">Terms of Service</a></li>
              <li><a href="#cookies" className="text-gray-600 hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600">&copy; {new Date().getFullYear()} closetIQ. All rights reserved.</p>
        </div>
        
        {isVisible && (
          <div className="fixed bottom-5 right-5">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center p-3 rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"
            > 
              <ChevronsUp strokeWidth={1} absoluteStrokeWidth />
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
