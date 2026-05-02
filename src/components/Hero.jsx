// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import profilePic from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 text-lg mb-2"
            >
              Hi, I'm
            </motion.h2>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              HARITHA PRAGEETH
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-6"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
            >
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating beautiful, responsive, and user-friendly applications.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 justify-center md:justify-start mt-8"
            >
              <a 
                href="https://github.com/HarithaPrageeth"
                className="text-gray-400 hover:text-[#333] transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/haritha-prageeth-33110724b" 
                className="text-gray-400 hover:text-[#0077b5] transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://www.facebook.com/share/1CpYRdYxTQ/?mibextid=wwXIfr" 
                className="text-gray-400 hover:text-[#1877f2] transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook />
              </a>
              <a 
                href="https://www.instagram.com/haritha_prageeth?igsh=cWZlZnk1YTRrem13&utm_source=ig_contact_invite" 
                className="text-gray-400 hover:text-[#e4405f] transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a 
                href="https://wa.me/+94783404023" 
                className="text-gray-400 hover:text-[#25D366] transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image with Profile Picture */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                  {/* Profile Picture - Replace the image URL with your own */}
                  <img 
                    src={profilePic} 
                    alt="HARITHA PRAGEETH"
                    className="w-full h-full object-cover"
                  />
                  {/* For local image, use: src="/src/assets/profile.jpg" */}
                  {/* Or use: src="./profile.jpg" if image is in public folder */}
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-purple-600 rounded-full p-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;