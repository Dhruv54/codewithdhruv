'use client';

import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        { name: 'C++', level: 95 },
        { name: 'C', level: 95 },
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 95 },
      ]
    },
    {
      title: 'Core Competencies',
      icon: <FaLaptopCode className="w-6 h-6" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 95 },
        { name: 'Object-Oriented Programming', level: 95 },
        { name: 'Multithreading & Memory Management', level: 95 },
        { name: 'Socket Programming', level: 95 },
        { name: 'Event-Driven Systems', level: 95 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'MSVC & GCC', level: 95 },
        { name: 'MFC', level: 95 },
        { name: 'FFmpeg', level: 95 },
        { name: 'OpenCV & GStreamer', level: 95 },
        { name: 'Visual Studio 2022 & VS Code', level: 95 },
        { name: 'Node.js', level: 95 },
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'MongoDB', level: 95 },
      ]
    }
  ];

  // Function to determine pill color based on skill level
  const getPillColor = (level: number) => {
    if (level >= 90) return 'bg-blue-600 dark:bg-blue-500 text-white';
    if (level >= 80) return 'bg-blue-500 dark:bg-blue-400 text-white';
    if (level >= 70) return 'bg-blue-400 dark:bg-blue-300 text-white';
    return 'bg-blue-300 dark:bg-blue-200 text-gray-800 dark:text-gray-800';
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here's an overview of my technical skills and expertise in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 rounded-full ${getPillColor(skill.level)} shadow-md`}
                  >
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;