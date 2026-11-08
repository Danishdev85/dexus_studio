import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineSearch,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineDatabase,
} from "react-icons/hi";


function Services() {


  const services = [
    {
      icon: HiOutlineCode,
      title: "Web Development",
      description:
        "Modern, scalable websites and web applications built with the latest technologies.",
    },
    {
      icon: HiOutlineSearch,
      title: "SEO Management",
      description:
        "Improve search visibility and grow your business through strategic SEO solutions.",
    },
    {
      icon: HiOutlineChartBar,
      title: "Meta Ads Management",
      description:
        "Performance-driven advertising campaigns designed to reach the right audience.",
    },
    {
      icon: HiOutlineSparkles,
      title: "AI Embedded Automation",
      description:
        "Smart AI automation systems that optimize workflows and improve productivity.",
    },
    {
      icon: HiOutlineCube,
      title: "AI Tools & Software",
      description:
        "Custom AI-powered tools and software solutions built for modern businesses.",
    },
    {
      icon: HiOutlineDatabase,
      title: "Database Operations",
      description:
        "Reliable database management, optimization, and scalable data solutions.",
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
        blur-[120px]
        rounded-full
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
            Our Services
          </p>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#3C3489]
          ">

            Solutions Built For

            <span className="
              block
              bg-gradient-to-r
              from-[#7F77DD]
              to-[#D4537E]
              bg-clip-text
              text-transparent
            ">
              Digital Growth
            </span>

          </h2>



          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            From software development to AI automation,
            we help businesses build, scale, and grow.
          </p>


        </motion.div>







        {/* Infinite Carousel */}


        <div className="
          mt-16
          overflow-hidden
        ">


          <motion.div

            className="
              flex
              gap-6
              w-max
            "


            animate={{
              x:["0%","-50%"]
            }}


            transition={{
              duration:25,
              repeat:Infinity,
              ease:"linear"
            }}


            whileHover={{
              animationPlayState:"paused"
            }}

          >


            {[...services,...services].map((service,index)=>{


              const Icon = service.icon;


              return (

                <div

                  key={index}

                  className="
                    group
                    relative
                    w-[320px]
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
                    flex-shrink-0
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





                    <h3 className="
                      text-xl
                      font-semibold
                      text-[#3C3489]
                      mb-3
                    ">
                      {service.title}
                    </h3>




                    <p className="
                      text-gray-600
                      leading-relaxed
                    ">
                      {service.description}
                    </p>



                  </div>



                </div>


              );


            })}



          </motion.div>


        </div>



      </div>


    </section>

  );
}


export default Services;