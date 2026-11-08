import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer"; 

import Philosophy from "../components/About/philosophy";
import DexusWay from "../components/About/dexusWay";
import CoreValues from "../components/About/corevalues";
import WhyChoose from "../components/About/whychoose";
import CEO from "../components/About/ceo";
import Team from "../components/About/team";
import Faq from "../components/About/faq";
import CTA from "../components/Home/CTA";

export default function About() {
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