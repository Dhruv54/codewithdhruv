'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [state, handleSubmit] = useForm("xpwrjygg");
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Use useEffect to handle form submission success
  useEffect(() => {
    if (state.succeeded) {
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   // Simulate form submission
  //   try {
  //     // In a real application, you would send the form data to your backend or a form service
  //     await new Promise(resolve => setTimeout(resolve, 1500));
      
  //     setSubmitStatus({
  //       success: true,
  //       message: 'Your message has been sent successfully!'
  //     });
      
  //     // Reset form
  //     setFormData({
  //       name: '',
  //       email: '',
  //       message: ''
  //     });
  //   } catch (error) {
  //     setSubmitStatus({
  //       success: false,
  //       message: 'There was an error sending your message. Please try again.'
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Vadodara, Gujarat</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:dhruvpatel.dev01@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    dhruvpatel.dev01@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 8238340058</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Dhruv54" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/pateldhruv003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:dhruvpatel.dev01@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`mb-6 p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {state.submitting || isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;