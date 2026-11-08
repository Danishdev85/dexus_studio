import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

import ServicesHero from "../components/services/serviceshero";
import WebSeo from "../components/services/webseo";
import MetaAutomation from "../components/services/metaautomation";
import AiToolsDatabase from "../components/services/aitoolsdatabase";
import ScrapingTroubleshooting from "../components/services/scrapingtroubleshooting";

export default function Services() {
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