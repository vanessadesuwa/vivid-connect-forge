import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, BarChart3, Lightbulb, Megaphone } from "lucide-react";

const SocialMedia = () => {
  const campaigns = {
    strategy: [
      {
        title: "Brand Repositioning Campaign",
        client: "Tech Startup",
        description: "Complete brand overhaul and positioning strategy for emerging tech company",
        platforms: ["LinkedIn", "Twitter", "Instagram"],
        metrics: { reach: "500K+", engagement: "12%", result: "3x follower growth" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      {
        title: "Product Launch Strategy",
        client: "E-commerce Brand",
        description: "Multi-platform launch campaign with influencer partnerships",
        platforms: ["Instagram", "TikTok", "Facebook"],
        metrics: { reach: "1M+", engagement: "18%", result: "$250K revenue" },
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      },
    ],
    content: [
      {
        title: "Visual Content Series",
        client: "Fashion Retailer",
        description: "Daily content creation including graphics, videos, and stories",
        platforms: ["Instagram", "Pinterest", "TikTok"],
        metrics: { reach: "750K+", engagement: "15%", result: "50K new followers" },
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      },
      {
        title: "Educational Content Campaign",
        client: "SaaS Company",
        description: "Thought leadership content and tutorials for B2B audience",
        platforms: ["LinkedIn", "YouTube", "Twitter"],
        metrics: { reach: "300K+", engagement: "22%", result: "1K+ leads" },
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
      },
    ],
    analytics: [
      {
        title: "Performance Optimization",
        client: "Health & Wellness Brand",
        description: "Data-driven optimization of social media performance and ROI",
        platforms: ["Instagram", "Facebook", "TikTok"],
        metrics: { reach: "2M+", engagement: "25%", result: "40% cost reduction" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      {
        title: "Campaign Analytics Dashboard",
        client: "Multi-Brand Agency",
        description: "Custom reporting and analytics system for campaign tracking",
        platforms: ["All Platforms"],
        metrics: { reach: "5M+", engagement: "20%", result: "Client retention up 60%" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
    ],
    community: [
      {
        title: "Community Building Initiative",
        client: "Gaming Company",
        description: "Built and managed engaged community with daily interactions",
        platforms: ["Discord", "Twitter", "Reddit"],
        metrics: { reach: "100K+", engagement: "35%", result: "10K active members" },
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      },
      {
        title: "Customer Engagement Program",
        client: "Restaurant Chain",
        description: "Community management and customer service excellence",
        platforms: ["Facebook", "Instagram", "Twitter"],
        metrics: { reach: "400K+", engagement: "28%", result: "95% satisfaction" },
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      },
    ],
  };

  const CampaignCard = ({ campaign }: { campaign: typeof campaigns.strategy[0] }) => (
    <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle>{campaign.title}</CardTitle>
        <CardDescription className="font-semibold text-primary">{campaign.client}</CardDescription>
        <CardDescription>{campaign.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {campaign.platforms.map((platform) => (
            <Badge key={platform} variant="outline">
              {platform}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div>
            <div className="text-sm text-foreground/60 mb-1">Reach</div>
            <div className="font-bold text-primary">{campaign.metrics.reach}</div>
          </div>
          <div>
            <div className="text-sm text-foreground/60 mb-1">Engagement</div>
            <div className="font-bold text-secondary">{campaign.metrics.engagement}</div>
          </div>
          <div>
            <div className="text-sm text-foreground/60 mb-1">Result</div>
            <div className="font-bold text-accent">{campaign.metrics.result}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <Megaphone className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Social Media Management</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Data-driven social media strategies that build communities, drive engagement, and deliver measurable results
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="strategy" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 h-auto p-1 mb-12">
              <TabsTrigger value="strategy" className="py-3 px-2">
                <Target className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">Strategy</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="py-3 px-2">
                <Lightbulb className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="py-3 px-2">
                <BarChart3 className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="py-3 px-2">
                <Users className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">Community</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="strategy" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Brand Strategy & Positioning</h2>
                <p className="text-foreground/70">Comprehensive social media strategies that align with business goals</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {campaigns.strategy.map((campaign) => (
                  <CampaignCard key={campaign.title} campaign={campaign} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="content" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Content Creation & Management</h2>
                <p className="text-foreground/70">Engaging content that resonates with your audience and drives action</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {campaigns.content.map((campaign) => (
                  <CampaignCard key={campaign.title} campaign={campaign} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Analytics & Performance</h2>
                <p className="text-foreground/70">Data-driven insights and optimization for maximum ROI</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {campaigns.analytics.map((campaign) => (
                  <CampaignCard key={campaign.title} campaign={campaign} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Community Management</h2>
                <p className="text-foreground/70">Building and nurturing engaged communities around your brand</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {campaigns.community.map((campaign) => (
                  <CampaignCard key={campaign.title} campaign={campaign} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h2 className="text-3xl font-bold mb-4">Results That Matter</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My approach combines creativity with data analytics to deliver campaigns that not only look great but drive real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-2">
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-foreground/70">Total Reach</div>
            </Card>
            <Card className="p-6 text-center border-2">
              <div className="text-4xl font-bold text-secondary mb-2">20%</div>
              <div className="text-foreground/70">Avg. Engagement</div>
            </Card>
            <Card className="p-6 text-center border-2">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-foreground/70">Successful Campaigns</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
