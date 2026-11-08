import { motion } from "framer-motion";
import {
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineChatAlt2,
  HiOutlineLightningBolt,
  HiOutlineTrendingUp,
  HiOutlineSupport,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineChip,
    title: "Modern Technology",
    description: "Built with modern frameworks and cloud technologies.",
  },
  {
    icon: HiOutlineSparkles,
    title: "AI Powered",
    description: "Intelligent automation for smarter business operations.",
  },
  {
    icon: HiOutlineChatAlt2,
    title: "Transparent",
    description: "Clear communication from planning to deployment.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Fast Delivery",
    description: "Agile workflows with reliable project execution.",
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Scalable Solutions",
    description: "Software designed to grow with your business.",
  },
  {
    icon: HiOutlineSupport,
    title: "Long-Term Support",
    description: "Continuous improvements beyond project delivery.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 bg-[#FAF9FE] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7F77DD]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4537E]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">
            Why Choose Dexus
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#3C3489]">
            Built For Your
            <span className="block bg-gradient-to-r from-[#7F77DD] to-[#D4537E] bg-clip-text text-transparent">
              Business Success
            </span>
          </h2>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group text-center"
              >
                {/* Icon Circle */}
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300">

                  <Icon size={34} />

                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#3C3489]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}