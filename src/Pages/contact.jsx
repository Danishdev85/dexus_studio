import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

import Hero from "../components/contact/hero";
import ContactInfo from "../components/contact/contactinfo";
import ContactForm from "../components/contact/contactform";
import Consultation from "../components/contact/consultation";

export default function Contact() {
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