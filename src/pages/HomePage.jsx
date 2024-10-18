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
  SiPostgresql,
  SiDotnet,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import ProjectSection from "../components/ProjectSection";
import TheVeldt from "../components/TheVeldt";
import Footer from "../components/Footer";

import eShop from "../assets/projects/e-shop-1.png";
import sunnyShop from "../assets/projects/sunny-shop.png";
import facebookUi from "../assets/projects/facebook-ui.png";
import musicPlayer from "../assets/projects/music-player.png";
import ytUi from "../assets/projects/yt-ui.png";
import onlineEditor from "../assets/projects/online-editor.png";
import rhythmPlayer from "../assets/projects/rhythmPlayer.png";
import liuShan from "../assets/profile/liu-shan.jpg";
import BeautyAndTerror from "../components/BeautyAndTerror";

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stackItems = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Elixir", icon: <SiElixir /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: "DotNet", icon: <SiDotnet /> },
    { name: "Python", icon: <SiPython /> },
    // {}
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const handleMouseMove = (event, projectIndex) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      title: "Shoppie",
      description:
        "An online store built with plain JS and HTML that allows users to browse and purchase clothes. It includes features such as a shopping cart and a checkout process.",
      image: eShop,
      technologies: [
        SiJavascript,
        SiTailwindcss,
        // SiNetlify,
        // SiDocker,
        // SiGraphql,
        // SiExpress,
      ],
      live: "https://samh7.github.io/online-shop/",
      code: "https://github.com/samh7/online-shop",
    },

    {
      title: "OnLineEditor",
      description:
        "An online code editor built with plain JS, HTML, and CSS. It allows users to write, run, and save code snippets.",
      image: onlineEditor,
      technologies: [SiJavascript, SiTailwindcss],
      live: "https://samh7.github.io/online-editor",
      code: "https://github.com/samh7/online-editor",
    },

    {
      title: "Simple Music Player",
      description:
        "A simple music player built with plain JS, HTML, and CSS. It allows users to play, pause, and skip songs.",
      image: musicPlayer,
      technologies: [SiJavascript, SiTailwindcss],
      live: "https://samh7.github.io/music_player/",
      code: "https://github.com/samh7/music_player",
    },
    {
      title: "Rhythm Player",
      description:
        "A  music player app built with React and Tailwind CSS. It allows users to add song to queue as well as play, pause, repeat, shuffle and skip them.",
      image: rhythmPlayer,
      technologies: [SiJavascript, SiReact, SiTailwindcss],
      live: "https://rythm-player.netlify.app/",
      code: "",
    },
  ];

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-roboto min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-[600px]">
          <motion.div
            variants={itemVariants}
            {...fadeIn}
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center relative">
              <img src={liuShan} alt="LiuShan" className="rounded-xl mr-4" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            {...fadeIn}
            className="text-4xl font-bold h-24 sm:h-12  mt-8 mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Sylvester Sila / Software Engineer
          </motion.h1>

          <motion.div variants={itemVariants} {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold">Hello there 👋</h2>
            {/* <p className="mt-2">To my humble abode.</p> */}
            <p className="mt-4">
              I'm <span className="font-bold">Sylvester Sila</span> a full-stack
              developer with a passion for creating precise and efficient
              software.
            </p>
            <p className="mt-4">
              I have an interest in{" "}
              <span className="font-bold text-pink-500">
                {" "}
                solving problems{" "}
              </span>
              and learning from them as well as{" "}
              <span className="font-bold text-pink-500"> learning </span> new
              technologies and in expanding my skill set.
            </p>
            <p className="mt-4">
              Some of my projects listed below but be sure to check out my{" "}
              <a
                href="https://github.com/samh7"
                className="font-bold text-pink-500"
              >
                Github
              </a>{" "}
              for more.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold">Languages & Tools</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {stackItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="flex items-center bg-gray-800 rounded-full px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="mr-2 text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectSection key={index} project={project} />
              ))}
            </div>
          </motion.div>

          {/* <TheVeldt /> */}
        </div>
      </div>
      {/*       
      <div className="mb-8">
        <BeautyAndTerror />
      </div> */}

      <Footer variants={itemVariants} fadeIn={fadeIn} />
    </div>
  );
};

export default HomePage;
