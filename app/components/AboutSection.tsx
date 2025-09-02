import { Award, Target, Lightbulb, User } from "lucide-react";

const stats = [
  {
    icon: User,
    value: "50+",
    label: "AI Experts",
    description: "World-class team of AI researchers and engineers"
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
    description: "Proven track record in AI implementation"
  },
  {
    icon: Target,
    value: "99.9%",
    label: "Uptime",
    description: "Enterprise-grade reliability and performance"
  },
  {
    icon: Lightbulb,
    value: "1000+",
    label: "AI Models",
    description: "Custom models deployed across industries"
  }
];

const values = [
  {
    title: "Thinking Beyond",
    description: "We challenge assumptions, explore emerging technologies, and craft solutions that anticipate tomorrow's needs. Innovation meets integrity in everything we build.",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Technical Excellence",
    description: "Our team blends deep technical expertise with strategic clarity, delivering tools that are not only smart but also secure, scalable, and human-centered.",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Real Impact",
    description: "We align innovation with real business needs, partnering with startups, enterprises, and visionary teams to unlock the full potential of their data and systems.",
    color: "from-cyan-500 to-blue-600"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span  className=" px-3 rounded-4xl py-1 text-xs font-medium bg-white/10 text-white border-white/20">
            About Thinqh
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Thinking Beyond
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] bg-clip-text text-transparent">
              Today's Limits
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Thinqh is committed to building intelligent, scalable solutions that help businesses thrive in a data-driven world. 
            Our mission is to make advanced technology accessible and impactful, aligning innovation with real business needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="glass-card border-white/10 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#8b5cf6] to-[#00f5d4] rounded-full">
                    <div className="w-6 h-6 text-white"><IconComponent></IconComponent></div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#00f5d4] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white/90 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Values */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Our Core Values Drive Excellence
            </h3>
            
            {values.map((value, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-2 h-16 bg-gradient-to-b ${value.color} rounded-full flex-shrink-0`}></div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Mission Statement */}
          <div className="space-y-8">
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 border border-accent rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border border-primary rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  To make advanced technology accessible and impactful for businesses worldwide. 
                  We transform ideas into reality by building intelligent solutions that drive sustainable growth, 
                  streamline operations, and uncover actionable insights.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-white/70">Human-Centered Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white/70">Scalable & Secure Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-white/70">Data-Driven Innovation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Highlight */}
            <div className="glass p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Visionary Partnership</h4>
              <p className="text-white/70 mb-4">
                We partner with startups, enterprises, and visionary teams across industries, 
                helping them unlock the full potential of their data, systems, and strategy.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-white/60">Trusted by industry leaders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}