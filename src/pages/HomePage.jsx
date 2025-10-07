import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiCsharp,
  SiSqlite,
  SiElixir,
  SiPhp,
  SiTypescript,
  SiTailwindcss,
  SiNetlify,
  SiDocker,
  SiGraphql,
  SiAngular,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiNestjs,
  SiTrpc,
  SiPnpm,
  SiGithubactions,
  SiMysql,
  SiXampp,
  SiLinux,
  SiWindows,
  SiNextdotjs,
} from "react-icons/si";
import Footer from "../components/Footer";
import sila from "../assets/profile/sila.jpg";
import Contact from "../components/Contact";
const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stackItems = [
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "React", icon: <FaReact /> },
    { name: "NextJs", icon: <SiNextdotjs /> },
    { name: "NestJs", icon: <SiNestjs /> },
    { name: "TRPC", icon: <SiTrpc /> },
    { name: "Graphql", icon: <SiGraphql /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Pnpm", icon: <SiPnpm /> },
    { name: "Github Actions", icon: <SiGithubactions /> },
    { name: "Mysql", icon: <SiMysql /> },
    { name: "XAMPP", icon: <SiXampp /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Windows", icon: <SiWindows /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Unit & Integration Testing", icon: < ></> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Elixir", icon: <SiElixir /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "DotNet", icon: <SiDotnet /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: "Sqlite", icon: <SiSqlite /> },
  ];

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

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProfilePicture = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-roboto min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-[600px]">
          <motion.div
            variants={itemVariants}
            {...fadeIn}
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center relative flex-wrap">
              <motion.img
                onClick={toggleProfilePicture}
                src={sila}
                alt="sila"
                layout="position"
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                loading="lazy"
                className={`cursor-pointer my-2 mb-3 transition-all duration-500 object-cover
                  ${isExpanded
                    ? "w-full rounded-xl aspect-square object-cover"
                    : "w-[200px] rounded-xl aspect-square object-right"
                  }`}
              />

              <motion.div
                layout
                initial={false}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.3,
                }}
                className={`relative p-6 bg-gradient-to-r from-gray-900/50 to-black/50 
                  rounded-xl border border-gray-800 backdrop-blur-sm shadow-xl flex flex-col justify-center
                  ${isExpanded ? "w-full mt-4" : "ml-4 flex-1 min-w-[300px]"}`}
              >
                <div className="absolute -top-4 left-4">
                  <span className="text-blue-400 text-xl">❝</span>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div className="text-gray-300 text-lg font-light leading-relaxed italic">
                    <span className="line-clamp-3 text-sm font-bold">
                      Courage is the most important of all the virtues, because
                      without courage you can&apos;t practice any other virtue
                      consistently.
                    </span>
                  </div>

                  <div className="mt-4 text-right text-gray-400 font-medium">
                    <div>— Maya Angelou</div>
                  </div>
                </div>

                <div className="absolute -bottom-3 right-4">
                  <span className="text-blue-400 text-xl">❞</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            {...fadeIn}
            className="text-4xl font-bold h-24 sm:h-24  mt-8 mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Sila Mwinzi / Fullstack Software Developer
          </motion.h1>

          <motion.div variants={itemVariants} {...fadeIn} className="mb-8">
            <h2 className="text-2xl font-bold">Hello there 👋</h2>
            <p className="mt-4">
              I&apos;m <span className="font-bold">Sylvester Sila</span> a full-stack
              developer with a passion for creating precise, beautiful and efficient
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
            <p className="mt-4 text-xl italic font-bold">
              Be sure to check out my{" "}
              <a
                href="https://github.com/samh7"
                className="font-bold text-pink-500"
              >
                Github
              </a>{" "}
              for more.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} {...fadeIn}

            className="mb-8">

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

          <div>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-bold mb-8 text-white"
            >
              Reach out to me
            </motion.h2>
            <Contact />
          </div>
        </div>
      </div>

      <Footer variants={itemVariants} />

    </div>

  );
};

export default HomePage;
