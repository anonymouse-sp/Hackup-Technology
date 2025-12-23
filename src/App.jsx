import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CoursesPage from './pages/CoursesPage';
import EnrollmentPage from './pages/EnrollmentPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import CEHCoursePage from './pages/courses/CEHCoursePage';
import CHFICoursePage from './pages/courses/CHFICoursePage';
import CPENTCoursePage from './pages/courses/CPENTCoursePage';
import SOCCoursePage from './pages/courses/SOCCoursePage';
import CNDCoursePage from './pages/courses/CNDCoursePage';
import ECDECoursePage from './pages/courses/ECDECoursePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/ceh" element={<CEHCoursePage />} />
        <Route path="/courses/chfi" element={<CHFICoursePage />} />
        <Route path="/courses/cpent" element={<CPENTCoursePage />} />
        <Route path="/courses/soc" element={<SOCCoursePage />} />
        <Route path="/courses/cnd" element={<CNDCoursePage />} />
        <Route path="/courses/ecde" element={<ECDECoursePage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
