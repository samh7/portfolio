import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import wideNebula from '../assets/images/wide_nebula.png';

const BeautyAndTerror = () => {
  const containerRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const element = containerRef.current;
    const onResize = () => {
      setElementTop(element.offsetTop);
      setElementBottom(element.offsetTop + element.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [containerRef]);

  const y = useTransform(
    scrollY,
    [elementTop, elementBottom - clientHeight],
    [0, elementBottom - elementTop - clientHeight]
  );

  const height = useTransform(
    scrollY,
    [elementTop, elementBottom - clientHeight],
    ['220px', '400px']
  );

  const opacity = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop],
    [0, 1]
  );

  const borderRadius = useTransform(
    scrollY,
    [elementBottom - clientHeight - 100, elementBottom - clientHeight],
    ['12px 12px 12px 12px', '0px 0px 12px 12px']
  );

  return (
    <div ref={containerRef} style={{ height: '600px' }} className="relative w-[87vw] max-w-[600px] mx-auto">
      <motion.div
        className="bg-gray-900 text-white shadow-lg overflow-hidden"
        style={{
          y,
          height,
          width: '100%',
          opacity,
          position: 'sticky',
          top: '20px',
          borderRadius,
        }}
        transition={{ height: { duration: 1.5, ease: "easeInOut" } }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={wideNebula}
            alt="Wide nebula in space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center p-4 sm:p-6 h-full overflow-hidden"
        >
          <h3 className="text-xl font-bold mb-2">Beauty and Terror</h3>
          <p className="text-gray-300 text-xs mb-3">
            A poem by Rainer Maria Rilke
          </p>
          {/* Add your poem content here */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BeautyAndTerror;
