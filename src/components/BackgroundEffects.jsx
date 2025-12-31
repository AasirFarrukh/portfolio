import { useTheme } from '../context/ThemeContext';

/**
 * Animated background effects component
 * Includes gradient blobs, noise texture, and grid pattern
 */
function BackgroundEffects() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Base Background */}
      <div className={`fixed inset-0 ${isDark ? 'bg-gray-950' : 'bg-gray-50'} transition-all duration-500`} />

      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className={`absolute top-0 -left-40 w-96 h-96 ${isDark ? 'bg-blue-500' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob`} />
        <div className={`absolute top-0 -right-40 w-96 h-96 ${isDark ? 'bg-cyan-500' : 'bg-cyan-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000`} />
        <div className={`absolute -bottom-40 left-20 w-96 h-96 ${isDark ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 ${isDark ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${isDark ? 'bg-teal-500' : 'bg-teal-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-slow`} />
      </div>

      {/* Noise Texture Overlay */}
      <div
        className={`fixed inset-0 pointer-events-none ${isDark ? 'opacity-10' : 'opacity-5'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Grid Pattern */}
      <div
        className={`fixed inset-0 pointer-events-none ${isDark ? 'opacity-5' : 'opacity-10'}`}
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </>
  );
}

export default BackgroundEffects;
