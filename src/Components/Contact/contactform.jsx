import { useState } from "react";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi2";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "Web Development",
    budget: "Under $500",
    timeline: "ASAP",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappMessage = `
*NEW PROJECT ENQUIRY - DEXUS STUDIOS*

*Full Name:* ${formData.fullName}
*Company:* ${formData.company}
*Business Email:* ${formData.email}
*Phone:* ${formData.phone}
*Country:* ${formData.country}
*Service:* ${formData.service}
*Budget:* ${formData.budget}
*Timeline:* ${formData.timeline}
*Project Description:*
${formData.message}
`;

    const url =
      "https://wa.me/923359200510?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-44 left-0 h-[650px] w-[650px] rounded-full bg-[#7F77DD]/10 blur-[180px]" />

        <div className="absolute -bottom-44 right-0 h-[700px] w-[700px] rounded-full bg-[#D4537E]/10 blur-[190px]" />

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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#7F77DD]">

            Send Us A Message

          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#3C3489] md:text-6xl">

            Tell Us About

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Your Project

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            Complete the form below and we'll instantly prepare your
            project enquiry in WhatsApp. Simply review it and press Send.

          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] border border-white bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
        >

          <div className="grid gap-8 md:grid-cols-2">
                      {/* Full Name */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Full Name *
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

            </div>

            {/* Company */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Company Name
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

            </div>

            {/* Email */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Business Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

            </div>

            {/* Phone */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

            </div>

            {/* Country */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Country
              </label>

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Pakistan"
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

            </div>

            {/* Service */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Service Required
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none"
              >

                <option>Web Development</option>
                <option>SEO Management</option>
                <option>Meta Ads Management</option>
                <option>AI Embedded Automation</option>
                <option>AI Tools & Software</option>
                <option>Database Operations</option>
                <option>Web Scraping</option>
                <option>Troubleshooting</option>

              </select>

            </div>
                        {/* Budget */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Estimated Budget
              </label>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none"
              >

                <option>Under $500</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $2,500</option>
                <option>$2,500 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
                <option>Let's Discuss</option>

              </select>

            </div>

            {/* Timeline */}

            <div>

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Project Timeline
              </label>

              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none"
              >

                <option>ASAP</option>
                <option>Within 1 Month</option>
                <option>1 - 3 Months</option>
                <option>3 - 6 Months</option>
                <option>Flexible</option>

              </select>

            </div>

            {/* Project Description */}

            <div className="md:col-span-2">

              <label className="mb-3 block font-semibold text-[#3C3489]">
                Project Description *
              </label>

              <textarea
                rows={7}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, features, target audience, and any additional details..."
                className="w-full resize-none rounded-3xl border border-[#3C3489]/10 bg-[#FAF9FE] px-6 py-5 outline-none transition focus:border-[#7F77DD]"
              />

            </div>
                        {/* Bottom */}

            <div className="md:col-span-2 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h4 className="text-xl font-bold text-[#3C3489]">

                  We'll respond as soon as possible.

                </h4>

                <p className="mt-2 leading-7 text-gray-600">

                  When you click the button, WhatsApp will open with your
                  complete project enquiry already prepared. Simply review
                  the details and press <strong>Send</strong> to contact
                  Dexus Studios directly.

                </p>

              </div>

              <motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#3C3489] via-[#7F77DD] to-[#D4537E] px-10 py-5 font-semibold text-white shadow-2xl transition-all duration-300"
              >

                Send via WhatsApp

                <HiPaperAirplane
                  size={22}
                />

              </motion.button>

            </div>
                      </div>

        </motion.div>

      </div>

    </section>

  );
}