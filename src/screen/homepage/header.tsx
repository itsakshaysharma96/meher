import Image from "next/image"
import Logo from "@/public/logo-new.png"

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-background">
      <div className="max-w-7xl mx-auto">


        <nav className="hidden md:flex items-center justify-between space-x-8">
          <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
            ABOUT
          </a>
          <a href="#services" className="text-lg font-medium hover:text-primary transition-colors">
            OUR SERVICES
          </a>
          <a href="#portfolio" className="text-lg font-medium hover:text-primary transition-colors">
            PORTFOLIO
          </a>
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            <Image src={Logo} alt="logo" width={20} height={20} className="inline-block mx-auto w-[70px] object-contain" />
          </a>
          <a href="#collections" className="text-lg font-medium hover:text-primary transition-colors">
            COLLECTIONS
          </a>
          <a href="#bts" className="text-lg font-medium hover:text-primary transition-colors">
            #BTS
          </a>
          <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
            CONTACT
          </a>
        </nav>

      </div>
    </header>
  )
}
