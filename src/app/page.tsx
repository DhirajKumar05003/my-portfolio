import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { EducationSection } from "@/sections/Education";
import { ExperienceSection } from "@/sections/Experience";
import { SkillsSection } from "@/sections/Skills";
import { BlogsSection } from "@/sections/Blogs";
import { AboutMeSection } from "@/sections/AboutMe";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
