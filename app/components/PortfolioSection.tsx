import { TrendingUp, Clock, Users, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Intelligent Customer Platform",
    category: "Retail & E-commerce",
    description: "AI-powered application that automates customer interactions and personalizes experiences, increasing satisfaction by 85% and reducing response time by 90%.",
    image: "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2NDc2Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { icon: TrendingUp, label: "85% Higher Satisfaction", value: "Customer Experience" },
      { icon: Clock, label: "90% Faster Response", value: "Support Efficiency" },
      { icon: Users, label: "10K+ Daily Interactions", value: "User Engagement" }
    ],
    technologies: ["AI Decision Automation", "Experience Personalization", "Cloud Infrastructure"],
    client: "Global Retail Chain",
    timeline: "3 months"
  },
  {
    title: "Business Intelligence System",
    category: "Finance & Banking",
    description: "Real-time business intelligence platform that provides comprehensive visibility into performance trends and reduces investment risks by 60%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NjUxODI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { icon: TrendingUp, label: "60% Risk Reduction", value: "Investment Safety" },
      { icon: Clock, label: "Real-time Insights", value: "Market Analysis" },
      { icon: Users, label: "500+ Users", value: "Platform Adoption" }
    ],
    technologies: ["Predictive Analytics", "Data Visualization", "Scalable Infrastructure"],
    client: "Investment Bank",
    timeline: "6 months"
  },
  {
    title: "Automation Workflow Platform",
    category: "Manufacturing",
    description: "Intelligent automation system that streamlined workflows, optimized production efficiency by 45%, and reduced operational costs significantly.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTY1MjgxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { icon: TrendingUp, label: "45% Efficiency Gain", value: "Production Output" },
      { icon: Clock, label: "24/7 Operations", value: "System Reliability" },
      { icon: Users, label: "200+ Users", value: "Workforce Enhancement" }
    ],
    technologies: ["Workflow Automation", "IoT Integration", "Predictive Analytics"],
    client: "Manufacturing Corporation",
    timeline: "8 months"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className=" bg-white/10 text-white border border-white/20 rounded-4xl px-2 py-1 text-xs font-medium">
            Success Stories
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Transforming Ideas
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6] bg-clip-text text-transparent">
              into Reality
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve remarkable results 
            through intelligent solutions and strategic technology implementations that drive sustainable growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="glass-card border-white/10 overflow-hidden group hover:border-[#8b5cf6]/30 transition-all duration-500">
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                {/* Image Column */}
                <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/20 text-white border-white/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Timeline Badge */}
                  <div className="absolute bottom-6 right-6 glass px-3 py-2 rounded-full">
                    <span className="text-sm text-white">{project.timeline}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="p-0 mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-0 space-y-8">
                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-4">
                      {project.metrics.map((metric, metricIndex) => {
                        const IconComponent = metric.icon;
                        return (
                          <div key={metricIndex} className="flex items-center space-x-4 glass p-4 rounded-xl">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-white">{metric.label}</div>
                              <div className="text-sm text-white/60">{metric.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="border border-white/20 text-white/80 rounded-4xl px-2 py-0.5 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div>
                        <div className="text-sm text-white/60">Client</div>
                        <div className="font-semibold text-white">{project.client}</div>
                      </div>
                      <button className="flex items-center space-x-2 text-[#00f5d4] hover:text-[#00f5d4]/80 transition-colors">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/70 mb-6">
              Join the ranks of industry leaders who have transformed their operations with intelligent, scalable solutions.
            </p>
            <button className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] hover:from-[#8b5cf6]/80 hover:to-[#00f5d4]/80 text-white px-8 py-3 rounded-full transition-all duration-300 group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}