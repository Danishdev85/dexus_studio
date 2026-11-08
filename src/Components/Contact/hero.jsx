import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineArrowRight,
} from "react-icons/hi";

export default function Hero() {
    const scrollToConsultation = () => {
  document.getElementById("consultation")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] pt-40 pb-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-[#7F77DD]/10 blur-[180px]" />

        <div className="absolute -bottom-44 -right-40 h-[700px] w-[700px] rounded-full bg-[#D4537E]/10 blur-[200px]" />

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

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center px-5 sm:px-6">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Contact Dexus Studios

          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#3C3489]">

            Let's Build

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Something Amazing

            </span>

            Together

          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">

            Whether you're launching a startup,
            scaling your business,
            or transforming your company with AI,
            our team is ready to build innovative
            digital solutions tailored to your goals.

          </p>

          {/* Buttons */}

          

          <div className="mt-12 flex flex-col sm:flex-row gap-4">

            <button
  onClick={scrollToConsultation}
  className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-[#3C3489] via-[#7F77DD] to-[#D4537E] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
>
  Start Your Project
</button>

<button
  onClick={scrollToConsultation}
  className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border border-[#3C3489]/10 bg-white px-8 py-4 font-semibold text-[#3C3489] shadow-lg transition hover:border-[#7F77DD]"
>
  Schedule Consultation
  <HiOutlineArrowRight />
</button>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              ["200+", "Projects"],
              ["25+", "Clients"],
              ["99%", "Satisfaction"],
              ["24/7", "Support"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="rounded-2xl border border-white bg-white/80 p-5 text-center shadow-xl backdrop-blur-xl"
              >

                <h3 className="text-3xl font-bold text-[#7F77DD]">

                  {value}

                </h3>

                <p className="mt-2 text-sm text-gray-600">

                  {label}

                </p>

              </div>

            ))}

          </div>

        </motion.div>
                {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          className="relative mt-12 flex min-h-[560px] lg:min-h-[700px] items-center justify-center lg:mt-0"
        >

          {/* Center Glow */}

          <div className="absolute h-96 w-96 rounded-full bg-[#7F77DD]/15 blur-[140px]" />

          {/* Main Glass Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative w-full max-w-md rounded-[36px] border border-white bg-white/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center justify-center">

              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7F77DD] to-[#D4537E] shadow-xl">

                <HiOutlineMail
                  size={46}
                  className="text-white"
                />

              </div>

            </div>

            <h3 className="mt-8 text-center text-2xl sm:text-3xl font-bold text-[#3C3489]">

              Ready to Talk?

            </h3>

            <p className="mt-4 text-center leading-8 text-gray-600">

              Tell us about your business goals and we'll help you
              design the perfect digital solution.

            </p>

            <div className="mt-10 space-y-5">

              {[
                "Free Initial Consultation",
                "Custom Development Roadmap",
                "Transparent Pricing",
                "Dedicated Expert Team",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl bg-[#FAF9FE] px-5 py-4 font-medium text-[#3C3489]"
                >

                  ✓ {item}

                </div>

              ))}

            </div>

          </motion.div>

          {/* Floating Email Card */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute left-0 top-10 rounded-3xl border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#7F77DD]/10 p-4">

                <HiOutlineMail
                  className="text-[#7F77DD]"
                  size={26}
                />

              </div>

              <div>

                <p className="text-sm text-gray-500">

                  Email Us

                </p>

                <h4 className="font-bold text-[#3C3489]">

                  hello@dexusstudios.com

                </h4>

              </div>

            </div>

          </motion.div>

          {/* Floating Location Card */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute right-0 top-36 rounded-3xl border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#D4537E]/10 p-4">

                <HiOutlineLocationMarker
                  className="text-[#D4537E]"
                  size={26}
                />

              </div>

              <div>

                <p className="text-sm text-gray-500">

                  Location

                </p>

                <h4 className="font-bold text-[#3C3489]">

                  Pakistan

                </h4>

              </div>

            </div>

          </motion.div>

          {/* Floating Consultation Card */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="hidden lg:block absolute bottom-8 left-4 rounded-3xl border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#EF9F27]/10 p-4">

                <HiOutlineCalendar
                  className="text-[#EF9F27]"
                  size={26}
                />

              </div>

              <div>

                <p className="text-sm text-gray-500">

                  Free Consultation

                </p>

                <h4 className="font-bold text-[#3C3489]">

                  30 Minute Strategy Call

                </h4>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}