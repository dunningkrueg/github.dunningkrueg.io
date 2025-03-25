"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrollPercentage);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 backdrop-blur-2xl bg-black/50 border-b border-white/5 shadow-lg shadow-purple-900/5' 
                : 'py-5 bg-transparent'
    }`}>
      {/* Progress bar on scroll */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" 
           style={{ width: `${scrollProgress}%` }} />
      
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -inset-1 top-10 left-20 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-10 transition-opacity duration-1000 ${scrolled ? 'opacity-20' : 'opacity-5'}`}></div>
        <div className={`absolute -inset-1 top-0 right-20 w-40 h-40 bg-purple-600 rounded-full blur-[100px] opacity-10 transition-opacity duration-1000 ${scrolled ? 'opacity-20' : 'opacity-5'}`}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative overflow-hidden text-lg md:text-xl font-bold group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-400 transition-all duration-700">
              dunningkrueg
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-700"></span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => {
                const lowerCaseItem = item.toLowerCase();
                const isActive = activeSection === lowerCaseItem;
                
                return (
                  <li key={item} className="relative">
                    <Link 
                      href={`#${lowerCaseItem}`}
                      className={`py-2 px-3 rounded-md group hover:bg-white/5 transition-all duration-300`}
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(lowerCaseItem)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className={`inline-block transition-all duration-300 group-hover:translate-y-[-2px] ${
                        isActive ? 'text-white font-medium' : 'text-white/70'
                      }`}>
                        {item}
                      </span>
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500 transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      } group-hover:opacity-100 group-hover:scale-100`}></span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex flex-col gap-[6px] group p-2 rounded-full hover:bg-white/5 transition-colors duration-300"
            aria-label="Menu"
          >
            <span className={`block w-6 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-4 ml-auto h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 translate-x-3' : ''
            }`}></span>
            <span className={`block w-6 h-[2px] bg-gradient-to-r from-pink-500 to-blue-400 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full backdrop-blur-2xl transition-all duration-500 overflow-hidden border-b border-white/5 ${
          isMenuOpen ? 'max-h-[300px] bg-black/70 shadow-xl shadow-purple-900/10' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-5">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const lowerCaseItem = item.toLowerCase();
              const isActive = activeSection === lowerCaseItem;
              
              return (
                <li key={item}>
                  <Link 
                    href={`#${lowerCaseItem}`}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                      isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                    }`}
                    scroll={false}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      document.getElementById(lowerCaseItem)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="flex items-center">
                      <div className={`w-1 h-4 rounded-full mr-3 transition-all duration-300 ${
                        isActive ? 'bg-gradient-to-b from-blue-400 to-purple-500' : 'bg-transparent'
                      }`}></div>
                      {item}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
} 