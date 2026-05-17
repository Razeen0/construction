import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"
import ProjectsSection from "../components/ProjectsSection"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>

      <Navbar />

      <Hero />

      <ServicesSection />

      <ProjectsSection />

      <WhyChooseUs />

      <Testimonials />

      <CTASection />

      <Footer />

    </div>
  )
}

export default Home