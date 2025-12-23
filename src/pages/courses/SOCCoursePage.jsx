import { Lock, Clock, Award, CheckCircle, Users, BookOpen, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const SOCCoursePage = () => {
  const navigate = useNavigate();

  const courseData = {
    courseId: 'soc',
    courseTitle: 'SOC Analyst',
    title: 'SOC Analyst (CSA)',
    subtitle: 'Security Operations & Threat Intelligence',
    icon: <Lock size={48} />,
    accentColor: 'text-green-500',
    bgAccent: 'bg-green-500',
    duration: '5 Days / 40 Hours',
    level: 'Beginner to Intermediate',
    certification: 'EC-Council CSA',
    overview: 'The Certified SOC Analyst (CSA) program is the first step to joining a security operations center (SOC). It is engineered for current and aspiring Tier I and Tier II SOC analysts to achieve proficiency in performing entry-level and intermediate-level operations. Learn to monitor, detect, analyze and respond to security incidents using cutting-edge SIEM solutions and threat intelligence platforms.',
    
    highlights: [
      'Hands-on training with industry-leading SIEM tools',
      'Real-world incident response scenarios',
      'Threat intelligence and hunting techniques',
      'Log analysis and correlation',
      'Security event monitoring and alerting',
      'Malware analysis fundamentals'
    ],
    
    modules: [
      { title: 'Security Operations and Management', description: 'Understand SOC structure, processes, and best practices' },
      { title: 'Understanding Cyber Threats, IoCs, and Attack Methodology', description: 'Learn threat landscape, indicators of compromise, and attack frameworks' },
      { title: 'Incidents, Events, and Logging', description: 'Master security event identification and logging mechanisms' },
      { title: 'SIEM Deployment and Configuration', description: 'Deploy and configure SIEM solutions for optimal monitoring' },
      { title: 'Working with SIEM Solutions', description: 'Hands-on experience with leading SIEM platforms' },
      { title: 'Log Management and Analysis', description: 'Collect, parse, normalize and analyze security logs' },
      { title: 'Security Event Monitoring', description: 'Monitor network traffic and detect malicious activities' },
      { title: 'Enhanced Incident Detection with Threat Intelligence', description: 'Leverage threat intelligence feeds for proactive detection' },
      { title: 'Incident Response and Handling', description: 'Execute incident response procedures and containment strategies' },
      { title: 'Security Orchestration, Automation, and Response (SOAR)', description: 'Automate SOC workflows and response actions' },
      { title: 'Vulnerability Management', description: 'Identify, assess, and remediate security vulnerabilities' },
      { title: 'Threat Hunting', description: 'Proactively hunt for advanced persistent threats' },
      { title: 'Malware Analysis and Reverse Engineering', description: 'Analyze malicious code and understand its behavior' },
      { title: 'Digital Forensics Basics', description: 'Preserve evidence and conduct forensic investigations' },
      { title: 'Network Security Monitoring', description: 'Monitor network perimeter and internal traffic' },
      { title: 'Endpoint Detection and Response (EDR)', description: 'Implement and manage EDR solutions' },
      { title: 'Security Metrics and KPIs', description: 'Measure SOC effectiveness and performance' },
      { title: 'Compliance and Regulatory Requirements', description: 'Understand compliance frameworks and reporting' }
    ],
    
    prerequisites: [
      'Basic understanding of networking and TCP/IP',
      'Fundamental knowledge of cybersecurity concepts',
      'Familiarity with Windows and Linux operating systems',
      'Basic command-line experience is beneficial',
      'No prior SOC experience required'
    ],
    
    whoShouldAttend: [
      'Aspiring SOC Analysts',
      'Security Operations Center Personnel',
      'Network and System Administrators',
      'Incident Response Team Members',
      'IT Security Professionals',
      'Cybersecurity Students and Enthusiasts'
    ],
    
    careerOpportunities: [
      'SOC Analyst (Tier I/II)',
      'Security Operations Specialist',
      'Incident Response Analyst',
      'Threat Intelligence Analyst',
      'Security Monitoring Analyst',
      'Cyber Defense Analyst',
      'SIEM Engineer'
    ]
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
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
      <section className="py-20 bg-gradient-to-r from-accent/10 via-green-600/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">SOC Analyst Career?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join the frontlines of cybersecurity defense and protect organizations from evolving threats
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

export default SOCCoursePage;
