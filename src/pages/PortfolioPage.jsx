import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, Home, Award, Users, GraduationCap, Building2, Shield, Code, Cloud, Lock, CheckCircle, Download } from 'lucide-react';
import { useEffect } from 'react';

const stats = [
  { icon: Users, label: "Students Trained", value: "1,00,000+" },
  { icon: Building2, label: "Workshops Delivered", value: "200+" },
  { icon: GraduationCap, label: "Corporate Trainings", value: "50+" },
  { icon: Award, label: "Certifications Offered", value: "15+" },
];

const certifications = [
  "CEH (Certified Ethical Hacker)",
  "CPENT (Penetration Tester)",
  "CSA (SOC Analyst)",
  "CHFI (Forensic Investigator)",
  "CND (Network Defender)",
  "CCT, CCSE, CTIA, ECDE, EDRP, ECES, ECIH",
];

const specializedPrograms = [
  { icon: Shield, title: "SOC Deployment & Training" },
  { icon: Lock, title: "VAPT & WAPT Services" },
  { icon: Users, title: "SailPoint Identity Management" },
  { icon: Code, title: "Secure Code Design for Developers" },
  { icon: Cloud, title: "DevSecOps for CI/CD Security" },
];

const colleges = [
  "VIT (Vellore Institute of Technology)",
  "The Lawrence School, Lovedale (Ooty)",
  "MCC Chennai (Madras Christian College)",
  "SRM University",
  "Sri Ramakrishna Engineering College",
  "PSG TECH (PSG College of Technology)",
  "PSG IIM (Institute of Management)",
  "PSGR Krishnammal College for Women",
  "Bannari Amman Institute of Technology",
  "Dr. NGP Institute of Technology",
  "Sri Krishna Arts & Science College",
  "STC, Pollachi",
  "Nehru College, Coimbatore",
  "KLN Engineering College",
  "Subbalakshmi Lakshmipathy College, Madurai",
  "Sankar Polytechnic College, Tirunelveli",
  "JCT College of Engineering, Coimbatore",
  "Nandha Arts & Science College, Erode",
];

const PortfolioPage = () => {
  useEffect(() => {
    // Auto-trigger print dialog when page opens in new window
    const timer = setTimeout(() => {
      window.print();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      
      {/* Download Button - Hidden on print */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
        <button
          onClick={handleDownload}
          className="bg-accent hover:bg-accent-hover text-primary px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
        >
          <Download size={20} />
          Download as PDF
        </button>
      </div>
      
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
            <span className="text-accent">Portfolio</span>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Empowering the Nation with <span className="text-accent">Cybersecurity Excellence</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Best Cyber Security & Ethical Hacking Institute in Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          
          {/* Who We Are */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">🔐 Who We Are</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Hackup Technology is a premier cybersecurity training and consulting firm headquartered in Coimbatore, Tamil Nadu. 
              Recognized as one of the top cybersecurity institutes in India, we specialize in Ethical Hacking, SOC Operations, 
              Penetration Testing, Secure Code Design, Cloud Security, and Identity Governance.
            </p>
            <div className="space-y-3">
              {['1,00,000+ Students', 'Police Officials & Law Enforcement', 'Engineering & Arts College Faculty', 
                'Government Officers & Teams', 'Corporate Clients & Security Teams'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-primary-light border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors">
                  <IconComponent className="w-10 h-10 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">🎯 Our Vision</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              To become a national leader in cybersecurity education by nurturing skilled ethical hackers, penetration testers, 
              SOC analysts, and cybersecurity architects through immersive, practical, and globally recognized training.
            </p>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">💼 Services We Offer</h2>
            
            {/* Certifications */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-4">🎓 Cybersecurity Certifications (EC-Council Accredited)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-primary-light rounded-lg border border-gray-800">
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Programs */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-4">🧰 Specialized Programs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializedPrograms.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <div key={index} className="bg-primary-light border border-gray-800 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all">
                      <IconComponent className="w-8 h-8 text-accent mb-3" />
                      <h4 className="text-lg font-semibold text-white">{program.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Corporate Training */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">🏢 Corporate & Government Training</h3>
              <div className="bg-primary-light p-6 rounded-lg border border-gray-800 space-y-3">
                {['Customized cybersecurity training for enterprises, IT teams, and government bodies',
                  'Blue-team/Red-team skill enhancement',
                  'Security awareness workshops'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Footprint */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">🏫 Our Institutional Footprint</h2>
            <p className="text-text-secondary text-lg mb-6">
              We've delivered impactful workshops, bootcamps, FDPs, and seminars in leading colleges across Tamil Nadu:
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">🎓 Top Tamil Nadu Colleges We Visited:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {colleges.map((college, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-primary-light rounded-lg border border-gray-800">
                  <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-white">{college}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">📊 Our Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['Delivered 200+ Workshops across India',
                '50+ Corporate Trainings conducted',
                '1,00,000+ Individuals Empowered',
                'Partnered with Academia, Government & Industry'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/30">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="text-center bg-primary-light border border-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">🌐 Let's Connect</h2>
            <div className="inline-block text-left space-y-3">
              <p className="text-text-secondary">
                <span className="font-semibold text-white">📍 Location:</span> Coimbatore, Tamil Nadu, India
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold text-white">📞 Phone:</span> +91 93620 12339
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold text-white">📧 Email:</span> dinesh@hackuptechnology.com
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold text-white">🌍 Website:</span>{" "}
                <a href="https://www.hackuptechnology.com" className="text-accent hover:underline">
                  www.hackuptechnology.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
