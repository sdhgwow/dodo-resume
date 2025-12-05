import { useEffect, useRef } from 'react';
import { useThemeStore } from './providers/themeStore';
import { HeroSection } from '@/widgets/HeroSection';
import { StackSection } from '@/widgets/StackSection';
import { ExperienceSection } from '@/widgets/ExperienceSection';
import { ProjectsSection } from '@/widgets/ProjectsSection';
import { WhyDodoSection } from '@/widgets/WhyDodoSection';
import { Footer } from '@/widgets/Footer';
import { ThemeToggle } from '@/features/ThemeToggle';
import './App.css';

function App() {
  const { theme, setTheme } = useThemeStore();
  const hasInitialized = useRef(false);

  // восстановление темы из localStorage при монтировании
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const savedTheme = localStorage.getItem('dodo-resume-theme');
    if (savedTheme) {
      try {
        const themeData = JSON.parse(savedTheme);
        if (themeData?.state?.theme) {
          setTheme(themeData.state.theme);
        }
      } catch (error) {
        console.warn('Failed to parse saved theme:', error);
      }
    }
  }, [setTheme]);

  return (
    <div className="app" data-theme={theme}>
      <ThemeToggle />
      <HeroSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <WhyDodoSection />
      <Footer />
    </div>
  );
}

export default App;