// src/components/ProjectDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft, FiCalendar, FiFolder, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

// Import project images
import travelAppImg from '../assets/Travelapp.png';
import GPAAppImg from '../assets/GPA_Tracker.png';
import HelaLinkImg from '../assets/HelaLink.png';
import InternHubImg from '../assets/InternHub.png';
import UCSImg from '../assets/UCS.png';

const projectsData = {
  1: {
    id: 1,
    title: "Serendipity Sri Lanka - Travel App",
    shortDescription: "A beautiful Flutter travel application showcasing Sri Lanka's stunning destinations.",
    description: "Serendipity Sri Lanka is a beautiful Flutter travel application that showcases the stunning destinations of Sri Lanka. The name 'Serendipity' comes from Sri Lanka's ancient name 'Serendib' - meaning fortunate discoveries made by accident, perfectly capturing the magic of discovering Sri Lanka's hidden treasures. The app features detailed destination guides, user reviews, travel tips, offline maps, and booking integration for a seamless travel planning experience.",
    fullDescription: "This comprehensive travel app was developed to help tourists and locals discover the beauty of Sri Lanka. The app includes detailed information about historical sites, beaches, wildlife sanctuaries, and cultural experiences. Users can create personalized travel itineraries, read reviews from other travelers, and get real-time updates on weather and local events. The app also features an offline mode, allowing users to access destination guides without an internet connection.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "REST APIs"],
    image: travelAppImg,
    github: "https://github.com/HarithaPrageeth/sri_lanka_travel_app",
    demo: "https://travel-app-demo.com",
    features: [
      "Interactive destination maps with offline support",
      "User reviews and rating system",
      "Offline travel guides and maps",
      "Hotel and activity booking integration",
      "Customized itinerary planner with AI suggestions",
      "Real-time weather forecasts for destinations",
      "Multi-language support (English, Sinhala, Tamil)",
      "Social sharing and user profiles"
    ],
    challenges: "Integrating multiple APIs for real-time data while maintaining smooth performance on mobile devices, especially in areas with poor network connectivity.",
    solutions: "Implemented efficient caching strategies, optimized image loading with lazy loading, and created a robust offline-first architecture using local storage and sync capabilities.",
    year: "2024",
    category: "Mobile App",
    status: "Completed",
    images: [travelAppImg, travelAppImg, travelAppImg]
  },
  2: {
    id: 2,
    title: "GPA Tracker Pro",
    shortDescription: "A comprehensive academic management system for tracking GPA across multiple semesters.",
    description: "GPA Tracker Pro is a comprehensive, modern web application designed to help students track their academic performance across multiple semesters. This full-featured system combines GPA calculation, semester management, user authentication, and professional PDF reporting into a single, intuitive interface.",
    fullDescription: "The application was developed to address the needs of university students who struggle with manual GPA calculations. It provides real-time GPA updates as students input their grades, offers predictive analytics for future semesters, and generates professional reports that can be shared with advisors or potential employers. The system supports multiple grading scales and can be customized for different universities.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
    image: GPAAppImg,
    github: "https://github.com/HarithaPrageeth/GPA-Tracker-Pro---Complete-Academic-Management-System",
    demo: "https://gpa-tracker-demo.com",
    features: [
      "Multi-semester GPA tracking and history",
      "CGPA calculator with what-if scenarios",
      "Professional PDF report generation",
      "Secure user authentication with JWT",
      "Course management dashboard",
      "Academic performance analytics and charts",
      "Grade prediction for future courses",
      "Export data to Excel/CSV"
    ],
    challenges: "Ensuring accurate GPA calculations across different grading systems and international university standards while maintaining data integrity and security.",
    solutions: "Created a flexible grading system with configurable grading scales, implemented comprehensive validation rules, and used secure database transactions for all grade updates.",
    year: "2024",
    category: "Web Application",
    status: "Completed",
    images: [GPAAppImg, GPAAppImg, GPAAppImg]
  },
  3: {
    id: 3,
    title: "The Voice of Sri Lanka - HelaLink",
    shortDescription: "A mobile-first social media platform connecting Sri Lankan users.",
    description: "The Voice of Sri Lanka is a mobile-first social media platform designed to connect Sri Lankan users through secure, identity-verified profiles.",
    fullDescription: "HelaLink was created to provide a safe and culturally relevant social networking experience for Sri Lankans. The platform emphasizes verified identities to reduce fake accounts and spam. Users can create profiles, connect with friends, share content, and participate in community discussions. The interface is designed to be intuitive for users of all technical levels, with support for Sinhala and Tamil languages.",
    tech: ["UI/UX", "Adobe XD", "Figma", "Prototyping", "User Research"],
    image: HelaLinkImg,
    github: "https://github.com/HarithaPrageeth/HelaLink---Social-Media-Platform-UI-UX-",
    demo: "https://helalink-demo.com",
    features: [
      "Identity-verified profiles with document verification",
      "End-to-end encrypted messaging system",
      "Community groups and interest-based forums",
      "Content sharing with privacy controls",
      "Localized Sinhala/Tamil language support",
      "Dark mode and accessibility features",
      "News feed with personalized algorithms",
      "User reporting and moderation tools"
    ],
    challenges: "Designing an intuitive UI that balances modern social media expectations with Sri Lankan cultural values and user preferences.",
    solutions: "Conducted extensive user research with diverse Sri Lankan user groups, created multiple design iterations, and tested prototypes with real users before finalizing.",
    year: "2023",
    category: "UI/UX Design",
    status: "In Development",
    images: [HelaLinkImg, HelaLinkImg, HelaLinkImg]
  },
  4: {
    id: 4,
    title: "Internship Management System",
    shortDescription: "A platform connecting students with internship opportunities.",
    description: "A complete web-based platform for managing internships, connecting students with companies.",
    fullDescription: "This comprehensive internship management system streamlines the entire internship process from posting opportunities to final placement. Companies can create profiles and post internship positions with detailed requirements. Students can create profiles, upload resumes, search for opportunities, and submit applications. Administrators have full oversight of the process, can track applications, and generate reports on placement statistics.",
    tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: InternHubImg,
    github: "https://github.com/HarithaPrageeth/Internship-Management-System",
    demo: "https://internhub-demo.com",
    features: [
      "Company and student profile management",
      "Advanced internship search and filtering",
      "Application tracking with status updates",
      "Resume and document management",
      "Automated email notifications",
      "Admin dashboard with analytics",
      "Interview scheduling system",
      "Feedback and rating system"
    ],
    challenges: "Managing concurrent applications, preventing duplicate submissions, and ensuring fair opportunity distribution among students.",
    solutions: "Implemented database locking mechanisms, unique application constraints, and fair queuing algorithms for application processing.",
    year: "2023",
    category: "Web Application",
    status: "Completed",
    images: [InternHubImg, InternHubImg, InternHubImg]
  },
  5: {
    id: 5,
    title: "Universal Converter Switch (UCS)",
    shortDescription: "A comprehensive desktop application for real-time conversions.",
    description: "UCS (Universal Converter Switch) is a comprehensive, user-friendly desktop application developed in Java that allows users to perform real-time conversions across multiple measurement and data types.",
    fullDescription: "UCS is a powerful desktop utility that supports over 500 different conversion types across categories including length, weight, temperature, currency, data storage, speed, and more. The application features a clean, intuitive interface with real-time conversion as users type. It includes a history feature for tracking recent conversions, favorite conversions for quick access, and support for both light and dark themes.",
    tech: ["Java", "Java Swing", "OOP", "File I/O", "Multithreading"],
    image: UCSImg,
    github: "https://github.com/HarithaPrageeth/UCS",
    demo: "https://ucs-demo.com",
    features: [
      "500+ unit conversions across 12 categories",
      "Real-time currency exchange rates",
      "Conversion history and favorites",
      "Copy-to-clipboard functionality",
      "Dark/Light theme toggle",
      "Keyboard shortcuts for power users",
      "Export conversion history to CSV",
      "Custom unit creation feature"
    ],
    challenges: "Ensuring mathematical accuracy for hundreds of conversion formulas while maintaining high performance.",
    solutions: "Created a modular conversion engine with thoroughly tested formulas, used multithreading for async operations, and implemented caching for frequently used conversions.",
    year: "2023",
    category: "Desktop Application",
    status: "Completed",
    images: [UCSImg, UCSImg, UCSImg]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-300 mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-8"
        >
          <div className="h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <FiCalendar /> {project.year}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <FiFolder /> {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <FiGithub /> View Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
              <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <FiAlertCircle className="text-yellow-400 mt-1" />
                    <h3 className="text-lg font-semibold">Challenge</h3>
                  </div>
                  <p className="text-gray-300 ml-6">{project.challenges}</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <FiCheckCircle className="text-green-400 mt-1" />
                    <h3 className="text-lg font-semibold">Solution</h3>
                  </div>
                  <p className="text-gray-300 ml-6">{project.solutions}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Project Info</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm text-gray-400">Category</h3>
                  <p className="text-gray-200">{project.category}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Year</h3>
                  <p className="text-gray-200">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Status</h3>
                  <p className={`font-semibold ${
                    project.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {project.status}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <a 
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                <FiGithub /> View Source Code
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;