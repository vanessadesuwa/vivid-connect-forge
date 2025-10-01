import { Link, useLocation } from "react-router-dom";
import { Code2, Megaphone, Home } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Vanessa Omoragbon
          </Link>
          
          <div className="flex gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/")
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link
              to="/web-development"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/web-development")
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <Code2 className="h-4 w-4" />
              <span className="hidden sm:inline">Web Dev</span>
            </Link>
            
            <Link
              to="/social-media"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/social-media")
                  ? "bg-gradient-secondary text-white shadow-glow"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <Megaphone className="h-4 w-4" />
              <span className="hidden sm:inline">Social Media</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
