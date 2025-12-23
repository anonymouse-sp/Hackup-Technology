import { Phone, Mail, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary-light border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mb-2 sm:mb-0">
            <a href="tel:+919362012339" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+91 93620 12339</span>
            </a>
            <a href="mailto:info@hackuptechnology.com" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
              <Mail size={16} />
              <span>info@hackuptechnology.com</span>
            </a>
            <div className="flex items-center gap-2 text-text-secondary">
              <Clock size={16} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
