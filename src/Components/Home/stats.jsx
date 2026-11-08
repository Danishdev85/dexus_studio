import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineCode,
} from "react-icons/hi";

function Stats() {

  const stats = [
    {
      icon: HiOutlineBriefcase,
      number: "50+",
      title: "Projects Delivered",
      description:
        "Modern digital solutions built for startups and businesses.",
    },
    {
      icon: HiOutlineGlobeAlt,
      number: "20+",
      title: "Global Clients",
      description:
        "Helping companies transform ideas into digital products.",
    },
    {
      icon: HiOutlineLightningBolt,
      number: "Fast",
      title: "MVP Development",
      description:
        "Turning concepts into scalable products efficiently.",
    },
    {
      icon: HiOutlineCode,
      number: "10+",
      title: "Technologies",
      description:
        "Using modern tools to create powerful experiences.",
    },
  ];


  return (

    <section className="
      relative
      py-28
      bg-[#FAF9FE]
      overflow-hidden
    ">


      {/* Background Glow */}

      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[300px]
        bg-[#7F77DD]/20
        rounded-full
        blur-[120px]
      "/>



      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
      ">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.7
          }}

          viewport={{
            once:true
          }}

          className="
            text-center
            max-w-3xl
            mx-auto
          "

        >


          <p className="
            text-[#7F77DD]
            uppercase
            tracking-[0.25em]
            text-sm
            font-semibold
            mb-4
          ">
            Why Choose Dexus
          </p>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#3C3489]
            leading-tight
          ">

            Delivering Digital
            <span className="
              block
              bg-gradient-to-r
              from-[#7F77DD]
              to-[#D4537E]
              bg-clip-text
              text-transparent
            ">
              Excellence Worldwide
            </span>

          </h2>



          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            Combining creativity, technology, and experience
            to build solutions that create real business value.
          </p>


        </motion.div>





        {/* Stats Cards */}

        <div className="
          mt-16
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


          {stats.map((stat,index)=>{

            const Icon = stat.icon;


            return (

              <motion.div

                key={stat.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:.5,
                  delay:index * .1
                }}

                viewport={{
                  once:true
                }}


                className="
                  group
                  relative
                  p-7
                  rounded-3xl
                  bg-white
                  border
                  border-[#3C3489]/10
                  shadow-lg
                  hover:-translate-y-3
                  transition-all
                  duration-300
                  overflow-hidden
                "

              >


                {/* Hover Glow */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#7F77DD]/10
                  to-[#D4537E]/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                "/>




                <div className="
                  relative
                  z-10
                ">



                  {/* Icon */}

                  <div className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#3C3489]
                    to-[#D4537E]
                    mb-6
                  ">

                    <Icon className="
                      text-white
                      text-3xl
                    "/>

                  </div>





                  {/* Number */}

                  <h3 className="
                    text-4xl
                    font-bold
                    text-[#3C3489]
                  ">
                    {stat.number}
                  </h3>





                  <h4 className="
                    mt-2
                    text-xl
                    font-semibold
                    text-[#D4537E]
                  ">
                    {stat.title}
                  </h4>





                  <p className="
                    mt-3
                    text-gray-600
                    leading-relaxed
                  ">
                    {stat.description}
                  </p>



                </div>



              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );
}

export default Stats;