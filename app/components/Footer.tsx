import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-100 dark:bg-gray-950 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-600 dark:text-gray-400">
              © {currentYear} Dhruv. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 flex items-center">
              Made with <FaHeart className="mx-1 text-red-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;