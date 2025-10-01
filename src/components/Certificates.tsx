import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Advanced React Development",
    issuer: "Meta",
    date: "2024",
    skills: ["React", "Hooks", "Performance Optimization"],
    credentialUrl: "#"
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
    credentialUrl: "#"
  },
  {
    title: "Social Media Marketing Professional",
    issuer: "Hootsuite",
    date: "2024",
    skills: ["Content Strategy", "Analytics", "Community Management"],
    credentialUrl: "#"
  },
  {
    title: "Google Digital Marketing & E-commerce",
    issuer: "Google",
    date: "2023",
    skills: ["SEO", "Social Media", "Email Marketing"],
    credentialUrl: "#"
  },
  {
    title: "UI/UX Design Specialization",
    issuer: "Coursera",
    date: "2023",
    skills: ["Figma", "User Research", "Prototyping"],
    credentialUrl: "#"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    skills: ["ES6", "Algorithms", "Data Structures"],
    credentialUrl: "#"
  }
];

export const Certificates = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Certificates & Achievements
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional certifications demonstrating expertise in web development and social media management
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certificates.map((cert, index) => (
          <Card 
            key={index} 
            className="hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border-2 group"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <Award className="text-accent group-hover:text-primary transition-colors" size={32} />
                <a 
                  href={cert.credentialUrl}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <CardTitle className="text-xl mt-4">{cert.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span className="font-semibold">{cert.issuer}</span>
                <span className="flex items-center gap-1 text-xs">
                  <Calendar size={12} />
                  {cert.date}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="outline"
                    className="border-primary/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
