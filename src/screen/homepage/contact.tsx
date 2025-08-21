import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function Contact() {
  return (
    <section id="contact" className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div>
            <h2 className="font-serif text-2xl lg:text-4xl font-medium text-black tracking-widest mb-8 text-center">GET IN TOUCH</h2>

            <div className="space-y-6 text-black  md:mx-16">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-background/70 py-8 text-lg rounded" />
                <Input placeholder="Last Name" className="bg-background/70 py-8 text-lg rounded" />
              </div>
              <Input placeholder="Email Address" className="bg-background/70 py-8 text-lg rounded" />
              <Input placeholder="Reason for Enquiry" className="bg-background/70 py-8 text-lg rounded" />
              <Textarea placeholder="Message" rows={12} className="bg-background/70 rounded text-lg resize-none h-[6rem]" />

              <div className="flex items-center justify-center space-x-2">
                <Checkbox id="privacy" />
                <label htmlFor="privacy" className="text-lg text-black">
                  I have read and agree to the terms in the <a href="" className="underline">privacy policy</a>.
                </label>
              </div>

              <Button className="text-lg mx-auto text-center flex rounded-none px-12 tracking-wider py-6 bg-primary text-primary-foreground hover:bg-primary/90
               before:w-[2rem] before:border-[.5px] before:border-primary-foreground
               after:w-[2rem] after:border-[.5px] after:border-primary-foreground">
                SEND
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
