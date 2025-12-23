import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ChevronRight, Home } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      
      {/* Page Header */}
      <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #64ffda 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <a href="/" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Home size={16} />
              <span>Home</span>
            </a>
            <ChevronRight size={16} />
            <span className="text-accent">Contact</span>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-accent">Our Team</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Let's discuss how we can help strengthen your cybersecurity posture
            </p>
          </div>
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;
