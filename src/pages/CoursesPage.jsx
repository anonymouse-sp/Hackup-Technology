import { Shield, Terminal, Search, Lock, Network, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const CoursesPage = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'ceh',
      title: 'Certified Ethical Hacking (CEH v13)',
      description: 'Gain hands-on skills in ethical hacking and defense. Boost your career with this globally recognized certification.',
      icon: <Shield size={40} />,
      accentColor: 'border-blue-500',
      bgAccent: 'bg-blue-500/10'
    },
    {
      id: 'chfi',
      title: 'Computer Hacking Forensic Investigator (CHFI v10)',
      description: 'Unlock expert skills in cybercrime investigation and digital forensics using industry-leading tools.',
      icon: <Search size={40} />,
      accentColor: 'border-purple-500',
      bgAccent: 'bg-purple-500/10'
    },
    {
      id: 'cpent',
      title: 'Certified Penetration Testing Professional (CPENT)',
      description: 'Master network, web, and cloud exploitation skills to become a world-class penetration tester.',
      icon: <Terminal size={40} />,
      accentColor: 'border-red-500',
      bgAccent: 'bg-red-500/10'
    },
    {
      id: 'soc',
      title: 'SOC Analyst (CSA)',
      description: 'Gain experience in real-time security monitoring, incident response, and threat management.',
      icon: <Lock size={40} />,
      accentColor: 'border-green-500',
      bgAccent: 'bg-green-500/10'
    },
    {
      id: 'cnd',
      title: 'Certified Network Defender (CND v2)',
      description: 'Protect, detect, and respond to network-level threats with industry-standard defense techniques.',
      icon: <Network size={40} />,
      accentColor: 'border-yellow-500',
      bgAccent: 'bg-yellow-500/10'
    },
    {
      id: 'ecde',
      title: 'Certified DevSecOps Engineer (ECDE)',
      description: 'Integrate security into DevOps workflows to build, test, and deploy secure applications efficiently.',
      icon: <Code size={40} />,
      accentColor: 'border-cyan-500',
      bgAccent: 'bg-cyan-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      {/* Page Title Area */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Best <span className="text-accent">Courses</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Hands-on, industry-focused programs in ethical hacking, penetration testing, and digital forensics designed to prepare you for the evolving world of cybersecurity.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`group bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${course.accentColor} overflow-hidden cursor-pointer`}
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                {/* Card Header with Icon */}
                <div className={`${course.bgAccent} p-6 flex items-center justify-center`}>
                  <div className={`p-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 ${course.accentColor.replace('border', 'text')}`}>
                    {course.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg`}
                  >
                    Read More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent/10 via-blue-600/10 to-accent/10 rounded-2xl p-12 text-center border border-accent/20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Our experts can help you find the perfect certification path based on your experience and career goals.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-accent hover:bg-accent/90 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
