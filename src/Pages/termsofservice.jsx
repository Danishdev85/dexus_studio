import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import TermsHero from "../Components/Legal/termshero";
import TermsContent from "../Components/Legal/termscontent";

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