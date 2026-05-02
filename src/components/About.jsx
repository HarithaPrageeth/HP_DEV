// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCode } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiCode />, value: '5+', label: 'Projects Completed' },
    { icon: <FiUsers />, value: '0', label: 'Happy Clients' },
    { icon: <FiAward />, value: '1', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience building
              web applications. I specialize in React, Node.js, and modern JavaScript frameworks.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development started when I built my first website in college,
              and since then, I've been hooked on creating digital experiences that make a difference.
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              technologies.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-700 rounded-lg"
                >
                  <div className="text-3xl text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What I do?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">▹</span>
                  <span>Develop responsive web applications using React and Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">▹</span>
                  <span>Create RESTful APIs with Node.js and Express</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">▹</span>
                  <span>Design intuitive user interfaces with TailwindCSS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">▹</span>
                  <span>Implement state management using Redux and Context API</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">▹</span>
                  <span>Deploy applications on Vercel, Netlify, and AWS</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;