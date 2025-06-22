'use client';

import { motion } from 'framer-motion';
import { FaMedal, FaGraduationCap } from 'react-icons/fa';

interface Achievement {
  icon: JSX.Element;
  title: string;
  description: string;
  date: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      icon: <FaMedal className="w-8 h-8 text-yellow-500" />,
      title: '2nd Place at Pear Global Hackathon',
      description: 'Built a real-time P2P Chess Game with Hyperswarm for decentralized networking and live state sync.',
      date: '2022'
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-blue-500" />,
      title: 'B.Tech in Computer Engineering',
      description: 'Graduated from Dharmsinh Desai University with a CPI of 7.62.',
      date: '2019-2023'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Achievements & Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Key accomplishments and educational background.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 mr-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  {achievement.icon}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{achievement.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{achievement.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;