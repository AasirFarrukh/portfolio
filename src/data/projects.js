/**
 * Projects data organized by category
 * Each project contains title, description, tags, icon, and optional demo images
 */

// Image imports for projects with demos
import dbScreen1 from '../Images/DB/screen1.png';
import dbScreen2 from '../Images/DB/screen2.png';
import dbScreen3 from '../Images/DB/screen3.png';
import dbScreen4 from '../Images/DB/screen4.png';

import oopScreen1 from '../Images/OOP/screen1.png';
import oopScreen2 from '../Images/OOP/screen2.png';
import oopScreen3 from '../Images/OOP/screen3.png';
import oopScreen4 from '../Images/OOP/screen4.png';

import coalScreen1 from '../Images/COAL/screen1.png';
import coalScreen2 from '../Images/COAL/screen2.png';
import coalScreen3 from '../Images/COAL/screen3.png';
import coalScreen4 from '../Images/COAL/screen4.png';
import coalScreen5 from '../Images/COAL/screen5.png';
import coalScreen6 from '../Images/COAL/screen6.png';

import pfScreen1 from '../Images/PF/screen1.png';
import pfScreen2 from '../Images/PF/screen2.png';
import pfScreen3 from '../Images/PF/screen3.png';
import pfScreen4 from '../Images/PF/screen4.png';
import pfScreen5 from '../Images/PF/screen5.png';

import iictHome from '../Images/IICT/home.png';
import iictMenu from '../Images/IICT/menu.png';
import iictDeals from '../Images/IICT/deals.png';
import iictCart from '../Images/IICT/cart.png';
import iictLogin from '../Images/IICT/login.png';
import iictSignup from '../Images/IICT/signup.png';

import cnetTopology from '../Images/Cnet/Topology.png';
import cnetSubnetting from '../Images/Cnet/subnetting.png';

import aiTimetable from '../Images/AI/ProjectOutput.png';

import dipVideo from '../Images/DIP/Optic-Disc-and-Cup-Segmentation.mp4';
import dipScreen1 from '../Images/DIP/screen1.png';
import dipScreen2 from '../Images/DIP/screen2.png';

import pdcResult from '../Images/PDC/result.png';

import sdaLogo from '../Images/SDA/LibraSys-logo.png';
import sdaLogin from '../Images/SDA/Login.png';
import sdaHome from '../Images/SDA/Home.png';
import sdaBookCatalog from '../Images/SDA/BookCatalog.png';
import sdaMemberCatalog from '../Images/SDA/MemberCatalog.png';
import sdaAddBook from '../Images/SDA/AddBook.png';
import sdaAddMember from '../Images/SDA/AddMember.png';
import sdaIssueBook from '../Images/SDA/IssueBook.png';
import sdaReturnRenew from '../Images/SDA/ReturnRenew.png';

import seLogin from '../Images/SE/Login.png';
import seAdminDashboard from '../Images/SE/AdminDashboard.png';
import seAdminCreateUser from '../Images/SE/AdminCreateUser.png';
import seAdminEditUser from '../Images/SE/AdminEditUser.png';
import seAdminManageResDir from '../Images/SE/AdminManageResDir.png';
import seAdminServiceReq from '../Images/SE/AdminServiceReq.png';
import seAdminServiceRequestList from '../Images/SE/AdminServiceRequestList.png';
import seAdminComplaintDetails from '../Images/SE/AdminComplaintDetails.png';
import seAdminComplaintFeedback from '../Images/SE/AdminComplaintFeedback.png';
import seAdminLostFound from '../Images/SE/AdminLostFound.png';
import seAdminRuleReg from '../Images/SE/AdminRuleReg.png';
import seAdminEmergencyPlan from '../Images/SE/AdminEmergencyPlan.png';
import seAdminSetEmergencyPlan from '../Images/SE/AdminSetEmergencyPlan.png';
import seAdminManageEmerNum from '../Images/SE/AdminManageEmerNum.png';
import seAdminAddEmergencyContacts from '../Images/SE/AdminAddEmergencyContacts.png';
import seAdminSocietyMap from '../Images/SE/AdminSocietyMap.png';
import seResidentListAdmin from '../Images/SE/ResidentListAdmin.png';
import seResidentDashboard from '../Images/SE/Residentdashboard.png';
import seResidentViewProfile from '../Images/SE/ResidentViewProfile.png';
import seResidentProfile from '../Images/SE/ResidentProfile.png';
import seResidentServiceRes from '../Images/SE/ResidentServiceRes.png';
import seResidentComplaint from '../Images/SE/ResidentComplaint.png';
import seResidentLostFound from '../Images/SE/ResidentLostFound.png';
import seResidentEmergencyContacts from '../Images/SE/ResidentEmergencyContacts.png';
import seResidentEmergencyPrep from '../Images/SE/ResidentEmergencyPrep.png';
import seResidentRules from '../Images/SE/ResidentRules.png';
import seResidentResDir from '../Images/SE/ResidentResDir.png';
import seResidentSocMap from '../Images/SE/ResidentSocMap.png';

