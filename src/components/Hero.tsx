import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20 relative z-10 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Picture Space */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-card border-4 border-primary shadow-card flex items-center justify-center">
                <p className="text-muted-foreground text-center px-8">Your photo here</p>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                  Creative Developer &
                  <span className="block text-primary">
                    Social Media Expert
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
                  Crafting beautiful digital experiences and compelling social media strategies
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-8">
                <Button 
                  size="lg"
                  onClick={scrollToPortfolio}
                  className="font-semibold px-8"
                >
                  View My Work
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToPortfolio}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-all animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};
