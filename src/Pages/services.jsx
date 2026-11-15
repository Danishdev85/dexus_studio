import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import ServicesHero from "../Components/Services/serviceshero";
import WebSeo from "../Components/Services/webseo";
import MetaAutomation from "../Components/Services/metaautomation";
import AiToolsDatabase from "../Components/Services/aitoolsdatabase";
import ScrapingTroubleshooting from "../Components/Services/scrapingtroubleshooting";
import { usePageMeta } from "../seo";

export default function Services() {
  usePageMeta("Our Services — Websites, AI Agents, Online Stores & API Integration | Dexus Studios", "Explore Dexus Studios services: business websites, AI agents, online stores, API integration, web scraping and promotional content for small businesses.");
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9FE] pt-20">
        <ServicesHero />
        <WebSeo />
        <MetaAutomation />
        <AiToolsDatabase />
        <ScrapingTroubleshooting />
      </main>

      <Footer />
    </>
  );
}