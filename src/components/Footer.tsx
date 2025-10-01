import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Mail, url: "mailto:hello@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-hero bg-[length:200%_200%] animate-gradient-shift py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-white">Let's Work Together</h3>
          <p className="text-white/90 max-w-xl mx-auto">
            Ready to bring your project to life or grow your social media presence? 
            Let's create something amazing together.
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  size="icon"
                  variant="ghost"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Icon size={20} />
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              © 2024 Portfolio. Crafted with passion and creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
