import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebDevPortfolio } from "./WebDevPortfolio";
import { SocialMediaPortfolio } from "./SocialMediaPortfolio";
import { Certificates } from "./Certificates";
import { Code2, Megaphone, Award } from "lucide-react";

export const PortfolioTabs = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <Tabs defaultValue="webdev" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1 mb-12">
            <TabsTrigger 
              value="webdev" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white py-3 px-6"
            >
              <Code2 className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Web Development</span>
              <span className="sm:hidden">Dev</span>
            </TabsTrigger>
            <TabsTrigger 
              value="social" 
              className="data-[state=active]:bg-gradient-secondary data-[state=active]:text-white py-3 px-6"
            >
              <Megaphone className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Social Media</span>
              <span className="sm:hidden">Social</span>
            </TabsTrigger>
            <TabsTrigger 
              value="certificates" 
              className="data-[state=active]:bg-accent data-[state=active]:text-white py-3 px-6"
            >
              <Award className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Certificates</span>
              <span className="sm:hidden">Certs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="webdev" className="animate-fade-in">
            <WebDevPortfolio />
          </TabsContent>

          <TabsContent value="social" className="animate-fade-in">
            <SocialMediaPortfolio />
          </TabsContent>

          <TabsContent value="certificates" className="animate-fade-in">
            <Certificates />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
