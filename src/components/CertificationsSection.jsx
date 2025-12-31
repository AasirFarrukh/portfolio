import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { certifications } from '../data';

function CertificationsSection() {
  const { isDark } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <Award className="text-cyan-400" size={48} /> Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCertificate(cert)}
              className={`group cursor-pointer ${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl rounded-3xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-white/60'} hover:scale-105 transition-all shadow-2xl`}
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    if (e.target.src !== cert.fallback) {
                      e.target.src = cert.fallback;
                    } else {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23${isDark ? '1f2937' : 'e5e7eb'}' width='400' height='300'/%3E%3Ctext x='50%25' y='45%25' font-size='60' text-anchor='middle' dy='.3em'%3E📜%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='16' fill='%23${isDark ? '9ca3af' : '6b7280'}' text-anchor='middle' dy='.3em' font-family='Arial'%3ECertificate%3C/text%3E%3C/svg%3E`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 group-hover:scale-125 transition-transform">
                  <ExternalLink size={20} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                  {cert.name}
                </h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'} font-semibold`}>
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-white/10 text-gray-300' : 'bg-white/60 text-gray-700'}`}>
                    {cert.date}
                  </span>
                  {cert.duration && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-500/30 text-cyan-700'}`}>
                      {cert.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 p-6 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-white/60'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} text-center`}>
            Click on any certificate to view it in full size
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className={`relative max-w-6xl w-full max-h-[95vh] ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            <div className="flex-1 overflow-auto">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                className="w-full h-auto"
                onError={(e) => {
                  if (e.target.src !== selectedCertificate.fallback) {
                    e.target.src = selectedCertificate.fallback;
                  } else {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23${isDark ? '1f2937' : 'f3f4f6'}' width='800' height='600'/%3E%3Ctext x='50%25' y='45%25' font-size='80' text-anchor='middle' dy='.3em'%3E📜%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='24' fill='%23${isDark ? '9ca3af' : '6b7280'}' text-anchor='middle' dy='.3em' font-family='Arial'%3ECertificate%3C/text%3E%3C/svg%3E`;
                  }
                }}
              />
            </div>

            <div className={`p-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {selectedCertificate.name}
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedCertificate.issuer} • {selectedCertificate.date}
              </p>
              {selectedCertificate.link && (
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-all"
                >
                  <ExternalLink size={20} /> Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificationsSection;
