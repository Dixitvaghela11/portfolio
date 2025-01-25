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
  const [isLoading, setIsLoading] = useState(true);
  const [mainContent, setMainContent] = useState(false);

  useEffect(() => {
    // Hide all content initially
    document.body.style.overflow = 'hidden';
    
    // Create and append loading iframe
    const iframe = document.createElement('iframe');
    iframe.src = '/loading.html';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    document.body.appendChild(iframe);

    // Listen for the loading complete message
    window.addEventListener('message', function(event) {
      if (event.data === 'loadingComplete') {
        iframe.remove();
        document.body.style.overflow = 'unset';
        setIsLoading(false);
        setTimeout(() => setMainContent(true), 100);
      }
    });

    // Fallback timer in case message isn't received
    setTimeout(() => {
      if (isLoading) {
        iframe.remove();
        document.body.style.overflow = 'unset';
        setIsLoading(false);
        setTimeout(() => setMainContent(true), 100);
      }
    }, 3100);
  }, []);

  if (!mainContent) {
    return null;
  }

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