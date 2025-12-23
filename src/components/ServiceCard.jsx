import { Target, Shield, Cloud, FileCheck, Network, SearchCheck, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const iconMap = {
  'Penetration Testing Services': Target,
  'Internal Network VA': Shield,
  'Cloud Security Audit & Testing': Cloud,
  'ISO/IEC 27001 Consulting': FileCheck,
  'Firewall & Network Security Audit': Network,
  'Digital Forensics & Incident Response': SearchCheck,
};

const ServiceCard = ({ title, description }) => {
  const IconComponent = iconMap[title] || Shield;
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const serviceId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === serviceId) {
        // Small delay to ensure smooth scroll happens first
        setTimeout(() => {
          setShowPopup(true);
          // Scroll to this card
          const element = document.getElementById(serviceId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          // Auto close popup after 3 seconds
          setTimeout(() => setShowPopup(false), 3000);
        }, 100);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [serviceId]);

  const handleLearnMore = (e) => {
    e.stopPropagation();
    navigate(`/contact?service=${encodeURIComponent(title)}`);
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <div 
      id={serviceId}
      className="group bg-primary-light border border-gray-800 rounded-lg p-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2 relative"
    >
      {/* Popup Modal */}
      {showPopup && (
        <div className="absolute inset-0 bg-accent/95 rounded-lg flex items-center justify-center z-10 animate-fadeIn">
          <div className="text-center px-4">
            <div className="mb-2">
              <IconComponent className="text-primary mx-auto" size={56} />
            </div>
            <h4 className="text-2xl font-bold text-primary">
              {title}
            </h4>
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-primary hover:text-primary-light transition-colors"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
      
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4">
          <div className="inline-flex p-3 bg-primary rounded-lg group-hover:bg-accent/10 transition-colors">
            <IconComponent className="text-accent" size={32} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <button 
          onClick={handleLearnMore}
          className="bg-accent hover:bg-accent-hover text-primary px-6 py-2.5 rounded-md font-semibold transition-all w-full group-hover:shadow-lg"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
