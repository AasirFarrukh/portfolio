import React from 'react';
import { Github, Linkedin, ChevronDown, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function HeroSection({ mousePosition }) {
  const { isDark } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <div className="mb-8 inline-block">
            <div className={`w-40 h-40 mx-auto rounded-3xl ${isDark ? 'bg-white/10' : 'bg-white/40'} backdrop-blur-2xl border ${isDark ? 'border-white/20' : 'border-white/60'} shadow-2xl p-1 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-20 animate-pulse" />
              <div className={`w-full h-full ${isDark ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent relative z-10`}>
                AF
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent drop-shadow-2xl">
            Aasir Farrukh
          </h1>

          <p className={`text-2xl md:text-3xl mb-4 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            <span className="text-cyan-400">Frontend Developer</span> •
            <span className="text-cyan-400"> Full-Stack Engineer</span> •
            <span className="text-cyan-400"> Data Analyst</span>
          </p>

          <p className={`text-lg mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            Computer Science graduate passionate about building fast, accessible interfaces and data-driven applications with clean UI and solid engineering
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-semibold hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50 flex items-center gap-2 text-white"
            >
              <Sparkles size={20} /> View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/aasirfarrukh/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 ${isDark ? 'bg-white/10' : 'bg-white/40'} backdrop-blur-2xl border ${isDark ? 'border-white/20' : 'border-white/60'} rounded-2xl font-semibold hover:scale-105 transition-all shadow-xl flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/AasirFarrukh"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 ${isDark ? 'bg-white/10' : 'bg-white/40'} backdrop-blur-2xl border ${isDark ? 'border-white/20' : 'border-white/60'} rounded-2xl font-semibold hover:scale-105 transition-all shadow-xl flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>

        <ChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400" size={40} />
      </div>
    </section>
  );
}

export default HeroSection;
