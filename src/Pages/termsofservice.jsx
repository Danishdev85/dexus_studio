import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

import TermsHero from "../components/legal/termshero";
import TermsContent from "../components/legal/termscontent";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9FE] pt-20">
        <TermsHero />
        <TermsContent />
      </main>

      <Footer />
    </>
  );
}