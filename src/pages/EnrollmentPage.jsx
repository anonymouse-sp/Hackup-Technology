import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { User, Mail, Phone, BookOpen, GraduationCap, Briefcase, Monitor, MessageSquare, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const EnrollmentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('course') || '';
  const courseName = searchParams.get('name') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName: courseName,
    courseId: courseId,
    qualification: '',
    experience: '',
    trainingMode: 'online',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const courseOptions = [
    { id: 'ceh', name: 'Certified Ethical Hacker (CEH v13)' },
    { id: 'chfi', name: 'Computer Hacking Forensic Investigator (CHFI v10)' },
    { id: 'cpent', name: 'Certified Penetration Testing Professional (CPENT)' },
    { id: 'soc', name: 'SOC Analyst (CSA)' },
    { id: 'cnd', name: 'Certified Network Defender (CND v2)' },
    { id: 'ecde', name: 'Certified DevSecOps Engineer (ECDE)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update courseName when courseId changes
    if (name === 'courseId') {
      const selectedCourse = courseOptions.find(c => c.id === value);
      if (selectedCourse) {
        setFormData(prev => ({
          ...prev,
          courseName: selectedCourse.name
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          courseName: '',
          courseId: '',
          qualification: '',
          experience: '',
          trainingMode: 'online',
          message: ''
        });

        // Redirect to courses page after 3 seconds
        setTimeout(() => {
          navigate('/courses');
        }, 3000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to submit enrollment. Please try again.'
        });
      }
    } catch (error) {
      console.error('Enrollment submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please check if the server is running and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <TopBar />
      <Navbar />

      <div className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => navigate('/courses')}
              className="mb-6 text-accent hover:text-accent/80 flex items-center gap-2 transition-colors mx-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Courses
            </button>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Course <span className="text-accent">Enrollment</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Fill out the form below to enroll in your chosen certification course
            </p>
          </div>

          {/* Enrollment Form */}
          <div className="bg-primary-light border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                      placeholder="+91 93620 12339"
                    />
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="courseId" className="block text-sm font-semibold mb-2">
                  Select Course <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
                  <select
                    id="courseId"
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Choose a certification course</option>
                    {courseOptions.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Qualification and Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="qualification" className="block text-sm font-semibold mb-2">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
                    <select
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select qualification</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold mb-2">
                    IT Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select experience</option>
                      <option value="fresher">Fresher (No Experience)</option>
                      <option value="0-2">0-2 Years</option>
                      <option value="2-5">2-5 Years</option>
                      <option value="5-10">5-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Training Mode */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Preferred Training Mode <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'online', label: 'Online', icon: Monitor },
                    { value: 'offline', label: 'Offline', icon: BookOpen },
                    { value: 'hybrid', label: 'Hybrid', icon: GraduationCap }
                  ].map(mode => {
                    const Icon = mode.icon;
                    return (
                      <label
                        key={mode.value}
                        className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.trainingMode === mode.value
                            ? 'border-accent bg-accent/10'
                            : 'border-gray-800 hover:border-accent/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="trainingMode"
                          value={mode.value}
                          checked={formData.trainingMode === mode.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Icon className={formData.trainingMode === mode.value ? 'text-accent' : 'text-text-secondary'} size={24} />
                        <span className="text-sm font-semibold">{mode.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Additional Information (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-accent" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-800 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Status */}
              {submitStatus.message && (
                <div className={`p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 border border-green-500 text-green-400'
                    : 'bg-red-500/10 border border-red-500 text-red-400'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={24} className="flex-shrink-0" />
                  ) : (
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enrollment
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Our team will review your enrollment request
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    We'll contact you within 24 hours to discuss course details
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    You'll receive course materials and schedule information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EnrollmentPage;
