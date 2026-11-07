"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Constants ---

const LOADING_DURATION = 700; // Snappy high-performance terminal boot sequence
const FINISH_DELAY = 100; // Minimal delay after 100% before reveal

const BINARY_STREAM_LINES = [
  "10100101101011001010111001011010",
  "01011010010110101100101011100101",
  "11001010111001011010010110101100",
  "00101101001011010110010101110010",
  "10110100101101011001010111001011",
  "01100101011100101101001011010110",
  "11100101101001011010110010101110",
  "00010110101100101011100101101001",
  "10101100101011100101101001011010",
  "01011100101101001011010110010101",
  "11010010110101100101011100101101",
  "00101011100101101001011010110010",
  "10110101100101011100101101001011",
  "01110010110100101101011001010111",
  "11001010111001011010010110101100",
  "01011010010110101100101011100101",
  "10100101101011001010111001011010",
  "00101101001011010110010101110010",
  "11100101101001011010110010101110",
  "01100101011100101101001011010110",
  "10110100101101011001010111001011",
  "00010110101100101011100101101001",
  "10101100101011100101101001011010",
  "01011100101101001011010110010101",
  "11010010110101100101011100101101",
  "00101011100101101001011010110010",
  "10110101100101011100101101001011",
  "01110010110100101101011001010111",
  "11001010111001011010010110101100",
  "01011010010110101100101011100101",
  "10100101101011001010111001011010",
  "00101101001011010110010101110010",
  "11100101101001011010110010101110",
  "01100101011100101101001011010110",
  "10110100101101011001010111001011",
  "00010110101100101011100101101001",
  "10101100101011100101101001011010",
  "01011100101101001011010110010101",
  "11010010110101100101011100101101",
  "00101011100101101001011010110010",
];

// --- Sub-components / Decorative Helpers ---

const GridBackground = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
    <svg className="w-full h-full max-md:hidden" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="preloader-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#preloader-grid)" />
    </svg>
  </div>
);

const BinaryStream = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-24 opacity-5 pointer-events-none vertical-text hidden lg:block technical-label !text-[6px] overflow-hidden leading-none select-none" aria-hidden="true">
      {BINARY_STREAM_LINES.map((line, i) => (
        <div key={i} className="mb-2">
          {line}
        </div>
      ))}
    </div>
  );
};

/**
 * A sophisticated preloader component with high-performance animations
 * and full accessibility support.
 */
export function Preloader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Lock body scroll during preloading
    document.body.style.overflow = "hidden";

    const animate = (time: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = time;
      }
      
      const deltaTime = time - startTimeRef.current;
      const nextProgress = Math.min((deltaTime / LOADING_DURATION) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        // Finalize loading sequence
        setTimeout(() => {
          setShow(false);
          document.body.style.overflow = "unset";
        }, FINISH_DELAY);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[20000] bg-background text-foreground flex flex-col items-center justify-center p-8 overflow-hidden"
          role="progressbar"
          aria-label="Loading Sajin Portfolio"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <GridBackground />
          
          <div className="relative flex flex-col items-center gap-12 max-w-md w-full">
            <div className="relative flex flex-col items-center">
              <h1 className="text-6xl md:text-8xl text-foreground font-black tracking-tighter uppercase leading-none selection:bg-accent relative">
                sajin
                <div className="absolute -right-6 bottom-2 w-4 h-8 bg-accent" />
              </h1>
              <span className="technical-label mt-4 tracking-[0.6em] text-accent font-black animate-pulse uppercase">
                FRONTEND_ENGINEER_CORE
              </span>
            </div>

            <div className="w-full space-y-4">
              <div className="flex justify-between items-end technical-label !text-[8px] opacity-60">
                <div className="flex flex-col gap-1">
                  <span>INIT_HANDSHAKE: OK</span>
                  <span>LOAD_MODULE_01: {progress > 30 ? "OK" : "PENDING"}</span>
                  <span>ESTABLISH_NODE_MESH: {progress > 70 ? "OK" : "PENDING"}</span>
                </div>
                <span className="text-xl font-black">{Math.round(progress)}%</span>
              </div>
              
              <div className="h-[2px] w-full bg-grid-line relative overflow-hidden">
                <div
                  className="absolute h-full bg-accent transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center technical-label !text-[7px] opacity-30">
                <span>COORD: 12.9716° N, 77.5946° E</span>
                <span>FW_SYSTEMS_v1.0.2</span>
              </div>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 hidden md:block border-foreground opacity-20" aria-hidden="true" />
          <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 hidden md:block border-foreground opacity-20" aria-hidden="true" />
          <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 hidden md:block border-foreground opacity-20" aria-hidden="true" />
          <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 hidden md:block border-foreground opacity-20" aria-hidden="true" />
          
          <BinaryStream />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

