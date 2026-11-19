import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { NotFound } from './components/NotFound';
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [is404, setIs404] = useState<boolean>(false);

  useEffect(() => {
    // Check if URL has a 404 path or query
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && !path.endsWith('index.html')) {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return (
      <NotFound
        onBackHome={() => {
          window.history.pushState({}, '', '/');
          setIs404(false);
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-ivory text-ink selection:bg-electric-light selection:text-electric flex flex-col font-sans">
      {/* Lightweight creative loading entrance */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Subtle accessible custom cursor */}
      <CustomCursor />

      {/* Main Glass Navigation */}
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive & Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
