import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FE] py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#7F77DD]/10 blur-[170px]" />

        <div className="absolute -bottom-40 right-0 h-[550px] w-[550px] rounded-full bg-[#D4537E]/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-white/60 bg-white/80 p-10 md:p-14 shadow-2xl backdrop-blur-xl"
        >

          <div className="prose prose-lg max-w-none prose-headings:text-[#3C3489] prose-p:text-gray-600">

            <p>
              <strong>Last Updated:</strong> January 2026
            </p>

            <p>
              Welcome to <strong>Dexus Studios</strong>. These Terms of Service
              govern your access to and use of our website, software products,
              consulting services, digital solutions, and any related services
              provided by Dexus Studios. By accessing our website, requesting a
              quotation, scheduling a consultation, or engaging our services,
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms of Service.
            </p>

            <p>
              Dexus Studios provides professional software development, web
              development, artificial intelligence solutions, automation
              services, search engine optimization, database management,
              troubleshooting, digital consulting, and related technology
              services. Every project is unique and may require separate project
              agreements, proposals, or contracts which will take precedence
              over these general terms where applicable.
            </p>

            <p>
              Clients agree to provide accurate information, timely feedback,
              required project materials, and approvals necessary for successful
              project completion. Delays caused by missing information,
              prolonged feedback, or changes to project requirements may affect
              estimated timelines and delivery schedules.
            </p>

            <p>
              Unless otherwise stated in a written agreement, all quotations,
              pricing, project timelines, and deliverables are estimates and may
              change depending on project scope, technical complexity, requested
              revisions, third-party services, or unforeseen technical
              challenges. Additional work requested outside the agreed scope may
              require separate quotations or additional charges.
            </p>

            <p>
              Upon completion of agreed payments, ownership of the final
              deliverables specifically developed for the client will generally
              transfer to the client unless otherwise specified within the
              project agreement. Dexus Studios retains ownership of its internal
              development frameworks, reusable components, methodologies,
              libraries, design systems, and proprietary tools used during
              development.
            </p>

            <p>
              Clients remain responsible for ensuring that any content,
              trademarks, logos, media, or materials provided to Dexus Studios
              do not infringe upon the rights of third parties. Dexus Studios
              shall not be liable for legal claims arising from materials
              supplied by clients.
            </p>

            <p>
              While Dexus Studios strives to deliver reliable, secure, and
              high-quality software, no software system can be guaranteed to be
              completely free of defects, interruptions, vulnerabilities, or
              compatibility issues. Services are provided on an "as available"
              and "as agreed" basis to the maximum extent permitted by
              applicable law.
            </p>

            <p>
              To the fullest extent permitted by law, Dexus Studios shall not be
              liable for indirect, incidental, consequential, special, or
              punitive damages arising from the use of our website, software, or
              professional services, including but not limited to loss of data,
              business interruption, lost profits, or third-party claims.
            </p>

            <p>
              Either party may terminate a project in accordance with any
              applicable written agreement. Work completed up to the termination
              date, including planning, consultation, development, or design
              services, may remain billable according to the agreed project
              terms.
            </p>

            <p>
              Dexus Studios reserves the right to update these Terms of Service
              at any time to reflect changes in our services, business
              operations, technology, or legal obligations. Updated versions
              will become effective immediately upon publication on this
              website. Continued use of our website or services after such
              updates constitutes acceptance of the revised Terms of Service.
            </p>

            <p>
              If you have questions regarding these Terms of Service, require
              clarification, or wish to discuss a project, please contact
              Dexus Studios through our official Contact page or email us at
              <strong> danishdev85@gmail.com</strong>. We appreciate the trust
              you place in our team and look forward to helping your business
              grow through innovative technology solutions.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}