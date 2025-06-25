'use client';

import { motion } from 'framer-motion';
import { SiCplusplus, SiC, SiPython, SiJavascript, SiNumpy, SiPandas, SiMongodb, SiOpencv, SiFfmpeg, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiGithub, SiPostman, SiJira, SiConfluence, SiNodedotjs, SiExpress, SiVscodium, SiJupyter, SiElectron } from 'react-icons/si';
import './skills.css';

const abstractSkills = [
  { label: 'OOP', icon: '🧱' },
  { label: 'Multithreading', icon: '🧵' },
  { label: 'Socket Programming', icon: '🔌' },
  { label: 'TLS/SSL', icon: '🔐' },
  { label: 'P2P Runtime', icon: '🌐' },
  { label: 'Problem Solving', icon: '🧠' },
  { label: 'OWASP', icon: '🛡️' },
];

const iconSkills = [
  { label: 'C++', icon: <SiCplusplus className="text-blue-600 text-5xl" /> },
  { label: 'C', icon: <SiC className="text-gray-600 text-5xl" /> },
  { label: 'Python', icon: <SiPython className="text-yellow-500 text-5xl" /> },
  { label: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { label: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-5xl" /> },
  { label: 'Express.js', icon: <SiExpress className="text-gray-700 text-5xl" /> },
  { label: 'React', icon: <SiReact className="text-blue-500 text-5xl" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white text-5xl" /> },
  { label: 'MongoDB', icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { label: 'HTML5', icon: <SiHtml5 className="text-orange-600 text-5xl" /> },
  { label: 'CSS3', icon: <SiCss3 className="text-blue-500 text-5xl" /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { label: 'Git', icon: <SiGit className="text-orange-500 text-5xl" /> },
  { label: 'GitHub', icon: <SiGithub className="text-gray-900 dark:text-white text-5xl" /> },
  { label: 'Postman', icon: <SiPostman className="text-orange-500 text-5xl" /> },
  { label: 'Jira', icon: <SiJira className="text-blue-500 text-5xl" /> },
  { label: 'Confluence', icon: <SiConfluence className="text-blue-500 text-5xl" /> },
  { label: 'VS Code', icon: <SiVscodium className="text-blue-600 text-5xl" /> },
  { label: 'FFmpeg', icon: <SiFfmpeg className="text-black dark:text-white text-5xl" /> },
  { label: 'OpenCV', icon: <SiOpencv className="text-blue-800 text-5xl" /> },
  { label: 'NumPy', icon: <SiNumpy className="text-indigo-600 text-5xl" /> },
  { label: 'Pandas', icon: <SiPandas className="text-black dark:text-white text-5xl" /> },
  { label: 'Jupyter', icon: <SiJupyter className="text-orange-400 text-5xl" /> },
  { label: 'Electron', icon: <SiElectron className="text-gray-700 dark:text-white text-5xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-16 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skill Bowl</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A vibrant collection of tools, frameworks, and concepts I use and love.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {iconSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="glow-effect animate-float"
              title={skill.label}
            >
              <div className="w-20 h-20 text-5xl flex items-center justify-center">
                {skill.icon}
              </div>
            </motion.div>
          ))}

          {abstractSkills.map((skill, index) => (
            <motion.div
              key={`abs-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="glow-effect animate-float"
              title={skill.label}
            >
              <div className="w-20 h-20 text-5xl flex items-center justify-center text-5xl">
                {skill.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