const projects = [
  // ===== AI / Machine Learning =====
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
    desc: "Automated glaucoma detection system using U-Net deep learning for optic disc and cup segmentation from retinal fundus images. Developed for Digital Image Processing course (Semester 6). Calculates Cup-to-Disc Ratio (CDR) for diagnosis, trained on ORIGA dataset. Features Tkinter GUI for visualization with 90-95% segmentation accuracy.",
    tags: ["ai", "ml", "healthcare"],
    icon: "👁️",
    github: "https://github.com/AasirFarrukh/AutomatedGlaucomaDetection",
    demoVideo: dipVideo,
    demoImages: [dipScreen1, dipScreen2],
    demoImageTitles: ["GUI Interface", "Segmentation Results"]
  },
  {
    title: "Timetable Scheduler",
    desc: "University timetable scheduling system using Genetic Algorithm in Python, developed for the AI course (Semester 6). Features tournament selection, single-point crossover, and mutation for optimization. Enforces hard constraints (no double-booking, room capacity, scheduling rules) and soft constraints (morning theory, afternoon labs). Exports optimized timetables to Excel with fitness score of 90.5.",
    tags: ["ai", "python", "algorithms"],
    icon: "📅",
    github: "https://github.com/AasirFarrukh/TimetableScheduling",
    demoImages: [aiTimetable],
    demoImageTitles: ["Generated Timetable Output"]
  },

  // ===== Web Development =====
  {
    title: "University Management System",
    desc: "Role-based university system built with ASP.NET Web Forms and SQL Server. Features admin course management, faculty attendance tracking, student grade viewing, and normalized database schema with ADO.NET.",
    tags: ["web", "asp.net", "database"],
    icon: "FLEX 🎓",
    isText: true,
    github: "https://github.com/AasirFarrukh/FLEX",
    demoImages: [dbScreen1, dbScreen2, dbScreen3, dbScreen4],
    demoImageTitles: ["Login Page", "Admin Dashboard", "Faculty Dashboard", "Student Dashboard"]
  },
  {
    title: "Community Management System",
    desc: "Web-based platform for residential community management, developed for Software Engineering course (Semester 6). Features Admin and Resident modules for service requests, complaints, lost & found, emergency preparedness, rules & regulations, and interactive society maps. Built with ASP.NET Web Forms, C#, and MySQL backend with session-based authentication.",
    tags: ["web", "asp.net", "mysql"],
    icon: "SocietySync 🏘️",
    isText: true,
    github: "https://github.com/AasirFarrukh/SocietySync",
    demoImages: [
      seLogin, seAdminDashboard, seAdminCreateUser, seAdminEditUser, seAdminManageResDir, seResidentListAdmin,
      seAdminServiceReq, seAdminServiceRequestList, seAdminComplaintDetails, seAdminComplaintFeedback,
      seAdminLostFound, seAdminRuleReg, seAdminEmergencyPlan, seAdminSetEmergencyPlan, seAdminManageEmerNum,
      seAdminAddEmergencyContacts, seAdminSocietyMap, seResidentDashboard, seResidentViewProfile, seResidentProfile,
      seResidentServiceRes, seResidentComplaint, seResidentLostFound, seResidentEmergencyContacts,
      seResidentEmergencyPrep, seResidentRules, seResidentResDir, seResidentSocMap
    ],
    demoImageTitles: [
      "Login Page", "Admin Dashboard", "Create User", "Edit User", "Manage Resident Directory", "Resident List",
      "Service Request Form", "Service Request List", "Complaint Details", "Complaint Feedback",
      "Lost & Found", "Rules & Regulations", "Emergency Plan", "Set Emergency Plan", "Manage Emergency Numbers",
      "Add Emergency Contacts", "Society Map", "Resident Dashboard", "View Profile", "Resident Profile",
      "Service Requests", "File Complaint", "Lost & Found Items", "Emergency Contacts",
      "Emergency Preparedness", "Community Rules", "Resident Directory", "Society Map View"
    ]
  },
  {
    title: "Restaurant Website",
    desc: "Static restaurant website built with pure HTML and CSS. First semester ICT project focused on advanced styling techniques, responsive design, and modern UI aesthetics.",
    tags: ["web", "html", "css"],
    icon: "Food Stop 🍽️",
    isText: true,
    github: "https://github.com/AasirFarrukh",
    demoImages: [iictHome, iictMenu, iictDeals, iictCart, iictLogin, iictSignup],
    demoImageTitles: ["Home Page", "Menu Page", "Deals Page", "Cart Page", "Login Page", "Signup Page"]
  },

  // ===== Systems & Networking =====
  {
    title: "Network Topology",
    desc: "5th semester Computer Networks project designing and simulating a complex multi-protocol network in Cisco Packet Tracer. Implements VLSM, OSPF, EIGRP, RIP, Route Redistribution, DHCP, NAT, and Access Control Lists (ACLs) across multiple topology blocks.",
    tags: ["other", "networking"],
    icon: "Topology 🌐",
    isText: true,
    github: "https://github.com/AasirFarrukh/NetworkTopology",
    demoImages: [cnetTopology, cnetSubnetting],
    demoImageTitles: ["Network Topology Design", "VLSM Calculations"]
  },
  {
    title: "Neural Network Simulation",
    desc: "Multi-layer feedforward neural network simulation using POSIX threads, process forking, mutex locks, and pipes. Demonstrates parallelism, synchronization, and inter-process communication in C++ for forward and backpropagation.",
    tags: ["other", "cpp", "os"],
    icon: "Neural Net 🧠",
    isText: true,
    github: "https://github.com/AasirFarrukh/Neural-Network-Simulation"
  },
  {
    title: "OpenCL Parallel Image Processor",
    desc: "Parallel image processing application using OpenCL for GPU-accelerated grayscale conversion. Developed for Parallel & Distributed Computing course (Semester 6). Features dynamic memory allocation, chunked processing for large datasets, and kernel-based pixel manipulation. Demonstrates efficient parallel computing with scalable performance.",
    tags: ["other", "c", "opencl"],
    icon: "GPU Gray 🖼️",
    isText: true,
    github: "https://github.com/AasirFarrukh",
    demoImages: [pdcResult],
    demoImageTitles: ["Grayscale Conversion Result"]
  },

  // ===== Algorithms & Data Structures =====
  {
    title: "Largest Strongly Connected Component Finder",
    desc: "C++ program implementing Kosaraju's Algorithm to find the largest Strongly Connected Component in directed graphs. Processes large-scale graph datasets with DFS traversal, graph reversal, and SCC detection.",
    tags: ["other", "cpp", "algorithms"],
    icon: "SCC 🔗",
    isText: true,
    github: "https://github.com/AasirFarrukh/SCC-Discrete"
  },
  {
    title: "String Matching Algorithm",
    desc: "Design and Analysis of Algorithms project implementing sliding window search technique to identify complete dish sets from ingredient sequences. Ensures each ingredient is used once per dish with efficient pattern matching in C++.",
    tags: ["other", "cpp", "algorithms"],
    icon: "String Match 🔤",
    isText: true,
    github: "https://github.com/AasirFarrukh/StringMatching-Algo"
  },
  {
    title: "Optimal File Searching",
    desc: "Data Structures course project (Semester 3) implementing multiple tree-based search algorithms in C++. Compares performance of AVL trees, Red-Black trees, and B-Trees for efficient file search operations and demonstrates advanced data structure methodologies.",
    tags: ["other", "algorithms", "cpp"],
    icon: "🔍",
    github: "https://github.com/AasirFarrukh"
  },

  // ===== Application Development =====
  {
    title: "Library Management System",
    desc: "A JavaFX-based Library Management System developed for the Software Design & Analysis (SDA) course. Features role-based access (Admin, Librarian, Member), book & member management, loan/return system with due date tracking, reservation system, and report generation. Built with MVC architecture and MySQL backend using JDBC integration.",
    tags: ["other", "java", "javafx"],
    icon: sdaLogo,
    isImage: true,
    github: "https://github.com/AasirFarrukh/LibraSys",
    demoImages: [sdaLogin, sdaHome, sdaBookCatalog, sdaMemberCatalog, sdaAddBook, sdaAddMember, sdaIssueBook, sdaReturnRenew],
    demoImageTitles: ["Login Page", "Home Dashboard", "Book Catalog", "Member Catalog", "Add Book", "Add Member", "Issue Book", "Return & Renew"]
  },
  {
    title: "Doctor Appointment System",
    desc: "C++ OOP project simulating an online doctor appointment platform. Features role-based access (Admin/Doctor/Patient), appointment scheduling, file handling for persistent storage, and demonstrates encapsulation, inheritance, and polymorphism.",
    tags: ["other", "cpp", "oop"],
    icon: "Oladoc 🏥",
    isText: true,
    github: "https://github.com/AasirFarrukh/Oladoc",
    demoImages: [oopScreen1, oopScreen2, oopScreen3, oopScreen4],
    demoImageTitles: ["Main Menu", "Admin Dashboard", "Doctor Dashboard", "Patient Dashboard"]
  },

  // ===== Game Development =====
  {
    title: "2D Taxi Game",
    desc: "Interactive 2D taxi pickup and drop-off simulation game built with C++ using OpenGL and GLUT. Features collision detection, randomized traffic, leaderboard system, and adjustable difficulty.",
    tags: ["other", "cpp", "opengl"],
    icon: "Rush Hour 🚖",
    isText: true,
    github: "https://github.com/AasirFarrukh/RushHourGame",
    demoImages: [pfScreen1, pfScreen2, pfScreen3, pfScreen4, pfScreen5],
    demoImageTitles: ["Main Menu", "Choose Taxi", "Enter Name", "Gameplay", "Game Over"]
  },
  {
    title: "Brick Breaker Game",
    desc: "Classic brick breaker game implemented in x86 Assembly Language, running in DOS via DOSBox. Features multiple levels, lives system, high score tracking, pause/resume functionality, and collision detection logic.",
    tags: ["other", "assembly", "game"],
    icon: "Brick Breaker 🧱",
    isText: true,
    github: "https://github.com/AasirFarrukh/BrickBreaker",
    demoImages: [coalScreen1, coalScreen2, coalScreen3, coalScreen4, coalScreen5, coalScreen6],
    demoImageTitles: ["Start Screen", "Main Menu", "Instructions", "Gameplay", "High Score", "Game Over"]
  },

  // ===== Design =====
  {
    title: "Gamified Mental Wellness App",
    desc: "UX-focused wellness app prototyped in Figma with wireframing and usability testing for engagement and accessibility.",
    tags: ["other", "design", "figma"],
    icon: "🧠",
    github: "https://github.com/AasirFarrukh"
  }
];

export default projects;
