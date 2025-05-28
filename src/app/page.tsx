import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ToolsSection from '@/components/ToolsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </main>
  );
}
