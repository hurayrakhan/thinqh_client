
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Globe,
  ArrowRight,
  Brain
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "AI Applications", href: "#" },
  { name: "Business Intelligence", href: "#" },
  { name: "Automation Workflows", href: "#" },
  { name: "Custom Development", href: "#" },
  { name: "Predictive Tools", href: "#" },
  { name: "Secure Infrastructure", href: "#" },
];

const resources = [
  { name: "Blog", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Whitepapers", href: "#" },
  { name: "AI Guidelines", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Support Center", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Globe, href: "#", label: "Website" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Thinqh
                </span>
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed max-w-md">
                Building intelligent, scalable solutions that help businesses thrive in a data-driven world. 
                We make advanced technology accessible, impactful, and aligned with real business needs.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>hello@thinqh.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Global & Remote-First</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-white/70 group-hover:text-accent transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-accent transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">AI Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-white/70 hover:text-accent transition-colors flex items-center group"
                    >
                      {service.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href} 
                      className="text-white/70 hover:text-accent transition-colors flex items-center group"
                    >
                      {resource.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/10" />

        {/* Newsletter Signup */}
        <div className="py-8">
          <div className="glass p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Stay Updated with AI Innovation
                </h3>
                <p className="text-white/70">
                  Get the latest insights on AI trends, case studies, and industry developments.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-[300px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-accent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-white hover:from-primary/80 hover:to-accent/80 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10" />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Thinqh Technology Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="border-green-500/30 text-green-400">
                ● Online
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Ethics Statement */}
        <div className="pb-8">
          <div className="glass p-4 rounded-xl text-center">
            <p className="text-white/60 text-sm">
              💡 Thinking Beyond Limits | 🔒 Secure & Scalable Solutions | 🌍 Human-Centered Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}