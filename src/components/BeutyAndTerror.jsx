import React, { useRef, useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import wideNebula from "../assets/images/wide_nebula.png";

const BeautyAndTerror = () => {
  const containerRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  const lines = [
    "Flare up like a flame",
    "and make big shadows I can move in.",
    "Let everything happen to you: beauty and terror.",
    "Just keep going. No feeling is final.",
    "Don't let yourself lose me.",
    "Nearby is the country they call life.",
    "You will know it by its seriousness.",
    "Give me your hand.",
  ];

  useEffect(() => {
    const element = containerRef.current;
    const onResize = () => {
      setElementTop(element.offsetTop);
      setElementBottom(element.offsetTop + element.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [containerRef]);

  const yRange = useTransform(
    scrollY,
    [elementTop, elementBottom - clientHeight],
    [0, elementBottom - elementTop - clientHeight]
  );

  const y = useTransform(yRange, (value) =>
    Math.max(0, Math.min(value, elementBottom - elementTop - clientHeight))
  );

  const height = useTransform(
    scrollY,
    [elementTop, elementBottom - clientHeight],
    ["220px", "350px"]
  );

  const opacity = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop],
    [0, 1]
  );

  return (
    <div ref={containerRef} style={{ height: "600px" }} className="relative">
      <div
        className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden"
        style={{
          y,
          height,
          width: "87vw",
          maxWidth: "600px",
          opacity,
          position: "sticky",
          top: "20px",
          left: "50%",
          x: "-50%",
        }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={wideNebula}
            alt="Wide nebula in space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <motion.div className="relative z-10 text-center p-4 sm:p-6 h-full overflow-hidden">
          <h3 className="text-xl font-bold mb-2">Beauty and Terror</h3>
          <p className="text-gray-300 text-xs mb-3">
            A poem by Rainer Maria Rilke
          </p>
          <motion.div
            className="text-xs"
            style={{
              height: useTransform(
                height,
                ["220px", "300px"],
                ["80px", "320px"]
              ),
            }}
          >
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className="mb-1"
                style={{
                  opacity: useTransform(
                    height,
                    ["220px", `${220 + index * 25}px`],
                    [index < 3 ? 1 : 0, 1]
                  ),
                }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-8 "
            style={{
              opacity: useTransform(height, ["220px", "400px"], [1, 0]),
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BeautyAndTerror;
