import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

import PrivacyHero from "../components/legal/privacyhero";
import PrivacyContent from "../components/legal/privacycontent";

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