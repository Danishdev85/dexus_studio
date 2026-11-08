import { motion } from "framer-motion";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineHome,
} from "react-icons/hi";


function Industries() {


  const industries = [
    {
      icon: HiOutlineHeart,
      title: "Healthcare",
      description:
        "Building secure digital solutions that improve healthcare experiences and operations.",
    },
    {
      icon: HiOutlineShoppingCart,
      title: "E-Commerce",
      description:
        "Creating high-performing online platforms that help businesses sell and scale.",
    },
    {
      icon: HiOutlineAcademicCap,
      title: "Education",
      description:
        "Developing modern learning platforms and digital education solutions.",
    },
    {
      icon: HiOutlineSparkles,
      title: "Brands",
      description:
        "Helping brands build powerful digital identities and customer experiences.",
    },
    {
      icon: HiOutlineHome,
      title: "Real Estate",
      description:
        "Creating smart platforms that simplify property management and discovery.",
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
        right-0
        w-[450px]
        h-[450px]
        bg-[#7F77DD]/20
        rounded-full
        blur-[140px]
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
            Industries We Serve
          </p>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#3C3489]
          ">

            Digital Solutions For

            <span className="
              block
              bg-gradient-to-r
              from-[#7F77DD]
              to-[#D4537E]
              bg-clip-text
              text-transparent
            ">
              Every Industry
            </span>

          </h2>



          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            We create tailored technology solutions that help
            businesses across different industries grow faster.
          </p>


        </motion.div>






        {/* Industry Cards */}

        <div className="
          mt-16
          grid
          sm:grid-cols-2
          lg:grid-cols-5
          gap-6
        ">


          {industries.map((industry,index)=>{


            const Icon = industry.icon;


            return (

              <motion.div


                key={industry.title}


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
                  delay:index*.1
                }}


                viewport={{
                  once:true
                }}


                className="
                  group
                  relative
                  p-6
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



                {/* Hover Gradient */}

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
                    mb-5
                  ">

                    <Icon className="
                      text-white
                      text-3xl
                    "/>

                  </div>





                  <h3 className="
                    text-xl
                    font-semibold
                    text-[#3C3489]
                  ">
                    {industry.title}
                  </h3>




                  <p className="
                    mt-3
                    text-gray-600
                    text-sm
                    leading-relaxed
                  ">
                    {industry.description}
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


export default Industries;