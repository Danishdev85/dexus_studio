import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineArrowRight,
} from "react-icons/hi";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const company = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "SEO Management",
    "Meta Ads",
    "AI Automation",
    "Database Operations",
    "Web Scraping",
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


  return (
    <footer className="relative overflow-hidden bg-[#090714] text-white">

      {/* Animated Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="hidden md:block absolute -left-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#7F77DD]/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="hidden md:block absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#D4537E]/15 blur-[190px]"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="hidden md:block absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#EF9F27]/10 blur-[170px]"
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      {/* CTA */}

      <section className="relative mx-auto max-w-7xl px-6 pt-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-14 backdrop-blur-xl"
        >

          <div className="absolute inset-0 bg-gradient-to-r from-[#7F77DD]/10 via-[#D4537E]/10 to-[#EF9F27]/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div>

              <span className="uppercase tracking-[0.35em] text-sm text-[#EF9F27]">

                Let's Build Together

              </span>

              <h2 className="mt-5 text-5xl font-bold leading-tight">

                Ready to Build
                <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">
                  Something Extraordinary?
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">

                Whether you're launching a startup, scaling a business,
                or transforming an enterprise, Dexus Studios is ready
                to help you create software that drives real impact.

              </p>

            </div>

            <Link
              to="/contact"
              className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#8b0080] px-10 py-5 text-lg font-semibold shadow-2xl transition duration-300 hover:scale-105"
            >

              Schedule Consultation

              <HiOutlineArrowRight
                size={22}
                className="transition group-hover:translate-x-2"
              />

            </Link>

          </div>

        </motion.div>

      </section>

      {/* ================= MAIN FOOTER STARTS HERE ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid gap-16 lg:grid-cols-4">

  {/* ================= BRAND ================= */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .7 }}
    viewport={{ once: true }}
  >

    <Link
      to="/"
      className="inline-block text-5xl font-extrabold tracking-tight"
    >
      <span className="text-white">
        Dexus
      </span>

      <span className="text-[#D4537E]">
        .
      </span>

    </Link>

    <p className="mt-8 leading-8 text-white/70">

      We engineer premium software,
      intelligent automation,
      AI-powered systems,
      and scalable digital experiences
      that help businesses innovate,
      automate and grow.

    </p>

    {/* Social Icons */}

    <div className="mt-10 flex gap-4">

      {socials.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.a
            key={index}
            href={item.url}
            whileHover={{
              y: -8,
              scale: 1.08,
            }}
            whileTap={{
              scale: .95,
            }}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition
              duration-300
              hover:border-[#7F77DD]
              hover:bg-gradient-to-br
              hover:from-[#7F77DD]
              hover:to-[#D4537E]
            "
          >

            <Icon
              size={20}
              className="text-white transition group-hover:rotate-12"
            />

          </motion.a>

        );

      })}

    </div>

  </motion.div>

  {/* ================= COMPANY ================= */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: .1 }}
    viewport={{ once: true }}
  >

    <h3 className="mb-8 text-2xl font-bold text-white">

      Company

    </h3>

    <ul className="space-y-5">

      {company.map((item) => (

        <li key={item.name}>

          <Link
            to={item.path}
            className="
              group
              inline-flex
              items-center
              gap-3
              text-white/70
              transition
              hover:text-white
            "
          >

            <span className="h-[2px] w-0 bg-[#7F77DD] transition-all duration-300 group-hover:w-6" />

            {item.name}

          </Link>

        </li>

      ))}

    </ul>

  </motion.div>

  {/* ================= SERVICES ================= */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: .2 }}
    viewport={{ once: true }}
  >

    <h3 className="mb-8 text-2xl font-bold text-white">

      Services

    </h3>

    <ul className="space-y-5">

      {services.map((item) => (

        <li key={item}>

          <Link
            to="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-white/70
              transition
              hover:text-white
            "
          >

            <span className="h-[2px] w-0 bg-[#D4537E] transition-all duration-300 group-hover:w-6" />

            {item}

          </Link>

        </li>

      ))}

    </ul>

  </motion.div>

    {/* ================= CONTACT ================= */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: .3 }}
    viewport={{ once: true }}
  >

    <h3 className="mb-8 text-2xl font-bold text-white">
      Contact
    </h3>

    <div className="space-y-6">

      {/* Email */}

      <motion.div
        whileHover={{ x: 8 }}
        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
      >

        <div className="flex h-12 w-12 items-center justify-center rounded-xl">

          <HiOutlineMail
            size={22}
            className="text-white"
          />

        </div>

        <div>

          <p className="text-sm uppercase tracking-wider text-white/40">
            Email
          </p>

          <p className="mt-1 font-medium text-white">
            danishdev85@gmail.com
          </p>

        </div>

      </motion.div>

      {/* Phone */}

      <motion.div
        whileHover={{ x: 8 }}
        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
      >

        <div className="flex h-12 w-12 items-center justify-center rounded-xl ">

          <HiOutlinePhone
            size={22}
            className="text-white"
          />

        </div>

        <div>

          <p className="text-sm uppercase tracking-wider text-white/40">
            Phone
          </p>

          <p className="mt-1 font-medium text-white">
            +92 335 9200510
          </p>

        </div>

      </motion.div>

      {/* Location */}

      <motion.div
        whileHover={{ x: 8 }}
        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
      >

        <div className="flex h-12 w-12 items-center justify-center rounded-xl">

          <HiOutlineLocationMarker
            size={22}
            className="text-white"
          />

        </div>

        <div>

          <p className="text-sm uppercase tracking-wider text-white/40">
            Location
          </p>

          <p className="mt-1 font-medium text-white">
            Pakistan
          </p>

        </div>

      </motion.div>

      {/* Business Hours */}

      <div className="rounded-2xl border border-[#7F77DD]/20 bg-gradient-to-r from-[#7F77DD]/10 to-[#D4537E]/10 p-5">

        <p className="text-sm uppercase tracking-wider text-[#EF9F27]">
          Business Hours
        </p>

        <p className="mt-2 text-white">
          Monday – Saturday
        </p>

        <p className="text-white/60">
          9:00 AM – 7:00 PM (PKT)
        </p>

      </div>

    </div>

  </motion.div>

</div>

{/* Divider */}

<div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

{/* Bottom */}

<div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">

  <p className="text-white/50">
    © 2026 Dexus Studios. All rights reserved.
  </p>

  <div className="flex items-center gap-8">

    <Link
  to="/privacy-policy"
  className="text-white/50 transition duration-300 hover:text-[#EF9F27]"
>
  Privacy Policy
</Link>

<Link
  to="/terms-of-service"
  className="text-white/50 transition duration-300 hover:text-[#EF9F27]"
>
  Terms of Service
</Link>

  </div>

</div>

</section>

</footer>
);
}
