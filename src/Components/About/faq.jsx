import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope and complexity. Most websites are completed within 2–6 weeks, while custom software and AI solutions may require additional time based on project requirements.",
  },
  {
    question: "Do you develop fully custom software?",
    answer:
      "Yes. Every solution is designed specifically for your business. We don't rely on generic templates—we build scalable, secure, and modern software tailored to your goals.",
  },
  {
    question: "Can you improve an existing website or application?",
    answer:
      "Absolutely. We can redesign, optimize performance, add new features, fix issues, improve SEO, or integrate AI into your existing systems.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Dexus Studios collaborates with startups, businesses, and organizations worldwide through efficient remote communication and project management.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Python, AI integrations, cloud platforms, and modern UI/UX frameworks.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes. We offer maintenance, feature enhancements, monitoring, bug fixes, and long-term technical support to keep your software running smoothly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#7F77DD]/10 blur-[150px]" />

        <div className="absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full bg-[#D4537E]/10 blur-[170px]" />

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

      <div className="relative z-10 mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Frequently Asked Questions

          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#3C3489] md:text-6xl">

            Everything You
            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Need To Know

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            We've answered the most common questions about our
            services, development process, technologies, and
            ongoing support to help you get started with confidence.

          </p>

          <div className="mt-12 rounded-[30px] border border-[#7F77DD]/10 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

            <h3 className="text-2xl font-bold text-[#3C3489]">

              Still have questions?

            </h3>

            <p className="mt-4 leading-8 text-gray-600">

              Our team is always ready to discuss your project,
              answer your questions, and recommend the best
              solution for your business.

            </p>

            <Link to="/contact">
  <button
    className="mt-8 rounded-2xl bg-gradient-to-r from-[#7F77DD] to-[#D4537E] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
  >
    Schedule Consultation
  </button>
</Link>
          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
                  {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <motion.div
                key={index}
                layout
                transition={{
                  duration: .35,
                }}
                className="overflow-hidden rounded-[28px] border border-[#3C3489]/10 bg-white/80 shadow-xl backdrop-blur-xl"
              >

                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <h3 className="pr-6 text-xl font-semibold text-[#3C3489]">

                    {faq.question}

                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7F77DD]/10 text-[#7F77DD]"
                  >

                    {isOpen ? (
                      <HiMinus size={22} />
                    ) : (
                      <HiPlus size={22} />
                    )}

                  </motion.div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                    >

                      <div className="border-t border-[#3C3489]/10 px-8 py-6">

                        <p className="leading-8 text-gray-600">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </motion.div>

      </div>

    </section>

  );

}
        