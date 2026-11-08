import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
} from "react-icons/hi";

const educationFeatures = [
  "Learning Management System",
  "Student Portal",
  "Virtual Classrooms",
  "Attendance Management",
  "Online Examinations",
  "AI Learning Assistant",
  "Performance Analytics",
  "Course Management",
];

export default function Education() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-20 sm:py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-44 -left-44 h-[650px] w-[650px] rounded-full bg-[#7F77DD]/10 blur-[180px]" />

        <div className="absolute -bottom-52 -right-44 h-[650px] w-[650px] rounded-full bg-[#D4537E]/10 blur-[190px]" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Education Industry

          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#3C3489] sm:text-5xl lg:text-6xl">

            Smart Digital

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Learning Platforms

            </span>

          </h2>

          <p className="mt-8 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">

            We develop modern educational platforms that empower schools,
            universities, academies, and training organizations with
            AI-assisted learning, online classrooms, automated management,
            and engaging digital experiences.

          </p>

          {/* Education Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="mt-12 rounded-[32px] border border-white bg-white/80 p-5 shadow-xl backdrop-blur-xl sm:p-8"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#7F77DD]/10 p-4">

                <HiOutlineAcademicCap
                  size={30}
                  className="text-[#7F77DD]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  Education Solutions

                </h3>

                <p className="mt-1 text-gray-500">

                  Interactive • Secure • Scalable

                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {educationFeatures.map((feature) => (

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

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          viewport={{ once: true }}
          className="relative mt-12 flex items-center justify-center lg:mt-0 lg:min-h-[620px]"
        >

          {/* Glow */}

          <div className="absolute h-80 w-80 rounded-full bg-[#7F77DD]/15 blur-[130px]" />

          {/* Dashboard */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative w-full max-w-xl overflow-hidden rounded-[34px] border border-white bg-white/90 shadow-2xl backdrop-blur-xl"
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#3C3489]/10 px-6 py-5">

              <div>

                <h3 className="font-bold text-[#3C3489]">

                  Learning Dashboard

                </h3>

                <p className="mt-1 text-sm text-gray-500">

                  Students • Courses • Performance

                </p>

              </div>

              <HiOutlineBookOpen
                size={34}
                className="text-[#7F77DD]"
              />

            </div>

            <div className="space-y-6 p-6">

              {/* Stats */}

              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-[#7F77DD]/10 p-5 text-center">

                  <h4 className="text-2xl font-bold text-[#7F77DD]">

                    12K

                  </h4>

                  <p className="mt-2 text-xs text-gray-500">

                    Students

                  </p>

                </div>

                <div className="rounded-2xl bg-[#D4537E]/10 p-5 text-center">

                  <h4 className="text-2xl font-bold text-[#D4537E]">

                    350+

                  </h4>

                  <p className="mt-2 text-xs text-gray-500">

                    Courses

                  </p>

                </div>

                <div className="rounded-2xl bg-[#EF9F27]/10 p-5 text-center">

                  <h4 className="text-2xl font-bold text-[#EF9F27]">

                    96%

                  </h4>

                  <p className="mt-2 text-xs text-gray-500">

                    Completion

                  </p>

                </div>

              </div>

              {/* Progress Chart */}

              <div className="relative h-44 overflow-hidden rounded-3xl bg-[#FAF9FE] p-8">

                <div className="flex h-full items-end justify-between">

                  {[60, 95, 120, 85, 150, 130].map((height, index) => (

                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          height,
                          height + 25,
                          height - 15,
                          height,
                        ],
                      }}
                      transition={{
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                      }}
                      className="w-8 rounded-t-xl bg-gradient-to-t from-[#7F77DD] via-[#D4537E] to-[#EF9F27]"
                    />

                  ))}

                </div>

              </div>

            </div>

          </motion.div>
                    {/* Floating Student Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute left-0 top-16 rounded-2xl border border-white bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineUserGroup
                className="text-[#7F77DD]"
                size={24}
              />

              <div>

                <h4 className="font-semibold text-[#3C3489]">

                  Live Classes

                </h4>

                <p className="text-xs text-gray-500">

                  250 Students Online

                </p>

              </div>

            </div>

          </motion.div>

          {/* Floating Course Card */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute bottom-10 right-0 rounded-2xl border border-white bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <HiOutlineAcademicCap
                className="text-[#EF9F27]"
                size={24}
              />

              <div>

                <h4 className="font-semibold text-[#3C3489]">

                  AI Tutor

                </h4>

                <p className="text-xs text-gray-500">

                  Personalized Learning

                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= STATS ================= */}

      <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-5 px-5 sm:px-6 lg:grid-cols-4">

        {[
          ["100K+", "Students"],
          ["99.9%", "Platform Uptime"],
          ["AI", "Learning Assistant"],
          ["24/7", "Virtual Classes"],
        ].map(([value, label]) => (

          <motion.div
            key={label}
            whileHover={{ y: -8 }}
            className="rounded-[28px] border border-white bg-white/80 p-6 text-center shadow-xl backdrop-blur-xl"
          >

            <h3 className="text-3xl font-bold text-[#7F77DD] sm:text-4xl">

              {value}

            </h3>

            <p className="mt-3 text-sm text-gray-600 sm:text-base">

              {label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}