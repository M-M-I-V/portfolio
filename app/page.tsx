import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedProjects from "@/components/featured-projects"
import ProjectGrid from "@/components/project-grid"
import SkillsSection from "@/components/skills-section"
import ExperienceTimeline from "@/components/experience-timeline"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <ProjectGrid />
      <SkillsSection />
      <ExperienceTimeline />
      <AboutSection />
      <Footer />
    </main>
  )
}
