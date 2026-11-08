import { motion } from "framer-motion";
import {
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineCloud,
  HiOutlineCode,
} from "react-icons/hi";

const aiFeatures = [
  "Custom AI Applications",
  "ChatGPT Integration",
  "Gemini Integration",
  "AI Chatbots",
  "AI Assistants",
  "Workflow Automation",
  "Business Intelligence",
  "AI APIs",
];

const databaseFeatures = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Database Design",
  "Query Optimization",
  "Backup & Recovery",
  "Cloud Databases",
];

export default function AiToolsDatabase() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-20 sm:py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-44 -left-44 w-[650px] h-[650px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -bottom-52 -right-52 w-[650px] h-[650px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px),linear-gradient(90deg,#3C3489 1px,transparent 1px)",
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

            AI Tools & Software

          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#3C3489]">

            Intelligent Software

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Powered By AI

            </span>

          </h2>

          <p className="mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">

            We develop AI-powered software that helps businesses automate
            repetitive tasks, improve productivity, and make faster,
            data-driven decisions using the latest artificial intelligence
            technologies.

          </p>

          {/* AI Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="mt-12 rounded-[32px] border border-white bg-white/80 backdrop-blur-xl shadow-xl p-5 sm:p-8"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#7F77DD]/10 p-4">

                <HiOutlineChip
                  size={30}
                  className="text-[#7F77DD]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  AI Solutions

                </h3>

                <p className="text-gray-500 mt-1">

                  Smart automation built for modern businesses.

                </p>

              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {aiFeatures.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 transition hover:bg-[#7F77DD] hover:text-white"
                >

                  <HiOutlineCheckCircle />

                  {feature}

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

          <div className="absolute h-72 w-72 rounded-full bg-[#7F77DD]/15 blur-[120px]" />

          {/* ================= DATABASE CARD ================= */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative w-full max-w-md rounded-[30px] border border-white bg-white/90 p-5 sm:p-8 shadow-2xl backdrop-blur-xl lg:absolute lg:right-0 lg:top-0 lg:w-80"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#D4537E]/10 p-4">

                <HiOutlineDatabase
                  size={30}
                  className="text-[#a900af]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  Database Operations

                </h3>

                <p className="mt-1 text-gray-500">

                  Secure • Fast • Scalable

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {databaseFeatures.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 text-[#3C3489] transition hover:bg-[#D4537E] hover:text-white"
                >

                  <HiOutlineCheckCircle />

                  {feature}

                </div>

              ))}

            </div>

          </motion.div>

        
          {/* ================= DATABASE ================= */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="hidden lg:flex absolute bottom-20 right-16 h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl"
          >

            <HiOutlineDatabase
              size={52}
              className="text-[#3C3489]"
            />

          </motion.div>

      
          {/* ================= FLOATING CARDS ================= */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute left-0 top-10 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineLightningBolt
                className="text-[#EF9F27]"
                size={24}
              />

              <span className="font-semibold text-[#3C3489]">

                AI Automation

              </span>

            </div>

          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute bottom-0 left-10 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineCloud
                className="text-[#7F77DD]"
                size={24}
              />

              <span className="font-semibold text-[#3C3489]">

                Cloud Ready

              </span>

            </div>

          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute right-0 bottom-0 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineCode
                className="text-[#D4537E]"
                size={24}
              />

              <span className="font-semibold text-[#3C3489]">

                API Integration

              </span>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= STATS ================= */}

    <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-6">

  {[
    ["15+", "AI Integrations"],
    ["99.9%", "Database Uptime"],
    ["50+", "Automated Workflows"],
    ["Enterprise", "Scalable Systems"],
  ].map(([value, label]) => (

    <motion.div
      key={label}
      whileHover={{ y: -8 }}
      className="rounded-[28px] border border-white bg-white/80 p-5 sm:p-8 text-center shadow-xl backdrop-blur-xl"
    >

      <h3 className="text-3xl sm:text-4xl font-bold text-[#7F77DD]">
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