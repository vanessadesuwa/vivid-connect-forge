import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Layout, ShoppingCart, Zap, Award } from "lucide-react";
import { Certificates } from "@/components/Certificates";

const WebDevelopment = () => {
  const projects = {
    frontend: [
      {
        title: "E-Commerce Platform",
        description: "Modern shopping experience with cart management, product filtering, and secure checkout",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio with smooth animations and modern design principles",
        technologies: ["React", "Framer Motion", "CSS3"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
    fullstack: [
      {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and team features",
        technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Social Dashboard",
        description: "Analytics dashboard with data visualization and reporting features",
        technologies: ["React", "TypeScript", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
    responsive: [
      {
        title: "Restaurant Website",
        description: "Mobile-first restaurant site with online reservations and menu showcase",
        technologies: ["React", "Tailwind CSS", "Responsive Design"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Fitness Tracker",
        description: "Progressive web app for tracking workouts and health metrics",
        technologies: ["React", "PWA", "IndexedDB", "Chart.js"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
  };

  const ProjectCard = ({ project }: { project: typeof projects.frontend[0] }) => (
    <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{project.title}</span>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <Code className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Web Development Portfolio</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Building modern, scalable, and performant web applications with clean code and best practices
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 h-auto p-1 mb-12">
              <TabsTrigger value="frontend" className="py-3 px-4">
                <Layout className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="fullstack" className="py-3 px-4">
                <Code className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Full-Stack</span>
              </TabsTrigger>
              <TabsTrigger value="responsive" className="py-3 px-4">
                <Zap className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Responsive</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Frontend Development</h2>
                <p className="text-foreground/70">Beautiful, interactive user interfaces with modern frameworks</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.frontend.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fullstack" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Full-Stack Projects</h2>
                <p className="text-foreground/70">End-to-end applications with backend integration and databases</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.fullstack.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="responsive" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Responsive Design</h2>
                <p className="text-foreground/70">Mobile-first applications that work seamlessly across all devices</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.responsive.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Professional Certificates</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Continuously learning and staying updated with the latest web development technologies
            </p>
          </div>
          <Certificates />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
