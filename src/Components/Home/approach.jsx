import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineCode,
  HiOutlineTrendingUp,
} from "react-icons/hi";


function Approach() {


  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: HiOutlineLightBulb,
      description:
        "We understand your business goals, users, and challenges before creating any solution.",
      points: [
        "Business analysis",
        "Requirement gathering",
        "Market understanding",
      ],
      position: "lg:-translate-y-24",
    },

    {
      number: "02",
      title: "Strategy",
      icon: HiOutlineClipboardList,
      description:
        "We create a clear technical roadmap and define the right approach for your product.",
      points: [
        "Architecture planning",
        "Technology selection",
        "Product roadmap",
      ],
      position: "lg:translate-y-20",
    },

    {
      number: "03",
      title: "Build",
      icon: HiOutlineCode,
      description:
        "Our team transforms ideas into powerful digital products using modern technologies.",
      points: [
        "UI/UX development",
        "AI integration",
        "Scalable systems",
      ],
      position: "lg:-translate-y-24",
    },

    {
      number: "04",
      title: "Scale",
      icon: HiOutlineTrendingUp,
      description:
        "After launch, we optimize and improve your product for long-term growth.",
      points: [
        "Deployment",
        "Performance optimization",
        "Continuous improvement",
      ],
      position: "lg:translate-y-20",
    },
  ];



  return (

    <section className="
      relative
      min-h-[900px]
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
        w-[500px]
        h-[500px]
        bg-[#7F77DD]/20
        rounded-full
        blur-[150px]
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
            y:40
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
            text-center
            max-w-3xl
            mx-auto
          "

        >

          <p className="
            text-[#7F77DD]
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
          ">
            Our Approach
          </p>


          <h2 className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
            text-[#3C3489]
          ">

            Turning Ideas Into

            <span className="
              block
              bg-gradient-to-r
              from-[#7F77DD]
              to-[#D4537E]
              bg-clip-text
              text-transparent
            ">
              Digital Success
            </span>

          </h2>


          <p className="
            mt-6
            text-gray-600
            text-lg
          ">
            Our structured approach combines strategy,
            creativity, engineering, and continuous growth
            to build products that create real impact.
          </p>


        </motion.div>






        {/* 3D Core */}

        <div className="
          relative
          mt-32
        ">


          {/* Connecting Line */}

          <div className="
            hidden
            lg:block
            absolute
            top-1/2
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#7F77DD]
            to-transparent
          "/>





          {/* Center Core */}


          <motion.div

            animate={{
              scale:[1,1.08,1]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

          >

          </motion.div>







          {/* Cards */}

          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">


          {steps.map((step,index)=>{


            const Icon = step.icon;


            return (

              <motion.div

                key={step.title}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:.6,
                  delay:index*.15
                }}

                viewport={{
                  once:true
                }}

                className={`
                  ${step.position}
                  relative
                `}

              >


                <div className="
                  p-7
                  rounded-3xl
                  bg-white
                  border
                  border-[#3C3489]/10
                  shadow-xl
                  hover:-translate-y-3
                  transition
                  duration-300
                ">


                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
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



                  <span className="
                    text-[#7F77DD]
                    font-bold
                  ">
                    {step.number}
                  </span>



                  <h3 className="
                    mt-2
                    text-2xl
                    font-bold
                    text-[#3C3489]
                  ">
                    {step.title}
                  </h3>



                  <p className="
                    mt-3
                    text-gray-600
                  ">
                    {step.description}
                  </p>




                  <ul className="
                    mt-5
                    space-y-2
                    text-sm
                    text-gray-500
                  ">

                    {step.points.map(point=>(
                      <li key={point}>
                        • {point}
                      </li>
                    ))}

                  </ul>


                </div>


              </motion.div>


            );


          })}


          </div>


        </div>



      </div>


    </section>

  );
}


export default Approach;