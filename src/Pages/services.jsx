import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import ServicesHero from "../Components/Services/serviceshero";
import WebSeo from "../Components/Services/webseo";
import MetaAutomation from "../Components/Services/metaautomation";
import AiToolsDatabase from "../Components/Services/aitoolsdatabase";
import ScrapingTroubleshooting from "../Components/Services/scrapingtroubleshooting";

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