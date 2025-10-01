import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online shopping platform with payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio for creative professionals",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics",
    technologies: ["React", "Chart.js", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const WebDevPortfolio = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Web Development Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my frontend development work, featuring responsive designs and modern web technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                <div className="flex gap-2">
                  <a href={project.githubUrl} className="hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.liveUrl} className="hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
