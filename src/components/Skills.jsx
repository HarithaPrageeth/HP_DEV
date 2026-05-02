// src/components/Skills.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiPython, SiGit, SiFigma 
} from 'react-icons/si';

const SkillBar = ({ skill, percentage, icon: Icon, color }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${percentage}%` });
    }
  }, [isInView, controls, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="text-2xl" style={{ color }} />
          <span className="font-medium">{skill}</span>
        </div>
        <span className="text-purple-400">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { skill: "React", percentage: 90, icon: SiReact, color: "#61DAFB" },
    { skill: "JavaScript", percentage: 88, icon: SiJavascript, color: "#F7DF1E" },
    { skill: "TailwindCSS", percentage: 85, icon: SiTailwindcss, color: "#06B6D4" },
    { skill: "Node.js", percentage: 82, icon: SiNodedotjs, color: "#339933" },
    { skill: "MongoDB", percentage: 78, icon: SiMongodb, color: "#47A248" },
    { skill: "Python", percentage: 75, icon: SiPython, color: "#3776AB" },
    { skill: "Git", percentage: 85, icon: SiGit, color: "#F05032" },
    { skill: "Figma", percentage: 70, icon: SiFigma, color: "#F24E1E" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the technologies I work with regularly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            {skillsData.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <div className="space-y-4">
              {[
                { name: "Problem Solving", level: 90 },
                { name: "Team Collaboration", level: 85 },
                { name: "Communication", level: 88 },
                { name: "Time Management", level: 82 },
                { name: "Adaptability", level: 87 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;