import proj1 from "@/public/homepage/project/1.png"
import proj2 from "@/public/homepage/project/2.png"
import proj3 from "@/public/homepage/project/3.png"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "DONNA PAULA",
      location: "GOA",
      image: proj1,
    },
    {
      title: "LAW OFFICE, GOLF LINKS",
      location: "NEW DELHI",
      image: proj2,
    },
    {
      title: "EMIRATES CROWN",
      location: "DUBAI",
      image:  proj3,
    },
  ]

  return (
    <section id="portfolio" className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-center font-bold text-primary">LATEST PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg font-semibold text-primary mb-1">{project.title}</h3>
                <p className="text-foreground text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
