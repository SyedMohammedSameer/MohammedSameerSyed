/// <reference types="react" />
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Server, Zap, X, Award, Code2, Building2, BookOpen } from "lucide-react";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";

interface AboutRef {
  show: () => void;
}

const About = forwardRef<AboutRef>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true)
  }));

  // Hide when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isVisible && window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const stats = [
    { Icon: Award, label: "Patent", value: "1", iconColor: "#fbbf24", iconBg: "rgba(245, 158, 11, 0.12)" },
    { Icon: Code2, label: "Projects", value: "15+", iconColor: "#60a5fa", iconBg: "rgba(59, 130, 246, 0.12)" },
    { Icon: Building2, label: "Startup", value: "2", iconColor: "#34d399", iconBg: "rgba(16, 185, 129, 0.12)" },
    { Icon: BookOpen, label: "Degree", value: "Master's", iconColor: "#a78bfa", iconBg: "rgba(139, 92, 246, 0.12)" },
  ];

  const skills = [
    {
      Icon: Code,
      title: "Machine Learning Engineer",
      description: "I build scalable ML/DL models for automation and real-world impact.",
      iconColor: "#60a5fa",
      iconBg: "rgba(59, 130, 246, 0.12)",
      topColor: "#3b82f6",
    },
    {
      Icon: Server,
      title: "AI Engineer",
      description: "I apply NLP, OpenCV, and predictive models to turn data into smart decisions.",
      iconColor: "#34d399",
      iconBg: "rgba(16, 185, 129, 0.12)",
      topColor: "#10b981",
    },
    {
      Icon: Database,
      title: "Software Engineer",
      description: "I develop Python frontend and AI-integrated backends, multi-agent systems.",
      iconColor: "#a78bfa",
      iconBg: "rgba(139, 92, 246, 0.12)",
      topColor: "#8b5cf6",
    },
    {
      Icon: Zap,
      title: "Gen AI Engineer",
      description: "Skilled in OpenAI, LLaMA, Hugging Face—fine-tuning, agents, and gen AI apps.",
      iconColor: "#fbbf24",
      iconBg: "rgba(245, 158, 11, 0.12)",
      topColor: "#f59e0b",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          id="about"
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 grid-pattern opacity-30"></div>

          {/* Floating gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Close button */}
          <motion.button
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 z-10 glass-strong p-3 rounded-full hover:glow-blue transition-all duration-300 shadow-lg"
            aria-label="Close About Section"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>

          <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-18 h-full overflow-y-auto relative z-10">
            {/* Title */}
            <motion.h2
              className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h2>

            {/* Intro Summary */}
            <motion.div
              className="glass-card rounded-2xl p-5 sm:p-6 mb-7 max-w-4xl mx-auto relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: "linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)" }} />
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                AI Engineer and Researcher focused on applied machine learning and
                deep learning. I build healthcare AI systems, multi-agent
                architectures, multimodal LLMs, and RAG-driven pipelines, with
                expertise in LLM inference, knowledge-grounded reasoning, and
                explainable AI. I bring experience across academic labs and
                early-stage startups, with contributions including preprints,
                startup co-founding, and a recently published patent in model
                rocketry.
              </p>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => {
                const { Icon, label, value, iconColor, iconBg } = stat;
                return (
                  <motion.div
                    key={index}
                    className="glass-card rounded-xl p-4 text-center relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.45 + index * 0.08 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    {/* Ambient glow */}
                    <div
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-xl opacity-25 pointer-events-none"
                      style={{ background: iconColor }}
                    />
                    <div
                      className="relative z-10 mx-auto mb-2 w-10 h-10 flex items-center justify-center rounded-lg"
                      style={{ background: iconBg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: iconColor }} />
                    </div>
                    <p className="relative z-10 text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
                    <p className="relative z-10 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">{label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bio + Skills Row */}
            <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
              {/* Bio */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
                  <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    My Story
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    A passionate Software Engineer and Machine Learning enthusiast,
                    currently pursuing a Master's in Machine Learning at the
                    University of Arizona. As a Research Assistant, I work on
                    Generative AI in semiconductor design and digital phenotyping for
                    female health, applying LLMs and robust AI/ML algorithms. I
                    specialize in pretraining, supervised fine-tuning with QLoRA and
                    SFT, multi-agent coordination, MCP (Model Context Protocol), and
                    scalable AI pipelines.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    At Lumenci, I led backend AI-driven solutions using FastAPI,
                    AutoGPT, and custom AI agents. I also deployed Random Forest
                    models as part of an AI Workbench platform. Skilled in Python,
                    data structures, ML/DL frameworks, and ethical hacking on Linux,
                    I've contributed to projects involving CNN-based image
                    recognition, GANs, GNNs, NLP, and LLM customization.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Beyond tech, I built a high-speed model rocket with a custom
                    flight computer, merging electronics and aerospace. A stargazer
                    and sports fan, I'm open to AI/ML, software engineering, and
                    interdisciplinary collaborations. Let's connect! 🚀
                  </p>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                {skills.map((skill, index) => {
                  const { Icon, title, description, iconColor, iconBg, topColor } = skill;
                  return (
                    <motion.div
                      key={index}
                      className="glass-card rounded-2xl overflow-hidden relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                    >
                      {/* Colored top accent */}
                      <div className="h-0.5 w-full" style={{ background: topColor }} />

                      <div className="p-5 relative z-10">
                        <div
                          className="mb-3 w-10 h-10 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                          style={{ background: iconBg }}
                        >
                          <Icon className="w-5 h-5" style={{ color: iconColor }} />
                        </div>
                        <h3 className="text-sm font-bold mb-1.5 text-gray-800 dark:text-gray-100">
                          {title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {description}
                        </p>
                      </div>

                      {/* Corner glow on hover */}
                      <div
                        className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                        style={{ background: iconColor }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
});

About.displayName = "About";

export default About;