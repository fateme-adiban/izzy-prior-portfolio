import React, { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideUp } from "@/animation"

const index = () => {
  const phrase = "Assisting purpose-led founders and startups with their branding. In a meaningful way that moves the needle forward."
  const services = ["Content Strategy", "Content Marketing", "Brand Consulting", "Ghostwriting"]

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section ref={description} id="services" className="relative min-h-screen overflow-x-hidden flex flex-col mt-50">
      <h3 className="text-[40px] font-instrument-serif text-center">How can i help you?</h3>

      <div className="flex flex-col pl-[8%] mt-30">
        <p className="text md:!max-w-[500px] ">
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                  {word}
                </motion.span>
              </span>
            )
          })}
        </p>

        <div className="mt-35">
          {services.map((service, index) => (
            <motion.p whileHover={{ backgroundColor: "rgba(255, 198, 172, 0.2)" }} transition={{ duration: 0.5, ease: "easeInOut" }} className="text-[25px] lg:text-[36px] font-noto-serif font-bold uppercase py-7 border-b-2 max-w-[90%] 2xl:max-w-[1288px]" key={index}>
              {service}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default index
