import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react";

const campaigns = [
  {
    title: "Brand Awareness Campaign",
    client: "Tech Startup",
    description: "Multi-platform campaign that increased brand recognition by 150%",
    platforms: ["Instagram", "Twitter", "LinkedIn"],
    metrics: {
      reach: "250K+",
      engagement: "12.5%",
      followers: "+15K"
    },
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop"
  },
  {
    title: "Product Launch Strategy",
    client: "E-Commerce Brand",
    description: "Coordinated launch across all social channels with influencer partnerships",
    platforms: ["Instagram", "TikTok", "Facebook"],
    metrics: {
      reach: "500K+",
      engagement: "18.2%",
      conversions: "2.8K"
    },
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop"
  },
  {
    title: "Community Engagement",
    client: "Lifestyle Brand",
    description: "Built and nurtured an active community through consistent content",
    platforms: ["Instagram", "Facebook", "YouTube"],
    metrics: {
      reach: "180K+",
      engagement: "22.7%",
      followers: "+25K"
    },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop"
  },
  {
    title: "Viral Content Series",
    client: "Entertainment Company",
    description: "Created trending content series that dominated social feeds",
    platforms: ["TikTok", "Instagram", "Twitter"],
    metrics: {
      reach: "1M+",
      engagement: "25.3%",
      shares: "45K+"
    },
    image: "https://images.unsplash.com/photo-1551817958-11e0f7bbea9b?w=800&h=500&fit=crop"
  }
];

export const SocialMediaPortfolio = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
          Social Media Campaigns
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strategic campaigns that drive engagement, build communities, and deliver measurable results
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {campaigns.map((campaign, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{campaign.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.client}</p>
                </div>
                <TrendingUp className="text-secondary" size={24} />
              </div>
              <CardDescription>{campaign.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {campaign.platforms.map((platform, i) => (
                  <Badge key={i} variant="outline" className="border-secondary text-secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <Users className="mx-auto mb-2 text-primary" size={20} />
                  <p className="text-sm font-semibold">{campaign.metrics.reach}</p>
                  <p className="text-xs text-muted-foreground">Reach</p>
                </div>
                <div className="text-center">
                  <Heart className="mx-auto mb-2 text-accent" size={20} />
                  <p className="text-sm font-semibold">{campaign.metrics.engagement}</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
                <div className="text-center">
                  <MessageCircle className="mx-auto mb-2 text-secondary" size={20} />
                  <p className="text-sm font-semibold">{campaign.metrics.followers || campaign.metrics.conversions}</p>
                  <p className="text-xs text-muted-foreground">Growth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
