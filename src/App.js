import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, 
  Code, Briefcase, GraduationCap, User, Send, Moon, Sun, Award, Sparkles 
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFooterOpen, setIsFooterOpen] = useState(true);
  const [openCourseCategories, setOpenCourseCategories] = useState({
    ai: false,
    core: false,
    specialized: false,
    math: false,
    business: false,
    science: false
  });

  const toggleCourseCategory = (category) => {
    setOpenCourseCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject && selectedProject.demoImages) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) => 
            prev === 0 ? selectedProject.demoImages.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) => 
            prev === selectedProject.demoImages.length - 1 ? 0 : prev + 1
          );
        } else if (e.key === 'Escape') {
          setSelectedProject(null);
          setIsFooterOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const projects = [
    {
      title: "Restaurant Website",
      desc: "Static restaurant website built with pure HTML and CSS. First semester ICT project focused on advanced styling techniques, responsive design, and modern UI aesthetics.",
      tags: ["web", "html", "css"],
      icon: "Food Stop",
      isText: true,
      github: "https://github.com/AasirFarrukh",
      demoImages: [
        require('./Images/IICT/home.png'),
        require('./Images/IICT/menu.png'),
        require('./Images/IICT/deals.png'),
        require('./Images/IICT/cart.png'),
        require('./Images/IICT/login.png'),
        require('./Images/IICT/signup.png')
      ],
      demoImageTitles: ["Home Page", "Menu Page", "Deals Page", "Cart Page", "Login Page", "Signup Page"]
    },
    {
      title: "University Management System",
      desc: "Full-stack web application using ASP.NET with HTML/CSS and JavaScript. Integrated SQL Server and C# for efficient backend data management.",
      tags: ["web", "asp.net", "sql"],
      icon: "🎓",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Community Management System",
      desc: "Web application using ASP.NET with SCRUM methodology, featuring role-based access control and MySQL database integration.",
      tags: ["web", "asp.net", "mysql"],
      icon: "🏘️",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Hospital Management System",
      desc: "C++ desktop application demonstrating OOP principles including inheritance and polymorphism for hospital workflows.",
      tags: ["other", "cpp", "oop"],
      icon: "🏥",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Library Management System",
      desc: "Java desktop application using JavaFX and MySQL with MVC architecture, featuring interactive dashboards and transaction workflows.",
      tags: ["other", "java", "javafx"],
      icon: "📚",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Optimal File Searching",
      desc: "Advanced data structures implementation using AVL, Red-Black trees, and B-Trees for efficient file operations.",
      tags: ["other", "algorithms", "cpp"],
      icon: "🔍",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Timetable Scheduler",
      desc: "Intelligent scheduling system using genetic algorithms in Python for university timetable optimization with hard/soft constraint handling.",
      tags: ["ai", "python", "algorithms"],
      icon: "📅",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "AI-Powered Fitness Routine Planner",
      desc: "Generative AI system using LLMs, FAISS semantic search, and Vision Transformer for personalized workout plans with Gradio UI.",
      tags: ["ai", "ml", "python"],
      icon: "💪",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Video Frame Prediction",
      desc: "Deep learning project using ConvLSTM, PredRNN, and Transformers on UCF101 dataset with Streamlit UI for real-time visualization.",
      tags: ["ai", "ml", "deeplearning"],
      icon: "🎬",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Automated Glaucoma Detection",
      desc: "U-Net based deep learning model for optic disc segmentation on retinal images with Tkinter GUI for early glaucoma detection.",
      tags: ["ai", "ml", "healthcare"],
      icon: "👁️",
      github: "https://github.com/AasirFarrukh"
    },
    {
      title: "Gamified Mental Wellness App",
      desc: "UX-focused wellness app prototyped in Figma with wireframing and usability testing for engagement and accessibility.",
      tags: ["other", "design", "figma"],
      icon: "🧠",
      github: "https://github.com/AasirFarrukh"
    }
  ];

  const skills = [
    { name: "Python & Data Science", level: 92, icon: "🐍" },
    { name: "HTML/CSS/JavaScript", level: 88, icon: "🌐" },
    { name: "Machine Learning & AI", level: 85, icon: "🤖" },
    { name: "C# / ASP.NET", level: 85, icon: "💻" },
    { name: "Deep Learning (TensorFlow/PyTorch)", level: 82, icon: "🧠" },
    { name: "C/C++ & Data Structures", level: 85, icon: "⚡" },
    { name: "SQL & Databases (MySQL/SQL Server)", level: 82, icon: "🗄️" },
    { name: "Flask & Streamlit", level: 85, icon: "🔥" },
    { name: "React.js & Modern Frameworks", level: 78, icon: "⚛️" },
    { name: "Java & JavaFX", level: 75, icon: "☕" },
    { name: "RESTful APIs & Backend Development", level: 82, icon: "🔌" },
    { name: "Git & Version Control", level: 88, icon: "📦" },
    { name: "UI/UX Design (Figma)", level: 72, icon: "🎨" },
    { name: "Computer Vision & Image Processing", level: 78, icon: "👁️" },
    { name: "Cloud Computing & Deployment", level: 70, icon: "☁️" },
    { name: "Algorithms & Problem Solving", level: 85, icon: "🧩" }
  ];

  const education = [
    {
      degree: "BS – Computer Science",
      school: "FAST NUCES (Islamabad)",
      period: "Aug 2021 – Jul 2025",
      cgpa: "3.0",
      details: [
        "Comprehensive CS curriculum covering algorithms, data structures, software engineering, and AI/ML",
        "Multiple hands-on projects: Hospital Management (C++), University Management (ASP.NET), Library Management (JavaFX), AI/ML models",
        "Developed strong collaborative and teamwork skills through university projects, assignments, and participation in sports teams (cricket and football)"
      ]
    },
    {
      degree: "A Levels",
      school: "Beaconhouse School System (Islamabad)",
      period: "Aug 2019 - May 2021",
      grade: "1 A, 2 Bs",
      details: [
        "Mathematics, Computer Science, and Physics",
        "Strong foundation in analytical and computational thinking"
      ]
    },
    {
      degree: "O Levels",
      school: "The City School (Islamabad)",
      period: "Aug 2017 - May 2019",
      grade: "2 As, 4 Bs, 2 Cs",
      details: [
        "Sciences Major",
        "Early exposure to programming and problem-solving"
      ]
    }
  ];

  const experience = [
    {
      title: "UI/UX Designer & Software Developer",
      company: "ITHM Rawalpindi",
      period: "Nov 2025 – Present",
      location: "Rawalpindi, Pakistan",
      type: "Internship",
      points: [
        "Redesigned institute website with modern UI/UX featuring gradient backgrounds and responsive layouts for enhanced user engagement",
        "Developing Xenia Services corporate website from scratch using WordPress and Elementor with custom design elements",
        "Building institutional management system with integrated features for student records, course management, and administrative workflows"
      ]
    },
    {
      title: "Data Analyst & Frontend Engineer",
      company: "Upstart Commerce (Final Year Project)",
      period: "Aug 2024 – Jun 2025",
      location: "Islamabad, Pakistan",
      type: "Contract",
      points: [
        "Built ML models (CatBoost, Transformer4Rec) for customer segmentation and promotional forecasting",
        "Developed RESTful APIs and integrated with Flask/Streamlit frontend for seamless user experience",
        "Deployed cloud-native implementation following MACH architecture principles",
        "Collaborated with cross-functional team to deliver data-driven insights"
      ]
    },
    {
      title: "Data & IT Intern",
      company: "National Telecommunication Corporation",
      period: "Jul 2024 – Sep 2024",
      location: "Islamabad, Pakistan",
      type: "Internship",
      points: [
        "Automated network operations via Python scripts with Excel report generation",
        "Conducted network monitoring, troubleshooting, and performance analysis",
        "Improved operational efficiency by 30% through automation solutions",
        "Acquired practical knowledge of key networking commands, troubleshooting, and data interpretation"
      ]
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedFilter));

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-all duration-500 relative overflow-hidden`}>
      
      {/* Base Background */}
      <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'} transition-all duration-500`} />
      
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        {/* Gradient Blob 1 */}
        <div className={`absolute top-0 -left-40 w-96 h-96 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob`} />
        
        {/* Gradient Blob 2 */}
        <div className={`absolute top-0 -right-40 w-96 h-96 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000`} />
        
        {/* Gradient Blob 3 */}
        <div className={`absolute -bottom-40 left-20 w-96 h-96 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000`} />
        
        {/* Gradient Blob 4 */}
        <div className={`absolute bottom-20 right-20 w-96 h-96 ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000`} />
        
        {/* Gradient Blob 5 - Center */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${theme === 'dark' ? 'bg-teal-500' : 'bg-teal-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-slow`} />
      </div>
      
      {/* Noise Texture Overlay */}
      <div className={`fixed inset-0 pointer-events-none ${theme === 'dark' ? 'opacity-10' : 'opacity-5'}`} style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }} />
      
      {/* Grid Pattern */}
      <div className={`fixed inset-0 pointer-events-none ${theme === 'dark' ? 'opacity-5' : 'opacity-10'}`} style={{
        backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <nav className="fixed w-full z-50 transition-all duration-300">
        <div className={`mx-4 mt-4 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} shadow-2xl`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                  A
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Aasir Farrukh
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                {['About', 'Education', 'Courses', 'Certifications', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-all duration-300 hover:text-cyan-400 font-medium ${
                      activeSection === item.toLowerCase() ? 'text-cyan-400' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {item}
                  </a>
                ))}
                
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-900/10 hover:bg-gray-900/20'} transition-all`}
                >
                  {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
                </button>
              </div>
              
              <button
                className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className={`md:hidden mx-4 mt-2 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} shadow-2xl`}>
            <div className="px-4 pt-4 pb-4 space-y-2">
              {['About', 'Education', 'Courses', 'Certifications', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-white/60'} transition-all ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-medium`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <div
            className="transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          >
            
            <div className="mb-8 inline-block">
              <div className={`w-40 h-40 mx-auto rounded-3xl ${theme === 'dark' ? 'bg-white/10' : 'bg-white/40'} backdrop-blur-2xl border ${theme === 'dark' ? 'border-white/20' : 'border-white/60'} shadow-2xl p-1 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-20 animate-pulse" />
                <div className={`w-full h-full ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent relative z-10`}>
                  AF
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent drop-shadow-2xl">
              Aasir Farrukh
            </h1>
            
            <p className={`text-2xl md:text-3xl mb-4 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
              <span className="text-cyan-400">Frontend Developer</span> • 
              <span className="text-cyan-400"> Full-Stack Engineer</span> • 
              <span className="text-cyan-400"> Data Analyst</span>
            </p>
            
            <p className={`text-lg mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              Computer Science graduate passionate about building fast, accessible interfaces and data-driven applications with clean UI and solid engineering
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-semibold hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50 flex items-center gap-2 text-white"
              >
                <Sparkles size={20} /> View My Work
              </a>
              <a
                href="https://www.linkedin.com/in/aasirfarrukh/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-white/40'} backdrop-blur-2xl border ${theme === 'dark' ? 'border-white/20' : 'border-white/60'} rounded-2xl font-semibold hover:scale-105 transition-all shadow-xl flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/AasirFarrukh"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-white/40'} backdrop-blur-2xl border ${theme === 'dark' ? 'border-white/20' : 'border-white/60'} rounded-2xl font-semibold hover:scale-105 transition-all shadow-xl flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
          
          <ChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400" size={40} />
        </div>
      </section>

      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <User className="text-cyan-400" size={48} /> About Me
          </h2>
          
          <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-10 border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} shadow-2xl relative overflow-hidden`}>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-5" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-6 py-3 rounded-2xl mb-6 shadow-xl">
                <Award size={24} />
                <span className="font-bold text-lg">Frontend / Full-Stack Developer & Data Analyst</span>
              </div>
              
              <p className={`text-xl mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I build fast, accessible interfaces and data-driven tools with <span className="text-cyan-400 font-bold">HTML, CSS, and JavaScript</span>, 
                pairing clean UI with solid engineering and practical ML where it helps. I'm passionate about creating seamless user experiences 
                and solving complex problems with elegant solutions. Currently <span className="text-cyan-400 font-bold">open to junior roles and internships</span> where I can contribute and grow.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: GraduationCap, title: "Education", desc: "BS in Computer Science – FAST NUCES" },
                  { icon: Code, title: "Tech Stack", desc: "C++ / Python / C# / JavaScript / React" },
                  { icon: Briefcase, title: "Focus Areas", desc: "Clean UI • Performance • Machine Learning" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/50'} backdrop-blur-xl p-6 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} hover:scale-105 transition-all shadow-xl`}
                  >
                    <item.icon className="text-cyan-400" size={36} />
                    <h3 className={`font-bold text-lg mt-3 mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <GraduationCap className="text-cyan-400" size={48} /> Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-8 border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} hover:scale-[1.02] transition-all shadow-2xl relative overflow-hidden`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-bold text-lg">{edu.school}</p>
                  </div>
                  <div className="mt-3 md:mt-0 text-right">
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-mono text-lg`}>
                      {edu.period}
                    </p>
                    {edu.cgpa && (
                      <p className="text-cyan-400 font-bold text-lg">CGPA: {edu.cgpa}</p>
                    )}
                    {edu.grade && (
                      <p className="text-cyan-400 font-bold text-lg">Grade: {edu.grade}</p>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-2xl">•</span>
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COURSES SECTION ==================== */}
      <section id="courses" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <GraduationCap className="text-cyan-400" size={48} /> Courses
          </h2>

          {/* Course Categories */}
          <div className="space-y-4">
            
            {/* AI & Machine Learning */}
            <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
              <button
                onClick={() => toggleCourseCategory('ai')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    AI & Machine Learning
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-500/30 text-cyan-700'}`}>
                    4 courses
                  </span>
                </div>
                <ChevronDown className={`transition-transform ${openCourseCategories.ai ? 'rotate-180' : ''}`} size={24} />
              </button>
              
              <div className={`transition-all duration-300 ${openCourseCategories.ai ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: "Artificial Intelligence", code: "AI2002" },
                    { name: "Deep Learning for Perception", code: "CS4045" },
                    { name: "Generative AI", code: "AI4009" },
                    { name: "Digital Image Processing", code: "CS4055" }
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className={`${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} transition-all`}
                    >
                      <div className="text-cyan-400 font-bold text-xs mb-1">{course.code}</div>
                      <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Computer Science */}
            <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
              <button
                onClick={() => toggleCourseCategory('core')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    Core Computer Science
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/30 text-blue-700'}`}>
                    10 courses
                  </span>
                </div>
                <ChevronDown className={`transition-transform ${openCourseCategories.core ? 'rotate-180' : ''}`} size={24} />
              </button>
              
              <div className={`transition-all duration-300 ${openCourseCategories.core ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: "Introduction to Information and Communication Technology", code: "CL1000" },
                    { name: "Programming Fundamentals", code: "CS1002" },
                    { name: "Object Oriented Programming", code: "CS1004" },
                    { name: "Data Structures", code: "CS2001" },
                    { name: "Design and Analysis of Algorithms", code: "CS2009" },
                    { name: "Database Systems", code: "CS2005" },
                    { name: "Software Engineering", code: "CS3009" },
                    { name: "Software Design and Analysis", code: "CS3004" },
                    { name: "Operating Systems", code: "CS2006" },
                    { name: "Computer Organization and Assembly Language", code: "EE2003" }
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className={`${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} transition-all`}
                    >
                      <div className="text-blue-400 font-bold text-xs mb-1">{course.code}</div>
                      <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialized CS */}
            <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
              <button
                onClick={() => toggleCourseCategory('specialized')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    Specialized Computer Science
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-500/30 text-purple-700'}`}>
                    8 courses
                  </span>
                </div>
                <ChevronDown className={`transition-transform ${openCourseCategories.specialized ? 'rotate-180' : ''}`} size={24} />
              </button>
              
              <div className={`transition-all duration-300 ${openCourseCategories.specialized ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: "Digital Logic Design", code: "EE1005" },
                    { name: "Blockchain and Cryptocurrency", code: "CS4049" },
                    { name: "Cloud Computing", code: "CS4075" },
                    { name: "Computer Networks", code: "CS3001" },
                    { name: "Information Security", code: "CS3002" },
                    { name: "Parallel and Distributed Computing", code: "CS3006" },
                    { name: "Theory of Automata", code: "CS3005" },
                    { name: "User Experience Engineering", code: "CS4074" }
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className={`${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} transition-all`}
                    >
                      <div className="text-purple-400 font-bold text-xs mb-1">{course.code}</div>
                      <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mathematics */}
            <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
              <button
                onClick={() => toggleCourseCategory('math')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    Mathematics & Computing
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-500/30 text-green-700'}`}>
                    7 courses
                  </span>
                </div>
                <ChevronDown className={`transition-transform ${openCourseCategories.math ? 'rotate-180' : ''}`} size={24} />
              </button>
              
              <div className={`transition-all duration-300 ${openCourseCategories.math ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: "Calculus and Analytical Geometry", code: "MT1003" },
                    { name: "Linear Algebra", code: "MT1004" },
                    { name: "Differential Equations", code: "MT1006" },
                    { name: "Probability and Statistics", code: "MT2005" },
                    { name: "Statistical Modelling", code: "MT2002" },
                    { name: "Numerical Computing", code: "CS2008" },
                    { name: "Discrete Structures", code: "CS1005" }
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className={`${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} transition-all`}
                    >
                      <div className="text-green-400 font-bold text-xs mb-1">{course.code}</div>
                      <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business & Professional */}
            <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
              <button
                onClick={() => toggleCourseCategory('business')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                    Business & Professional Development
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-500/30 text-orange-700'}`}>
                    9 courses
                  </span>
                </div>
                <ChevronDown className={`transition-transform ${openCourseCategories.business ? 'rotate-180' : ''}`} size={24} />
              </button>
              
              <div className={`transition-all duration-300 ${openCourseCategories.business ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: "Digital Marketing", code: "MG4033" },
                    { name: "Marketing Management", code: "MG1002" },
                    { name: "Freelancing", code: "MG1007" },
                    { name: "Professional Practices in IT", code: "CS4001" },
                    { name: "Technical and Business Writing", code: "SS2007" },
                    { name: "English Composition and Comprehension", code: "SS1004" },
                    { name: "Communication and Presentation Skills", code: "SS1008" },
                    { name: "Islamic Studies/Ethics", code: "SS1002" },
                    { name: "Pakistan Studies", code: "SS1003" }
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className={`${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} transition-all`}
                    >
                      <div className="text-orange-400 font-bold text-xs mb-1">{course.code}</div>
                      <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sciences */}
            <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
              <button
                onClick={() => toggleCourseCategory('science')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>
                    Sciences
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-500/30 text-pink-700'}`}>
                    1 course
                  </span>
                </div>
                <ChevronDown className={`transition-transform ${openCourseCategories.science ? 'rotate-180' : ''}`} size={24} />
              </button>
              
              <div className={`transition-all duration-300 ${openCourseCategories.science ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: "Applied Physics", code: "NS1001" }
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className={`${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} transition-all`}
                    >
                      <div className="text-pink-400 font-bold text-xs mb-1">{course.code}</div>
                      <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS SECTION ==================== */}
      <section id="certifications" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <Award className="text-cyan-400" size={48} /> Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Certificate Cards */}
            {[
              {
                name: "AWS Academy Cloud Foundations",
                issuer: "Amazon Web Services",
                date: "May 2025",
                duration: "20 hours",
                image: "https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
                fallback: require('./Images/AWS-Academy-Cloud-Foundations.png'),
                link: "https://www.credly.com/go/aKWvh1V5",
                color: "from-orange-500 to-yellow-500"
              },
              {
                name: "Build a Free Website with WordPress",
                issuer: "Coursera Project Network",
                date: "October 2025",
                image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9EIA518R93MV/CERTIFICATE_LANDING_PAGE~9EIA518R93MV.jpeg",
                fallback: require('./Images/Build-a-Free-Website-with-WordPress.png'),
                link: "https://coursera.org/verify/9EIA518R93MV",
                color: "from-blue-500 to-purple-500"
              },
              {
                name: "Create Charts and Dashboard using Google Sheets",
                issuer: "Coursera",
                date: "October 2021",
                image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SWKJB4RRRCRE/CERTIFICATE_LANDING_PAGE~SWKJB4RRRCRE.jpeg",
                fallback: require('./Images/Create-Charts-and-Dashboard-using-Google-Sheets.png'),
                link: "https://coursera.org/verify/SWKJB4RRRCRE",
                color: "from-green-500 to-teal-500"
              },
              {
                name: "Sustainability E-Learning",
                issuer: "Nestlé Connect",
                date: "2024",
                image: require('./Images/Sustainability-E-Learning.png'),
                fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2314b8a6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dy='.3em' font-family='Arial'%3ENestlé Certificate%3C/text%3E%3C/svg%3E",
                color: "from-emerald-500 to-green-500"
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCertificate(cert)}
                className={`group cursor-pointer ${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-3xl overflow-hidden border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} hover:scale-105 transition-all shadow-2xl`}
              >
                {/* Certificate Image Preview */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Try fallback image first, then placeholder
                      if (e.target.src !== cert.fallback) {
                        e.target.src = cert.fallback;
                      } else {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23${theme === 'dark' ? '1f2937' : 'e5e7eb'}' width='400' height='300'/%3E%3Ctext x='50%25' y='45%25' font-size='60' text-anchor='middle' dy='.3em'%3E📜%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='16' fill='%23${theme === 'dark' ? '9ca3af' : '6b7280'}' text-anchor='middle' dy='.3em' font-family='Arial'%3ECertificate%3C/text%3E%3C/svg%3E`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* View Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 group-hover:scale-125 transition-transform">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                    {cert.name}
                  </h3>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} font-semibold`}>
                    {cert.issuer}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-white/10 text-gray-300' : 'bg-white/60 text-gray-700'}`}>
                      {cert.date}
                    </span>
                    {cert.duration && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-500/30 text-cyan-700'}`}>
                        {cert.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Add Note for Users */}
          <div className={`mt-8 p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'}`}>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center`}>
              💡 Click on any certificate to view it in full size
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className={`relative max-w-6xl w-full max-h-[95vh] ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Certificate Image */}
            <div className="flex-1 overflow-auto">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                className="w-full h-auto"
                onError={(e) => {
                  // Try fallback image first, then placeholder
                  if (e.target.src !== selectedCertificate.fallback) {
                    e.target.src = selectedCertificate.fallback;
                  } else {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23${theme === 'dark' ? '1f2937' : 'f3f4f6'}' width='800' height='600'/%3E%3Ctext x='50%25' y='45%25' font-size='80' text-anchor='middle' dy='.3em'%3E📜%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='24' fill='%23${theme === 'dark' ? '9ca3af' : '6b7280'}' text-anchor='middle' dy='.3em' font-family='Arial'%3ECertificate%3C/text%3E%3C/svg%3E`;
                  }
                }}
              />
            </div>

            {/* Certificate Info Footer */}
            <div className={`p-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {selectedCertificate.name}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedCertificate.issuer} • {selectedCertificate.date}
              </p>
              {selectedCertificate.link && (
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-all"
                >
                  <ExternalLink size={20} /> Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Project Demo Modal */}
      {selectedProject && selectedProject.demoImages && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => {
            setSelectedProject(null);
            setIsFooterOpen(true);
          }}
        >
          <div 
            className={`relative w-full h-full max-w-7xl max-h-[95vh] ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setIsFooterOpen(true);
              }}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation Buttons */}
            {selectedProject.demoImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => 
                    prev === 0 ? selectedProject.demoImages.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronDown size={32} className="text-white rotate-90" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => 
                    prev === selectedProject.demoImages.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronDown size={32} className="text-white -rotate-90" />
                </button>
              </>
            )}

            {/* Project Screenshot - Non-scrollable, fitted to view */}
            <div className="flex-1 flex items-center justify-center bg-gray-100 p-4 min-h-0">
              <img
                src={selectedProject.demoImages[currentImageIndex]}
                alt={`${selectedProject.title} - ${selectedProject.demoImageTitles?.[currentImageIndex] || `Screenshot ${currentImageIndex + 1}`}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const iconDisplay = selectedProject.isText 
                    ? `%3Ctext x='50%25' y='35%25' font-size='60' font-weight='bold' fill='white' text-anchor='middle' dy='.3em' font-family='Arial'%3E${encodeURIComponent(selectedProject.icon)}%3C/text%3E`
                    : `%3Ctext x='50%25' y='45%25' font-size='80' text-anchor='middle' dy='.3em'%3E${selectedProject.icon}%3C/text%3E`;
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2314b8a6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='1200' height='800'/%3E${iconDisplay}%3Ctext x='50%25' y='60%25' font-size='24' fill='%23${theme === 'dark' ? 'e5e7eb' : 'f3f4f6'}' text-anchor='middle' dy='.3em' font-family='Arial'%3EProject Screenshot%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>

            {/* Toggle Footer Button */}
            <button
              onClick={() => setIsFooterOpen(!isFooterOpen)}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${isFooterOpen ? 'translate-y-0' : '-translate-y-4'} z-20 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 backdrop-blur-xl rounded-t-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-2xl group`}
            >
              <span className="text-white font-bold text-sm">
                {isFooterOpen ? 'Hide Details' : 'Show Details'}
              </span>
              <ChevronDown size={20} className={`text-white transition-transform group-hover:scale-110 ${isFooterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Project Info Footer - Collapsible */}
            <div 
              className={`flex-shrink-0 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 ${
                isFooterOpen ? 'max-h-[400px] p-6' : 'max-h-0 p-0 overflow-hidden'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProject.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedProject.demoImageTitles?.[currentImageIndex] || `Screenshot ${currentImageIndex + 1}`}
                  </p>
                </div>
                
                {/* Image Counter */}
                <div className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-900/10'} font-bold`}>
                  {currentImageIndex + 1} / {selectedProject.demoImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {selectedProject.demoImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
                  {selectedProject.demoImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-4 transition-all ${
                        currentImageIndex === idx 
                          ? 'border-cyan-400 scale-110' 
                          : `border-transparent ${theme === 'dark' ? 'opacity-50 hover:opacity-100' : 'opacity-60 hover:opacity-100'}`
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-all"
                >
                  <Github size={20} /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <Code className="text-cyan-400" size={48} /> Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`group ${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl p-5 border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} hover:scale-105 hover:shadow-2xl transition-all shadow-lg relative overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  {/* Icon and Percentage */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-500/30'} backdrop-blur-xl`}>
                      <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className={`font-bold text-sm leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h3>
                  
                  {/* Minimal Progress Bar */}
                  <div className={`mt-3 w-full h-1.5 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300/50'} rounded-full overflow-hidden`}>
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className={`mt-8 ${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl p-6 border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'}`}>
            <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              💡 <span className="font-semibold">Strong in:</span> Python • Machine Learning • Full-Stack Development • Data Structures • Database Systems
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <Briefcase className="text-cyan-400" size={48} /> Professional Experience
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-8 border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} hover:scale-[1.02] transition-all shadow-2xl relative overflow-hidden`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-bold text-lg mb-2">{exp.company}</p>
                    
                    <div className={`flex flex-wrap gap-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="flex items-center gap-1">📍 {exp.location}</span>
                      <span>•</span>
                      <span className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-white/50'} backdrop-blur-xl font-medium`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 md:mt-0">
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-mono text-lg text-right`}>
                      {exp.period}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-2xl">✓</span>
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className={`text-5xl md:text-6xl font-bold flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <Code className="text-cyan-400" size={48} /> Projects
            </h2>
            
            <div className="flex gap-3 flex-wrap">
              {['all', 'web', 'ai', 'design', 'other'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all shadow-xl ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white scale-110'
                      : `${theme === 'dark' ? 'bg-white/10' : 'bg-white/40'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} backdrop-blur-xl border ${theme === 'dark' ? 'border-white/20' : 'border-white/60'} hover:scale-105`
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl overflow-hidden border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} hover:scale-105 transition-all group shadow-2xl`}
              >
                <div className="h-56 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center text-8xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                  {project.isText ? (
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform text-white font-bold text-4xl px-4 text-center drop-shadow-2xl">
                      {project.icon}
                    </span>
                  ) : (
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform drop-shadow-2xl">
                      {project.icon}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white group-hover:text-cyan-400' : 'text-gray-900'} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 ${theme === 'dark' ? 'bg-white/10' : 'bg-white/50'} backdrop-blur-xl rounded-full text-xs font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
                    >
                      <Github size={20} /> Code
                    </a>
                    {project.demoImages ? (
                      <button 
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                          setIsFooterOpen(true);
                        }}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
                      >
                        <ExternalLink size={20} /> Demo
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold">
                        <ExternalLink size={20} /> Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <Mail className="text-cyan-400" size={48} /> Contact
          </h2>
          
          <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-10 border ${theme === 'dark' ? 'border-white/10' : 'border-white/60'} shadow-2xl`}>
            
            <p className={`mb-8 text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Want to collaborate or have a role in mind? I'd love to hear from you! Email me at{' '}
              <a href="mailto:aasir.farrukh14@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-bold underline">
                aasir.farrukh14@gmail.com
              </a>
            </p>
            
            {formSubmitted && (
              <div className="mb-6 p-5 bg-green-500/20 border-2 border-green-500 rounded-2xl text-green-400 font-bold text-lg backdrop-blur-xl">
                ✓ Thanks! Your message has been sent successfully.
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <label className={`block mb-2 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-5 py-4 rounded-2xl ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500'} border-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all backdrop-blur-xl`}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-5 py-4 rounded-2xl ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500'} border-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all backdrop-blur-xl`}
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Your Message
                </label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-5 py-4 rounded-2xl ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500'} border-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all resize-none backdrop-blur-xl`}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50 flex items-center justify-center gap-3 text-white text-lg"
              >
                <Send size={24} /> Send Message
              </button>
            </div>
            
            <div className={`mt-10 pt-10 border-t ${theme === 'dark' ? 'border-white/10' : 'border-white/30'}`}>
              <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6 font-medium text-lg`}>
                Or connect with me on
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/AasirFarrukh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-2xl ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl transition-all hover:scale-110 shadow-xl`}
                >
                  <Github size={28} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aasirfarrukh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-2xl ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl transition-all hover:scale-110 shadow-xl`}
                >
                  <Linkedin size={28} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                </a>
                <a
                  href="mailto:aasir.farrukh14@gmail.com"
                  className={`p-5 rounded-2xl ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl transition-all hover:scale-110 shadow-xl`}
                >
                  <Mail size={28} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`${theme === 'dark' ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl border-t ${theme === 'dark' ? 'border-white/10' : 'border-white/40'} py-12 relative z-10 mt-20`}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                  A
                </div>
                <span className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Aasir Farrukh
                </span>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
                © 2025 All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/AasirFarrukh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Github size={28} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
              </a>
              <a
                href="https://www.linkedin.com/in/aasirfarrukh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={28} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
              </a>
              <a
                href="mailto:aasir.farrukh14@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                <Mail size={28} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
              </a>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t ${theme === 'dark' ? 'border-white/10' : 'border-white/30'} text-center`}>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
              Built with React and Tailwind CSS • Design by Aasir Farrukh
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl shadow-2xl shadow-cyan-500/50 hover:scale-110 transition-all z-50 ${
          activeSection === 'home' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ChevronDown className="transform rotate-180 text-white" size={28} />
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes blob-slow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          33% {
            transform: translate(-50%, -50%) scale(1.1) rotate(10deg);
          }
          66% {
            transform: translate(-50%, -50%) scale(0.9) rotate(-10deg);
          }
        }

        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }

        .animate-blob-slow {
          animation: blob-slow 30s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}

export default App;