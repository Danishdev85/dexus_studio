import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CTA() {


  return (

    <section className="
      relative
      py-32
      bg-[#FAF9FE]
      overflow-hidden
    ">


      {/* Background Glow */}

      <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[500px]
        bg-[#7F77DD]/20
        rounded-full
        blur-[160px]
      "/>





      {/* Floating Particles */}

      {[...Array(12)].map((_, index) => (

        <motion.span

          key={index}

          animate={{
            y:[0,-30,0],
            opacity:[0.2,0.8,0.2]
          }}

          transition={{
            duration:3 + index,
            repeat:Infinity
          }}

          className="
            hidden md:block
            absolute
            w-2
            h-2
            rounded-full
            bg-[#7F77DD]/50
          "

          style={{
            top:`${Math.random()*100}%`,
            left:`${Math.random()*100}%`
          }}

        />

      ))}






      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
      ">



        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="
            relative
            rounded-[40px]
            p-8
            md:p-16
            text-center
            overflow-hidden
            bg-gradient-to-br
            from-[#3C3489]
            via-[#7F77DD]
            to-[#D4537E]
            shadow-2xl
          "

        >



          {/* Glass Overlay */}

          <div className="
            absolute
            inset-0
            bg-white/10
            backdrop-blur-sm
          "/>





          <div className="
            relative
            z-10
            max-w-4xl
            mx-auto
          ">

  <p
    className="
      text-white/80
      uppercase
      tracking-[0.22em]
      sm:tracking-[0.3em]
      text-xs
      sm:text-sm
      font-semibold
    "
  >
    Start Your Project
  </p>





            <h2 className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
              text-white
              leading-tight
            ">

              Have A Project

              <span className="
                block
              ">
                In Mind?
              </span>


            </h2>




            <p className="
              mt-6
              text-white/80
              text-lg
              max-w-2xl
              mx-auto
            ">
              From modern websites and E-commerce platforms to
              AI-powered solutions, Dexus helps businesses
              transform ideas into scalable digital products.
            </p>






            <div className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
            ">


            <Link to="/contact">
  <button
    className="
      px-8
      py-4
      rounded-xl
      bg-white
      text-[#3C3489]
      font-semibold
      hover:scale-105
      transition
    "
  >
    Start A Project →
  </button>
</Link>




            <Link to="/contact">
              <button className="
                px-8
                py-4
                rounded-xl
                border
                border-white/40
                text-white
                bg-white/10
                backdrop-blur-md
                font-semibold
                hover:bg-white/20
                transition
              ">
                Contact Us
              </button>
            </Link>



            </div>



          </div>




        </motion.div>



      </div>



    </section>

  );
}


export default CTA;