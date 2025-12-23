import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #64ffda 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={16} />
          <span className="text-accent">Services</span>
        </div>

        {/* Hero Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Enterprise-Grade <span className="text-accent">Cybersecurity</span> Services
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Industry-aligned cybersecurity services delivered by certified professionals. We help organizations achieve measurable improvements in security posture, resilience, and regulatory readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="bg-accent hover:bg-accent-hover text-primary px-8 py-3 rounded-md font-semibold transition-all shadow-lg inline-block text-center"
            >
              Explore Services
            </a>
            <Link 
              to="/contact"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 rounded-md font-semibold transition-all inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
