import { motion } from "framer-motion";
import {
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineChartBar,
} from "react-icons/hi";


function AIInnovation() {


  const features = [
    {
      icon: HiOutlineLightningBolt,
      title: "AI Automation",
      description:
        "Automate repetitive workflows and improve business efficiency with intelligent systems.",
    },
    {
      icon: HiOutlineChip,
      title: "Intelligent Systems",
      description:
        "Build smart applications that analyze data and adapt to changing business needs.",
    },
    {
      icon: HiOutlineSparkles,
      title: "AI Tools & Software",
      description:
        "Custom AI-powered solutions designed around your unique business requirements.",
    },
    {
      icon: HiOutlineChartBar,
      title: "Data Intelligence",
      description:
        "Transform complex data into valuable insights for better decision making.",
    },
  ];



  return (

    <section className="
      relative
      py-32
      min-h-[900px]
      bg-[#FAF9FE]
      overflow-hidden
    ">


      {/* Background Glow */}

      <div className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[400px]
        bg-[#7F77DD]/20
        blur-[150px]
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
            AI & Innovation
          </p>



          <h2 className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
            text-[#3C3489]
          ">

            Building Smarter

            <span className="
              block
              bg-gradient-to-r
              from-[#7F77DD]
              to-[#D4537E]
              bg-clip-text
              text-transparent
            ">
              Digital Futures
            </span>

          </h2>



          <p className="
            mt-6
            text-gray-600
            text-lg
          ">
            We combine artificial intelligence with modern software
            engineering to automate workflows, improve decisions,
            and create powerful digital experiences.
          </p>


        </motion.div>







        {/* AI Showcase Panel */}


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
            mt-24
            mx-auto
            max-w-5xl
            h-[380px]
            rounded-3xl
            bg-white
            border
            border-[#3C3489]/10
            shadow-2xl
            overflow-hidden
            flex
            items-center
            justify-center
          "

        >



          {/* Grid Background */}

          <div

            className="
              absolute
              inset-0
              opacity-[0.08]
            "

            style={{

              backgroundImage:
              `
              linear-gradient(#7F77DD 1px, transparent 1px),
              linear-gradient(90deg,#7F77DD 1px, transparent 1px)
              `,

              backgroundSize:"40px 40px"

            }}

          />





          {/* Floating Glow */}

          <motion.div

            animate={{
              y:[0,-20,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
              absolute
              w-40
              h-40
              rounded-full
              bg-[#D4537E]/20
              blur-3xl
            "

          />






          {/* Main AI Card */}

          <div className="
            relative
            z-10
            text-center
            px-6
          ">


            <div className="
              mx-auto
              w-28
              h-28
              rounded-3xl
              bg-gradient-to-br
              from-[#3C3489]
              to-[#D4537E]
              flex
              items-center
              justify-center
              text-white
              text-4xl
              font-bold
              shadow-xl
            ">
              AI
            </div>



            <h3 className="
              mt-6
              text-3xl
              font-bold
              text-[#3C3489]
            ">
              Intelligent Solutions
            </h3>



            <p className="
              mt-3
              max-w-lg
              text-gray-600
            ">
              Designing AI-powered systems that help businesses
              automate operations, optimize workflows, and unlock growth.
            </p>


          </div>



        </motion.div>







        {/* Feature Cards */}


        <div className="
          mt-20
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">


        {features.map((item,index)=>{


          const Icon = item.icon;


          return (

            <motion.div

              key={item.title}

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
                delay:index*.15
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




                <h3 className="
                  text-xl
                  font-bold
                  text-[#3C3489]
                ">
                  {item.title}
                </h3>




                <p className="
                  mt-3
                  text-gray-600
                  leading-relaxed
                ">
                  {item.description}
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


export default AIInnovation;