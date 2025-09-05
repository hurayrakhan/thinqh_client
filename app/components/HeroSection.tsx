import { ArrowRight, Sparkles, Zap } from "lucide-react";


export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8b5cf6]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00f5d4]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#8b5cf6]/10 to-[#00f5d4]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 mt-4 rounded-full">
              <Sparkles className="w-4 h-4 text-[#00f5d4]" />
              <span className="text-sm text-white/80">Thinking Beyond Limits</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Intelligent Solutions
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] bg-clip-text text-transparent">
                  for Data-Driven Growth
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                We build scalable, intelligent solutions that help businesses thrive in a data-driven world. 
                From AI-powered applications to business intelligence, we transform ideas into impactful reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button  
                className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] text-sm hover:from-[#8b5cf6]/80 hover:to-[#00f5d4]/80 text-white border-0 flex items-center px-4 py-2 rounded-xl group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="px-4 py-2 rounded-xl bg-[#0a0a1a] border border-white/20 text-white text-sm  hover:bg-white/10 hover:border-white/40 hover:text-[#00f5d4]"
              >
                Book a Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-white/60">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/60">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative animate-float">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] rounded-3xl blur-xl opacity-30"></div>
              
              {/* Main image container */}
              <div className="relative glass-card p-4">
                <img
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJpc3RpYyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NDU5NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology Visualization"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 glass p-3 rounded-full animate-pulse">
                  <Zap className="w-6 h-6 text-[#00f5d4]" />
                </div>
                
                <div className="absolute bottom-8 left-8 glass p-4 rounded-xl">
                  <div className="text-sm text-white/80">AI Processing</div>
                  <div className="text-2xl font-bold text-[#00f5d4]">Real-time</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#8b5cf6]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-[#00f5d4]/30 rounded-full spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
} 