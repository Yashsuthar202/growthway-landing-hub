import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, TrendingUp, Users, Star } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Scale Your
              <span className="block text-accent"> Flipkart Business </span>
              to New Heights
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Expert growth strategies, advanced analytics, and proven systems to maximize your Flipkart sales and dominate your category.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Growing Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button variant="outline" size="xl" className="text-white border-white/30 hover:bg-white/10">
                Watch Demo
              </Button> */}
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">60+</div>
                <div className="text-sm text-white/80">Happy Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">6x</div>
                <div className="text-sm text-white/80">Avg Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">₹24Lakh+</div>
                <div className="text-sm text-white/80">Revenue Generated</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-success rounded-2xl blur-3xl opacity-30 -z-10"></div>
            <img 
              src={heroImage} 
              alt="Flipkart Growth Analytics Dashboard" 
              className="rounded-2xl shadow-strong w-full"
            />
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-medium animate-bounce">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-growth-primary" />
                <div>
                  <div className="font-bold text-lg">6x</div>
                  <div className="text-xs text-muted-foreground">Sales Growth</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-medium animate-bounce" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-warning" />
                <div>
                  <div className="font-bold text-lg">4.9★</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero