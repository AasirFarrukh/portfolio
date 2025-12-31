/**
 * Utility functions for generating theme-aware Tailwind classes
 * Reduces repetitive ternary operators throughout the codebase
 */

/**
 * Returns appropriate class based on theme
 * @param {boolean} isDark - Whether dark mode is active
 * @param {string} darkClass - Classes for dark mode
 * @param {string} lightClass - Classes for light mode
 * @returns {string} Combined class string
 */
export const themeClass = (isDark, darkClass, lightClass) =>
  isDark ? darkClass : lightClass;

/**
 * Common theme-aware class combinations
 */
export const getThemeClasses = (isDark) => ({
  // Text colors
  text: isDark ? 'text-white' : 'text-gray-900',
  textMuted: isDark ? 'text-gray-400' : 'text-gray-600',
  textSecondary: isDark ? 'text-gray-300' : 'text-gray-700',

  // Background colors
  bg: isDark ? 'bg-gray-950' : 'bg-gray-50',
  bgCard: isDark ? 'bg-white/5' : 'bg-white/40',
  bgCardHover: isDark ? 'bg-white/10' : 'bg-white/60',
  bgButton: isDark ? 'bg-white/10' : 'bg-white/40',
  bgButtonHover: isDark ? 'hover:bg-white/20' : 'hover:bg-white/60',

  // Border colors
  border: isDark ? 'border-white/10' : 'border-white/60',
  borderLight: isDark ? 'border-white/20' : 'border-white/80',

  // Input styles
  input: isDark
    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400'
    : 'bg-white/60 border-white/80 text-gray-900 placeholder-gray-500',

  // Badge/Tag styles
  badge: isDark ? 'bg-white/10 text-gray-300' : 'bg-white/50 text-gray-700',
  badgeCyan: isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-500/30 text-cyan-700',
});

/**
 * Glassmorphism card styles
 * @param {boolean} isDark - Whether dark mode is active
 * @returns {string} Combined class string for glass cards
 */
export const glassCard = (isDark) => `
  ${isDark ? 'bg-white/5' : 'bg-white/40'}
  backdrop-blur-2xl
  rounded-3xl
  border
  ${isDark ? 'border-white/10' : 'border-white/60'}
  shadow-2xl
`.trim().replace(/\s+/g, ' ');

/**
 * Glassmorphism button styles
 * @param {boolean} isDark - Whether dark mode is active
 * @returns {string} Combined class string for glass buttons
 */
export const glassButton = (isDark) => `
  ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/40 hover:bg-white/60'}
  backdrop-blur-xl
  border
  ${isDark ? 'border-white/20' : 'border-white/60'}
  rounded-2xl
  transition-all
`.trim().replace(/\s+/g, ' ');
