import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';

function App() {
  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
