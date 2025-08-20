import React, { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideUp } from "@/animation"
import Image from "next/image"

const index = () => {
  const phrase = "“Izzy is the absolute best in the business for Personal Branding!”"

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section id="testimonials" className="relative min-h-screen overflow-x-hidden flex flex-col md:-mt-30 lg:-mt-0">
      <h3 className="text-[40px] font-instrument-serif text-center leading-[110%]">What do my clients say about me?</h3>

      <div ref={description} className="flex flex-col items-start justify-start lg:flex-row lg:justify-between px-5 md:px-10 xl:px-20 mt-20 lg:mt-40 lg:items-end">
        <div className="flex flex-col mt-20 gap-20 md:gap-30 lg:gap-40">
          <p className="slide-up text-[40px] md:text-[55px] lg:text-[40px] xl:text-[55px] font-instrument-serif max-w-[90%] 2xl:max-w-[650px] leading-[110%]">
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

          <div className="text-[20px] md:text-[30px] lg:text-[20px] xl:text-[30px] font-noto-serif leading-[110%]">
            <p>Emily Hughes</p>
            <p>Founder at Reco HQ</p>
          </div>

          <div className="flex justify-between text-[30px]">
            {/* <p className="font-instrument-serif">1</p>

            <div className="flex gap-5 cursor-pointer font-noto-serif">
              <p>prev</p>
              <p>next</p>
            </div> */}
          </div>
        </div>

        <Image src="/img-testimonials.png" width={561} height={660} alt="testimonials image" className="lg:max-w-[50%] 2xl:max-w-[561px]" />
      </div>
    </section>
  )
}

export default index
