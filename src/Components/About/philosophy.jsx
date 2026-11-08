import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineChip,
  HiOutlineSparkles,
} from "react-icons/hi";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-32">

      {/* Premium Background */}

      <div className="absolute inset-0">

        {/* Main Purple Glow */}
        <div className="absolute -top-52 -left-52 w-[700px] h-[700px] rounded-full bg-[#7F77DD]/12 blur-[180px]" />

        {/* Pink Glow */}
        <div className="absolute -bottom-52 -right-52 w-[650px] h-[650px] rounded-full bg-[#D4537E]/10 blur-[170px]" />

        {/* Orange Accent */}
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[140px]" />

        {/* Floating Blur */}
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-24 right-32 w-48 h-48 rounded-full bg-[#7F77DD]/8 blur-[90px]"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-24 left-32 w-56 h-56 rounded-full bg-[#D4537E]/8 blur-[100px]"
        />

        {/* Digital Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Radial Light */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,119,221,0.08),transparent_70%)]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.4em] text-sm font-semibold text-[#7F77DD]">

            Our Philosophy

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-[#3C3489]">

            Technology Should

            <span className="block mt-2 bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Empower Businesses

            </span>

          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E] mt-8" />

          <p className="mt-10 text-lg leading-9 text-gray-600">

            At Dexus Studios, we believe exceptional software begins with understanding people before writing code. Every solution is crafted around real business challenges, combining innovation, intelligent automation, and modern engineering.

          </p>

          <p className="mt-7 text-lg leading-9 text-gray-600">

            Our mission is to build secure, scalable, and future-ready digital products that empower organizations to innovate, transform, and grow with confidence.

          </p>

        </motion.div>

                {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Floating Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#7F77DD]/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-10 w-40 h-40 rounded-full bg-[#D4537E]/20 blur-3xl" />

          {/* Glass Card */}
          <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_25px_80px_rgba(60,52,137,0.15)] p-10">

            {/* Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7F77DD]/5 via-transparent to-[#D4537E]/5" />

            <div className="relative space-y-6">

              {/* Card 1 */}
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md border border-[#7F77DD]/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a401aa] to-[#ff00d4] text-white shadow-lg">
                  <HiOutlineLightBulb size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#3C3489]">
                    Innovation First
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Solving complex challenges with creativity and modern technology.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md border border-[#D4537E]/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a035a3] to-[#7F77DD] text-white shadow-lg">
                  <HiOutlineChip size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#3C3489]">
                    Intelligent Solutions
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    AI-powered systems engineered for sustainable business growth.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md border border-[#EF9F27]/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8d00b1] to-[#D4537E] text-white shadow-lg">
                  <HiOutlineSparkles size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#3C3489]">
                    Lasting Impact
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Building digital experiences that evolve with your business.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

         
        </motion.div>

      </div>

    </section>
  );
}