import { AboutSection } from "~/components/AboutSection";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home || Thinqh" },
    { name: "description", content: "Welcome to Thinqh!" },
  ];
}

export default function Home() {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      {/* <Navigation /> */}
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        {/* <HeroSection /> */}
        
        {/* Services Section */}
        {/* <ServicesSection /> */}
        
        {/* About Section */}
        <AboutSection />
        
        {/* Portfolio Section */}
        {/* <PortfolioSection /> */}
        
        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}
        
        {/* CTA Section */}
        {/* <CTASection /> */}
      </main>
      
      {/* Footer */}
      {/* <Footer /> */}
    </div>;
}
