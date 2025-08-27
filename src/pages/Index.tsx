import Header from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"
import Services from "@/components/landing/Services"
import Results from "@/components/landing/Results"
import Contact from "@/components/landing/Contact"
import Footer from "@/components/landing/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
