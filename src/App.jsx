import { useEffect, useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import {
  titles,
  skillCategories,
  experienceItems,
  projectItems,
  certifications,
  achievements,
  skillLevels,
} from './data/portfolioData';

function App() {
  const [activeTitle, setActiveTitle] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTitle((value) => (value + 1) % titles.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (current / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title = titles[activeTitle];

  return (
    <div className="relative overflow-hidden bg-[#071A52] text-slate-100">
      <div className="fixed inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-glow z-50">
        <div className="h-full bg-white/90" style={{ width: `${progress}%` }} />
      </div>

      <Header title={title} />

      <main className="relative px-6 pb-24 pt-14 sm:px-10 lg:px-16">
        <AboutSection />
        <SkillsSection skillCategories={skillCategories} skillLevels={skillLevels} />
        <EducationSection />
        <ExperienceSection experienceItems={experienceItems} />
        <ProjectsSection projectItems={projectItems} />
        <CertificationsSection certifications={certifications} />
        <AchievementsSection achievements={achievements} />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-[#071A52] px-6 py-8 text-center text-slate-400 sm:px-10 lg:px-16">
        <p>Designed & Built with React</p>
      </footer>
    </div>
  );
}

export default App;
