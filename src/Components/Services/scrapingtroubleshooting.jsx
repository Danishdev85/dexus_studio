import { motion } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineBugAnt,
  HiOutlineCheckCircle,
  HiOutlineCircleStack,
} from "react-icons/hi2";

const scrapingFeatures = [
  "Custom Web Scrapers",
  "Automated Data Collection",
  "API Data Extraction",
  "Real-Time Monitoring",
  "Data Cleaning",
  "CSV / Excel Export",
  "Business Intelligence",
  "Scheduled Scraping",
];

const troubleshootingFeatures = [
  "Bug Detection",
  "Performance Optimization",
  "Website Maintenance",
  "Error Resolution",
  "Server Issues",
  "Security Improvements",
  "Database Fixes",
  "System Monitoring",
];

export default function ScrapingTroubleshooting() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 left-0 h-[600px] w-[600px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -bottom-44 right-0 h-[650px] w-[650px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center px-5 sm:px-6">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Web Scraping & Troubleshooting

          </span>

          <h2  className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#3C3489]">

            Smart Data Collection

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Reliable System Support

            </span>

          </h2>

          <p className="mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">

            We automate large-scale data collection while ensuring your
            software, websites, and infrastructure remain secure,
            optimized, and running at peak performance.

          </p>

          {/* Web Scraping Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="mt-12 rounded-[32px] border border-white bg-white/80 p-5 sm:p-8 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#7F77DD]/10 p-4">

                <HiOutlineGlobeAlt
                  size={30}
                  className="text-[#7F77DD]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  Web Scraping

                </h3>

                <p className="mt-1 text-gray-500">

                  Automated data collection from multiple sources.

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {scrapingFeatures.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 transition hover:bg-[#7F77DD] hover:text-white"
                >

                  <HiOutlineCheckCircle />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

        </motion.div>
                {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-12 flex min-h-[620px] items-center justify-center lg:mt-0"
        >

          {/* Center Glow */}

          <div className="absolute h-80 w-80 rounded-full bg-[#7F77DD]/15 blur-[130px]" />

          {/* ================= PIPELINE ================= */}

          <div className="relative flex flex-col items-center gap-8">

            {/* Website */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <HiOutlineGlobeAlt
                size={40}
                className="text-[#7F77DD]"
              />
            </motion.div>

            {/* Line */}

            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-16 w-1 rounded-full bg-gradient-to-b from-[#7F77DD] to-[#D4537E]"
            />

            {/* Database */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7F77DD] to-[#D4537E] shadow-2xl"
            >
              <HiOutlineCircleStack
                size={48}
                className="text-white"
              />
            </motion.div>

          </div>

          {/* ================= TROUBLESHOOTING CARD ================= */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative w-full max-w-md rounded-[32px] border border-white bg-white/90 p-5 sm:p-8 shadow-2xl backdrop-blur-xl lg:absolute lg:right-0 lg:top-0 lg:w-80"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#D4537E]/10 p-4">

                <HiOutlineBugAnt
                  size={30}
                  className="text-[#D4537E]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  Troubleshooting

                </h3>

                <p className="mt-1 text-gray-500">

                  Fast diagnosis and issue resolution.

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {troubleshootingFeatures.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 text-[#3C3489] transition hover:bg-[#D4537E] hover:text-white"
                >

                  <HiOutlineCheckCircle />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

          {/* Floating Card */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden lg:block absolute left-0 top-10 rounded-2xl border border-white bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineGlobeAlt
                className="text-[#7F77DD]"
                size={22}
              />

              <span className="font-semibold text-[#3C3489]">

                Live Websites

              </span>

            </div>

          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="hidden lg:block absolute bottom-10 left-0 rounded-2xl border border-white bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineCircleStack
                className="text-[#EF9F27]"
                size={22}
              />

              <span className="font-semibold text-[#3C3489]">

                Secure Storage

              </span>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= STATS ================= */}

      <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-6">
        {[
          ["500K+", "Records Processed"],
          ["99.9%", "System Stability"],
          ["24/7", "Monitoring"],
          ["Fast", "Issue Resolution"],
        ].map(([value, label]) => (

          <motion.div
            key={label}
            whileHover={{ y: -8 }}
            className="rounded-[28px] border border-white bg-white/80 p-5 sm:p-8 text-center shadow-xl backdrop-blur-xl"
          >

            <h3 className="text-4xl font-bold text-[#7F77DD]">

              {value}

            </h3>

            <p className="mt-3 text-gray-600">

              {label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}