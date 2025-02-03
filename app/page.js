"use client";

import { useState, useEffect } from 'react';
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [mainContent, setMainContent] = useState(false);

  
  return (
    <main className="transition-opacity duration-500 opacity-100">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog />
      <ContactSection />
    </main>
  );
}