import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Star, DollarSign } from "lucide-react"

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "6x",
      label: "Average Sales Growth",
      description: "Our clients see 6x growth within 6 months"
    },
    {
      icon: DollarSign,
      value: "₹24L+",
      label: "Revenue Generated",
      description: "Total revenue generated for our clients"
    },
    {
      icon: Users,
      value: "60+",
      label: "Happy Sellers",
      description: "Trusted by sellers across all categories"
    },
    {
      icon: Star,
      value: "4.6",
      label: "Client Satisfaction",
      description: "Consistently rated 5-star service"
    }
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      business: "Electronics Store",
      quote: "GrowthWay increased our monthly sales from ₹2L to ₹8L in just 4 months. Their listing optimization and ad management is exceptional.",
      growth: "+300%"
    },
    {
      name: "Priya Patel",
      business: "Fashion Brand",
      quote: "The analytics and insights provided by GrowthWay helped us understand our market better and optimize our inventory.",
      growth: "+250%"
    },
    {
      name: "Amit Kumar",
      business: "Home & Kitchen",
      quote: "Professional service and dedicated support. They handle everything while I focus on sourcing products.",
      growth: "+400%"
    }
  ]

  return (
    <section id="results" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Proven Results That
            <span className="text-growth-primary"> Speak Volumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See the incredible growth our clients have achieved.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-8 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-growth-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-growth-primary" />
              </div>
              <div className="text-4xl font-bold text-growth-primary mb-2">{metric.value}</div>
              <div className="font-semibold text-foreground mb-2">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-background border-0 shadow-soft hover:shadow-medium transition-smooth animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    </div>
                    <div className="bg-growth-primary/10 text-growth-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.growth}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results