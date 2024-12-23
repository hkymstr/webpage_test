import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, FileText, FolderGit2, Car, Menu, X } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen text-white">
      <nav className="fixed w-full bg-[#12132d]/90 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center space-x-2">
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="font-bold text-xl">Stellar Portfolio</span>
            </NavLink>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-purple-400"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#12132d]/95 border-b border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </nav>
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-1 hover:text-purple-400 transition-colors p-2 ${
      isActive ? 'text-purple-400' : 'text-gray-300'
    } ${mobile ? 'text-lg w-full' : ''}`;

  return (
    <>
      <NavLink to="/resume" className={linkClass} onClick={onClick}>
        <FileText className="w-4 h-4" />
        <span>Resume</span>
      </NavLink>
      <NavLink to="/projects" className={linkClass} onClick={onClick}>
        <FolderGit2 className="w-4 h-4" />
        <span>Projects</span>
      </NavLink>
      <NavLink to="/racing" className={linkClass} onClick={onClick}>
        <Car className="w-4 h-4" />
        <span>Racing</span>
      </NavLink>
    </>
  );
};

export default Layout;