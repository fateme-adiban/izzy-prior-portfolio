import React, { useRef } from "react"
import Image from "next/image"
import { useInView, motion } from "framer-motion"
import { slideUp } from "../../animation"

const Index = () => {
  const phrase1 = "They’re throwing money at paid ads, showing up on 5 different platforms, posting fluffy content that gets likes but no leads... and still wondering why growth feels so slow. Messaging is vague. The founder story soundes like it came out of a pitch deck. And the brand looks good on paper but says very little."
  const phrase2 = "If this sounds familiar, you aren’t alone. You’ve got a solid product and you know your space. But you’re not seeing the traction or conversions that you expected."

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section id="about" className="relative min-h-screen overflow-x-hidden flex flex-col mt-30">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[60px] md:text-[80px] xl:text-[200px] font-noto-serif font-bold tracking-[-5%]">IZZY PRIOR</h2>
        <h3 className="text-[40px] font-instrument-serif 2xl:mt-[-20px]">Who am i?</h3>
      </div>

      <div className="flex flex-col items-center justify-center mt-25">
        <div className="flex flex-col items-start mx-auto max-w-[90%] 2xl:max-w-[1288px]">
          <Image src="/img-about.png" width={1288} height={889} alt="about image" />
          <p className="mt-4 text-[40px] lg:text-[55px] 2xl:text-[80px] font-instrument-serif tracking-[-1%] leading-[110%]">“Most startups don’t have a marketing problem. They have a clarity problem.”</p>
        </div>

        <div ref={description} className="flex flex-col lg:flex-row mx-auto max-w-[90%] 2xl:max-w-[1288px] gap-10 mt-35">
          <p className="text">
            {phrase1.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
          <p className="text">
            {phrase2.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Index
