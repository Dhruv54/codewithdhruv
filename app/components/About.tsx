'use client';

import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      year: '2023',
      title: 'Engineer - Software Development',
      company: 'Matrix Comsec Private Limited',
      description: 'Built client-based Windows & Streaming applications using VC++ with MFC, focusing on socket-based client-server communication. Developed major UI components and designed an event-driven playback system with non-blocking UI.'
    },
    {
      year: '2019',
      title: 'B.Tech in Computer Engineering',
      company: 'Dharmsinh Desai University',
      description: 'Completed Bachelor of Technology in Computer Engineering with a CPI of 7.62. Gained strong foundation in programming, algorithms, and software development.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">My Background</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate C++ developer with experience in system-level programming, video processing, and real-time applications. My expertise includes working with libraries like FFmpeg, OpenCV, and GStreamer to build performance-optimized software solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At Matrix Comsec, I've focused on building Windows applications using VC++ with MFC, implementing socket-based client-server communication, and developing UI components for improved user experience. I've also worked on security compliance following OWASP standards.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My core competencies include Data Structures & Algorithms, Object-Oriented Programming, Multithreading & Memory Management, and Socket Programming & Event-Driven Systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond my professional roles, I've developed personal projects in file compression (including Huffman, JPEG, and FFmpeg implementations) and full-stack development (MERN). In my free time, I enjoy playing chess, always strategizing for the next great move—both in the game and in technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Experience Timeline</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-500 before:to-blue-300">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {experience.year.slice(-2)}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <div className="font-bold text-gray-800 dark:text-white">{experience.year}</div>
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">{experience.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{experience.company}</div>
                    <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
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

export default About;