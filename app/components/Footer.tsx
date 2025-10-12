import { personalInfo } from "../config";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-8 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
