import React from 'react';
import { User, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function AboutSection() {
  const { isDark } = useTheme();

  const highlights = [
    { icon: GraduationCap, title: "Education", desc: "BS in Computer Science – FAST NUCES" },
    { icon: Code, title: "Tech Stack", desc: "C++ / Python / C# / JavaScript / React" },
    { icon: Briefcase, title: "Focus Areas", desc: "Clean UI • Performance • Machine Learning" }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <User className="text-cyan-400" size={48} /> About Me
        </h2>

        <div className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-10 border ${isDark ? 'border-white/10' : 'border-white/60'} shadow-2xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-5" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-6 py-3 rounded-2xl mb-6 shadow-xl">
              <Award size={24} />
              <span className="font-bold text-lg">Frontend / Full-Stack Developer & Data Analyst</span>
            </div>

            <p className={`text-xl mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I build fast, accessible interfaces and data-driven tools with <span className="text-cyan-400 font-bold">HTML, CSS, and JavaScript</span>,
              pairing clean UI with solid engineering and practical ML where it helps. I'm passionate about creating seamless user experiences
              and solving complex problems with elegant solutions. Currently <span className="text-cyan-400 font-bold">open to junior roles and internships</span> where I can contribute and grow.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`${isDark ? 'bg-white/5' : 'bg-white/50'} backdrop-blur-xl p-6 rounded-2xl border ${isDark ? 'border-white/10' : 'border-white/40'} hover:scale-105 transition-all shadow-xl`}
                >
                  <item.icon className="text-cyan-400" size={36} />
                  <h3 className={`font-bold text-lg mt-3 mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
