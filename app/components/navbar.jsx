"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent relative">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold hover:scale-110 transition-transform duration-300">
            Dix Vaghela
          </Link>
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden px-4 py-2 text-white"
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent z-50`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 py-4 md:py-0">
            <li>
              <Link 
                className="nav-link block px-4 py-2 no-underline outline-none hover:no-underline animate-fadeIn" 
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-pink-600 hover:translate-y-[-2px] hover:scale-110 animate-slideIn">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link 
                className="nav-link block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#experience"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-pink-600 hover:translate-y-[-2px] hover:scale-110">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link 
                className="nav-link block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-pink-600 hover:translate-y-[-2px] hover:scale-110">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link 
                className="nav-link block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#education"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-pink-600 hover:translate-y-[-2px] hover:scale-110">EDUCATION</div>
              </Link>
            </li>
            <li>
              <Link 
                className="nav-link block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-pink-600 hover:translate-y-[-2px] hover:scale-110">BLOGS</div>
              </Link>
            </li>
            <li>
              <Link 
                className="nav-link block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-all duration-300 hover:text-pink-600 hover:translate-y-[-2px] hover:scale-110">PROJECTS</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;