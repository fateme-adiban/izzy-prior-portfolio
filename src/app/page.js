"use client"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import About from "@/components/About"
import Services from "@/components/Services"
import Experiences from "@/components/Experiences"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import Lenis from "lenis"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = "default"
      window.scrollTo(0, 0)
    }, 2000)
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Header />
      <Hero />
      <About />
      <Services />
      <Experiences />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
