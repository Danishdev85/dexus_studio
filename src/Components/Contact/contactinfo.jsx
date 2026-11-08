import { motion } from "framer-motion";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaBolt,
} from "react-icons/fa";

const contactCards = [
  {
    icon: HiOutlineMail,
    title: "Email",
    value: "danishdev85@gmail.com",
    color: "#7F77DD",
    bg: "bg-[#7F77DD]/10",
  },
  {
    icon: HiOutlinePhone,
    title: "Phone",
    value: "+92 335 9200510",
    color: "#D4537E",
    bg: "bg-[#D4537E]/10",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Location",
    value: "Pakistan • Serving Worldwide",
    color: "#EF9F27",
    bg: "bg-[#EF9F27]/10",
  },
  {
    icon: HiOutlineClock,
    title: "Business Hours",
    value: "Mon - Fri | 9:00 AM - 6:00 PM",
    color: "#3C3489",
    bg: "bg-[#3C3489]/10",
  },
];

const socials = [
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/danish-shahzad-928b983b0/",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/dexus_studios",
  },
  {
    icon: FaGithub,
    url: "https://github.com/Danishdev85",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-40 h-[600px] w-[600px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -bottom-32 -right-40 h-[650px] w-[650px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7F77DD]">
            Contact Information
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#3C3489] md:text-6xl">

            Let's Start

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              A Conversation

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            Have questions about your next project?
            Reach out through any of the channels below.
            Our team typically responds within one business day.

          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {contactCards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-[32px] border border-white bg-white/80 p-8 shadow-xl backdrop-blur-xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.bg}`}
                >

                  <Icon
                    size={30}
                    style={{
                      color: card.color,
                    }}
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#3C3489]">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {card.value}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Information */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
                  {/* Response Time Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7F77DD]/10">

                <FaBolt
                  className="text-[#7F77DD]"
                  size={28}
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#3C3489]">
                  Average Response Time
                </h3>

                <p className="mt-2 text-gray-600">
                  We reply to most enquiries within 24 hours.
                </p>

              </div>

            </div>

            <div className="mt-8 space-y-4">

              {[
                "Free initial consultation",
                "Professional project assessment",
                "Transparent pricing estimates",
                "Dedicated technical guidance",
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

          {/* Social & Trust */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white bg-gradient-to-br from-[#3C3489] via-[#4B3FB3] to-[#7F77DD] p-10 text-white shadow-2xl"
          >

            <span className="text-sm uppercase tracking-[0.3em] text-white/70">
              Connect With Us
            </span>

            <h3 className="mt-5 text-4xl font-bold">
              Follow Dexus Studios
            </h3>

            <p className="mt-6 leading-8 text-white/80">
              Stay connected with our latest projects,
              technology insights,
              product launches,
              and company updates across our social platforms.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {socials.map((social, index) => {

                const Icon = social.icon;

                return (

                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl transition hover:bg-white hover:text-[#3C3489]"
                  >

                    <Icon size={20} />

                  </motion.a>

                );

              })}

            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

              <h4 className="text-xl font-semibold">
                Why Businesses Choose Us
              </h4>

              <p className="mt-4 leading-8 text-white/80">
                From startups to growing companies,
                Dexus Studios delivers modern web solutions,
                AI-powered automation,
                scalable software,
                and long-term technical partnerships designed
                for sustainable business growth.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
