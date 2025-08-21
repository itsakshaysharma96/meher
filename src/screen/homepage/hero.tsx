import { Button } from "@/components/ui/button"
import AboutImage from "@/public/homepage/about.png"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full px-6 bg-gradient-to-r from-white to-background from-50% to-50% py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <div className="pr-16">
              <Image src={AboutImage} alt="About Meher Sra Designs" className="w-full h-auto" />
            </div>
          </div>

          <div className="space-y-6 px-16">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">THE COMPANY</h1>
              <h2 className="font-serif text-2xl lg:text-3xl text-primary mb-6">
                ABOUT MEHER
                <br />
                and THE TEAM
              </h2>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Meher Sra Designs is a New Delhi-based interior design studio led by Meher Rohatgi - an interior
                designer with a global perspective and a deeply personal approach.
              </p>
              <p>
                Rooted in craftsmanship, emotion, and collaboration, the studio creates refined, timeless interiors that
                are tailored to how people truly live.
              </p>
              <p>
                Whether it's a city apartment, a holiday home, or a boutique workspace, Meher's design language balances
                classical restraint with modern nuance always guided by the soul of the space and the story of its
                inhabitants.
              </p>
            </div>

            <Button variant="outline" className="mt-6 bg-transparent">
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
