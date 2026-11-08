import { motion } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const steps = [
  {
    number: "01",
    title: "Optimize",
    icon: HiOutlineChartBar,
    description:
      "We leverage customer-centric strategies, intelligent automation, and modern technologies to improve efficiency, streamline operations, and maximize business performance.",
    color: "from-[#7F77DD] to-[#3C3489]",
  },
  {
    number: "02",
    title: "Transform",
    icon: HiOutlineLightningBolt,
    description:
      "We modernize business processes and deliver innovative digital solutions that create sustainable enterprise value and long-term competitive advantage.",
    color: "from-[#D4537E] to-[#7F77DD]",
  },
  {
    number: "03",
    title: "Scale",
    icon: HiOutlineTrendingUp,
    description:
      "We engineer future-ready platforms that evolve with your business, enabling continuous innovation and sustainable growth.",
    color: "from-[#EF9F27] to-[#D4537E]",
  },
];

export default function dexusway() {
  return (
    <section className="relative py-32 bg-[#FAF9FE] overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#7F77DD]/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4537E]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">
            The Dexus Way
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[#3C3489]">
            Building Success Through
            <span className="block bg-gradient-to-r from-[#7F77DD] to-[#D4537E] bg-clip-text text-transparent">
              Strategy & Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            As a trusted technology partner, we collaborate with businesses
            throughout their digital transformation journey—helping them
            optimize operations, transform experiences, and scale for
            long-term success.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="relative mt-20 grid lg:grid-cols-3 gap-8">

          {/* Connection Line */}

          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] rounded-full opacity-30" />

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="relative bg-white rounded-[32px] p-8 shadow-xl border border-[#3C3489]/10 group overflow-hidden"
              >

                {/* Hover Glow */}

                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition duration-500`} />

                {/* Number */}

                <span className="text-6xl font-black text-[#3C3489]/10">
                  {step.number}
                </span>

                {/* Icon */}

                <div className={`mt-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl font-bold text-[#3C3489]">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-8">
                  {step.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}