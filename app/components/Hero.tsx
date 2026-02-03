"use client";

import Image from "next/image";
import {
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  ArrowDown,
  Brain,
  Atom,
  GraduationCap,
  Rocket,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
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

const bulletItems = [
  {
    Icon: Brain,
    text: "Developed ShifaMind - State of the Art Explainable Healthcare AI",
    href: "https://shifamind.netlify.app/",
    isExternal: true,
    accent: {
      iconBg: "rgba(59, 130, 246, 0.15)",
      iconColor: "#60a5fa",
      glow: "rgba(59, 130, 246, 0.5)",
      border: "rgba(59, 130, 246, 0.35)",
      scan: "rgba(59, 130, 246, 0.18)",
    },
  },
  {
    Icon: Atom,
    text: "Co-Founder at IonTheFold - Protein Folding AI",
    href: "https://www.ionthefold.com/",
    isExternal: true,
    accent: {
      iconBg: "rgba(16, 185, 129, 0.15)",
      iconColor: "#34d399",
      glow: "rgba(16, 185, 129, 0.5)",
      border: "rgba(16, 185, 129, 0.35)",
      scan: "rgba(16, 185, 129, 0.18)",
    },
  },
  {
    Icon: GraduationCap,
    text: "ML Masters Graduate - University of Arizona",
    href: "#education",
    isExternal: false,
    accent: {
      iconBg: "rgba(139, 92, 246, 0.15)",
      iconColor: "#a78bfa",
      glow: "rgba(139, 92, 246, 0.5)",
      border: "rgba(139, 92, 246, 0.35)",
      scan: "rgba(139, 92, 246, 0.18)",
    },
  },
  {
    Icon: Rocket,
    text: "Inventor of Archer - Patented Model Rocket Flight Computer",
    href: "https://spalm.netlify.app/",
    isExternal: true,
    accent: {
      iconBg: "rgba(245, 158, 11, 0.15)",
      iconColor: "#fbbf24",
      glow: "rgba(245, 158, 11, 0.5)",
      border: "rgba(245, 158, 11, 0.35)",
      scan: "rgba(245, 158, 11, 0.18)",
    },
  },
];

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
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 md:mb-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-snug">
              AI Engineer &amp; Researcher
              <br />
              Building Models, Startups, and
              Breakthroughs in Machine Learning
            </h2>

            {/* Bullet Cards */}
            <div className="flex flex-col gap-2.5 mb-6 md:mb-7">
              {bulletItems.map((item, index) => {
                const { Icon, text, href, isExternal, accent } = item;
                return (
                  <motion.a
                    key={index}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 p-3 rounded-xl cursor-pointer relative overflow-hidden glass-card"
                    style={{ borderColor: accent.border }}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.13 }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: `0 0 24px ${accent.glow}, 0 0 48px ${accent.glow.replace("0.5", "0.15")}`,
                    }}
                  >
                    {/* Scan-line shimmer */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${accent.scan} 50%, transparent 100%)`,
                        backgroundSize: "200% 100%",
                        animation: `cardScan ${3.5 + index * 0.6}s linear infinite`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="relative z-10 flex-shrink-0 p-2 rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: accent.iconBg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accent.iconColor }} />
                    </div>

                    {/* Text */}
                    <span className="relative z-10 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 text-left flex-1">
                      {text}
                    </span>

                    {/* Link arrow */}
                    <div className="relative z-10 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <ExternalLink
                        className="w-4 h-4"
                        style={{ color: accent.iconColor }}
                      />
                    </div>
                  </motion.a>
                );
              })}
            </div>

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
