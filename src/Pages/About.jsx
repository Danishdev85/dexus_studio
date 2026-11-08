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