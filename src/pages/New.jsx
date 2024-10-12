import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  // SiVueDotJs,
  SiDocker,
  SiNetlify,
  SiExpress,
  SiGraphql,
} from "react-icons/si";

const CapitalympicsCard = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl flex justify-between items-center space-x-8 shadow-lg max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="w-1/2">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">Capitalympics</h2>
        </div>
        <div className="flex space-x-4 mb-6">
          {/* <SiVueDotJs className="text-green-500 text-3xl" /> */}
          <SiTypescript className="text-blue-500 text-3xl" />
          <SiTailwindcss className="text-blue-300 text-3xl" />
          <SiNetlify className="text-blue-400 text-3xl" />
          <SiDocker className="text-blue-500 text-3xl" />
          <SiGraphql className="text-pink-500 text-3xl" />
          <SiExpress className="text-gray-400 text-3xl" />
        </div>
        <p className="text-gray-400 mb-6">
          A web application to help users learn about country flags and
          capitals, offering a focused learning experience based on regions.
          Built using Vue.js and Tailwind CSS, with backend services hosted via
          Docker and Nginx.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <FaGithub className="mr-2" /> Code
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <FaPlay className="mr-2" /> Live
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 relative">
        <img
          src="https://placehold.co/300x200/00FFFF/000000?text=Project+Preview"
          alt="Project Preview"
          className="rounded-lg shadow-md"
        />
        {/* <p className="absolute top-2 right-4 text-gray-400 text-2xl">2023</p> */}
      </div>
    </div>
  );
};

export default CapitalympicsCard;
