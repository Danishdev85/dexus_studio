import { motion } from "framer-motion";
import ceoImage from "../../assets/images/ceo.webp";

const CEO = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-24">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7F77DD]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#D4537E]/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-[#7F77DD] uppercase tracking-widest text-sm font-semibold mb-4">
            Meet Our CEO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1630] leading-tight">
            Building the Future Through
            <span className="text-[#7F77DD]"> Innovation </span>
            & Technology
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Danish Shahzad is the CEO of Dexus Studios, leading the vision
            behind creating innovative digital solutions that help businesses
            grow, automate, and scale in the modern digital era.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
            With a passion for software development, AI-driven solutions,
            and modern technologies, Danish focuses on building impactful
            products that deliver real business value.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#1A1630]">
              Danish Shahzad
            </h3>

            <p className="text-[#7F77DD] font-medium mt-1">
              Chief Executive Officer
            </p>
          </div>

        </motion.div>


        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >

          <div className="relative">

            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[#7F77DD]/30 blur-3xl rounded-full scale-75" />

            <img
  src={ceoImage}
  alt="Danish Shahzad - CEO of Dexus Studios"
  className="relative z-10 w-[320px] md:w-[400px] object-contain"
/>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CEO;