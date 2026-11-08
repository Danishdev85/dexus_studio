import Navbar from "../Components/Home/navbar";
import Footer from "../Components/Home/footer";

import IndustriesHero from "../Components/Industries/industrieshero";
import Healthcare from "../Components/Industries/healthcare";
import RealEstate from "../Components/Industries/realestate";
import Ecommerce from "../Components/Industries/ecommerce";
import Education from "../Components/Industries/education";
import Finance from "../Components/Industries/finance";

export default function Industries() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9FE] pt-20 overflow-x-hidden">

        <IndustriesHero />

        <Healthcare />

        <RealEstate />

        <Ecommerce />

        <Education />

        <Finance />

      </main>

      <Footer />
    </>
  );
}