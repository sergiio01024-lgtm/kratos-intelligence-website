import { Separator } from "./ui/separator";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Chatbots", href: "#services" },
        { name: "Process Automation", href: "#services" },
        { name: "Data Processing", href: "#services" },
        { name: "Business Intelligence", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Our Process", href: "#process" },
        { name: "Case Studies", href: "#case-studies" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-accent/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AI</span>
                </div>
                <span className="font-bold text-xl">AutomateFlow</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-md">
                Transform your business with cutting-edge AI automation solutions. 
                We help companies streamline operations, reduce costs, and scale efficiently.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
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

        <Separator />
        
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 AutomateFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}