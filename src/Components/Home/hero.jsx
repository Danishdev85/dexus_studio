import { motion } from "framer-motion";
import heroImage from "../../assets/images/circle-logo-dexus.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#000000] text-[#3C3489] flex items-center">


      {/* Background Glows */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Purple Glow */}
        <div className="
          absolute
          top-[-180px]
          left-[-150px]
          w-[600px]
          h-[600px]
          bg-[#7F77DD]/30
          rounded-full
          blur-[160px]
        " />


        {/* Pink Glow */}
        <div className="
          absolute
          bottom-[-200px]
          right-[-150px]
          w-[550px]
          h-[550px]
          bg-[#D4537E]/25
          rounded-full
          blur-[160px]
        " />


        {/* Right Dark Gradient */}
        <div className="
          absolute
          right-0
          top-0
          h-full
          w-[45%]
          bg-gradient-to-l
          from-[#3C3489]/20
          to-transparent
        " />


      </div>



      {/* Digital Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage:
            "linear-gradient(#3C3489 1px, transparent 1px), linear-gradient(90deg,#3C3489 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />




      {/* Energy Lines */}


      <motion.div
        animate={{ x:[0,80,0] }}
        transition={{
          duration:8,
          repeat:Infinity
        }}

        className="
          absolute
          top-1/4
          left-0
          w-[700px]
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#7F77DD]
          to-transparent
          blur-sm
        "
      />


      <motion.div

        animate={{ x:[0,-100,0] }}

        transition={{
          duration:10,
          repeat:Infinity
        }}

        className="
          absolute
          bottom-1/3
          right-0
          w-[600px]
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#D4537E]
          to-transparent
          blur-sm
        "
      />





      {/* Particles */}

      {[...Array(20)].map((_,i)=>(

        <motion.span

          key={i}

          animate={{
            y:[0,-40,0],
            opacity:[0.2,1,0.2]
          }}

          transition={{
            duration:3+(i%5),
            repeat:Infinity
          }}

          className="
            hidden md:block
            absolute
            w-1
            h-1
            bg-[#7F77DD]
            rounded-full
          "

          style={{
            top:`${Math.random()*100}%`,
            left:`${Math.random()*100}%`
          }}

        />

      ))}





      {/* Main Content */}


      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        grid
        lg:grid-cols-2
        gap-12
        items-center
      ">




        {/* Left Content */}


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <div className="
            inline-flex
            px-5
            py-2
            rounded-full
            border
            border-[#7F77DD]/30
            bg-[#7F77DD]/10
            backdrop-blur-md
            text-sm
            mb-6
            text-[#3C3489]
          ">
            Providing best Software Solutions for your business
          </div>





          <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          ">

            We Build

            <span className="
              block
              bg-gradient-to-r
              from-[#3C3489]
              via-[#7F77DD]
              to-[#D4537E]
              bg-clip-text
              text-transparent
            ">
              Software That Scales
            </span>

          </h1>





          <p className="
            mt-6
            text-gray-300
            text-lg
            max-w-xl
          ">
            Dexus Studios creates modern web applications,
            SaaS platforms, and digital products that help
            businesses grow faster.
          </p>






          <div className="mt-8 flex gap-5">


        <Link to="/contact">
  <button
    className="
      px-7
      py-3
      rounded-xl
      text-white
      bg-gradient-to-r
      from-[#3C3489]
      to-[#d453c3]
      hover:scale-105
      transition
      shadow-lg
    "
  >
    Start Project
  </button>
</Link>

          </div>



        </motion.div>







        {/* Right Image */}


        <motion.div

          initial={{
            opacity:0,
            scale:.9
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

          className="relative"

        >







          {/* Glass Card */}


          <div >


            <img

              src={heroImage}

              alt="Dexus Studio"

              className="
                rounded-2xl
                w-[360px]
                h-[520px]
                object-cover
              "

            />


          </div>



        </motion.div>



      </div>


    </section>
  );
}