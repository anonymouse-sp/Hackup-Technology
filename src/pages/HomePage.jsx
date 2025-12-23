import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Database, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ChevronDown,
  Terminal,
  Lock,
  Eye,
  Zap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const HomePage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: <Shield className="text-accent" size={40} />,
      title: "VAPT",
      text: "Comprehensive manual and automated testing to identify vulnerabilities."
    },
    {
      icon: <Search className="text-accent" size={40} />,
      title: "Digital Forensics",
      text: "Extracting and examining digital evidence with cutting-edge techniques."
    },
    {
      icon: <Database className="text-accent" size={40} />,
      title: "Data Recovery",
      text: "Professional recovery from hardware, software, and media devices."
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "15+", icon: <Award size={24} /> },
    { label: "Students Trained", value: "100K+", icon: <Users size={24} /> },
    { label: "Experts & Mentors", value: "50+", icon: <TrendingUp size={24} /> }
  ];

  const courses = [
    {
      title: "CEH v13",
      subtitle: "Ethical Hacking",
      description: "Master ethical hacking techniques and penetration testing methodologies",
      icon: <Lock size={32} />
    },
    {
      title: "CHFI v10",
      subtitle: "Forensic Investigator",
      description: "Advanced digital forensics and incident response training",
      icon: <Search size={32} />
    },
    {
      title: "CPENT",
      subtitle: "Penetration Testing",
      description: "Intensive hands-on penetration testing and attack simulation",
      icon: <Terminal size={32} />
    },
    {
      title: "SOC Analyst",
      subtitle: "Security Operations",
      description: "Real-time threat detection and security operations management",
      icon: <Eye size={32} />
    }
  ];

  const features = [
    { text: "Real-world Case Studies", icon: <CheckCircle size={20} /> },
    { text: "Industrial Lab Simulations", icon: <CheckCircle size={20} /> },
    { text: "Cyber Crime Cell Experience", icon: <CheckCircle size={20} /> },
    { text: "Job-Ready Practical Training", icon: <CheckCircle size={20} /> }
  ];

  const faqs = [
    {
      question: "Do I need a technical background to start?",
      answer: "No, our courses are designed for all levels. We start with fundamentals and progressively build your skills. Many of our successful students come from non-technical backgrounds."
    },
    {
      question: "What are the career opportunities in cybersecurity?",
      answer: "Cybersecurity offers diverse roles including Ethical Hacker, Security Analyst, Penetration Tester, Digital Forensic Investigator, SOC Analyst, and Security Consultant. The demand is rapidly growing with competitive salaries."
    },
    {
      question: "Is the CEH certification globally recognized?",
      answer: "Yes, CEH (Certified Ethical Hacker) by EC-Council is one of the most recognized and respected certifications globally. It's valued by employers worldwide and meets DoD 8570 requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Terminal Effect Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #00f0ff 2px, #00f0ff 4px)`
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent">
                <Zap size={16} />
                <span className="text-sm font-semibold">Elite Cybersecurity Training</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Cybersecurity Skills
                <span className="block text-accent mt-2">That Matter</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Hackup equips learners with immersive training, ethical hacking labs, and live internship experiences to defend against real-world threats.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/courses')}
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
                >
                  Explore Courses
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Our Services
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-primary-light border border-accent/30 rounded-2xl p-8 shadow-2xl shadow-accent/20 transform hover:scale-105 transition-transform duration-500">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-2 text-accent">
                    <Terminal size={16} />
                    <span>root@hackup:~$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                  <div className="text-green-400">
                    <span className="text-text-secondary">$</span> nmap -sV -p- target.com
                  </div>
                  <div className="text-text-secondary">
                    Starting Nmap scan...
                  </div>
                  <div className="text-yellow-400">
                    PORT     STATE SERVICE
                  </div>
                  <div className="text-green-400">
                    443/tcp  open  https
                  </div>
                  <div className="text-red-400">
                    [!] Vulnerability detected
                  </div>
                  <div className="text-accent">
                    [+] Exploit successful
                  </div>
                </div>
                
                {/* Scanning Animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-lg px-4 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <Shield className="text-accent" size={20} />
                  <span className="text-sm font-semibold">100% Secure</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-lg px-4 py-2 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Award className="text-accent" size={20} />
                  <span className="text-sm font-semibold">Certified Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Professional cybersecurity solutions for modern threats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-primary border border-gray-800 rounded-xl p-8 hover:border-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-secondary">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Stats */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-blue-600/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="text-accent">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Global Certifications & <span className="text-accent">Training</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Industry-recognized certifications to advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-primary-light border border-gray-800 rounded-xl p-6 hover:border-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
                onClick={() => navigate('/services')}
              >
                <div className="text-accent mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                <p className="text-accent text-sm mb-3">{course.subtitle}</p>
                <p className="text-text-secondary text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="text-accent">Hackup?</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                We combine theoretical knowledge with practical experience to create cybersecurity professionals ready for the real world.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-primary border border-gray-800 rounded-lg hover:border-accent transition-all duration-300 transform hover:translate-x-2"
                  >
                    <div className="text-accent flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-primary border border-accent/30 rounded-2xl p-8 shadow-2xl shadow-accent/20">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
                  alt="Cybersecurity Training"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent rounded-lg"></div>
              </div>
              
              {/* Accent Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-lg transform rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-lg transform -rotate-12 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Get answers to common questions about our training programs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-primary-light border border-gray-800 rounded-xl overflow-hidden hover:border-accent transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/50 transition-colors"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`text-accent transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-primary border-t border-gray-800">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
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
            Join thousands of successful professionals who've transformed their careers with Hackup
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-accent hover:bg-accent/90 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
