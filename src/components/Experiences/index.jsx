import React, { useRef } from "react"
import { useScroll } from "framer-motion"
import Card from "../Experiences/Card"

const index = () => {
  const projects = [
    {
      title: "Founder & Director",
      description: "Spark builds purpos-led reputations for social impact founders trough engaging, authentic content that amplifies customer trust and loyalty by providing personal branding services.",
      company_name: "Spark Social Media",
      image_src: "img-card-1.png",
      logo_src: "img-icon-1.png",
      color: "#FFC6AC"
    },
    {
      title: "Fractional CMO",
      description: "The Lifelong Health Companion For Every Woman’s Unique Journey. An intelligent platform designed to help women undrestand their body and feel their best all month long.",
      company_name: "Nexus",
      image_src: "img-card-2.png",
      logo_src: "img-icon-2.png",
      color: "#CDFAD5"
    },
    {
      title: "Advisor",
      description: "Working as an Advisor for GoFounder from May 2024 till now. for almost one year and 4 month.",
      company_name: "GoFounder",
      image_src: "img-card-3.png",
      logo_src: "img-icon-3.png",
      color: "#F6FDC3"
    },
    {
      title: "Founding Member",
      description: "This company unites young changemakers and multipotentialites who see themselves as more than their job titles, fostering creativity and collective empowerment.",
      company_name: "Undefinable Community",
      image_src: "img-card-4.png",
      logo_src: "img-icon-4.png",
      color: "#FFCF96"
    }
  ]

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (
    <section id="experiences" className="relative min-h-screen flex flex-col mt-20 sm:mt-50 md:mt-20 lg:mt-50">
      <h3 className="text-[40px] font-instrument-serif text-center">What are my experiences?</h3>

      <div ref={container} className="relative mt-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })}
      </div>
    </section>
  )
}

export default index
