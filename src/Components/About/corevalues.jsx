import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineHeart,
} from "react-icons/hi";

const values = [
  {
    number: "01",
    title: "Integrity",
    icon: HiOutlineShieldCheck,
    description:
      "We build trust through honesty, transparency, and dependable partnerships, ensuring every commitment is delivered with professionalism.",
    gradient: "from-[#7F77DD] to-[#3C3489]",
  },
  {
    number: "02",
    title: "Innovation",
    icon: HiOutlineLightBulb,
    description:
      "We embrace emerging technologies, challenge conventional thinking, and continuously create smarter digital solutions.",
    gradient: "from-[#D4537E] to-[#7F77DD]",
  },
  {
    number: "03",
    title: "Dedication",
    icon: HiOutlineHeart,
    description:
      "We are committed to delivering precision, quality, and long-term value through every project we undertake.",
    gradient: "from-[#EF9F27] to-[#D4537E]",
  },
];

export default function CoreValues() {
  return (
    <section className="relative bg-[#FAF9FE] py-32 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-80 h-80 rounded-full bg-[#7F77DD]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#D4537E]/10 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">
            Our Core Values
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[#3C3489]">
            Principles That
            <span className="block bg-gradient-to-r from-[#7F77DD] to-[#D4537E] bg-clip-text text-transparent">
              Guide Everything We Do
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every decision, every solution, and every partnership is built upon
            values that define who we are and how we deliver exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-[#3C3489]/10 shadow-xl p-10"
              >

                {/* Top Gradient */}

                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${value.gradient}`} />

                {/* Background Number */}

                <span className="absolute right-6 top-6 text-8xl font-black text-[#3C3489]/5">
                  {value.number}
                </span>

                {/* Icon */}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-lg`}>

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl font-bold text-[#3C3489]">
                  {value.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-8">
                  {value.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}