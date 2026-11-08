import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function TermsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] pt-36 pb-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -bottom-40 -right-32 h-[550px] w-[550px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9F27]/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7F77DD] to-[#D4537E] shadow-2xl">

            <HiOutlineDocumentText
              className="text-white"
              size={46}
            />

          </div>

          <span className="mt-8 inline-block uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Legal Information

          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#3C3489] md:text-7xl">

            Terms of

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Service

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">

            These Terms of Service govern your access to and use of
            Dexus Studios' website, products, and professional software
            development services. Please read them carefully before
            engaging with our company.

          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <div className="rounded-2xl border border-[#7F77DD]/20 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl">

              <p className="text-sm text-gray-500">

                Last Updated

              </p>

              <p className="mt-1 font-semibold text-[#3C3489]">

                January 2026

              </p>

            </div>

            <div className="rounded-2xl border border-[#D4537E]/20 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl">

              <p className="text-sm text-gray-500">

                Company

              </p>

              <p className="mt-1 font-semibold text-[#3C3489]">

                Dexus Studios

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}