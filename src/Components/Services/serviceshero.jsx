import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineSparkles,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#FAF9FE] py-24 lg:py-0">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Purple Glow */}
        <div className="absolute -top-44 -left-44 w-[650px] h-[650px] rounded-full bg-[#7F77DD]/12 blur-[170px]" />

        {/* Pink Glow */}
        <div className="absolute -bottom-52 -right-44 w-[650px] h-[650px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        {/* Orange Glow */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[130px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px,transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Animated Line */}

        <motion.div
          animate={{
            x: [0, 120, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-40 left-0 h-[2px] w-[700px] bg-gradient-to-r from-transparent via-[#7F77DD] to-transparent blur-sm"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-40 right-0 h-[2px] w-[700px] bg-gradient-to-r from-transparent via-[#D4537E] to-transparent blur-sm"
        />

        {/* Floating Particles */}

        {[...Array(18)].map((_, i) => (
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
            className="absolute w-2 h-2 rounded-full bg-[#7F77DD]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

      </div>

      {/* ================= Content ================= */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#7F77DD]/20 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-lg">

            <HiOutlineSparkles className="text-[#7F77DD]" />


          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-bold leading-tight text-[#3C3489] sm:text-5xl lg:text-7xl">

            Our Innovative

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Digital Solutions

            </span>

            Built For

            <span className="block">

              Modern Businesses

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">

            We transform ambitious ideas into intelligent digital products
            through custom software development, AI-powered automation,
            marketing strategies, and scalable technology solutions designed
            for long-term business growth.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            <Link to="/contact">
            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7F77DD] to-[#D4537E] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 sm:w-auto">

              Start Your Project

              <HiOutlineArrowRight size={20} />

            </button>
            </Link>
            
            <Link to="/contact">
            <button className="w-full rounded-2xl border border-[#3C3489]/10 bg-white px-8 py-4 font-semibold text-[#3C3489] shadow-lg transition hover:border-[#7F77DD] hover:text-[#7F77DD] sm:w-auto">

              Schedule Consultation

            </button>
            </Link>

          </div>

        </motion.div>

                {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-10 flex items-center justify-center lg:mt-0"
        >

          {/* Main Glass Laptop */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative h-[260px] w-full max-w-[580px] sm:h-[340px] lg:h-[420px]"
          >

            {/* Purple Glow */}
            <div className="absolute inset-0 bg-[#7F77DD]/15 rounded-[40px] blur-[90px]" />

            {/* Laptop */}
            <div className="relative rounded-[36px] border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_30px_80px_rgba(60,52,137,.18)] overflow-hidden">


              {/* Dashboard */}

              <div className="p-8">

                {/* Analytics */}

                <div className="grid grid-cols-3 gap-2 sm:gap-4">

                  <div className="rounded-2xl bg-[#7F77DD]/10 h-24" />

                  <div className="rounded-2xl bg-[#D4537E]/10 h-24" />

                  <div className="rounded-2xl bg-[#EF9F27]/10 h-24" />

                </div>

                {/* Chart */}

                <div className="mt-6 h-40 rounded-3xl bg-gradient-to-br from-[#7F77DD]/10 via-[#D4537E]/10 to-[#EF9F27]/10 relative overflow-hidden">

                  <motion.div
                    animate={{
                      x: [-30, 30, -30],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-10 left-4 h-[4px] w-40 rounded-full bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#840096] sm:left-6 sm:w-72"
                  />

                </div>

              </div>

            </div>

          </motion.div>

          {/* Floating AI Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute right-0 top-0 scale-75 rounded-3xl border border-white bg-white/90 px-4 py-4 shadow-xl backdrop-blur-xl sm:scale-90 lg:top-4 lg:scale-100"
          >
            <h3 className="mt-3 font-bold text-[#3C3489]">

              AI Powered

            </h3>

            <p className="text-sm mt-2 text-gray-500">

              Automation

            </p>

          </motion.div>

          {/* Database Card */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-0 left-0 scale-75 rounded-3xl border border-white bg-white/90 px-4 py-4 shadow-xl backdrop-blur-xl sm:scale-90 lg:bottom-2 lg:scale-100"
          >
            <h3 className="mt-3 font-bold text-[#3C3489]">

              Database

            </h3>

            <p className="text-sm mt-2 text-gray-500">

              Optimized

            </p>

          </motion.div>

          {/* Cloud Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="absolute bottom-8 right-2 scale-75 rounded-3xl border border-white bg-white/90 px-4 py-4 shadow-xl backdrop-blur-xl sm:scale-90 lg:bottom-12 lg:right-6 lg:scale-100"
          >

            <div className="text-4xl">☁️</div>

            <h3 className="mt-3 font-bold text-[#3C3489]">

              Cloud Ready

            </h3>

            <p className="text-sm mt-2 text-gray-500">

              Deploy Anywhere

            </p>

          </motion.div>

          {/* Floating Badge */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute left-2 top-6 scale-75 rounded-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E] px-5 py-2 text-sm text-white shadow-2xl sm:left-10 sm:scale-90 lg:left-20 lg:top-16 lg:scale-100"
          >

            Enterprise Solutions

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}