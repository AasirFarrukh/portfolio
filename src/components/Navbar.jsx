import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = ['About', 'Education', 'Courses', 'Certifications', 'Skills', 'Experience', 'Projects', 'Contact'];

/**
 * Navigation bar component with mobile menu support
 * @param {Object} props - Component props
 * @param {string} props.activeSection - Currently active section
 * @param {boolean} props.mobileMenuOpen - Mobile menu open state
 * @param {Function} props.setMobileMenuOpen - Mobile menu state setter
 */
function Navbar({ activeSection, mobileMenuOpen, setMobileMenuOpen }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className={`mx-4 mt-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl border ${isDark ? 'border-white/10' : 'border-white/60'} shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                A
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Aasir Farrukh
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {NAV_ITEMS.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:text-cyan-400 font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-900/10 hover:bg-gray-900/20'} transition-all`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mx-4 mt-2 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl border ${isDark ? 'border-white/10' : 'border-white/60'} shadow-2xl`}>
          <div className="px-4 pt-4 pb-4 space-y-2">
            {NAV_ITEMS.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl ${isDark ? 'hover:bg-white/10' : 'hover:bg-white/60'} transition-all ${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
