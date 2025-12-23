import { useState, useEffect } from 'react';
import { Shield, Target, Eye, CheckCircle, Award, Users, TrendingUp, Lightbulb, Heart, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('expertise-stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setVisibleStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { label: 'Ethical Hacking', percentage: 100, color: 'bg-blue-500' },
    { label: 'Digital Forensics', percentage: 100, color: 'bg-purple-500' },
    { label: 'Threat Intelligence', percentage: 100, color: 'bg-green-500' },
    { label: 'Network Security', percentage: 100, color: 'bg-cyan-500' }
  ];

  const trustBullets = [
    { text: 'Trained 1,00,000+ Students & Professionals', icon: <Users size={24} /> },
    { text: 'Trusted by Police Officials & Corporate Sectors', icon: <Shield size={24} /> },
    { text: 'Specialized Expertise in Cyber Crime Cell Operations', icon: <Target size={24} /> },
    { text: 'Industrial Simulation & Practical Lab Methodology', icon: <Lightbulb size={24} /> }
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section - Company Story */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Make Your Dream Come True &<br />
              <span className="text-accent">Grow With Us</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-text-secondary leading-relaxed">
                Hackup Technology Pvt Ltd is established by qualified professionals dedicated to offering the best in security-related topics. With years of industry experience, we specialize in everything from programming and bug fixing to high-level penetration testing and web design.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-primary-light border border-accent/30 rounded-xl transform hover:scale-105 transition-transform">
              <Shield className="text-accent mb-3" size={48} />
              <h3 className="text-2xl font-bold mb-1">15+</h3>
              <p className="text-text-secondary">Years Experience</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-primary-light border border-accent/30 rounded-xl transform hover:scale-105 transition-transform">
              <Users className="text-accent mb-3" size={48} />
              <h3 className="text-2xl font-bold mb-1">100K+</h3>
              <p className="text-text-secondary">Students Trained</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-primary-light border border-accent/30 rounded-xl transform hover:scale-105 transition-transform">
              <Award className="text-accent mb-3" size={48} />
              <h3 className="text-2xl font-bold mb-1">50+</h3>
              <p className="text-text-secondary">Expert Mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="group bg-primary border border-gray-800 rounded-2xl p-8 hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Eye className="text-accent" size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-accent">Vision</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                To achieve a global reputation as a high-standard, reliable service provider in the Ethical Hacking and Cyber Security field by developing extraordinary talent.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-primary border border-gray-800 rounded-2xl p-8 hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-accent" size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-accent">Mission</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                We aim to foster lifelong learning by creating curiosity in our students, while redefining legacy approaches to access management in today's dynamic threatscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats Section */}
      <section id="expertise-stats" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Cybersecurity Knowledge Can <span className="text-accent">Emerge from Anywhere</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our proficiency is backed by a 100% commitment to specialized domains:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{skill.label}</span>
                  <span className="text-accent font-bold">{skill.percentage}%</span>
                </div>
                <div className="h-4 bg-primary-light rounded-full overflow-hidden border border-gray-800">
                  <div
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                    style={{
                      width: visibleStats ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <Zap size={12} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Expertise Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-primary-light border border-gray-800 rounded-xl p-6 hover:border-accent transition-colors">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-text-secondary">Success Rate</p>
              </div>
            </div>
            <div className="bg-primary-light border border-gray-800 rounded-xl p-6 hover:border-accent transition-colors">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-text-secondary">Support Available</p>
              </div>
            </div>
            <div className="bg-primary-light border border-gray-800 rounded-xl p-6 hover:border-accent transition-colors">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-text-secondary">Industry Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Legacy Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-blue-600/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-accent">15+</span> Years of Cybersecurity Excellence
            </h2>
            <p className="text-xl text-text-secondary">
              Building trust through expertise, innovation, and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trustBullets.map((bullet, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-primary border border-gray-800 rounded-xl p-6 hover:border-accent transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                  {bullet.icon}
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold">{bullet.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary border border-gray-800 rounded-xl">
              <TrendingUp className="text-accent mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-accent mb-1">95%</div>
              <p className="text-sm text-text-secondary">Placement Rate</p>
            </div>
            <div className="text-center p-6 bg-primary border border-gray-800 rounded-xl">
              <Award className="text-accent mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <p className="text-sm text-text-secondary">Certifications</p>
            </div>
            <div className="text-center p-6 bg-primary border border-gray-800 rounded-xl">
              <Users className="text-accent mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-accent mb-1">200+</div>
              <p className="text-sm text-text-secondary">Corporate Clients</p>
            </div>
            <div className="text-center p-6 bg-primary border border-gray-800 rounded-xl">
              <Heart className="text-accent mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-accent mb-1">4.9/5</div>
              <p className="text-sm text-text-secondary">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Our <span className="text-accent">Visionary</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-primary border border-gray-800 rounded-2xl overflow-hidden hover:border-accent transition-colors">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative bg-gradient-to-br from-accent/20 to-blue-600/20 p-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-60 h-60 bg-primary-light rounded-full flex items-center justify-center border-4 border-accent">
                        <Shield className="text-accent" size={120} />
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/20 rounded-full animate-pulse delay-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-accent mb-4">
                    <Award size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">Founder & CEO</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Dinesh Paranthagan</h3>
                  <p className="text-xl text-text-secondary leading-relaxed mb-6">
                    A cybersecurity mentor to thousands, driving the methodology that bridges the gap between academic learning and industrial security requirements.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-accent flex-shrink-0" size={20} />
                      <span className="text-text-secondary">15+ Years in Cybersecurity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-accent flex-shrink-0" size={20} />
                      <span className="text-text-secondary">Ethical Hacking Expert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-accent flex-shrink-0" size={20} />
                      <span className="text-text-secondary">Industry Thought Leader</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-accent flex-shrink-0" size={20} />
                      <span className="text-text-secondary">Mentor to 100K+ Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-blue-600/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">Cybersecurity Journey?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join our community of cybersecurity professionals and transform your career
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/courses'}
              className="px-10 py-4 bg-accent hover:bg-accent/90 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              Explore Courses
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
