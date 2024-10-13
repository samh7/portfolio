import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaInfoCircle,
} from "react-icons/fa";

import {
  SiCsharp,
  SiSqlite,
  SiElixir,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiNetlify,
  SiDocker,
  SiGraphql,
  SiPython,
  SiMongodb,
  SiTensorflow,
  SiElectron,
} from "react-icons/si";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";

import eShop from "../assets/projects/e-shop-1.png";
import sunnyShop from "../assets/projects/sunny-shop.png";
import facebookUi from "../assets/projects/facebook-ui.png";
import musicPlayer from "../assets/projects/music-player.png";
import ytUi from "../assets/projects/yt-ui.png";
import liuShan from "../assets/profile/liu-shan.jpg";
const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stackItems = [
    { name: "C#", icon: <SiCsharp /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Elixir", icon: <SiElixir /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    // { name: "Angular.js", icon: <SiAngularjs /> },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, projectIndex) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      title: "Capitalympics",
      description:
        "A web application to help users learn about country flags and capitals, offering a focused learning experience based on regions. Built using Vue.js and Tailwind CSS, with backend services hosted via Docker and Nginx.",
      image: eShop,
      technologies: [
        SiTypescript,
        SiTailwindcss,
        SiNetlify,
        SiDocker,
        SiGraphql,
        SiExpress,
      ],
    },
    {
      title: "DevFlow",
      description:
        "A developer productivity tool that integrates with popular version control systems and project management tools. Built with React and Node.js, it helps streamline the development workflow.",
      image: sunnyShop,
      technologies: [FaReact, FaNodeJs, SiTypescript, SiExpress, SiDocker],
    },
    // {
    //   title: "EcoTrack",
    //   description: "An IoT-based environmental monitoring system that collects and analyzes data from various sensors. Utilizes Python for data processing and React for the dashboard interface.",
    //   image: "https://placehold.co/600x400/00FF00/000000?text=EcoTrack",
    //   technologies: [FaReact, SiPython, SiMongodb, SiAmazonaws],
    // },
    {
      title: "CodeMentor AI",
      description:
        "An AI-powered coding assistant that provides real-time suggestions and explanations. Built with machine learning models and integrated into popular IDEs.",
      image: facebookUi,
      technologies: [SiPython, SiTensorflow, FaReact, SiElectron],
    },

    {
      title: "CodeMentor AI",
      description:
        "An AI-powered coding assistant that provides real-time suggestions and explanations. Built with machine learning models and integrated into popular IDEs.",
      image: ytUi,
      technologies: [SiPython, SiTensorflow, FaReact, SiElectron],
    },
    {
      title: "CodeMentor AI",
      description:
        "An AI-powered coding assistant that provides real-time suggestions and explanations. Built with machine learning models and integrated into popular IDEs.",
      image: musicPlayer,
      technologies: [SiPython, SiTensorflow, FaReact, SiElectron],
    },
  ];

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-roboto min-h-screen">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-[600px]">
          <motion.div
            {...fadeIn}
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center relative">
              <img src={liuShan} alt="LiuShan" className="rounded-xl mr-4" />
              <div
                className="absolute bottom-2 right-6 cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <FaInfoCircle className="text-white/20 text-xl" />
              </div>
              {showTooltip && (
                <div className="absolute bottom-10 right-4  bg-gray-800/50 text-white p-2  rounded shadow-lg">
                  Liu Shan - Roamer, HOK
                </div>
              )}
            </div>
            {/* coming soon */}
            {/* <nav className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Uses
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Contact
              </a>
            </nav> */}
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="text-4xl font-bold h-24 sm:h-12  mt-8 mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Sylvester Sila / Software Engineer
          </motion.h1>

          <motion.div {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold">Welcome.</h2>
            <p className="mt-2">To my humble abode.</p>
            <p className="mt-4">
              You stumbled upon my blog I am{" "}
              <span className="font-bold">Marc Backes</span>, Dev Team Lead at
              talkevent Software, and a full-stack developer mainly using Vue,
              Nuxt, and Node.
            </p>
            <p className="mt-4">
              Stay and browse around if you're interested in{" "}
              <span className="font-bold">tech & coding</span>.
            </p>
            <p className="mt-4">
              You're probably not interested, but for accountability, I keep
              public track of my{" "}
              <span className="font-bold text-pink-500">
                goals and progress
              </span>{" "}
              for this year.
            </p>
            <p className="mt-4">
              I've also made a 2024{" "}
              <span className="font-bold text-pink-500">bingo card</span> with
              things that I predict that will happen.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold">Writing.</h2>
            <p className="mt-2">Blog posts about coding & tech.</p>
          </motion.div>

          <motion.div {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectSection key={index} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* <Footer fadeIn={fadeIn} /> */}
    </div>
  );
};

export default HomePage;
