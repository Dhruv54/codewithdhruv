'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Scalable Pipeline Manager',
      description:
        'Built a modular media pipeline using modern C++17 and GStreamer for real-time video streaming. Used smart pointers, RAII, and multi-threading for performance and memory safety.',
      techStack: ['C++17', 'GStreamer', 'RTSP', 'Multi-threading'],
      githubLink: 'https://github.com/Dhruv54',
    },
    {
      title: 'P2P Chess Game',
      description:
        'Built a real-time P2P Chess Game with Hyperswarm for decentralized networking and live state sync. Won 2nd Place at Pear Global Hackathon.',
      techStack: ['JavaScript', 'Hyperswarm', 'P2P Networking', 'Chess Engine'],
      githubLink: 'https://github.com/Dhruv54/P2P-Chess-Game',
    },
    {
      title: 'File Compression',
      description:
        'Developed a Windows-based application using Python Tkinter for text file compression with Huffman Coding. Focused on efficient encoding and user-friendly GUI design.',
      techStack: ['Python', 'Tkinter', 'Huffman Coding'],
      githubLink: 'https://github.com/Dhruv54',
    },
    {
      title: 'Household Dinner Task Rotation System',
      description:
        'A production-ready Next.js + MongoDB Atlas app for managing household dinner task rotations with secure authentication, role-based access, and automated email notifications.',
      techStack: [
        'Next.js',
        'TailwindCSS',
        'Node.js',
        'MongoDB Atlas',
        'Google Apps Script',
        'Vercel',
      ],
      githubLink: 'https://github.com/Dhruv54',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my projects showcasing my skills.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`hidden sm:flex absolute left-[-2.5rem] z-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full p-3 shadow-md transition ${
              !canScrollPrev
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <FaChevronLeft />
          </button>

          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-6 px-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_48%] bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 flex flex-col justify-between p-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-5 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`hidden sm:flex absolute right-[-2.5rem] z-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full p-3 shadow-md transition ${
              !canScrollNext
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
