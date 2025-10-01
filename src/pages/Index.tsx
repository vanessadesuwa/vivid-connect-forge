import { Hero } from "@/components/Hero";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PortfolioTabs />
      <Footer />
    </div>
  );
};

export default Index;
