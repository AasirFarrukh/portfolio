import React, { useState, useEffect } from 'react';
import { Code, Github, ExternalLink, ChevronDown, X, Play, Image, Maximize2, Minimize2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data';

function ProjectsSection() {
  const { isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFooterOpen, setIsFooterOpen] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter));

  // Keyboard navigation for project modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject && selectedProject.demoImages) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProject.demoImages.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) =>
            prev === selectedProject.demoImages.length - 1 ? 0 : prev + 1
          );
        } else if (e.key === 'Escape') {
          if (isFullscreen) {
            setIsFullscreen(false);
          } else {
            setSelectedProject(null);
            setIsFooterOpen(true);
            setIsFullscreen(false);
          }
        } else if (e.key === 'f' || e.key === 'F') {
          if (!showVideo) {
            setIsFullscreen(!isFullscreen);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isFullscreen, showVideo]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className={`text-5xl md:text-6xl font-bold flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <Code className="text-cyan-400" size={48} /> Projects
          </h2>

          <div className="flex gap-3 flex-wrap">
            {[
              { key: 'all', label: 'All' },
              { key: 'ai', label: 'AI/ML' },
              { key: 'web', label: 'Web' },
              { key: 'systems', label: 'Systems' },
              { key: 'apps', label: 'Apps' },
              { key: 'design', label: 'Design' }
            ].map(filter => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all shadow-xl ${
                  selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white scale-110'
                    : `${isDark ? 'bg-white/10' : 'bg-white/40'} ${isDark ? 'text-white' : 'text-gray-900'} backdrop-blur-xl border ${isDark ? 'border-white/20' : 'border-white/60'} hover:scale-105`
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl rounded-3xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-white/60'} hover:scale-105 transition-all group shadow-2xl flex flex-col`}
            >
              <div className="h-56 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center text-8xl relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                {project.isText ? (
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform text-white font-bold text-3xl md:text-4xl px-4 text-center drop-shadow-2xl">
                    {project.icon}
                  </span>
                ) : project.isImage ? (
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform">
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="w-32 h-32 object-contain rounded-2xl shadow-2xl bg-white p-2"
                    />
                  </div>
                ) : (
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform">
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-xl border-4 border-white/40 flex items-center justify-center shadow-2xl">
                      <span className="text-6xl filter drop-shadow-lg">
                        {project.icon}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900'} transition-colors`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed flex-1`}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${isDark ? 'bg-white/10' : 'bg-white/50'} backdrop-blur-xl rounded-full text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.comingSoon ? (
                    <span className="flex items-center gap-2 text-gray-500 font-bold cursor-not-allowed">
                      Coming Soon
                    </span>
                  ) : project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
                    >
                      <ExternalLink size={20} /> Visit
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
                    >
                      <Github size={20} /> Code
                    </a>
                  )}
                  {(project.demoImages || project.demoVideo) && (
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setCurrentImageIndex(0);
                        setIsFooterOpen(true);
                        setShowVideo(!!project.demoVideo);
                      }}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
                    >
                      <ExternalLink size={20} /> Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Demo Modal */}
      {selectedProject && (selectedProject.demoImages || selectedProject.demoVideo) && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => {
            setSelectedProject(null);
            setIsFooterOpen(true);
            setShowVideo(false);
            setIsFullscreen(false);
          }}
        >
          <div
            className={`relative w-full h-full max-w-7xl max-h-[95vh] ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              {!showVideo && selectedProject.demoImages && (
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
                >
                  {isFullscreen ? <Minimize2 size={20} className="text-white" /> : <Maximize2 size={20} className="text-white" />}
                </button>
              )}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setIsFooterOpen(true);
                  setShowVideo(false);
                  setIsFullscreen(false);
                }}
                className="w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Video/Image Toggle Buttons */}
            {selectedProject.demoVideo && selectedProject.demoImages && (
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <button
                  onClick={() => setShowVideo(true)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 font-bold transition-all ${
                    showVideo
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-black/50 hover:bg-black/70 text-white'
                  }`}
                >
                  <Play size={18} /> Video
                </button>
                <button
                  onClick={() => setShowVideo(false)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 font-bold transition-all ${
                    !showVideo
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-black/50 hover:bg-black/70 text-white'
                  }`}
                >
                  <Image size={18} /> Images
                </button>
              </div>
            )}

            {!showVideo && selectedProject.demoImages && selectedProject.demoImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) =>
                    prev === 0 ? selectedProject.demoImages.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronDown size={32} className="text-white rotate-90" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) =>
                    prev === selectedProject.demoImages.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronDown size={32} className="text-white -rotate-90" />
                </button>
              </>
            )}

            <div className="flex-1 flex items-center justify-center bg-gray-100 p-4 min-h-0">
              {showVideo && selectedProject.demoVideo ? (
                <video
                  src={selectedProject.demoVideo}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              ) : selectedProject.demoImages ? (
                <img
                  src={selectedProject.demoImages[currentImageIndex]}
                  alt={`${selectedProject.title} - ${selectedProject.demoImageTitles?.[currentImageIndex] || `Screenshot ${currentImageIndex + 1}`}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const iconDisplay = selectedProject.isText
                      ? `%3Ctext x='50%25' y='35%25' font-size='60' font-weight='bold' fill='white' text-anchor='middle' dy='.3em' font-family='Arial'%3E${encodeURIComponent(selectedProject.icon)}%3C/text%3E`
                      : `%3Ctext x='50%25' y='45%25' font-size='80' text-anchor='middle' dy='.3em'%3E${selectedProject.icon}%3C/text%3E`;
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2314b8a6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='1200' height='800'/%3E${iconDisplay}%3Ctext x='50%25' y='60%25' font-size='24' fill='%23${isDark ? 'e5e7eb' : 'f3f4f6'}' text-anchor='middle' dy='.3em' font-family='Arial'%3EProject Screenshot%3C/text%3E%3C/svg%3E`;
                  }}
                />
              ) : null}
            </div>

            <button
              onClick={() => setIsFooterOpen(!isFooterOpen)}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${isFooterOpen ? 'translate-y-0' : '-translate-y-4'} z-20 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 backdrop-blur-xl rounded-t-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-2xl group`}
            >
              <span className="text-white font-bold text-sm">
                {isFooterOpen ? 'Hide Details' : 'Show Details'}
              </span>
              <ChevronDown size={20} className={`text-white transition-transform group-hover:scale-110 ${isFooterOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`flex-shrink-0 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 ${
                isFooterOpen ? 'max-h-[400px] p-6' : 'max-h-0 p-0 overflow-hidden'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProject.title}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {showVideo
                      ? 'Demo Video'
                      : (selectedProject.demoImageTitles?.[currentImageIndex] || `Screenshot ${currentImageIndex + 1}`)}
                  </p>
                </div>

                {!showVideo && selectedProject.demoImages && (
                  <div className={`px-4 py-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} font-bold`}>
                    {currentImageIndex + 1} / {selectedProject.demoImages.length}
                  </div>
                )}
              </div>

              {!showVideo && selectedProject.demoImages && selectedProject.demoImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
                  {selectedProject.demoImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-4 transition-all ${
                        currentImageIndex === idx
                          ? 'border-cyan-400 scale-110'
                          : `border-transparent ${isDark ? 'opacity-50 hover:opacity-100' : 'opacity-60 hover:opacity-100'}`
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-all"
                >
                  <Github size={20} /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Overlay */}
      {isFullscreen && selectedProject && selectedProject.demoImages && (
        <div
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close/Minimize button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
          >
            <Minimize2 size={24} className="text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-30 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white font-bold">
            {currentImageIndex + 1} / {selectedProject.demoImages.length}
          </div>

          {/* Image title */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white font-bold text-center max-w-[90vw] truncate">
            {selectedProject.demoImageTitles?.[currentImageIndex] || `Screenshot ${currentImageIndex + 1}`}
          </div>

          {/* Navigation buttons */}
          {selectedProject.demoImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? selectedProject.demoImages.length - 1 : prev - 1
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
              >
                <ChevronDown size={32} className="text-white rotate-90" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === selectedProject.demoImages.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
              >
                <ChevronDown size={32} className="text-white -rotate-90" />
              </button>
            </>
          )}

          {/* Fullscreen Image */}
          <img
            src={selectedProject.demoImages[currentImageIndex]}
            alt={`${selectedProject.title} - ${selectedProject.demoImageTitles?.[currentImageIndex] || `Screenshot ${currentImageIndex + 1}`}`}
            className="max-w-[95vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
