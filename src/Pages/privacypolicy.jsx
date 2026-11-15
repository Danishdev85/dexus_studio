import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import PrivacyHero from "../Components/Legal/privacyhero";
import PrivacyContent from "../Components/Legal/privacycontent";
import { usePageMeta } from "../seo";

export default function PrivacyPolicy() {
  usePageMeta("Privacy Policy | Dexus Studios", "How Dexus Studios collects, uses and protects information when you use our website and services.");
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