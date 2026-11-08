import { Routes, Route } from "react-router-dom";

import Navbar from "./components/home/navbar";
import Hero from "./components/home/hero";
import Stats from "./components/home/stats";
import Services from "./components/home/services";
import Industries from "./components/home/industries";
import Approach from "./components/home/approach";
import AIInnovation from "./components/home/aiinnovation";
import CTA from "./components/home/cta";
import Footer from "./components/home/footer";


import About from "./pages/about";
import ServicesPage from "./pages/services";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsOfService from "./pages/termsofservice";
import Contact from "./pages/contact";
import IndustriesPage from "./pages/industries";

function Home() {
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