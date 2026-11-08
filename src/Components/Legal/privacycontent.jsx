import { motion } from "framer-motion";

export default function PrivacyContent() {
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
              At <strong>Dexus Studios</strong>, we value your privacy and are
              committed to protecting the personal information you share with
              us. This Privacy Policy explains how we collect, use, store, and
              safeguard your information when you visit our website, request our
              services, schedule a consultation, or communicate with our team.
              By using our website or engaging with our services, you agree to
              the practices described in this Privacy Policy.
            </p>

            <p>
              We may collect information that you voluntarily provide, including
              your name, email address, phone number, company information,
              project details, and any other information submitted through
              contact forms, consultation requests, or direct communication.
              Additionally, certain technical information such as your IP
              address, browser type, device information, operating system,
              referral source, and website usage statistics may be collected
              automatically through analytics tools and cookies to help us
              improve our services and user experience.
            </p>

            <p>
              The information we collect is used solely for legitimate business
              purposes, including responding to inquiries, providing quotations,
              delivering our software development and digital services,
              communicating project updates, improving website performance,
              enhancing security, preventing fraudulent activity, and complying
              with applicable legal obligations. We do not sell, rent, or trade
              your personal information to third parties.
            </p>

            <p>
              Dexus Studios may use trusted third-party service providers to
              assist with website hosting, analytics, communication, scheduling,
              payment processing, cloud infrastructure, and other operational
              requirements. These providers only receive information necessary
              to perform their services and are required to maintain appropriate
              confidentiality and security standards.
            </p>

            <p>
              Cookies and similar technologies may be used to improve website
              functionality, analyze visitor behavior, remember user
              preferences, and provide a better browsing experience. You may
              disable cookies through your browser settings, although doing so
              may affect certain features of the website.
            </p>

            <p>
              We implement commercially reasonable technical and organizational
              security measures to protect your information from unauthorized
              access, disclosure, alteration, or destruction. While we strive to
              maintain a secure environment, no method of electronic storage or
              transmission over the internet can be guaranteed to be completely
              secure, and therefore absolute security cannot be assured.
            </p>

            <p>
              Depending on applicable laws, you may have the right to request
              access to your personal information, request correction of
              inaccurate information, request deletion of your information,
              withdraw consent where applicable, or object to certain processing
              activities. Requests regarding your personal information may be
              submitted using the contact information provided below.
            </p>

            <p>
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices, security, or
              content of external websites, and users are encouraged to review
              the privacy policies of those websites independently before
              providing any personal information.
            </p>

            <p>
              This Privacy Policy may be updated periodically to reflect changes
              in our services, technologies, legal requirements, or business
              practices. Updated versions will be published on this page with a
              revised "Last Updated" date. Continued use of our website after
              such updates constitutes acceptance of the revised Privacy Policy.
            </p>

            <p>
              If you have any questions regarding this Privacy Policy or wish to
              exercise your privacy rights, please contact Dexus Studios through
              our official contact page or email us at
              <strong> danishdev85@gmail.com</strong>. We will make reasonable
              efforts to respond to your inquiry as promptly as possible.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}