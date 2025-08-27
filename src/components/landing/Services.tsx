import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Search, BarChart3, ShoppingCart, Megaphone, Users, Target } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Listing Optimization",
      description: "Perfect your product listings with SEO-optimized titles, compelling descriptions, and high-converting images.",
      features: ["Keyword Research", "A+ Content", "Image Enhancement", "Category Optimization"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Deep insights into your sales data, competitor analysis, and market trends to drive informed decisions.",
      features: ["Sales Analytics", "Competitor Tracking", "Market Research", "ROI Analysis"]
    },
    {
      icon: Megaphone,
      title: "Advertising Management",
      description: "Maximize your ad spend with strategic PPC campaigns, sponsored product optimization, and brand promotion.",
      features: ["PPC Campaigns", "Sponsored Ads", "Brand Store Setup", "Ad Optimization"]
    },
    {
      icon: ShoppingCart,
      title: "Inventory Management",
      description: "Smart inventory planning, demand forecasting, and supply chain optimization to prevent stockouts.",
      features: ["Demand Forecasting", "Stock Management", "Supply Planning", "Warehouse Optimization"]
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Dedicated account managers to handle your Flipkart operations, compliance, and growth strategies.",
      features: ["Dedicated Manager", "Compliance Support", "Growth Planning", "24/7 Support"]
    },
    {
      icon: Target,
      title: "Brand Building",
      description: "Develop your brand presence on Flipkart with enhanced brand stores, customer engagement strategies.",
      features: ["Brand Store Design", "Customer Reviews", "Brand Promotion", "Loyalty Programs"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Flipkart
            <span className="text-growth-primary"> Growth Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From listing optimization to advanced analytics, we provide end-to-end solutions to maximize your Flipkart success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group cursor-pointer animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="mb-6">
                <div className="w-12 h-12 bg-growth-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <service.icon className="h-6 w-6 text-growth-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-growth-primary rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="growth" className="w-full group-hover:shadow-medium">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services