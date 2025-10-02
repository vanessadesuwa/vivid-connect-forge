import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero bg-[length:200%_200%] animate-gradient-shift">
      <div className="absolute inset-0 bg-background/10 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Creative Developer &
              <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Social Media Expert
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Crafting beautiful digital experiences and compelling social media strategies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={scrollToPortfolio}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-glow"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
            >
              Get In Touch
            </Button>
          </div>

          <button
            onClick={scrollToPortfolio}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
