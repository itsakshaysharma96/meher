import { Header } from "./header"
import { Hero } from "./hero"
import { BannerSlider } from "./banner-slider"
import { Services } from "./services"
import { Projects } from "./projects"
import { Contact } from "./contact"
import { Footer } from "./footer"
import { InstagramSection } from "./instagramSection"

export function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BannerSlider />

      <Hero />
      <Services />
      <Projects />
      <InstagramSection />
      <Contact />
      <Footer />
    </div>
  )
}
