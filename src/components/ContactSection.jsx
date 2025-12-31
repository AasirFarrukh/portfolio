import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ContactSection() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <Mail className="text-cyan-400" size={48} /> Contact
        </h2>

        <div className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl p-10 border ${isDark ? 'border-white/10' : 'border-white/60'} shadow-2xl`}>
          <p className={`mb-8 text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Want to collaborate or have a role in mind? I'd love to hear from you! Email me at{' '}
            <a href="mailto:aasir.farrukh14@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-bold underline">
              aasir.farrukh14@gmail.com
            </a>
          </p>

          {formSubmitted && (
            <div className="mb-6 p-5 bg-green-500/20 border-2 border-green-500 rounded-2xl text-green-400 font-bold text-lg backdrop-blur-xl">
              ✓ Thanks! Your message has been sent successfully.
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className={`block mb-2 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-5 py-4 rounded-2xl ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500'} border-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all backdrop-blur-xl`}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className={`block mb-2 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-5 py-4 rounded-2xl ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500'} border-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all backdrop-blur-xl`}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className={`block mb-2 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Your Message
              </label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-5 py-4 rounded-2xl ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500'} border-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all resize-none backdrop-blur-xl`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50 flex items-center justify-center gap-3 text-white text-lg"
            >
              <Send size={24} /> Send Message
            </button>
          </div>

          <div className={`mt-10 pt-10 border-t ${isDark ? 'border-white/10' : 'border-white/30'}`}>
            <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 font-medium text-lg`}>
              Or connect with me on
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/AasirFarrukh"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl transition-all hover:scale-110 shadow-xl`}
              >
                <Github size={28} className={isDark ? 'text-white' : 'text-gray-900'} />
              </a>
              <a
                href="https://www.linkedin.com/in/aasirfarrukh/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl transition-all hover:scale-110 shadow-xl`}
              >
                <Linkedin size={28} className={isDark ? 'text-white' : 'text-gray-900'} />
              </a>
              <a
                href="mailto:aasir.farrukh14@gmail.com"
                className={`p-5 rounded-2xl ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-xl transition-all hover:scale-110 shadow-xl`}
              >
                <Mail size={28} className={isDark ? 'text-white' : 'text-gray-900'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
