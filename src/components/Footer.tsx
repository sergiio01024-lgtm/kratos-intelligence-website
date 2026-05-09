import { Separator } from "./ui/separator";
import { Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Websites", href: "#services" },
        { name: "AI Chatbots", href: "#services" },
        { name: "Phone Agents", href: "#services" },
        { name: "Workflow Automation", href: "#services" },
        { name: "Lead Generation", href: "#services" },
        { name: "AI Content", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Packages", href: "#packages" },
        { name: "Our Process", href: "#process" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer id="footer" className="bg-[#050816] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#667eea] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(102,126,234,0.3)]">
                  <span className="text-white font-black text-lg italic tracking-tighter">KI</span>
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Kratos Intelligence</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                San Diego based AI automation agency. We build high-performance systems for trade businesses so you can focus on winning more jobs.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#667eea] hover:border-[#667eea] text-white transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white/30 text-xs font-medium tracking-wide">
            © 2025 Kratos Intelligence. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>

  );
}