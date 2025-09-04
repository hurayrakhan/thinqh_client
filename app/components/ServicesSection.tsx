import { Bot, BarChart3, Cog, Cloud, Brain, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Applications",
    description: "Intelligent applications that automate decisions, personalize experiences, and reveal hidden opportunities in your data.",
    image: "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2NDc2Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Decision Automation", "Experience Personalization", "Opportunity Discovery"]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Real-time visibility into performance and trends with comprehensive business intelligence systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NjUxODI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Real-time Analytics", "Performance Dashboards", "Trend Analysis"]
  },
  {
    icon: Cog,
    title: "Automation Workflows",
    description: "Reduce manual effort and improve operational consistency with intelligent automation solutions.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTY1MjgxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Workflow Optimization", "Consistency Improvement", "Manual Effort Reduction"]
  },
  {
    icon: Cloud,
    title: "Custom Software Development",
    description: "Tailored platforms for your goals—whether internal tools or client-facing products, built to scale.",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTI4MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Custom Development", "Scalable Architecture", "Goal-Oriented Design"]
  },
  {
    icon: Brain,
    title: "Predictive Tools",
    description: "Develop predictive tools that anticipate tomorrow's needs and help you stay ahead of market changes.",
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJpc3RpYyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NDU5NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Future Forecasting", "Market Analysis", "Trend Prediction"]
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Craft secure, scalable infrastructure that protects your data and ensures reliable operations.",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTI4MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Data Protection", "Scalable Security", "Reliable Operations"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00f5d4]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Cog className="w-4 h-4 text-[#00f5d4]" />
            <span className="text-sm text-white/80">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] bg-clip-text text-transparent">
              That Scale with You
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We specialize in building intelligent, scalable solutions that help businesses 
            thrive in a data-driven world—from AI applications to automation workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <section 
                key={index} 
                className="glass-card border-white/10 hover:border-[#8b5cf6]/30 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="pb-4">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 glass p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-[#00f5d4]" />
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </div>
                
                <div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#00f5d4] mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#00f5d4] rounded-full"></div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <button className="text-[#00f5d4] hover:text-[#00f5d4]/80 text-sm font-medium transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom AI Solution?
            </h3>
            <p className="text-white/70 mb-6">
              Our experts can design and implement tailored AI solutions that fit your unique business requirements.
            </p>
            <button className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] hover:from-[#8b5cf6]/80 hover:to-[#00f5d4]/80 text-white px-8 py-3 rounded-full transition-all duration-300">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}