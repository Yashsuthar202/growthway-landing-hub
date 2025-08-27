import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your
            <span className="text-growth-primary"> Flipkart Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our growth experts and start your journey to Flipkart success today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-0 shadow-medium animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input placeholder="Your full name" className="border-border/50 focus:border-growth-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input placeholder="+91 82697 33434" className="border-border/50 focus:border-growth-primary" />
                  <Input placeholder="+91 78913 04255" className="border-border/50 focus:border-growth-primary" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" className="border-border/50 focus:border-growth-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Business Category</label>
                <Input placeholder="e.g., Electronics, Fashion, Home & Kitchen" className="border-border/50 focus:border-growth-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Current Monthly Revenue</label>
                <Input placeholder="e.g., ₹5L - ₹10L per month" className="border-border/50 focus:border-growth-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your business goals and challenges..."
                  className="border-border/50 focus:border-growth-primary min-h-[120px]"
                />
              </div>
              <Button variant="growth" size="xl" className="w-full">
                Get Free Growth Consultation
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <Card className="p-6 bg-gradient-success border-0 shadow-soft">
              <h3 className="text-xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-white/90 mb-4">
                Book a free 30-minute consultation call with our Flipkart growth experts.
              </p>
              <Button variant="hero" className="bg-white text-growth-primary hover:bg-white/90">
                Book Free Call
              </Button>
            </Card>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-growth-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-growth-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 82697 33434</p>
                  <p className="text-muted-foreground">+91 78913 04255</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 7 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-trust-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@growthway.in</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Support Hours</h4>
                  <p className="text-muted-foreground">24/7 Emergency Support</p>
                  <p className="text-sm text-muted-foreground">For existing clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact