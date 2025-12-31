import React from 'react';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { experience } from '../data';

function ExperienceSection() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <Briefcase className="text-cyan-400" size={48} /> Professional Experience
        </h2>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-8 border ${isDark ? 'border-white/10' : 'border-white/60'} hover:scale-[1.02] transition-all shadow-2xl relative overflow-hidden`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 font-bold text-lg mb-2">{exp.company}</p>

                  <div className={`flex flex-wrap gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="flex items-center gap-1">{exp.location}</span>
                    <span>•</span>
                    <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-white/50'} backdrop-blur-xl font-medium`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="mt-3 md:mt-0">
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-mono text-lg text-right`}>
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-2xl">✓</span>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
