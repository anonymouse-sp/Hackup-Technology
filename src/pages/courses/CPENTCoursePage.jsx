import { Terminal, Clock, Award, CheckCircle, Users, BookOpen, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const CPENTCoursePage = () => {
  const navigate = useNavigate();

  const courseData = {
    courseId: 'cpent',
    courseTitle: 'CPENT',
    title: 'Certified Penetration Testing Professional (CPENT)',
    subtitle: 'Advanced Penetration Testing & Red Team Operations',
    icon: <Terminal size={48} />,
    accentColor: 'text-red-500',
    bgAccent: 'bg-red-500',
    duration: '5 Days / 40 Hours',
    level: 'Advanced',
    certification: 'EC-Council CPENT',
    overview: 'CPENT is a hands-on penetration testing course that teaches advanced penetration testing skills. It goes beyond just automated scanning and teaches penetration testing from an attacker\'s perspective. Learn to perform advanced techniques including advanced persistent threat simulations, pivoting, privilege escalation, and writing professional penetration testing reports.',
    
    highlights: [
      'Advanced penetration testing techniques',
      'Real-world attack simulations',
      'Hands-on labs with practical scenarios',
      'Network pivoting and lateral movement',
      'Advanced privilege escalation',
      'Professional report writing skills'
    ],
    
    modules: [
      { title: 'Introduction to Penetration Testing', description: 'Advanced penetration testing methodology and frameworks' },
      { title: 'Penetration Testing Scoping and Engagement', description: 'Define scope, rules of engagement, and legal considerations' },
      { title: 'Open Source Intelligence (OSINT)', description: 'Advanced reconnaissance and information gathering techniques' },
      { title: 'Social Engineering Penetration Testing', description: 'Execute sophisticated social engineering attacks' },
      { title: 'Network Penetration Testing - External', description: 'Assess external network security and perimeter defenses' },
      { title: 'Network Penetration Testing - Internal', description: 'Exploit internal network vulnerabilities and misconfigurations' },
      { title: 'Network Penetration Testing - Perimeter Devices', description: 'Test routers, switches, firewalls, and IDS/IPS systems' },
      { title: 'Web Application Penetration Testing', description: 'Advanced web application security assessment techniques' },
      { title: 'Wireless Penetration Testing', description: 'Attack WiFi networks, WPA3, and enterprise wireless systems' },
      { title: 'IoT Penetration Testing', description: 'Assess security of Internet of Things devices and protocols' },
      { title: 'OT/SCADA Penetration Testing', description: 'Test operational technology and industrial control systems' },
      { title: 'Cloud Penetration Testing', description: 'Assess AWS, Azure, and GCP cloud infrastructure security' },
      { title: 'Binary Exploitation', description: 'Buffer overflows, shellcode development, and exploit writing' },
      { title: 'Double Pivoting', description: 'Advanced network pivoting and tunneling techniques' },
      { title: 'Privilege Escalation', description: 'Escalate privileges on Windows, Linux, and Unix systems' },
      { title: 'Post Exploitation', description: 'Maintain access, cover tracks, and data exfiltration' },
      { title: 'Advanced Persistent Threat (APT)', description: 'Simulate sophisticated nation-state level attacks' },
      { title: 'Report Writing and Remediation', description: 'Create professional penetration testing reports' }
    ],
    
    prerequisites: [
      'CEH or equivalent ethical hacking knowledge',
      'Strong understanding of networking and protocols',
      'Experience with Linux and Windows systems',
      'Familiarity with scripting (Python, Bash, PowerShell)',
      'Basic penetration testing experience recommended'
    ],
    
    whoShouldAttend: [
      'Experienced penetration testers',
      'Red team professionals',
      'Security consultants and auditors',
      'Advanced security analysts',
      'Ethical hackers seeking advanced skills',
      'Security professionals looking to specialize'
    ],
    
    careerOpportunities: [
      'Senior Penetration Tester',
      'Red Team Operator',
      'Security Consultant',
      'Offensive Security Engineer',
      'Vulnerability Assessment Specialist',
      'Application Security Tester'
    ]
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
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
      <section className="py-20 bg-gradient-to-r from-accent/10 via-red-600/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Master <span className="text-accent">Advanced Penetration Testing?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join elite security professionals and become a certified penetration testing expert
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

export default CPENTCoursePage;
