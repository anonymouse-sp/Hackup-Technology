import { Shield, Phone, Mail, MapPin, Facebook, Twitter as X, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-primary-light border-t border-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="text-accent" size={32} />
              <span className="text-xl font-bold text-white">Hackup Technology</span>
            </Link>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Delivering enterprise-grade cybersecurity services with accuracy, confidentiality, and legal compliance. Certified professionals committed to real-world risk reduction.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/hackuptechnology/" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-md hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/hackuptech" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-md hover:bg-accent hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://in.linkedin.com/company/hackuptechnology" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-md hover:bg-accent hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@Dineshjoy" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-md hover:bg-accent hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Penetration Testing', id: 'penetration-testing-services' },
                { name: 'Internal Network VA', id: 'internal-network-va' },
                { name: 'Cloud Security Audit', id: 'cloud-security-audit-testing' },
                { name: 'ISO 27001 Consulting', id: 'iso-iec-27001-consulting' },
                { name: 'Firewall Security Audit', id: 'firewall-network-security-audit' },
                { name: 'Digital Forensics & IR', id: 'digital-forensics-incident-response' }
              ].map((service) => (
                <li key={service.id}>
                  <a href={`/services#${service.id}`} className="text-text-secondary hover:text-accent transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-secondary">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/qJPh3L2kF6TfJDUHA" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  No.4, First Street, Sri Venkatesapuram, Ganapathy, Coimbatore - 641006.
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-secondary">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+919362012339" className="hover:text-accent transition-colors">
                  +91 93620 12339
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-secondary">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:info@hackuptechnology.com" className="hover:text-accent transition-colors">
                  info@hackuptechnology.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Hackup Technology Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
