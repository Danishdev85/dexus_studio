import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function IndustriesHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#FAF9FE] py-20 sm:py-24 lg:py-32">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Purple Glow */}

        <div className="absolute -left-44 -top-44 h-[650px] w-[650px] rounded-full bg-[#7F77DD]/10 blur-[180px]" />

        {/* Pink Glow */}

        <div className="absolute -bottom-52 -right-44 h-[650px] w-[650px] rounded-full bg-[#D4537E]/10 blur-[190px]" />

        {/* Orange Glow */}

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[140px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Animated Lines */}

        <motion.div
          animate={{ x: [0, 150, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-0 top-44 hidden h-[2px] w-[700px] bg-gradient-to-r from-transparent via-[#7F77DD] to-transparent blur-sm lg:block"
        />

        <motion.div
          animate={{ x: [0, -150, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-44 right-0 hidden h-[2px] w-[700px] bg-gradient-to-r from-transparent via-[#D4537E] to-transparent blur-sm lg:block"
        />

        {/* Floating Particles */}

        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
            }}
            className="absolute h-2 w-2 rounded-full bg-[#7F77DD]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-24">
              {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#7F77DD]/20 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl">

            <HiOutlineSparkles className="text-[#7F77DD]" />

            <span className="text-sm font-semibold text-[#3C3489]">

              Industry-Focused Digital Solutions

            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-bold leading-tight text-[#3C3489] sm:text-5xl lg:text-7xl">

            Solutions Built

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              For Every Industry

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">

            Every industry has unique challenges. At Dexus Studios, we build
            tailored digital solutions that help organizations automate
            operations, improve customer experiences, and accelerate business
            growth through modern technology and AI-driven innovation.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link to="/contact">

              <button className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7F77DD] to-[#D4537E] px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105">

                Start Your Project

                <HiOutlineArrowRight size={20} />

              </button>

            </Link>

            <Link to="/services">

              <button className="rounded-2xl border border-[#3C3489]/10 bg-white px-8 py-4 font-semibold text-[#3C3489] shadow-lg transition duration-300 hover:border-[#7F77DD] hover:text-[#7F77DD]">

                Explore Services

              </button>

            </Link>

          </div>

        </motion.div>
                {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-10 flex min-h-[520px] items-center justify-center lg:mt-0 lg:min-h-[650px]"
        >

          {/* Main Glass Panel */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative w-full max-w-[560px]"
          >

            <div className="absolute inset-0 rounded-[40px] bg-[#7F77DD]/10 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/80 shadow-[0_30px_80px_rgba(60,52,137,.18)] backdrop-blur-2xl">

              {/* Header */}

              <div className="flex items-center justify-between border-b border-[#3C3489]/10 px-6 py-5">

                <div>

                  <h3 className="text-xl font-bold text-[#3C3489]">

                    Industries Dashboard

                  </h3>

                  <p className="mt-1 text-sm text-gray-500">

                    Tailored Solutions Across Multiple Sectors

                  </p>

                </div>

                <HiOutlineOfficeBuilding
                  size={36}
                  className="text-[#7F77DD]"
                />

              </div>

              {/* Grid */}

              <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3">

                {[
                  "Healthcare",
                  "Real Estate",
                  "E-Commerce",
                  "Education",
                  "Finance",
                  "Restaurants",
                ].map((industry, index) => (

                  <motion.div
                    key={industry}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                    }}
                    className="rounded-2xl bg-gradient-to-br from-[#7F77DD]/10 via-[#D4537E]/10 to-[#EF9F27]/10 p-5 text-center shadow-sm"
                  >

                    <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E]" />

                    <p className="text-sm font-semibold text-[#3C3489]">

                      {industry}

                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Floating Card 1 */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-0 top-10 hidden rounded-3xl border border-white bg-white/90 px-6 py-5 shadow-xl backdrop-blur-xl lg:block"
          >

            <h4 className="font-bold text-[#3C3489]">

              7 Industries

            </h4>

            <p className="mt-2 text-sm text-gray-500">

              Specialized Solutions

            </p>

          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-8 right-0 hidden rounded-3xl border border-white bg-white/90 px-6 py-5 shadow-xl backdrop-blur-xl lg:block"
          >

            <h4 className="font-bold text-[#3C3489]">

              AI + Cloud

            </h4>

            <p className="mt-2 text-sm text-gray-500">

              Built for Scale

            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}