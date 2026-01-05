/**
 * Projects data organized by category
 * Each project contains title, description, tags, icon, and optional demo images
 */

// Image imports for projects with demos
import dbScreen1 from '../Images/DB/screen1.png';
import dbScreen2 from '../Images/DB/screen2.png';
import dbScreen3 from '../Images/DB/screen3.png';
import dbScreen4 from '../Images/DB/screen4.png';
import flexLogo from '../Images/DB/flexLogo.png';

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

import dlUI1 from '../Images/DL/UI1.png';
import dlUI2 from '../Images/DL/UI2.png';

import genaiUI from '../Images/GenAI/UI.png';

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

// InfoSec Lab Project images
import infosecDockerBuild from '../Images/InfoSec/docker build.png';
import infosecActivatedDockers from '../Images/InfoSec/activated dockers.png';
import infosecSettingDocker from '../Images/InfoSec/setting docker.png';
import infosecDNSConfig from '../Images/InfoSec/DNS Configuration.png';
import infosecActivatedWebsites from '../Images/InfoSec/activated websites.png';
import infosecTask31PostRequest from '../Images/InfoSec/Task 3.1-post request alice.png';
import infosecTask32SendRequest from '../Images/InfoSec/Task 3.2-send request.png';
import infosecTask32SamyId from '../Images/InfoSec/Task 3.2-samy id.png';
import infosecTask32ScriptAddFriend from '../Images/InfoSec/Task 3.2-script add friend.png';
import infosecTask32AliceFriends from '../Images/InfoSec/Task 3.2-alice friends.png';
import infosecTask33SamyPostRequest from '../Images/InfoSec/Task 3.3 samy post request.png';
import infosecTask33EditDescScript from '../Images/InfoSec/Task 3.3 edit description script.png';
import infosecTask33AliceHacked from '../Images/InfoSec/Task 3.3 alice hacked.png';
import infosecTask41CommentingScript from '../Images/InfoSec/Task 4.1- commenting script.png';
import infosecTask41AddFriendBlocked from '../Images/InfoSec/Task 4.1-add friend script not executed.png';
import infosecTask41EditProfileBlocked1 from '../Images/InfoSec/Task 4.1-edit profile script not executed1.png';
import infosecTask41EditProfileBlocked2 from '../Images/InfoSec/Task 4.1-edit profile script not executed2.png';
import infosecTask42PageSource from '../Images/InfoSec/Task 4.2- Page source.png';
import infosecTask42LinkA from '../Images/InfoSec/Task 4.2- Link a.png';
import infosecTask42LinkBGet from '../Images/InfoSec/Task 4.2- Link b-get.png';
import infosecTask42LinkBPost from '../Images/InfoSec/Task 4.2- Link b-post.png';

// Blockchain Calculator DApp images
import bcVersions from '../Images/Blockchain/1. versions.png';
import bcGanacheWorkspace from '../Images/Blockchain/2. ganacheNewWorkspace.png';
import bcMetamask from '../Images/Blockchain/3. metamask.png';
import bcPackageCreated from '../Images/Blockchain/4. packageCreated.png';
import bcPackageEdited from '../Images/Blockchain/5. PackageEdited.png';
import bcCalculatorSol from '../Images/Blockchain/6. calculatorSolFile.png';
import bcRemixCode from '../Images/Blockchain/7. codePasteOnRemix.png';
import bcCompilationSuccess from '../Images/Blockchain/8. CompilationSuccessful.png';
import bcCopiedABI from '../Images/Blockchain/9. copiedABI.png';
import bcMetamaskDeploy from '../Images/Blockchain/10. MetaMaskSettingBeforeDeploy.png';
import bcContractDeployed from '../Images/Blockchain/11. contractDeployed.png';
import bcSavedHTML from '../Images/Blockchain/12. savedHTML.png';
import bcFrontend from '../Images/Blockchain/13. frontend.png';
import bcCorrectResult from '../Images/Blockchain/14. correctResult.png';

// ZenQuest UX Project images
import uxLofi1 from '../Images/UX/Lo-fi/s1.jpg';
import uxLofi2 from '../Images/UX/Lo-fi/s2.jpg';
import uxLofi3 from '../Images/UX/Lo-fi/s3.jpg';
import uxLofi4 from '../Images/UX/Lo-fi/s4.jpg';
import uxLofi5 from '../Images/UX/Lo-fi/s5.jpg';
import uxLofi6 from '../Images/UX/Lo-fi/s6.jpg';
import uxLofi7 from '../Images/UX/Lo-fi/s7.jpg';
import uxLofi8 from '../Images/UX/Lo-fi/s8.jpg';
import uxMidfi from '../Images/UX/Mid-fi/midfi.png';
import uxHifi from '../Images/UX/Hi-fi/hifi.png';

