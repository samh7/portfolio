import React from 'react';
import { motion } from 'framer-motion';
import veldtImage from '../assets/theVeldt/theVeldt.png'; // Make sure to add this image to your assets folder

const TheVeldt = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 relative overflow-hidden rounded-xl"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${veldtImage})`, 
          filter: "blur(5px) brightness(50%)" 
        }}
      ></div>
      <div className="relative z-10 p-6 text-white backdrop-filter backdrop-blur-sm bg-black bg-opacity-30">
        <h2 className="text-2xl font-bold mb-4">The Veldt by Ray Bradbury</h2>
        <p className="mb-4">
          "The Veldt" is a science fiction short story by Ray Bradbury, first published in 1950. It explores themes of technology's impact on family dynamics and human psychology.
        </p>
        <p className="mb-4">
          The story revolves around the Hadley family, who live in a futuristic smart home with a nursery that can create any environment the children imagine. The parents become concerned when the nursery consistently displays a dangerous African veldt scene.
        </p>
        <p className="mb-4">
          As the story progresses, it becomes clear that the children have become overly attached to the technology. The situation escalates when the parents decide to shut down the house, leading to a confrontation where the children lure their parents into the nursery.
        </p>
        <p>
          The story concludes with a chilling twist that highlights the potential dangers of over-reliance on artificial environments and the erosion of family bonds. Bradbury's tale serves as a cautionary narrative about the unintended consequences of technology on human relationships.
        </p>
      </div>
    </motion.div>
  );
};

export default TheVeldt;
