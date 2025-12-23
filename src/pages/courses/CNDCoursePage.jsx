import { Network, Clock, Award, CheckCircle, Users, BookOpen, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const CNDCoursePage = () => {
  const navigate = useNavigate();

  const courseData = {
    courseId: 'cnd',
    courseTitle: 'CND v2',
    title: 'Certified Network Defender (CND v2)',
    subtitle: 'Network Security & Defense Operations',
    icon: <Network size={48} />,
    accentColor: 'text-yellow-500',
    bgAccent: 'bg-yellow-500',
    duration: '5 Days / 40 Hours',
    level: 'Intermediate',
    certification: 'EC-Council CND v2',
    overview: 'The Certified Network Defender (CND) program focuses on creating Network Administrators who are trained on protecting, detecting and responding to the threats on the network. Network administrators are usually familiar with network components, traffic, performance and utilization, network topology, location of each system, security policy, etc. CND is a comprehensive network security certification program covering the fundamental skills of network and computer security.',
    
    highlights: [
      'Hands-on network defense training',
      'Real-world network security scenarios',
      'Comprehensive IDS/IPS deployment techniques',
      'Advanced firewall configuration and management',
      'Network traffic analysis and monitoring',
      'Incident response and threat mitigation'
    ],
    
    modules: [
      { title: 'Network Security Fundamentals', description: 'Understand core networking concepts, protocols, and security principles' },
      { title: 'Network Security Controls', description: 'Implement administrative, technical, and physical security controls' },
      { title: 'Network Security Threats', description: 'Identify and analyze various network-based attacks and threats' },
      { title: 'Network Traffic Monitoring', description: 'Master packet analysis and network traffic monitoring techniques' },
      { title: 'Securing Network Infrastructure', description: 'Harden network devices including routers, switches, and servers' },
      { title: 'Firewall Configuration', description: 'Design, configure, and manage enterprise firewalls and ACLs' },
      { title: 'IDS/IPS Deployment', description: 'Deploy and configure Intrusion Detection and Prevention Systems' },
      { title: 'VPN Implementation', description: 'Implement secure VPN solutions for remote access and site-to-site connectivity' },
      { title: 'Wireless Network Security', description: 'Secure wireless networks and implement WPA3 encryption' },
      { title: 'Network Access Control', description: 'Implement NAC solutions and port security mechanisms' },
      { title: 'Security Event Management', description: 'Configure SIEM systems for log management and correlation' },
      { title: 'Network Perimeter Security', description: 'Design and implement DMZ architectures and network segmentation' },
      { title: 'Data Loss Prevention', description: 'Deploy DLP solutions to prevent sensitive data exfiltration' },
      { title: 'Secure Network Design', description: 'Design defense-in-depth network architectures' },
      { title: 'Security Policies and Procedures', description: 'Develop and implement comprehensive security policies' },
      { title: 'Network Vulnerability Assessment', description: 'Conduct vulnerability scans and remediation activities' },
      { title: 'Incident Response', description: 'Develop incident response procedures and handling capabilities' },
      { title: 'Disaster Recovery Planning', description: 'Create business continuity and disaster recovery plans' }
    ],
    
    prerequisites: [
      'Understanding of TCP/IP networking fundamentals',
      'Basic knowledge of network devices (routers, switches, firewalls)',
      'Familiarity with Windows and Linux operating systems',
      'Network+ or equivalent knowledge recommended'
    ],
    
    whoShouldAttend: [
      'Network Administrators',
      'Network Security Engineers',
      'Security Operations Center (SOC) Analysts',
      'System Administrators',
      'IT Security Professionals',
      'Security Architects'
    ],
    
    careerOpportunities: [
      'Network Security Administrator',
      'Network Defense Analyst',
      'Security Operations Center (SOC) Analyst',
      'Network Security Engineer',
      'Incident Response Analyst',
      'Cybersecurity Specialist'
    ]
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/courses')}
            className="mb-6 text-accent hover:text-accent/80 flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex p-4 ${courseData.bgAccent}/10 rounded-2xl mb-6`}>
                <div className={courseData.accentColor}>
                  {courseData.icon}
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {courseData.title}
              </h1>
              <p className="text-2xl text-accent mb-6">{courseData.subtitle}</p>
              <p className="text-xl text-text-secondary mb-8">{courseData.overview}</p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(`/enrollment?course=${courseData.courseId}&name=${encodeURIComponent(courseData.courseTitle)}`)}
                  className={`px-8 py-4 ${courseData.bgAccent} hover:opacity-90 text-white font-semibold rounded-lg transition-all transform hover:scale-105`}
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-lg transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-primary-light border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="text-accent" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold">Duration</h3>
                    <p className="text-text-secondary">{courseData.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Target className="text-accent" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold">Level</h3>
                    <p className="text-text-secondary">{courseData.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="text-accent" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold">Certification</h3>
                    <p className="text-text-secondary">{courseData.certification}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Course <span className="text-accent">Highlights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 bg-primary border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-text-secondary">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            What You'll <span className="text-accent">Learn</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courseData.modules.map((module, index) => (
              <div key={index} className="bg-primary-light border border-gray-800 rounded-lg p-6 hover:border-accent transition-all transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className={`${courseData.bgAccent} text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                    <p className="text-text-secondary text-sm">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Prerequisites */}
            <div className="bg-primary border border-gray-800 rounded-xl p-8">
              <div className={`inline-flex p-3 ${courseData.bgAccent}/10 rounded-lg mb-6`}>
                <BookOpen className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Prerequisites</h3>
              <ul className="space-y-3">
                {courseData.prerequisites.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Attend */}
            <div className="bg-primary border border-gray-800 rounded-xl p-8">
              <div className={`inline-flex p-3 ${courseData.bgAccent}/10 rounded-lg mb-6`}>
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Who Should Attend</h3>
              <ul className="space-y-3">
                {courseData.whoShouldAttend.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-primary border border-gray-800 rounded-xl p-8">
              <div className={`inline-flex p-3 ${courseData.bgAccent}/10 rounded-lg mb-6`}>
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Career Opportunities</h3>
              <ul className="space-y-3">
                {courseData.careerOpportunities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-yellow-600/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Become a <span className="text-accent">Certified Network Defender?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Master network defense and protect critical infrastructure from cyber threats
          </p>
          <button
            onClick={() => navigate(`/enrollment?course=${courseData.courseId}&name=${encodeURIComponent(courseData.courseTitle)}`)}
            className={`px-10 py-4 ${courseData.bgAccent} hover:opacity-90 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg`}
          >
            Enroll Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CNDCoursePage;
