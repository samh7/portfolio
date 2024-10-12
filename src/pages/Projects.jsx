// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaJs,
//   FaDatabase,
//   FaGithub,
//   FaPlay,
// } from "react-icons/fa";
// import {
//   SiCsharp,
//   SiSqlite,
//   SiElixir,
//   SiExpress,
//   SiTypescript,
//   SiTailwindcss,
//   SiNetlify,
//   SiDocker,
//   SiGraphql,
//   SiPython,
//   SiMongodb,
//   //   SiAmazonaws,
//   SiTensorflow,
//   SiElectron,
// } from "react-icons/si";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// const stackItems = [
//   { name: "C#", icon: <SiCsharp /> },
//   { name: "SQLite", icon: <SiSqlite /> },
//   { name: "JavaScript", icon: <FaJs /> },
//   { name: "Elixir", icon: <SiElixir /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "Express.js", icon: <SiExpress /> },
//   // { name: "Angular.js", icon: <SiAngularjs /> },
// ];useState

// const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// const handleMouseMove = (event, projectIndex) => {
//   const { left, top, width, height } =
//     event.currentTarget.getBoundingClientRect();
//   const x = (event.clientX - left) / width;
//   const y = (event.clientY - top) / height;
//   setMousePosition({ x, y });
// };
// export default function ProjectSection({ project }) {
//   const projects = [
//     {
//       title: "Capitalympics",
//       description:
//         "A web application to help users learn about country flags and capitals, offering a focused learning experience based on regions. Built using Vue.js and Tailwind CSS, with backend services hosted via Docker and Nginx.",
//       image: "https://placehold.co/600x400/00FFFF/000000?text=Capitalympics",
//       technologies: [
//         SiTypescript,
//         SiTailwindcss,
//         SiNetlify,
//         SiDocker,
//         SiGraphql,
//         SiExpress,
//       ],
//     },
//     {
//       title: "DevFlow",
//       description:
//         "A developer productivity tool that integrates with popular version control systems and project management tools. Built with React and Node.js, it helps streamline the development workflow.",
//       image: "https://placehold.co/600x400/FF00FF/000000?text=DevFlow",
//       technologies: [FaReact, FaNodeJs, SiTypescript, SiExpress, SiDocker],
//     },
//     // {
//     //   title: "EcoTrack",
//     //   description: "An IoT-based environmental monitoring system that collects and analyzes data from various sensors. Utilizes Python for data processing and React for the dashboard interface.",
//     //   image: "https://placehold.co/600x400/00FF00/000000?text=EcoTrack",
//     //   technologies: [FaReact, SiPython, SiMongodb, SiAmazonaws],
//     // },
//     {
//       title: "CodeMentor AI",
//       description:
//         "An AI-powered coding assistant that provides real-time suggestions and explanations. Built with machine learning models and integrated into popular IDEs.",
//       image: "https://placehold.co/600x400/FFA500/000000?text=CodeMentor+AI",
//       technologies: [SiPython, SiTensorflow, FaReact, SiElectron],
//     },
//   ];

//   return (
//     <motion.div
//       className="bg-gray-900 text-white rounded-xl 
//       flex flex-col sm:flex-row justify-between items-center
//       shadow-lg w-[87vw] max-w-[600px]  mx-auto overflow-hidden"
//       whileHover={{ scale: 1.02 }}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Left Section */}
//       <div className="w-full order-2 sm:order-1 sm:w-1/2 p-4 sm:p-6">
//         <div className="mb-2">
//           <h3 className="text-2xl font-bold">{project.title}</h3>
//         </div>
//         <div className="flex flex-wrap gap-2 mb-3">
//           {project.technologies.map((Icon, i) => (
//             <Icon key={i} className="text-xl" />
//           ))}
//         </div>
//         <p className="text-gray-400 text-sm mb-3 line-clamp-3">
//           {project.description}
//         </p>
//         <div className="flex space-x-3">
//           <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-bold py-1 px-3 rounded-full flex items-center">
//             <FaGithub className="mr-1" /> Code
//           </button>
//           <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-bold py-1 px-3 rounded-full flex items-center">
//             <FaPlay className="mr-1" /> Live
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full order-1 sm:order-2 sm:w-1/2">
//         <img
//           src={project.image}
//           alt={`${project.title} Preview`}
//           className="w-full h-[240px]  sm:h-[250px] object-cover"
//         />
//       </div>
//     </motion.div>
//   );
// }
