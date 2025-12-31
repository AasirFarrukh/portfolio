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
    desc: "U-Net based deep learning model for optic disc segmentation on retinal images with Tkinter GUI for early glaucoma detection.",
    tags: ["ai", "ml", "healthcare"],
    icon: "👁️",
    github: "https://github.com/AasirFarrukh"
  },
  {
    title: "Timetable Scheduler",
    desc: "Intelligent scheduling system using genetic algorithms in Python for university timetable optimization with hard/soft constraint handling.",
    tags: ["ai", "python", "algorithms"],
    icon: "📅",
    github: "https://github.com/AasirFarrukh"
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
    desc: "Web application using ASP.NET with SCRUM methodology, featuring role-based access control and MySQL database integration.",
    tags: ["web", "asp.net", "mysql"],
    icon: "🏘️",
    github: "https://github.com/AasirFarrukh"
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
    desc: "Java desktop application using JavaFX and MySQL with MVC architecture, featuring interactive dashboards and transaction workflows.",
    tags: ["other", "java", "javafx"],
    icon: "📚",
    github: "https://github.com/AasirFarrukh"
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
