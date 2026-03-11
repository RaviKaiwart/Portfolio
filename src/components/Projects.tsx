'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  link: string;
  features: string[];
  technologies: Record<string, string>;
}

const projects: Project[] = [
  {
    title: "AI-Trainmax",
    description: "An AI-powered train traffic optimization engine built for high-efficiency logistics.",
    fullDescription: "AI-Trainmax is a sophisticated optimization system designed to manage and predict train traffic patterns. It utilizes machine learning to minimize delays and maximize throughput in complex rail networks.",
    category: "AI & Optimization",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop",
    link: "https://github.com/ravikaiwart/AI-Trainmax",
    features: ["Real-time traffic prediction", "Genetic algorithm for routing", "Interactive dashboard"],
    technologies: { "Frontend": "React", "Backend": "Python", "AI": "TensorFlow" }
  },
  {
    title: "Smart Quiz Platform",
    description: "A high-concurrency quiz platform capable of handling 100+ simultaneous participants.",
    fullDescription: "Built for academic and technical assessments, this platform ensures low-latency interactions and robust data synchronization during live quiz events.",
    category: "Web Platform",
    image: "/projects/smart-quiz.png",
    link: "https://github.com/ravikaiwart/SmartQuiz",
    features: ["Real-time leaderboard", "WebSocket integration", "Automated grading system"],
    technologies: { "Frontend": "Next.js", "Backend": "Node.js", "Database": "PostgreSQL" }
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <>
      <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          {/* Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[15vw] font-black text-transparent opacity-[0.03] select-none whitespace-nowrap" style={{ WebkitTextStroke: '2px white' }}>
              PROJECTS
            </h2>
          </div>

          {/* Background Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

          {/* Scroll Indicator */}
          <div className="absolute top-12 left-12 hidden md:block z-10">
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              01 / Selected Work
            </p>
            <div className="w-px h-16 bg-white/10 mt-4 ml-2 overflow-hidden">
              <motion.div
                className="w-full bg-accent origin-top h-full"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
          </div>

          <div className="absolute top-12 right-12 hidden md:block z-10">
            <p className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">
              Scroll to explore <span className="ml-2 inline-block animate-bounce">↓</span>
            </p>
          </div>

          {/* Horizontal Scroll Track */}
          <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-12 md:px-32 relative z-10 w-[300vw]">

            {/* Spacer to show "PROJECTS" text initially before cards slide in */}
            <div className="w-screen flex-shrink-0" />

            {projects.map((project, idx) => (
              <div
                key={idx}
                className="w-[90vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0 flex flex-col justify-center px-12"
              >
                {/* strict 50/50 layout grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 w-full h-[60vh]">

                  {/* Text Content - Always Left */}
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-5xl lg:text-7xl font-black text-white leading-none uppercase tracking-tighter">
                      {project.title}
                    </h3>
                    <p className="text-[#a1a1aa] font-medium text-sm md:text-base max-w-sm mt-4 leading-relaxed">
                      {project.description}
                    </p>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-8 group relative flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-tighter rounded-full overflow-hidden transition-all duration-500 hover:pr-14"
                    >
                      <span className="relative z-10">View Details</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </div>

                  {/* Image / Mockup - Always Right */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-2xl glass border border-white/10"
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full uppercase tracking-widest text-[10px] font-bold border border-white/20">Click to Open</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-2xl pointer-events-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[95vh]"
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-30 w-12 h-12 bg-white/5 hover:bg-accent text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 backdrop-blur-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto h-72 md:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto">
                <p className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4">
                  {selectedProject.category}
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tighter mb-8">
                  {selectedProject.title}
                </h3>

                <div className="prose prose-invert max-w-none mb-12">
                  <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-12">
                    <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-6 border-b border-white/5 pb-4">
                      Impact & Features
                    </h4>
                    <motion.ul
                      initial="hidden"
                      animate="show"
                      variants={{
                        show: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      className="space-y-4"
                    >
                      {selectedProject.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: { opacity: 1, x: 0 }
                          }}
                          className="flex gap-4 text-[#a1a1aa] font-medium text-sm md:text-base"
                        >
                          <span className="text-accent">▹</span> {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}

                {/* Technical Details */}
                <div className="mb-12">
                  <h4 className="text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-6 border-b border-white/5 pb-4">
                    Stack
                  </h4>
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      show: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3
                        }
                      }
                    }}
                    className="space-y-4"
                  >
                    {Object.entries(selectedProject.technologies || {}).map(([key, value]) => (
                      <motion.div
                        key={key}
                        variants={{
                          hidden: { opacity: 0, scale: 0.95 },
                          show: { opacity: 1, scale: 1 }
                        }}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                      >
                        <span className="text-accent font-bold min-w-[120px] text-xs uppercase tracking-widest">{key}</span>
                        <span className="text-gray-500 font-medium text-sm">{value}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {selectedProject.link !== '#' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 pt-10 border-t border-white/5"
                  >
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-tighter rounded-full overflow-hidden transition-all duration-500 hover:pr-14"
                    >
                      <span className="relative z-10">Visit Project</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </a>
                  </motion.div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
