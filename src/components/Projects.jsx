// src/components/Projects.jsx - Modal Version (No Router Needed)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiX, FiCalendar, FiFolder, FiCheckCircle, FiAlertCircle, FiExternalLink } from 'react-icons/fi';

// Import project images
import travelAppImg from '../assets/Travelapp.png';
import GPAAppImg from '../assets/GPA_Tracker.png';
import HelaLinkImg from '../assets/HelaLink.png';
import InternHubImg from '../assets/InternHub.png';
import UCSImg from '../assets/UCS.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Serendipity Sri Lanka - Travel App",
      shortDescription: "A beautiful Flutter travel application showcasing Sri Lanka's stunning destinations.",
      description: "Serendipity Sri Lanka is a beautiful Flutter travel application that showcases the stunning destinations of Sri Lanka. The name 'Serendipity' comes from Sri Lanka's ancient name 'Serendib' - meaning fortunate discoveries made by accident, perfectly capturing the magic of discovering Sri Lanka's hidden treasures.",
      fullDescription: "This comprehensive travel app was developed to help tourists and locals discover the beauty of Sri Lanka. The app includes detailed information about historical sites, beaches, wildlife sanctuaries, and cultural experiences. Users can create personalized travel itineraries, read reviews from other travelers, and get real-time updates on weather and local events.",
      tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      image: travelAppImg,
      github: "https://github.com/HarithaPrageeth/sri_lanka_travel_app",
      demo: "#",
      features: [
        "Interactive destination maps with offline support",
        "User reviews and rating system",
        "Offline travel guides and maps",
        "Hotel and activity booking integration",
        "Customized itinerary planner",
        "Real-time weather forecasts"
      ],
      challenges: "Integrating multiple APIs for real-time data while maintaining smooth performance on mobile devices.",
      solutions: "Implemented efficient caching strategies and optimized image loading with lazy loading.",
      year: "2024",
      category: "Mobile App",
      status: "Completed"
    },
    {
      id: 2,
      title: "GPA Tracker Pro",
      shortDescription: "A comprehensive academic management system for tracking GPA across multiple semesters.",
      description: "GPA Tracker Pro is a comprehensive, modern web application designed to help students track their academic performance across multiple semesters.",
      fullDescription: "The application addresses the needs of university students who struggle with manual GPA calculations. It provides real-time GPA updates, offers predictive analytics, and generates professional reports.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      image: GPAAppImg,
      github: "https://github.com/HarithaPrageeth/GPA-Tracker-Pro---Complete-Academic-Management-System",
      demo: "#",
      features: [
        "Multi-semester GPA tracking",
        "CGPA calculator",
        "PDF report generation",
        "User authentication",
        "Course management",
        "Performance analytics"
      ],
      challenges: "Ensuring accurate GPA calculations across different grading systems.",
      solutions: "Created a flexible grading system with configurable grading scales.",
      year: "2024",
      category: "Web Application",
      status: "Completed"
    },
    {
      id: 3,
      title: "The Voice of Sri Lanka - HelaLink",
      shortDescription: "A mobile-first social media platform connecting Sri Lankan users.",
      description: "A mobile-first social media platform designed to connect Sri Lankan users through secure, identity-verified profiles.",
      fullDescription: "HelaLink provides a safe and culturally relevant social networking experience for Sri Lankans with verified identities to reduce fake accounts.",
      tech: ["UI/UX", "Adobe XD", "Figma", "Prototyping"],
      image: HelaLinkImg,
      github: "https://github.com/HarithaPrageeth/HelaLink---Social-Media-Platform-UI-UX-",
      demo: "#",
      features: [
        "Identity-verified profiles",
        "Encrypted messaging",
        "Community groups",
        "Content sharing",
        "Multi-language support",
        "Dark mode"
      ],
      challenges: "Designing intuitive UI balancing modern expectations with cultural values.",
      solutions: "Conducted user research with diverse Sri Lankan user groups.",
      year: "2023",
      category: "UI/UX Design",
      status: "In Development"
    },
    {
      id: 4,
      title: "Internship Management System",
      shortDescription: "A platform connecting students with internship opportunities.",
      description: "A complete web-based platform for managing internships, connecting students with companies.",
      fullDescription: "This system streamlines the entire internship process from posting opportunities to final placement with company profiles, student applications, and admin oversight.",
      tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
      image: InternHubImg,
      github: "https://github.com/HarithaPrageeth/Internship-Management-System",
      demo: "#",
      features: [
        "Company and student profiles",
        "Internship search",
        "Application tracking",
        "Resume management",
        "Email notifications",
        "Admin dashboard"
      ],
      challenges: "Managing concurrent applications and preventing duplicates.",
      solutions: "Implemented database locking mechanisms and unique constraints.",
      year: "2023",
      category: "Web Application",
      status: "Completed"
    },
    {
      id: 5,
      title: "Universal Converter Switch (UCS)",
      shortDescription: "A comprehensive desktop application for real-time conversions.",
      description: "A user-friendly desktop application for real-time conversions across multiple measurement types.",
      fullDescription: "UCS supports over 500 conversion types across categories including length, weight, temperature, currency, data storage, and speed with a clean, intuitive interface.",
      tech: ["Java", "Java Swing", "OOP", "File I/O"],
      image: UCSImg,
      github: "https://github.com/HarithaPrageeth/UCS",
      demo: "#",
      features: [
        "500+ unit conversions",
        "Real-time currency rates",
        "Conversion history",
        "Copy to clipboard",
        "Dark/Light theme",
        "Export to CSV"
      ],
      challenges: "Ensuring mathematical accuracy for hundreds of conversion formulas.",
      solutions: "Created a modular conversion engine with thoroughly tested formulas.",
      year: "2023",
      category: "Desktop Application",
      status: "Completed"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent works - Click on any project to see more details
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-purple-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> Code
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="container mx-auto px-4 py-8 max-w-6xl min-h-screen flex items-center"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl w-full">
                {/* Modal Header */}
                <div className="relative h-64 md:h-96">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h2>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <FiCalendar /> {selectedProject.year}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <FiFolder /> {selectedProject.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          selectedProject.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={selectedProject.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-purple-600 transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                      {selectedProject.demo && selectedProject.demo !== "#" && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                        <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                        <p className="text-gray-300 leading-relaxed mt-3">{selectedProject.fullDescription}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Key Features</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Challenges & Solutions</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-start gap-2 mb-2">
                              <FiAlertCircle className="text-yellow-400 mt-1" />
                              <h4 className="text-lg font-semibold">Challenge</h4>
                            </div>
                            <p className="text-gray-300 ml-6">{selectedProject.challenges}</p>
                          </div>
                          <div>
                            <div className="flex items-start gap-2 mb-2">
                              <FiCheckCircle className="text-green-400 mt-1" />
                              <h4 className="text-lg font-semibold">Solution</h4>
                            </div>
                            <p className="text-gray-300 ml-6">{selectedProject.solutions}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Project Info</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-400">Category</p>
                            <p className="text-gray-200">{selectedProject.category}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Year</p>
                            <p className="text-gray-200">{selectedProject.year}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Status</p>
                            <p className={`font-semibold ${
                              selectedProject.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                            }`}>
                              {selectedProject.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;