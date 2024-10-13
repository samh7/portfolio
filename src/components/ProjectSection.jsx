import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";

const ProjectSection = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      className="bg-gray-900 text-white rounded-xl 
      flex flex-col sm:flex-row justify-between items-center
      shadow-lg w-[87vw] max-w-[600px] mx-auto overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left Section */}
      <div className="w-full order-2 sm:order-1 sm:w-[45%] p-4 sm:p-6">
        <div className="mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((Icon, i) => (
            <Icon key={i} className="text-lg" />
          ))}
        </div>
        <p className="text-gray-400 text-xs mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex space-x-2">
          <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
            <FaGithub className="mr-1" /> Code
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
            <FaPlay className="mr-1" /> Live
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full order-1 sm:order-2 object-start sm:w-[55%] h-[240px] sm:h-[220px] overflow-hidden"
        onMouseMove={handleMouseMove}
        ref={imageRef}
      >
        <motion.div
          className="w-[120%] h-[120%]"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            x: `-${mousePosition.x * 20}%`,
            y: `-${mousePosition.y * 20}%`,
          }}
          transition={{ type: "tween", ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectSection;
