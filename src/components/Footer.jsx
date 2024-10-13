import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa";

const Footer = ({ fadeIn }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bodyHeight = document.body.offsetHeight;
      const isBottom = scrollPosition >= bodyHeight - 50; // 50px threshold
      const isScrollingUp = window.scrollY < lastScrollY;

      setIsAtBottom(isBottom);
      
      if (isBottom) {
        setIsExpanded(true);
      } else if (isScrollingUp && isExpanded && !isBottom) {
        setIsExpanded(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const toggleExpanded = (e) => {
    e.preventDefault(); // Prevent default behavior (like scrolling to top)
    
    // Don't minimize when clicking on links or when at the bottom
    if (e.target.tagName.toLowerCase() === 'a' || isAtBottom) {
      return;
    }

    if (!isAtBottom) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleIconClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Prevent event from bubbling up
    // Here you can add custom logic for icon clicks if needed
    console.log("Icon clicked:", e.currentTarget.href);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-4">
      <motion.footer
        layout
        initial={{ borderRadius: 20, width: "40px", height: "40px" }}
        animate={{ 
          width: isExpanded ? "min(87vw, 600px)" : "40px",
          height: isExpanded ? "auto" : "40px",
          borderRadius: isExpanded ? 12 : 20,
          backgroundColor: isAtBottom ? "rgba(17, 24, 39, 1)" : "rgba(17, 24, 39, 0.3)",
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.19, 1, 0.22, 1],
        }}
        className="backdrop-blur-md text-white text-center overflow-hidden shadow-lg relative"
        onClick={toggleExpanded}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronUp size={20} className="text-green-400" />
        </motion.div>
        <motion.div
          className="px-6 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mt-2 text-gray-400">© 2024 Sylvester Sila. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" onClick={handleIconClick}>
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" onClick={handleIconClick}>
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" onClick={handleIconClick}>
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Footer;
