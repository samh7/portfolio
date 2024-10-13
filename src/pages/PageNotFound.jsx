import React from 'react';
import { motion } from 'framer-motion';
import notFoundMeme from '../assets/not-found-meme.jpg'; // Make sure to add this image to your assets folder

const PageNotFound = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-roboto min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <motion.div
          {...fadeIn}
          className="w-full max-w-[600px] text-center"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            404 - Page Not Found
          </h1>
          <motion.div
            className="mb-8 relative overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={notFoundMeme}
              alt="It's not you, it's me"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
          <p className="text-2xl font-bold mt-4">It's not you, it's me.</p>
          <a
            href="/"
            className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Go Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
