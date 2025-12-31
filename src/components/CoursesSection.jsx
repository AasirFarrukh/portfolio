import React, { useState } from 'react';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { courseCategories } from '../data';

const categoryColors = {
  cyan: { text: 'text-cyan-400', textLight: 'text-cyan-600', bg: 'bg-cyan-500/20', bgLight: 'bg-cyan-500/30', textBg: 'text-cyan-400', textBgLight: 'text-cyan-700' },
  blue: { text: 'text-blue-400', textLight: 'text-blue-600', bg: 'bg-blue-500/20', bgLight: 'bg-blue-500/30', textBg: 'text-blue-400', textBgLight: 'text-blue-700' },
  purple: { text: 'text-purple-400', textLight: 'text-purple-600', bg: 'bg-purple-500/20', bgLight: 'bg-purple-500/30', textBg: 'text-purple-400', textBgLight: 'text-purple-700' },
  green: { text: 'text-green-400', textLight: 'text-green-600', bg: 'bg-green-500/20', bgLight: 'bg-green-500/30', textBg: 'text-green-400', textBgLight: 'text-green-700' },
  orange: { text: 'text-orange-400', textLight: 'text-orange-600', bg: 'bg-orange-500/20', bgLight: 'bg-orange-500/30', textBg: 'text-orange-400', textBgLight: 'text-orange-700' },
  pink: { text: 'text-pink-400', textLight: 'text-pink-600', bg: 'bg-pink-500/20', bgLight: 'bg-pink-500/30', textBg: 'text-pink-400', textBgLight: 'text-pink-700' }
};

function CoursesSection() {
  const { isDark } = useTheme();
  const [openCategories, setOpenCategories] = useState({
    ai: false,
    core: false,
    specialized: false,
    math: false,
    business: false,
    science: false
  });

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id="courses" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <GraduationCap className="text-cyan-400" size={48} /> Courses
        </h2>

        <div className="space-y-4">
          {courseCategories.map((category) => {
            const colors = categoryColors[category.color];
            return (
              <div key={category.id} className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${isDark ? 'border-white/10' : 'border-white/60'} overflow-hidden transition-all`}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <h3 className={`text-xl font-bold ${isDark ? colors.text : colors.textLight}`}>
                      {category.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? colors.bg : colors.bgLight} ${isDark ? colors.textBg : colors.textBgLight}`}>
                      {category.courses.length} courses
                    </span>
                  </div>
                  <ChevronDown className={`transition-transform ${openCategories[category.id] ? 'rotate-180' : ''}`} size={24} />
                </button>

                <div className={`transition-all duration-300 ${openCategories[category.id] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className={`${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl rounded-xl p-4 border ${isDark ? 'border-white/10' : 'border-white/40'} transition-all`}
                      >
                        <div className={`${colors.text} font-bold text-xs mb-1`}>{course.code}</div>
                        <div className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {course.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
