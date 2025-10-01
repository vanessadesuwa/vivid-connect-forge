import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Megaphone, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm">Frontend Developer & Social Media Manager</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Vanessa Omoragbon</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in max-w-2xl mx-auto">
            A passionate creator who brings digital visions to life through code and compelling social media strategies. 
            I craft beautiful, responsive websites and build engaging online communities that drive results.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Link to="/web-development">
              <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:shadow-glow hover:scale-105 transition-all">
                <Code2 className="mr-2 h-5 w-5" />
                View Web Projects
              </Button>
            </Link>
            <Link to="/social-media">
              <Button size="lg" variant="outline" className="border-2 hover:bg-white/10">
                <Megaphone className="mr-2 h-5 w-5" />
                View Social Media Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Do</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-2">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
              <p className="text-foreground/80 mb-4">
                I specialize in creating responsive, user-friendly websites using modern technologies like React, TypeScript, 
                and Tailwind CSS. My focus is on delivering pixel-perfect designs with smooth animations and optimal performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">React</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">HTML/CSS</span>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-2">
              <div className="h-12 w-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-6">
                <Megaphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Management</h3>
              <p className="text-foreground/80 mb-4">
                I develop and execute data-driven social media strategies that build brand awareness, engage audiences, 
                and drive conversions. From content creation to analytics, I manage every aspect of your social presence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">Content Strategy</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">Analytics</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">Community</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">Campaigns</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Award className="h-12 w-12 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Certified & Qualified</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            I continuously invest in my professional development to stay current with industry best practices 
            and emerging technologies. View my certifications to see my commitment to excellence.
          </p>
          <Link to="/web-development">
            <Button size="lg" variant="outline" className="border-2">
              View All Certificates
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
