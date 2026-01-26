"use client";

import Image from "next/image";
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Picture from "@/public/optimized/profile.webp";

const CodePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle
        id="pattern-circle"
        cx="10"
        cy="10"
        r="1.6257413380501518"
        fill="#000"
      ></circle>
    </pattern>
    <rect
      id="rect"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#pattern-circles)"
    ></rect>
  </svg>
);

interface HeroProps {
  aboutRef: React.RefObject<{ show: () => void }>;
}

export default function Hero({ aboutRef }: HeroProps) {
  const handleLearnMore = () => {
    aboutRef.current?.show();
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 grid-pattern"></div>

      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 gradient-mesh animate-gradient-xy bg-[length:400%_400%]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
              Mohammed Sameer Syed
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
              AI Engineer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI Engineer and Researcher focused on applied machine learning and
              deep learning. I build healthcare AI systems, multi-agent
              architectures, multimodal LLMs, and RAG-driven pipelines, with
              expertise in LLM inference, knowledge-grounded reasoning, and
              explainable AI. I bring experience across academic labs and
              early-stage startups, with contributions that include preprints,
              startup co-founding, and a recently published patent in model
              rocketry. Currently pursuing my Master’s at the University of
              Arizona.
            </p>
            <div className="flex justify-center lg:justify-start space-x-3 md:space-x-4 mb-6 md:mb-8">
              <motion.a
                href="https://github.com/SyedMohammedSameer"
                className="glass-card p-3 rounded-full transition-all duration-300 hover:glow-blue"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-sameer-syed-215a011b9/"
                className="glass-card p-3 rounded-full transition-all duration-300 hover:glow-blue"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="mailto:mohammedsameersyed1@gmail.com"
                className="glass-card p-3 rounded-full transition-all duration-300 hover:glow-blue"
                aria-label="Email Contact"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </div>
            <motion.button
              onClick={handleLearnMore}
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">Learn More</span>
              <ArrowDown className="w-4 h-4 relative z-10 animate-bounce" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
              {/* Animated glow rings */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl opacity-50 blur-xl"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl opacity-50 blur-xl"
                animate={{
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              {/* Glass card container */}
              <motion.div
                className="relative glass-strong rounded-3xl overflow-hidden shadow-2xl h-[422px] border-2 border-white/20"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={Picture}
                  alt="Mohammed Sameer Syed"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  );
}
