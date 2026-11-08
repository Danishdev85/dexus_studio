import { useState } from "react";
import { motion } from "framer-motion";

import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser,
} from "react-icons/hi2";

const dates = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
];

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
];

export default function Consultation() {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const [projectDescription, setProjectDescription] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const phoneNumber = "923359200510";

  const handleBooking = () => {

    if (
      fullName.trim() === "" ||
      businessEmail.trim() === "" ||
      phone.trim() === "" ||
      selectedDate === "" ||
      selectedTime === "" ||
      selectedService === "" ||
      selectedBudget === "" ||
      projectDescription.trim() === ""
    ) {
      alert("Please complete all required fields.");
      return;
    }

    const message = ` *NEW CONSULTATION REQUEST*
━━━━━━━━━━━━━━━━━━━━
 *Client Information*

• Name:
  ${fullName}
• Company:
  ${company || "N/A"}
• Email:
  ${businessEmail}
• Phone:
  ${phone}

 *Requested Service*
  ${selectedService}

 *Estimated Budget*
  ${selectedBudget}

 *Preferred Consultation*

• Date:
  ${selectedDate}
• Time:
  ${selectedTime}
• Meeting Platform:
  Zoom or Google Meet
 *Project Description*
  ${projectDescription}
 *Additional Notes*
  ${additionalNotes || "None"}

Business Email:
danishdev85@gmail.com

Thank you.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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

            Schedule Consultation

          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#3C3489] md:text-6xl">

            Book Your

            <span className="block bg-gradient-to-r from-[#7F77DD] via-[#D4537E] to-[#EF9F27] bg-clip-text text-transparent">

              Strategy Session

            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">

            Schedule a free consultation with our experts. Choose a date,
            select a time, provide your project details, and we'll continue
            the conversation through WhatsApp.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
                  {/* LEFT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#7F77DD]/10 p-4">

                <HiOutlineCalendar
                  className="text-[#7F77DD]"
                  size={30}
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#3C3489]">

                  Choose Date

                </h3>

                <p className="mt-1 text-gray-500">

                  Select your preferred consultation date.

                </p>

              </div>

            </div>

            <div className="mt-10 grid grid-cols-4 gap-4">

              {dates.map((day) => (

                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDate(day)}
                  className={`rounded-2xl py-5 font-semibold transition ${
                    selectedDate === day
                      ? "bg-[#7F77DD] text-white shadow-lg"
                      : "border border-[#3C3489]/10 bg-[#FAF9FE] text-[#3C3489] hover:bg-[#7F77DD] hover:text-white"
                  }`}
                >

                  {day}

                </button>

              ))}

            </div>

            <div className="mt-12">

              <div className="flex items-center gap-4">

                <HiOutlineClock
                  className="text-[#D4537E]"
                  size={28}
                />

                <h3 className="text-2xl font-bold text-[#3C3489]">

                  Available Time Slots

                </h3>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                {times.map((time) => (

                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-2xl py-4 font-medium transition ${
                      selectedTime === time
                        ? "bg-[#D4537E] text-white shadow-lg"
                        : "border border-[#3C3489]/10 bg-[#FAF9FE] text-[#3C3489] hover:bg-[#D4537E] hover:text-white"
                    }`}
                  >

                    {time}

                  </button>

                ))}

              </div>

            </div>

          </motion.div>
                    {/* RIGHT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-[#EF9F27]/10 p-4">

                <HiOutlineUser
                  className="text-[#EF9F27]"
                  size={30}
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#3C3489]">

                  Consultation Details

                </h3>

                <p className="mt-1 text-gray-500">

                  Complete the information below.

                </p>

              </div>

            </div>

            <div className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

              <input
                type="email"
                placeholder="Business Email *"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none transition focus:border-[#7F77DD]"
              />

              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none"
              >

                <option value="">Select Service</option>
                <option>Web Development</option>
                <option>SEO Management</option>
                <option>Meta Ads Management</option>
                <option>AI Embedded Automation</option>
                <option>AI Tools & Software</option>
                <option>Database Operations</option>
                <option>Web Scraping</option>
                <option>Troubleshooting</option>

              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none"
              >

                <option value="">Select Budget</option>
                <option>Under $500</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $2,500</option>
                <option>$2,500 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
                <option>Let's Discuss</option>

              </select>

              <textarea
                rows={5}
                placeholder="Project Description *"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none resize-none transition focus:border-[#7F77DD]"
              />

              <textarea
                rows={4}
                placeholder="Additional Notes (Optional)"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                className="w-full rounded-2xl border border-[#3C3489]/10 bg-[#FAF9FE] px-5 py-4 outline-none resize-none transition focus:border-[#7F77DD]"
              />

            </div>
                        {/* Consultation Benefits */}

            <div className="mt-10 rounded-3xl bg-[#FAF9FE] p-8">

              <h4 className="text-xl font-bold text-[#3C3489]">

                What's Included

              </h4>

              <div className="mt-6 space-y-4">

                {[
                  "30-minute strategy session",
                  "Project feasibility discussion",
                  "Technology recommendations",
                  "Estimated budget guidance",
                  "Development roadmap",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-[#3C3489]"
                  >

                    <div className="h-2 w-2 rounded-full bg-[#7F77DD]" />

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* Live Consultation Summary */}

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#3C3489] via-[#7F77DD] to-[#D4537E] p-8 text-white shadow-xl">

              <h4 className="text-2xl font-bold">

                Consultation Summary

              </h4>

              <div className="mt-6 space-y-3 text-white/90">

                <p>
                  <strong>Name:</strong>{" "}
                  {fullName || "Not Provided"}
                </p>

                <p>
                  <strong>Company:</strong>{" "}
                  {company || "Not Provided"}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {businessEmail || "Not Provided"}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {phone || "Not Provided"}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {selectedDate || "Not Selected"}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {selectedTime || "Not Selected"}
                </p>

                <p>
                  <strong>Service:</strong>{" "}
                  {selectedService || "Not Selected"}
                </p>

                <p>
                  <strong>Budget:</strong>{" "}
                  {selectedBudget || "Not Selected"}
                </p>

                <p>
                  <strong>Meeting:</strong> Let Dexus Decide
                </p>

                <p>
                  <strong>Project:</strong>{" "}
                  {projectDescription || "Not Provided"}
                </p>

                <p>
                  <strong>Notes:</strong>{" "}
                  {additionalNotes || "None"}
                </p>

              </div>

            </div>
                        {/* Book Consultation Button */}

            <motion.button
              type="button"
              onClick={handleBooking}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 w-full rounded-2xl bg-gradient-to-r from-[#3C3489] via-[#7F77DD] to-[#D4537E] py-5 text-lg font-semibold text-white shadow-2xl transition-all duration-300"
            >
              Book Consultation via WhatsApp
            </motion.button>

            <p className="mt-5 text-center text-sm leading-7 text-gray-500">

              Clicking the button will open WhatsApp with your consultation
              request already filled in. Simply review the information and
              press <span className="font-semibold text-[#3C3489]">Send</span>.
              A member of the Dexus Studios team will review your request and
              contact you to confirm your consultation.

            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );

}