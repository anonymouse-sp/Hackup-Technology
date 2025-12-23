import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import html2pdf from 'html2pdf.js';

const servicesData = [
  {
    title: "Penetration Testing Services",
    description: "Comprehensive Black Box, Grey Box, and White Box testing including Web, Mobile, Network, Cloud, Active Directory, and API security assessments to simulate real-world attack scenarios."
  },
  {
    title: "Internal Network VA",
    description: "Structured vulnerability assessment of internal infrastructure assets, including workstations, servers, and network devices to identify unpatched systems, misconfigurations, and security gaps."
  },
  {
    title: "Cloud Security Audit & Testing",
    description: "Comprehensive security evaluation for Azure, AWS, and GCP environments covering IAM, network architecture, data protection, compliance, and attack path validation."
  },
  {
    title: "ISO/IEC 27001 Consulting",
    description: "End-to-end ISMS consulting and audit services including gap assessment, risk management, Annex A controls implementation, and certification readiness support."
  },
  {
    title: "Firewall & Network Security Audit",
    description: "Comprehensive audit of perimeter and internal network security controls, policy review, VPN validation, Zero Trust alignment, and threat prevention assessment."
  },
  {
    title: "Digital Forensics & Incident Response",
    description: "Forensic-grade DFIR services including ransomware investigation, malware analysis, legal evidence collection, and attack timeline reconstruction following strict chain-of-custody principles."
  }
];

const ServicesPage = () => {
  const handleDownloadBrochure = () => {
    // Create portfolio content for PDF
    const portfolioContent = `
      <div style="font-family: Arial, sans-serif; padding: 40px; color: #1a1a1a;">
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #00b894; font-size: 32px; margin-bottom: 10px;">Empowering the Nation with Cybersecurity Excellence</h1>
          <p style="font-size: 18px; color: #666;">Best Cyber Security & Ethical Hacking Institute in Coimbatore, Tamil Nadu</p>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #00b894; font-size: 24px; margin-bottom: 15px;">🔐 Who We Are</h2>
          <p style="line-height: 1.8; margin-bottom: 15px;">
            Hackup Technology is a premier cybersecurity training and consulting firm headquartered in Coimbatore, Tamil Nadu. 
            Recognized as one of the top cybersecurity institutes in India, we specialize in Ethical Hacking, SOC Operations, 
            Penetration Testing, Secure Code Design, Cloud Security, and Identity Governance.
          </p>
          <ul style="line-height: 2;">
            <li>✓ 1,00,000+ Students</li>
            <li>✓ Police Officials & Law Enforcement</li>
            <li>✓ Engineering & Arts College Faculty</li>
            <li>✓ Government Officers & Teams</li>
            <li>✓ Corporate Clients & Security Teams</li>
          </ul>
        </div>

        <div style="display: flex; justify-content: space-around; margin-bottom: 30px; text-align: center;">
          <div><h3 style="color: #00b894; font-size: 28px;">1,00,000+</h3><p>Students Trained</p></div>
          <div><h3 style="color: #00b894; font-size: 28px;">200+</h3><p>Workshops Delivered</p></div>
          <div><h3 style="color: #00b894; font-size: 28px;">50+</h3><p>Corporate Trainings</p></div>
          <div><h3 style="color: #00b894; font-size: 28px;">15+</h3><p>Certifications Offered</p></div>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #00b894; font-size: 24px; margin-bottom: 15px;">🎯 Our Vision</h2>
          <p style="line-height: 1.8;">
            To become a national leader in cybersecurity education by nurturing skilled ethical hackers, penetration testers, 
            SOC analysts, and cybersecurity architects through immersive, practical, and globally recognized training.
          </p>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #00b894; font-size: 24px; margin-bottom: 15px;">💼 Services We Offer</h2>
          <h3 style="font-size: 20px; margin-bottom: 10px;">🎓 Cybersecurity Certifications (EC-Council Accredited)</h3>
          <ul style="line-height: 1.8; margin-bottom: 20px;">
            <li>CEH (Certified Ethical Hacker)</li>
            <li>CPENT (Penetration Tester)</li>
            <li>CSA (SOC Analyst)</li>
            <li>CHFI (Forensic Investigator)</li>
            <li>CND (Network Defender)</li>
            <li>CCT, CCSE, CTIA, ECDE, EDRP, ECES, ECIH</li>
          </ul>

          <h3 style="font-size: 20px; margin-bottom: 10px;">🧰 Specialized Programs</h3>
          <ul style="line-height: 1.8; margin-bottom: 20px;">
            <li>SOC Deployment & Training</li>
            <li>VAPT & WAPT Services</li>
            <li>SailPoint Identity Management</li>
            <li>Secure Code Design for Developers</li>
            <li>DevSecOps for CI/CD Security</li>
          </ul>

          <h3 style="font-size: 20px; margin-bottom: 10px;">🏢 Corporate & Government Training</h3>
          <ul style="line-height: 1.8;">
            <li>Customized cybersecurity training for enterprises, IT teams, and government bodies</li>
            <li>Blue-team/Red-team skill enhancement</li>
            <li>Security awareness workshops</li>
          </ul>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #00b894; font-size: 24px; margin-bottom: 15px;">📊 Our Impact</h2>
          <ul style="line-height: 1.8;">
            <li>✓ Delivered 200+ Workshops across India</li>
            <li>✓ 50+ Corporate Trainings conducted</li>
            <li>✓ 1,00,000+ Individuals Empowered</li>
            <li>✓ Partnered with Academia, Government & Industry</li>
          </ul>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h2 style="color: #00b894; font-size: 24px; margin-bottom: 15px;">🌐 Let's Connect</h2>
          <p><strong>📍 Location:</strong> Coimbatore, Tamil Nadu, India</p>
          <p><strong>📞 Phone:</strong> +91 93620 12339</p>
          <p><strong>📧 Email:</strong> dinesh@hackuptechnology.com</p>
          <p><strong>🌍 Website:</strong> www.hackuptechnology.com</p>
        </div>
      </div>
    `;

    // Create temporary element
    const element = document.createElement('div');
    element.innerHTML = portfolioContent;
    
    // Configure PDF options
    const options = {
      margin: 10,
      filename: 'Hackup-Technology-Portfolio.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate and download PDF
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Structured, legally authorized, and industry-aligned cybersecurity services following OWASP, PTES, NIST, MITRE ATT&CK, and ISO/IEC 27001 frameworks.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-light to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Connect with our certified cybersecurity professionals for a comprehensive security assessment and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact?service=Consultation"
              className="bg-accent hover:bg-accent-hover text-primary px-8 py-3 rounded-md font-semibold transition-all shadow-lg inline-block"
            >
              Schedule Consultation
            </a>
            <button 
              onClick={handleDownloadBrochure}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 rounded-md font-semibold transition-all"
            >
              Download Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
