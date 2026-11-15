import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Home/navbar";
import Hero from "./Components/Home/hero";
import Stats from "./Components/Home/stats";
import Services from "./Components/Home/services";
import Industries from "./Components/Home/industries";
import Approach from "./Components/Home/approach";
import AIInnovation from "./Components/Home/AIinnovation";
import CTA from "./Components/Home/CTA";
import Footer from "./Components/Home/footer";


import About from "./Pages/About";
import ServicesPage from "./Pages/services";
import PrivacyPolicy from "./Pages/privacypolicy";
import TermsOfService from "./Pages/termsofservice";
import Contact from "./Pages/contact";
import IndustriesPage from "./Pages/industries";
import { usePageMeta } from "./seo";

function Home() {
  usePageMeta("Dexus Studios — Websites, AI Agents & Custom Software", "Dexus Studios builds websites, AI agents, online stores and custom software for small businesses. Complete online solutions — designed, built and managed for you.");
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Approach />
      <AIInnovation />
      <CTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}