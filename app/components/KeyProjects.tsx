"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { ExternalLink } from "lucide-react"; // Import Lucide icon
import Rocket from "@/public/optimized/rocket.webp";
import Germanbank from "@/public/optimized/germanbank.webp";
import Solarwather from "@/public/optimized/solarweather.webp";
import JarvisAI from "@/public/optimized/JarvisAI.webp";
import ImageDetectorAI from "@/public/optimized/ImageDetectorAI.webp"
import AutoPharma from "@/public/optimized/AutopharmaAI.webp"
import vitashifa from "@/public/optimized/MediAI.webp"
import protein from "@/public/optimized/PPIGNN.webp"
import afny from "@/public/optimized/AfnyAI.webp"
import ionthefold from "@/public/optimized/ionthefold.webp"
import biosphereai from "@/public/optimized/biosphere.webp"
import salsabil from "@/public/optimized/salsabil.webp"
import shifamind from "@/public/optimized/shifamind.webp"
import cometsee from "@/public/optimized/cometsee.webp"
import jobhuntai from "@/public/optimized/jobhuntai.webp"

export default function KeyProjects() {
  const projects = [
    {
      title: "ShifaMind",
      image: shifamind,
      link: "https://github.com/SyedMohammedSameer/ShifaMind_Capstone",
    },
    {
      title: "COMET-SEE",
      image: cometsee,
      link: "https://huggingface.co/spaces/MohammedSameerSyed/soho-comet-detector",
    },
    {
      title: "JobHuntAI",
      image: jobhuntai,
      link: "https://github.com/SyedMohammedSameer/JobHuntAI",
    },
    {
      title: "IonTheFold",
      image: ionthefold,
      link: "https://www.ionthefold.com/",
    },
    {
      title: "BioSphereAI",
      image: biosphereai,
      link: "https://devpost.com/software/biosphereai",
    },
    {
      title: "Salsabil",
      image: salsabil,
      link: "https://salsabil-syedmohammedsameers-projects.vercel.app/",
    },
    {
      title: "VitaShifa",
      image: vitashifa,
      link: "https://vitashifa2.netlify.app/",
    },
    {
      title: "Protein Protein Interaction GNN",
      image: protein,
      link: "https://github.com/SyedMohammedSameer/ProteinProteinInteractionGNN",
    },
    {
      title: "Afny AI",
      image: afny,
      link: "https://afnyai.netlify.app/",
    },
    {
      title: "AutoPharma",
      image: AutoPharma,
      link: "https://github.com/SyedMohammedSameer/AutoPharma",
    },
    {
      title: "Image Dectection",
      image: ImageDetectorAI,
      link: "https://github.com/SyedMohammedSameer/ImageDetectorAI",
    },
    {
      title: "Jarvis AI",
      image: JarvisAI,
      link: "https://github.com/SyedMohammedSameer/JARVIS",
    },
    {
      title: "Solar Weather Forecast",
      image: Solarwather,
      link: "https://github.com/SyedMohammedSameer/SpaceWeatherForecast",
    },
    {
      title: "Model Rocketry",
      image: Rocket,
      link: "https://sites.google.com/view/projectspalm/home",
    },
    {
      title: "Data Analysis and ML",
      image: Germanbank,
      link: "https://github.com/SyedMohammedSameer/loan-default",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSectionHeader title="Key Projects" />
        <div className="portfolio-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl cursor-pointer card-3d block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            >
              {/* Glass card wrapper */}
              <div className="relative overflow-hidden rounded-2xl glass-card pointer-events-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  width={350}
                  height={200}
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay with blur effect */}
                <motion.div
                  className="absolute inset-0 glass-dark flex flex-col items-center gap-4 justify-center text-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h5
                    className="text-white text-xl font-bold px-4 py-2 glass-strong rounded-lg"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h5>

                  <motion.div
                    className="glass-strong p-3 rounded-full hover:glow-blue transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <ExternalLink className="text-white w-6 h-6" />
                  </motion.div>
                </motion.div>

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
                  }}
                  whileHover={{
                    boxShadow: "0 0 30px 5px rgba(59, 130, 246, 0.4)",
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
