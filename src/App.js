import React, { useState, useEffect } from 'react';

// Styles
import './styles/animations.css';

// Context
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Components
import {
  Navbar,
  BackgroundEffects,
  HeroSection,
  AboutSection,
  EducationSection,
  CoursesSection,
  CertificationsSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  Footer,
  ScrollToTop
} from './components';

/**
 * Main application content - uses ThemeContext
 */
function AppContent() {
  const { isDark } = useTheme();

  // UI State
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'courses', 'certifications', 'skills', 'experience', 'projects', 'contact'];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-all duration-500 relative overflow-hidden`}>
      <BackgroundEffects />

      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection mousePosition={mousePosition} />
      <AboutSection />
      <EducationSection />
      <CoursesSection />
      <CertificationsSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <ScrollToTop visible={activeSection === 'home'} />
    </div>
  );
}

/**
 * Main App component - wraps everything in ThemeProvider
 */
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