const projects = [
  // ===== AI / Machine Learning =====
  {
    title: "Video Frame Prediction",
    desc: "Deep learning project predicting future video frames using ConvLSTM, PredRNN, and Transformer architectures. Trained on UCF101 dataset (WalkingWithDog, JumpRope, Biking, Swing, Basketball) with 64x64 frames, using Adam optimizer and MSE loss. Evaluates with MSE and SSIM metrics. Features Streamlit UI for real-time visualization and model comparison.",
    tags: ["ai", "ml", "deeplearning"],
    icon: "🎬",
    github: "https://github.com/AasirFarrukh/VideoFramePrediction-DL",
    demoImages: [dlUI1, dlUI2],
    demoImageTitles: ["Streamlit UI - Model Selection", "Frame Prediction Results"]
  },
  {
    title: "AI-Powered Fitness Routine Planner",
    desc: "Generative AI project for personalized workout plans using LLMs, FAISS semantic search with Sentence Transformers, and Vision Transformer (ViT) for 22-category workout image classification. Features text-based exercise suggestions via semantic similarity and image-based workout recognition. Built with Gradio UI, trained on curated Kaggle fitness datasets.",
    tags: ["ai", "ml", "python"],
    icon: "💪",
    github: "https://github.com/AasirFarrukh/AI-Powered-Fitness-Routine-Planner",
    demoImages: [genaiUI],
    demoImageTitles: ["Gradio Interface - Workout Planner"]
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
    title: "University Management System",
    desc: "Role-based university system built with ASP.NET Web Forms and SQL Server. Features admin course management, faculty attendance tracking, student grade viewing, and normalized database schema with ADO.NET.",
    tags: ["web", "asp.net", "database"],
    icon: flexLogo,
    isImage: true,
    github: "https://github.com/AasirFarrukh/FLEX",
    demoImages: [dbScreen1, dbScreen2, dbScreen3, dbScreen4],
    demoImageTitles: ["Login Page", "Admin Dashboard", "Faculty Dashboard", "Student Dashboard"]
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

  // ===== Systems & Security =====
  {
    title: "Calculator DApp on Ethereum",
    desc: "Blockchain & Cryptocurrency project demonstrating complete DApp lifecycle on Ethereum. Built Calculator smart contract in Solidity with add, subtract, multiply, divide operations and zero-division validation. Deployed to Ganache local testnet via Remix IDE and MetaMask. Features Web3.js frontend integration with transaction signing and result verification.",
    tags: ["systems", "blockchain", "web3"],
    icon: "Blockchain ⛓️",
    isText: true,
    github: "https://github.com/AasirFarrukh",
    demoImages: [
      bcVersions, bcGanacheWorkspace, bcMetamask, bcPackageCreated, bcPackageEdited,
      bcCalculatorSol, bcRemixCode, bcCompilationSuccess, bcCopiedABI,
      bcMetamaskDeploy, bcContractDeployed,
      bcSavedHTML, bcFrontend, bcCorrectResult
    ],
    demoImageTitles: [
      "Node.js & npm Versions Installed", "Ganache Workspace Setup", "MetaMask Connected to Ganache", "Package.json Created", "Package.json Configured",
      "Calculator.sol Smart Contract", "Code Pasted in Remix IDE", "Compilation Successful", "Contract ABI Copied",
      "MetaMask Settings Before Deploy", "Contract Deployed Successfully",
      "Frontend HTML Saved", "Calculator DApp Interface", "Correct Result - Transaction Verified"
    ]
  },
  {
    title: "Web Security Lab",
    desc: "Information Security project exploring SQL Injection and CSRF vulnerabilities on Ubuntu 20.04 VM with Docker containers. Demonstrates authentication bypass, data manipulation, and GET/POST-based CSRF attacks on Elgg platform. Implements defenses including prepared statements, secret tokens, and SameSite cookies (None/Lax/Strict).",
    tags: ["systems", "security", "docker"],
    icon: "InfoSec 🔐",
    isText: true,
    github: "https://github.com/AasirFarrukh",
    demoImages: [
      infosecDockerBuild, infosecSettingDocker, infosecActivatedDockers, infosecDNSConfig, infosecActivatedWebsites,
      infosecTask31PostRequest,
      infosecTask32SamyId, infosecTask32ScriptAddFriend, infosecTask32SendRequest, infosecTask32AliceFriends,
      infosecTask33SamyPostRequest, infosecTask33EditDescScript, infosecTask33AliceHacked,
      infosecTask41CommentingScript, infosecTask41AddFriendBlocked, infosecTask41EditProfileBlocked1, infosecTask41EditProfileBlocked2,
      infosecTask42PageSource, infosecTask42LinkA, infosecTask42LinkBGet, infosecTask42LinkBPost
    ],
    demoImageTitles: [
      "Docker Build Process", "Docker Container Setup", "Activated Docker Containers", "DNS Configuration", "Activated Websites",
      "SQL Injection - POST Request to Alice",
      "CSRF Attack - Samy's User ID", "CSRF Attack - Add Friend Script", "CSRF Attack - Send Request", "CSRF Attack - Alice's Friends List Modified",
      "CSRF Profile Edit - Samy POST Request", "CSRF Profile Edit - Description Script", "CSRF Profile Edit - Alice's Profile Hacked",
      "Defense - Commenting CSRF Script", "Defense - Add Friend Attack Blocked", "Defense - Edit Profile Attack Blocked (1)", "Defense - Edit Profile Attack Blocked (2)",
      "SameSite Cookies - Page Source", "SameSite Cookies - Link A Test", "SameSite Cookies - Link B GET Request", "SameSite Cookies - Link B POST Request"
    ]
  },
  {
    title: "Network Topology",
    desc: "5th semester Computer Networks project designing and simulating a complex multi-protocol network in Cisco Packet Tracer. Implements VLSM, OSPF, EIGRP, RIP, Route Redistribution, DHCP, NAT, and Access Control Lists (ACLs) across multiple topology blocks.",
    tags: ["systems", "networking"],
    icon: "Topology 🌐",
    isText: true,
    github: "https://github.com/AasirFarrukh/NetworkTopology",
    demoImages: [cnetTopology, cnetSubnetting],
    demoImageTitles: ["Network Topology Design", "VLSM Calculations"]
  },
  {
    title: "OpenCL Parallel Image Processor",
    desc: "Parallel image processing application using OpenCL for GPU-accelerated grayscale conversion. Developed for Parallel & Distributed Computing course (Semester 6). Features dynamic memory allocation, chunked processing for large datasets, and kernel-based pixel manipulation. Demonstrates efficient parallel computing with scalable performance.",
    tags: ["systems", "c", "opencl"],
    icon: "GPU Gray 🖼️",
    isText: true,
    github: "https://github.com/AasirFarrukh",
    demoImages: [pdcResult],
    demoImageTitles: ["Grayscale Conversion Result"]
  },
  {
    title: "Neural Network Simulation",
    desc: "Multi-layer feedforward neural network simulation using POSIX threads, process forking, mutex locks, and pipes. Demonstrates parallelism, synchronization, and inter-process communication in C++ for forward and backpropagation.",
    tags: ["systems", "cpp", "os"],
    icon: "Neural Net 🧠",
    isText: true,
    github: "https://github.com/AasirFarrukh/Neural-Network-Simulation"
  },

  // ===== Applications =====
  {
    title: "Library Management System",
    desc: "A JavaFX-based Library Management System developed for the Software Design & Analysis (SDA) course. Features role-based access (Admin, Librarian, Member), book & member management, loan/return system with due date tracking, reservation system, and report generation. Built with MVC architecture and MySQL backend using JDBC integration.",
    tags: ["apps", "java", "javafx"],
    icon: sdaLogo,
    isImage: true,
    github: "https://github.com/AasirFarrukh/LibraSys",
    demoImages: [sdaLogin, sdaHome, sdaBookCatalog, sdaMemberCatalog, sdaAddBook, sdaAddMember, sdaIssueBook, sdaReturnRenew],
    demoImageTitles: ["Login Page", "Home Dashboard", "Book Catalog", "Member Catalog", "Add Book", "Add Member", "Issue Book", "Return & Renew"]
  },
  {
    title: "Doctor Appointment System",
    desc: "C++ OOP project simulating an online doctor appointment platform. Features role-based access (Admin/Doctor/Patient), appointment scheduling, file handling for persistent storage, and demonstrates encapsulation, inheritance, and polymorphism.",
    tags: ["apps", "cpp", "oop"],
    icon: "Oladoc 🏥",
    isText: true,
    github: "https://github.com/AasirFarrukh/Oladoc",
    demoImages: [oopScreen1, oopScreen2, oopScreen3, oopScreen4],
    demoImageTitles: ["Main Menu", "Admin Dashboard", "Doctor Dashboard", "Patient Dashboard"]
  },
  {
    title: "2D Taxi Game",
    desc: "Interactive 2D taxi pickup and drop-off simulation game built with C++ using OpenGL and GLUT. Features collision detection, randomized traffic, leaderboard system, and adjustable difficulty.",
    tags: ["apps", "cpp", "opengl"],
    icon: "Rush Hour 🚖",
    isText: true,
    github: "https://github.com/AasirFarrukh/RushHourGame",
    demoImages: [pfScreen1, pfScreen2, pfScreen3, pfScreen4, pfScreen5],
    demoImageTitles: ["Main Menu", "Choose Taxi", "Enter Name", "Gameplay", "Game Over"]
  },
  {
    title: "Brick Breaker Game",
    desc: "Classic brick breaker game implemented in x86 Assembly Language, running in DOS via DOSBox. Features multiple levels, lives system, high score tracking, pause/resume functionality, and collision detection logic.",
    tags: ["apps", "assembly", "game"],
    icon: "Brick Breaker 🧱",
    isText: true,
    github: "https://github.com/AasirFarrukh/BrickBreaker",
    demoImages: [coalScreen1, coalScreen2, coalScreen3, coalScreen4, coalScreen5, coalScreen6],
    demoImageTitles: ["Start Screen", "Main Menu", "Instructions", "Gameplay", "High Score", "Game Over"]
  },
  {
    title: "Largest Strongly Connected Component Finder",
    desc: "C++ program implementing Kosaraju's Algorithm to find the largest Strongly Connected Component in directed graphs. Processes large-scale graph datasets with DFS traversal, graph reversal, and SCC detection.",
    tags: ["apps", "cpp", "algorithms"],
    icon: "SCC 🔗",
    isText: true,
    github: "https://github.com/AasirFarrukh/SCC-Discrete"
  },
  {
    title: "String Matching Algorithm",
    desc: "Design and Analysis of Algorithms project implementing sliding window search technique to identify complete dish sets from ingredient sequences. Ensures each ingredient is used once per dish with efficient pattern matching in C++.",
    tags: ["apps", "cpp", "algorithms"],
    icon: "String Match 🔤",
    isText: true,
    github: "https://github.com/AasirFarrukh/StringMatching-Algo"
  },
  {
    title: "Optimal File Searching",
    desc: "Data Structures course project (Semester 3) implementing multiple tree-based search algorithms in C++. Compares performance of AVL trees, Red-Black trees, and B-Trees for efficient file search operations and demonstrates advanced data structure methodologies.",
    tags: ["apps", "algorithms", "cpp"],
    icon: "🔍",
    github: "https://github.com/AasirFarrukh"
  },

  // ===== Design =====
  {
    title: "Gamified Stress Management App",
    desc: "User Experience Engineering (Semester 8) project - a gamified stress-relief mobile app for university students. Features mindfulness mini-games, guided breathing exercises, progress tracking, and emergency relief tools. Achieved SUS score of 78.3/100 through usability testing with Think-Aloud Protocol and Nielsen's Heuristics. Prototyped in Figma across Lo-fi, Mid-fi, and Hi-fi stages.",
    tags: ["design", "figma", "ux"],
    icon: "ZenQuest 🧘",
    isText: true,
    github: "https://github.com/AasirFarrukh/ZenQuest-FigmaPrototypes",
    demoImages: [
      uxLofi1, uxLofi2, uxLofi3, uxLofi4, uxLofi5, uxLofi6, uxLofi7, uxLofi8,
      uxMidfi, uxHifi
    ],
    demoImageTitles: [
      "Lo-fi: Home & Navigation", "Lo-fi: Emergency Relief Screen", "Lo-fi: Breathing Exercise", "Lo-fi: Mindfulness Games",
      "Lo-fi: Progress Dashboard", "Lo-fi: Daily Challenges", "Lo-fi: Mood Tracking", "Lo-fi: Settings & Profile",
      "Mid-fi: Complete Wireframe Flow", "Hi-fi: Final Polished Prototype"
    ]
  }
];

export default projects;
