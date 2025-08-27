import { Button } from "@/components/ui/enhanced-button"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-hero rounded-md"></div>
              <span className="text-xl font-bold">GrowthWay</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for Flipkart growth. We help sellers maximize their potential with proven strategies and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">Listing Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Performance Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Advertising Management</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Inventory Management</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Account Management</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Brand Building</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Flipkart Guide</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-growth-light" />
                <span>+91 82697 33434</span>
                <span>+91 78913 04255</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-growth-light" />
                <span>hello@growthway.in</span>
              </div>
              <div className="pt-4">
                <Button variant="growth" className="w-full">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 GrowthWay. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-white transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer