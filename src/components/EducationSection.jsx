import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { education } from '../data';

function EducationSection() {
  const { isDark } = useTheme();

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <GraduationCap className="text-cyan-400" size={48} /> Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-8 border ${isDark ? 'border-white/10' : 'border-white/60'} hover:scale-[1.02] transition-all shadow-2xl relative overflow-hidden`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 font-bold text-lg">{edu.school}</p>
                </div>
                <div className="mt-3 md:mt-0 text-right">
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-mono text-lg`}>
                    {edu.period}
                  </p>
                  {edu.cgpa && (
                    <p className="text-cyan-400 font-bold text-lg">CGPA: {edu.cgpa}</p>
                  )}
                  {edu.grade && (
                    <p className="text-cyan-400 font-bold text-lg">Grade: {edu.grade}</p>
                  )}
                </div>
              </div>

              <ul className="space-y-3">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-2xl">•</span>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                      {detail}
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

export default EducationSection;
