import Logo from "@/public/logo.png"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full px-0 bg-background text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div>
            <Image src={Logo} alt="Meher Sra Designs Logo" width={150} height={50} className="" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-lg">
            <div className="space-y-2">
              <a href="#about" className="block hover:underline">
                ABOUT
              </a>
              <a href="#services" className="block hover:underline">
                OUR SERVICES
              </a>
              <a href="#portfolio" className="block hover:underline">
                PORTFOLIO
              </a>
              <a href="#" className="block hover:underline">
                PRIVACY POLICY
              </a>
            </div>
            <div className="space-y-2">
              <a href="#bts" className="block hover:underline">
                #BTS
              </a>
              <a href="#contact" className="block hover:underline">
                CONTACT US
              </a>
              <a href="#" className="block hover:underline">
                TERMS & CONDITIONS
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-primary-foreground rounded"></div>
            <div className="w-6 h-6 bg-primary-foreground rounded"></div>
          </div>
        </div>

      </div>
      <div className="bg-primary py-3 text-center text-lg text-white">
          <p>COPYRIGHT MEHER SRA DESIGNS 2025</p>
        </div>
    </footer>
  )
}
