import { motion } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const metaFeatures = [
  "Facebook Ads",
  "Instagram Ads",
  "Lead Generation",
  "Audience Targeting",
  "Campaign Optimization",
  "Retargeting",
  "Analytics Dashboard",
  "ROI Tracking",
];

const automationFeatures = [
  "AI Chatbots",
  "Workflow Automation",
  "CRM Integration",
  "Email Automation",
  "WhatsApp Automation",
  "Lead Qualification",
  "Task Scheduling",
  "Smart Notifications",
];

export default function MetaAutomation() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-20 sm:py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -bottom-40 -right-40 h-[650px] w-[650px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

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

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Meta Ads & AI Automation

          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#3C3489] sm:text-5xl lg:text-6xl">

            Smarter Marketing

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Powered by AI

            </span>

          </h2>

          <p className="mt-8 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">

            We combine high-converting Meta advertising campaigns with intelligent AI automation to help businesses attract, engage, and convert customers while reducing manual work.

          </p>

          {/* Meta Ads Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="mt-12 rounded-[32px] border border-white bg-white/80 p-5 shadow-xl backdrop-blur-xl sm:p-8"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#7F77DD]/10 p-4">

                <HiOutlineChartBar
                  size={30}
                  className="text-[#7F77DD]"
                />

              </div>

              <div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3C3489]">

                  Meta Ads Management

                </h3>

                <p className="mt-1 text-gray-500">

                  Data-driven advertising campaigns.

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {metaFeatures.map((feature) => (

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

          {/* Background Glow */}

          <div className="absolute h-80 w-80 rounded-full bg-[#7F77DD]/15 blur-[130px]" />

          {/* ================= AI AUTOMATION CARD ================= */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative w-full rounded-[32px] border border-white bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:absolute lg:right-0 lg:top-0 lg:max-w-[320px]"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#D4537E]/10 p-4">

                <HiOutlineSparkles
                  size={30}
                  className="text-[#D4537E]"
                />

              </div>

              <div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3C3489]">

                  AI Embedded Automation

                </h3>

                <p className="mt-1 text-gray-500">

                  Intelligent workflows for modern businesses.

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-3">

              {automationFeatures.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 text-[#3C3489] transition  hover:text-black"
                >

                  <HiOutlineCheckCircle />

                  {feature}

                </div>

              ))}

            </div>

          </motion.div>

          
          {/* Animated Lines */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute left-[125px] top-[150px] h-56 w-[3px] bg-gradient-to-b from-[#7F77DD] via-[#D4537E] to-[#EF9F27]"
          />

          {/* Floating Card */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="hidden lg:flex absolute left-0 top-16 rounded-2xl border border-white bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl lg:absolute lg:left-0 lg:top-16 lg:mt-0 lg:px-6 lg:py-4"
          >

            <div className="flex items-center gap-3">

              <HiOutlineRocketLaunch
                size={24}
                className="text-[#EF9F27]"
              />

              <span className="font-semibold text-[#3C3489]">

                Smart Automation

              </span>

            </div>

          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="hidden lg:flex absolute bottom-6 left-4 rounded-2xl border border-white bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl lg:absolute lg:bottom-6 lg:left-4 lg:mt-0 lg:px-6 lg:py-4"
          >

            <div className="flex items-center gap-3">

              <HiOutlineChartBar
                size={24}
                className="text-[#7F77DD]"
              />

              <span className="font-semibold text-[#3C3489]">

                Live Analytics

              </span>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}