import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import PrivacyHero from "../Components/Legal/privacyhero";
import PrivacyContent from "../Components/Legal/privacycontent";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9FE] pt-20">
        <PrivacyHero />
        <PrivacyContent />
      </main>

      <Footer />
    </>
  );
}