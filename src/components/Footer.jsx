import React from "react";
import { motion } from "framer-motion";

const Footer = ({ fadeIn }) => {
  return (
    <motion.footer
      {...fadeIn}
      className="mt-16 bg-gradient-to-br from-gray-900 to-black text-center py-8"
    >
      <p>&copy; 2024 Marc Backes. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
