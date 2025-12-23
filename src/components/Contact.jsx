import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: serviceParam || '',
    message: ''
  });

  // Update subject when service parameter changes
  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        subject: serviceParam
      }));
    }
  }, [serviceParam]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ready to strengthen your security posture? Contact our certified professionals for a comprehensive consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-text-secondary mb-8">
                Connect with us for professional cybersecurity services. Our team is ready to discuss your security requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-gray-800 hover:border-accent transition-colors">
                <div className="p-3 bg-primary rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href="tel:+919362012339" className="text-text-secondary hover:text-accent transition-colors">
                    +91 93620 12339
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-gray-800 hover:border-accent transition-colors">
                <div className="p-3 bg-primary rounded-lg">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:info@hackuptechnology.com" className="text-text-secondary hover:text-accent transition-colors">
                    info@hackuptechnology.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-gray-800 hover:border-accent transition-colors">
                <div className="p-3 bg-primary rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <a href="https://maps.app.goo.gl/qJPh3L2kF6TfJDUHA" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    No.4, First Street, Sri Venkatesapuram, Ganapathy, Coimbatore - 641006.
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-primary-light rounded-lg border border-gray-800">
              <h4 className="text-white font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-text-secondary">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-accent font-semibold">24/7 Incident Response Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-light p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
                <p className="text-accent font-semibold">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
                <p className="text-red-400 font-semibold">Failed to send message. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="+91 01234 56789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-text-secondary" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your security requirements..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-primary px-8 py-3 rounded-lg font-semibold transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-text-secondary text-sm text-center">
                We'll respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
