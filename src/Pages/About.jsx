import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import Philosophy from "../Components/About/philosophy";
import DexusWay from "../Components/About/dexusway";
import CoreValues from "../Components/About/corevalues";
import WhyChoose from "../Components/About/whychoose";
import CEO from "../Components/About/ceo";
import Team from "../Components/About/team";
import Faq from "../Components/About/faq";
import CTA from "../Components/Home/CTA";
import { usePageMeta } from "../seo";

export default function About() {
  usePageMeta("About Dexus Studios — Virtual Software House for Websites & AI Agents", "Meet Dexus Studios: a virtual software house building websites, AI agents and custom software for small businesses, with complete online solutions managed for you.");
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9FE] pt-20">
        <Philosophy />
        <DexusWay />
        <CoreValues />
        <WhyChoose />
        <CEO />
        <Team />
        <CTA />
        <Faq />
      </main>

      <Footer />
    </>
  );
}