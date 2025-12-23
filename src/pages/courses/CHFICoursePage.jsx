import { Search, Clock, Award, CheckCircle, Users, BookOpen, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const CHFICoursePage = () => {
  const navigate = useNavigate();

  const courseData = {
    courseId: 'chfi',
    courseTitle: 'CHFI v10',
    title: 'Computer Hacking Forensic Investigator (CHFI v10)',
    subtitle: 'Master Digital Forensics & Incident Response',
    icon: <Search size={48} />,
    accentColor: 'text-purple-500',
    bgAccent: 'bg-purple-500',
    duration: '5 Days / 40 Hours',
    level: 'Intermediate to Advanced',
    certification: 'EC-Council CHFI v10',
    overview: 'The Computer Hacking Forensic Investigator (CHFI) course presents a methodological approach to computer forensics including searching and seizing digital evidence, chain-of-custody, acquisition, preservation, analysis and reporting of digital evidence. Learn to detect hacking attacks and properly extract evidence to report the crime and conduct audits to prevent future attacks.',
    
    highlights: [
      'Comprehensive forensics investigation methodology',
      'Hands-on labs with real forensic tools',
      'Legal compliance and court proceedings',
      'Mobile and cloud forensics',
      'Malware analysis techniques',
      'Network forensics and incident response'
    ],
    
    modules: [
      { title: 'Computer Forensics in Today\'s World', description: 'Introduction to digital forensics and investigation process' },
      { title: 'Computer Forensics Investigation Process', description: 'Learn systematic forensic investigation methodology' },
      { title: 'Understanding Hard Disks and File Systems', description: 'Master storage technologies and file system structures' },
      { title: 'Data Acquisition and Duplication', description: 'Create forensically sound copies of digital evidence' },
      { title: 'Defeating Anti-forensics Techniques', description: 'Overcome evidence hiding and destruction methods' },
      { title: 'Windows Forensics', description: 'Investigate Windows operating systems and artifacts' },
      { title: 'Linux and Mac Forensics', description: 'Analyze Unix-based systems and evidence' },
      { title: 'Network Forensics', description: 'Capture and analyze network traffic for investigations' },
      { title: 'Investigating Web Attacks', description: 'Examine web application attacks and logs' },
      { title: 'Dark Web Forensics', description: 'Investigate anonymous networks and cryptocurrency' },
      { title: 'Database Forensics', description: 'Extract evidence from database management systems' },
      { title: 'Cloud Forensics', description: 'Investigate cloud infrastructure and SaaS platforms' },
      { title: 'Investigating Email Crimes', description: 'Trace email origins and analyze email headers' },
      { title: 'Malware Forensics', description: 'Reverse engineer and analyze malicious software' },
      { title: 'Mobile Forensics', description: 'Extract and analyze data from mobile devices' },
      { title: 'IoT Forensics', description: 'Investigate Internet of Things devices' }
    ],
    
    prerequisites: [
      'Basic understanding of computer systems',
      'Familiarity with networking concepts',
      'Knowledge of operating systems',
      'Understanding of cybersecurity fundamentals'
    ],
    
    whoShouldAttend: [
      'Police and law enforcement personnel',
      'Digital forensics professionals',
      'Incident response team members',
      'Cybersecurity analysts',
      'IT auditors and compliance officers',
      'Legal professionals handling cyber cases'
    ],
    
    careerOpportunities: [
      'Digital Forensics Investigator',
      'Incident Response Analyst',
      'Cybercrime Investigator',
      'Forensics Consultant',
      'E-Discovery Specialist',
      'Malware Analyst'
    ]
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
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
      <section className="py-20 bg-gradient-to-r from-accent/10 via-purple-600/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Become a <span className="text-accent">Forensics Expert?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Master the art of digital forensics and cybercrime investigation
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

export default CHFICoursePage;
