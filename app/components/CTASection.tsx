import { Input } from "./ui/input";
import { ArrowRight, Rocket, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="glass-card p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border border-primary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-accent rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-glow">
              <Rocket className="w-10 h-10 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Ready to Think
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Beyond Today's Limits?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with visionary teams who have transformed their operations with intelligent, 
              scalable solutions. Where innovation meets integrity, and technology becomes a catalyst for meaningful change.
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-accent"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white border-0 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white border-0 group"
              >
                Schedule Free Consultation
                <Mail className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 group"
              >
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 text-2xl">✓</span>
                </div>
                <div className="text-white font-semibold mb-1">Free Consultation</div>
                <div className="text-white/60 text-sm">No commitment required</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-400 text-2xl">⚡</span>
                </div>
                <div className="text-white font-semibold mb-1">Quick Implementation</div>
                <div className="text-white/60 text-sm">See results in 30 days</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-400 text-2xl">🛡️</span>
                </div>
                <div className="text-white font-semibold mb-1">100% Secure</div>
                <div className="text-white/60 text-sm">Enterprise-grade security</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Left Card - Demo */}
          <div className="glass p-8 rounded-2xl group hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">See Solutions in Action</h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Book a personalized demo to see how our intelligent solutions can specifically 
                  benefit your business operations and drive sustainable growth.
                </p>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 group-hover:border-primary">
                  Book Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Card - Contact */}
          <div className="glass p-8 rounded-2xl group hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Let's Talk</h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Have questions about technology implementation? Our experts are ready to discuss 
                  your specific needs and create a custom solution strategy.
                </p>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 group-hover:border-accent">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}