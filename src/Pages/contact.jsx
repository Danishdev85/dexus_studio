import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import Hero from "../Components/Contact/hero";
import ContactInfo from "../Components/Contact/contactinfo";
import ContactForm from "../Components/Contact/contactform";
import Consultation from "../Components/Contact/consultation";
import { usePageMeta } from "../seo";

export default function Contact() {
  usePageMeta("Contact Dexus Studios — Start Your Website, AI Agent or Software Project", "Contact Dexus Studios to start your project: websites, AI agents, online stores and custom software. Email danishdev85@gmail.com or message us on Instagram @dexus_studios.");
return (
    <>
    <Navbar />

    <main className="bg-[#FAF9FE]">

        <Hero />

        <ContactInfo />

        <ContactForm />

        <Consultation />


    </main>

    <Footer />
    </>
);
}