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
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary text-center mb-8">GET IN TOUCH</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-background py-6 text-lg rounded" />
                <Input placeholder="Last Name" className="bg-background py-6 text-lg rounded" />
              </div>
              <Input placeholder="Email Address" className="bg-background py-6 text-lg rounded" />
              <Input placeholder="Reason for Enquiry" className="bg-background py-6 text-lg rounded" />
              <Textarea placeholder="Message" rows={12} className="bg-background rounded text-lg resize-none h-[6rem]" />

              <div className="flex items-center justify-center space-x-2">
                <Checkbox id="privacy" />
                <label htmlFor="privacy" className="text-lg text-black">
                  I have read and agree to the terms in the privacy policy.
                </label>
              </div>

              <Button className="text-lg mx-auto text-center flex rounded px-16 py-6 bg-primary text-primary-foreground hover:bg-primary/90">SEND</Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
