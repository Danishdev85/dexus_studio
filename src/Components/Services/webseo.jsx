import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineTrendingUp,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const webFeatures = [
  "Custom Business Websites",
  "Enterprise Web Applications",
  "SaaS Platforms",
  "E-Commerce Solutions",
  "Admin Dashboards",
  "Responsive Design",
];

const seoFeatures = [
  "Technical SEO",
  "On-Page Optimization",
  "Website Speed Optimization",
  "Google Search Ranking",
  "Keyword Research",
  "Performance Analytics",
];

export default function WebSeo() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-20 sm:py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-52 top-0 w-[650px] h-[650px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -right-52 bottom-0 w-[650px] h-[650px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Web Development + SEO

          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#3C3489] sm:text-5xl lg:text-6xl">

            Powerful Websites

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              That Grow Businesses

            </span>

          </h2>

          <p className="mt-8 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">

            We build high-performance websites and web applications
            that are modern, scalable, secure, and optimized for
            search engines from day one.

          </p>

          {/* Web Development Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="mt-12 rounded-[30px] border border-white bg-white/80 p-5 shadow-xl backdrop-blur-xl sm:p-8"
          >

            <div className="flex items-center gap-4">

              <div className="p-4 rounded-2xl bg-[#7F77DD]/10">

                <HiOutlineCode
                  className="text-[#7F77DD]"
                  size={30}
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  Web Development

                </h3>

                <p className="text-gray-500 mt-1">

                  Modern software engineered for performance.

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {webFeatures.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 hover:bg-[#7F77DD] hover:text-white transition"
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
          className="relative mt-12 lg:mt-0"
        >

          {/* Floating Glow */}
          <div className="absolute -top-12 -right-10 h-40 w-40 rounded-full bg-[#7F77DD]/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#D4537E]/20 blur-3xl" />

          {/* Browser Mockup */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="overflow-hidden rounded-[32px] border border-white bg-white/80 shadow-2xl backdrop-blur-xl lg:mr-24"
          >

            {/* Browser Header */}

            <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-6 py-4">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-4 h-8 flex-1 rounded-lg bg-[#FAF9FE]" />

            </div>

            {/* Dashboard */}

            <div className="space-y-6 p-5 sm:p-8">

              <div className="grid grid-cols-3 gap-2 sm:gap-4">

                <div className="h-24 rounded-2xl bg-[#7F77DD]/10" />
                <div className="h-24 rounded-2xl bg-[#D4537E]/10" />
                <div className="h-24 rounded-2xl bg-[#EF9F27]/10" />

              </div>

              <div className="h-40 overflow-hidden rounded-3xl bg-[#FAF9FE] p-5 sm:h-48 sm:p-8">

                <div className="flex h-full items-end gap-5">

                  <motion.div
                    animate={{ height: [70, 120, 90, 70] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-10 rounded-t-xl bg-[#7F77DD]"
                  />

                  <motion.div
                    animate={{ height: [120, 80, 150, 120] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-10 rounded-t-xl bg-[#D4537E]"
                  />

                  <motion.div
                    animate={{ height: [80, 150, 110, 80] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="w-10 rounded-t-xl bg-[#EF9F27]"
                  />

                  <motion.div
                    animate={{ height: [100, 70, 140, 100] }}
                    transition={{ duration: 4.2, repeat: Infinity }}
                    className="w-10 rounded-t-xl bg-[#3C3489]"
                  />

                </div>

              </div>

            </div>

          </motion.div>

          {/* SEO Card */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative mt-8 w-full rounded-3xl border border-white bg-white/90 p-5 shadow-xl backdrop-blur-xl sm:p-6 lg:absolute lg:-right-8 lg:top-12 lg:mt-0 lg:w-72"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#D4537E]/10 p-4">

                <HiOutlineGlobeAlt
                  size={28}
                  className="text-[#D4537E]"
                />

              </div>

              <h3 className="text-xl font-bold text-[#3C3489]">

                SEO Management

              </h3>

            </div>

            <div className="mt-6 space-y-3">

              {seoFeatures.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#FAF9FE] px-4 py-3 text-[#3C3489]"
                >

                  <HiOutlineCheckCircle className="text-[#D4537E]" />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

          {/* Floating Stats */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative mt-8 rounded-3xl border border-white bg-white/90 px-6 py-5 shadow-xl backdrop-blur-xl lg:absolute lg:-left-8 lg:bottom-6 lg:mt-0 lg:px-8 lg:py-6">

            <div className="grid grid-cols-3 gap-4 text-center sm:gap-8">

              <div>

                <h4 className="text-3xl font-bold text-[#7F77DD]">

                  100+

                </h4>

                <p className="mt-2 text-sm text-gray-500">

                  Projects

                </p>

              </div>

              <div>

                <h4 className="text-3xl font-bold text-[#D4537E]">

                  99%

                </h4>

                <p className="mt-2 text-sm text-gray-500">

                  Performance

                </p>

              </div>

              <div>

                <h4 className="text-3xl font-bold text-[#EF9F27]">

                  24/7

                </h4>

                <p className="mt-2 text-sm text-gray-500">

                  Support

                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}