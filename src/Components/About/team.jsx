import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

import danish from "../../assets/team/danish.webp";
import sameer from "../../assets/team/sameer.webp";
import ahmad from "../../assets/team/ahmad.webp";
import haroon from "../../assets/team/haroon.webp";
import ali from "../../assets/team/ali.webp";



const team = [
  {
    name: "Danish Shahzad",
    role: "Chief Executive Officer",
    image: danish,
    linkedin: "https://www.linkedin.com/in/danish-shahzad-928b983b0/",
  },
  {
    name: "Sameer Tahir",
    role: "Lead Developer",
    image: sameer,
    linkedin: "https://www.linkedin.com/in/sameer-tahir-developer?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Haroon Sarfraz",
    role: "Project Management",
    image: haroon,
    linkedin: "#",
  },
  {
    name: "Ali Noor",
    role: "Human Resource Manager",
    image: ali,
    linkedin: "#",
  },
  {
    name: "Ahmad Tahir",
    role: "Marketing Manager",
    image: ahmad,
    linkedin: "#",
  },

];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-32">

      {/* Background */}
      <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-[#7F77DD]/10 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7F77DD]">
            Meet Our Team
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#3C3489] md:text-6xl">
            The People Behind
            <span className="block bg-gradient-to-r from-[#7F77DD] to-[#D4537E] bg-clip-text text-transparent">
              Dexus Studios
            </span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-24 grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group w-full max-w-[360px] overflow-hidden rounded-[36px] border border-[#3C3489]/10 bg-white shadow-xl transition-all duration-300 hover:shadow-[0_25px_60px_rgba(60,52,137,0.18)]"
            >

              <div className="p-10 text-center">

                {/* Profile */}
                <div className="relative mx-auto h-44 w-44">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a8009a] via-[#D4537E] to-[#72007c] p-[4px]">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full rounded-full bg-white object-cover"
                    />

                  </div>

                </div>

                {/* Name */}
                <h3 className="mt-10 text-3xl font-bold text-[#3C3489]">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-3 text-base font-semibold uppercase tracking-[0.2em] text-[#D4537E]">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="mx-auto mt-8 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E]" />

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3C3489] text-white transition-all duration-300 hover:bg-[#D4537E] hover:rotate-6"
                >
                  <FaLinkedinIn size={20} />
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}