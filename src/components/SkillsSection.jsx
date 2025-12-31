import React from 'react';
import { Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data';

function SkillsSection() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <Code className="text-cyan-400" size={48} /> Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group ${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl p-5 border ${isDark ? 'border-white/10' : 'border-white/60'} hover:scale-105 hover:shadow-2xl transition-all shadow-lg relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {skill.symbol}
                  </div>
                  <div className={`px-3 py-1 rounded-full ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-500/30'} backdrop-blur-xl`}>
                    <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                  </div>
                </div>

                <h3 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h3>

                <div className={`mt-3 w-full h-1.5 ${isDark ? 'bg-white/10' : 'bg-gray-300/50'} rounded-full overflow-hidden`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 ${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl p-6 border ${isDark ? 'border-white/10' : 'border-white/60'}`}>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            <span className="font-semibold">Strong in:</span> Python • Machine Learning • Full-Stack Development • Data Structures • Database Systems
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
