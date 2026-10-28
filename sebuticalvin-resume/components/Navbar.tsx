"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";

// Custom SVG Icons for perfect brand representation
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full flex items-center justify-between px-6 md:px-12 py-6 border-b border-gray-200 bg-[#fafafa]/90 backdrop-blur-md sticky top-0 z-50">
        
        {/* Desktop Nav Left */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-[0.15em] uppercase">
          <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="/skills" className="hover:opacity-50 transition-opacity">Skills</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden hover:opacity-60 transition-opacity z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Centered Logo */}
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2">
          Sebuti Mofokeng
        </Link>

        {/* Desktop Nav Right */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-[0.15em] uppercase">
          <Link href="/projects" className="hover:opacity-50 transition-opacity">Projects</Link>
          <Link href="/journey" className="hover:opacity-50 transition-opacity">Journey</Link>
          <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
          
          <div className="flex items-center gap-4 border-l border-gray-300 pl-6 ml-2">
            <a href="https://github.com/SebutiCalvin/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/sebuti-mofokeng-bb5444419/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="mailto:sebuticalvin@gmail.com" className="hover:opacity-50 transition-opacity">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#fafafa] z-40 flex flex-col items-center justify-center gap-8 text-sm font-medium tracking-[0.2em] uppercase animate-in fade-in">
          <Link href="/" onClick={closeMenu} className="hover:opacity-50">Home</Link>
          <Link href="/about" onClick={closeMenu} className="hover:opacity-50">About</Link>
          <Link href="/skills" onClick={closeMenu} className="hover:opacity-50">Skills</Link>
          <Link href="/projects" onClick={closeMenu} className="hover:opacity-50">Projects</Link>
          <Link href="/journey" onClick={closeMenu} className="hover:opacity-50">Journey</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:opacity-50">Contact</Link>
          
          <div className="flex gap-8 mt-8 border-t border-gray-300 pt-8">
            <a href="https://github.com/SebutiCalvin/" target="_blank" rel="noreferrer" onClick={closeMenu}>
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sebuti-mofokeng-bb5444419/" target="_blank" rel="noreferrer" onClick={closeMenu}>
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:sebuticalvin@gmail.com" onClick={closeMenu}>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}