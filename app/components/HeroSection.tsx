"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const greetings = [
  'Hello', 'Hola', 'Bonjour', 'Ciao', 'Olá', 
  'Hallo', 'こんにちは', '안녕하세요', '你好', 
  'नमस्ते', 'Привет', 'مرحبا'
];

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentGreeting(prev => (prev + 1) % greetings.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - 0.5) * -10}px, ${(mousePosition.y - 0.5) * -10}px)`,
  };

  return (
    <div ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-multiply opacity-10 animate-blob filter blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-purple-600 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000 filter blur-[80px]"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/50 -z-5"></div>
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="relative h-24 mb-4 overflow-hidden">
        <div 
          className={`transition-all duration-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              {greetings[currentGreeting]}
            </span>
          </h2>
        </div>
      </div>
      
      <div className="relative" style={parallaxStyle}>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mt-4 mb-6">
          I'm <span className="relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-float inline-block">
              dunningkrueg
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
          </span>
        </h1>
      </div>
      
      <p className="max-w-2xl text-xl md:text-2xl mb-10 text-white relative z-10 font-medium">
        Software Engineer, MIT Master's Graduate
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center z-10">
        <Link href="#projects" 
          className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium overflow-hidden transition-all duration-300"
          scroll={false}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            View Projects
            <svg className="w-4 h-4 inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6L19 12L13 18M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600 to-blue-500 transition-transform duration-300 group-hover:translate-y-0"></span>
        </Link>
        <Link href="#contact"
          className="group relative px-8 py-3 rounded-full bg-transparent border border-gray-700 text-white font-medium overflow-hidden hover:border-gray-500 transition-all duration-300"
          scroll={false}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
          <span className="relative z-10">Contact Me</span>
          <span className="absolute inset-0 bg-white/5 transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0"></span>
        </Link>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
} 