import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import Hero from "../Components/Contact/hero";
import ContactInfo from "../Components/Contact/contactinfo";
import ContactForm from "../Components/Contact/contactform";
import Consultation from "../Components/Contact/consultation";

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