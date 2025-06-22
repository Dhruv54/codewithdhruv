'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Dhruv</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            A passionate Software Developer crafting high-performance, real-time systems — from C++ and video processing to full-stack web apps. I thrive at the intersection of code, creativity, and problem-solving.
          </h2>


          <div className="flex space-x-4">
            <a
              href="https://github.com/Dhruv54"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/pateldhruv003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:dhruvpatel.dev01@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="/#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors text-center"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-md transition-colors text-center"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
            <Image
              src="/profile.jpeg"
              alt="Dhruv's profile picture"
              fill
              // className="object-cover p-4 dark:invert"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;