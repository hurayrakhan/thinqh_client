import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechForward Inc.",
    rating: 5,
    content: "NeuralTech's AI chatbot solution transformed our customer service operations. We saw an 85% improvement in customer satisfaction and a 90% reduction in response times. The implementation was seamless and the ongoing support has been exceptional.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Operations", 
    company: "Global Manufacturing Co.",
    rating: 5,
    content: "The predictive analytics platform has revolutionized our decision-making process. We've reduced operational costs by 30% and improved our forecasting accuracy significantly. NeuralTech truly understands enterprise-level AI implementation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Head of Innovation",
    company: "FinanceFirst Bank",
    rating: 5,
    content: "Working with NeuralTech on our AI-powered risk assessment system was a game-changer. Their expertise in financial AI applications is unmatched, and they delivered results that exceeded our expectations. ROI was realized within 6 months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "RetailNext Solutions",
    rating: 5,
    content: "The automation solutions provided by NeuralTech have streamlined our entire workflow. We've seen a 45% increase in operational efficiency and our team can now focus on strategic initiatives rather than repetitive tasks.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "Chief Data Officer",
    company: "DataDriven Corp",
    rating: 5,
    content: "NeuralTech's machine learning models have provided us with insights we never thought possible. Their approach to custom AI development is methodical, innovative, and delivers tangible business value. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  }
];

const companyLogos = [
  "TechForward", "GlobalMFG", "FinanceFirst", "RetailNext", "DataDriven", 
  "InnovateCorp", "FutureTech", "SmartSystems"
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`} 
      />
    ));
  };

  return (
    <section className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            Client Testimonials
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Trusted by Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our clients about how our AI solutions 
            have transformed their businesses and delivered exceptional results.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass-card border-white/10 relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-6 left-6 flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="glass p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="pt-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-white/70">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-accent font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-accent' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Logos Grid */}
        <div className="glass-card p-8 mb-16">
          <h3 className="text-center text-white/80 mb-8">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white/60 font-bold text-sm">{company.slice(0, 3)}</span>
                </div>
                <div className="text-xs text-white/50">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/60">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-white/60">Project Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}