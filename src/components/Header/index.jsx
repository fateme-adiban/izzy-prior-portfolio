"use client"
import { useEffect } from "react"
import gsap from "gsap"
import styles from "./style.module.css"
import Image from "next/image"

export default function Index() {
  useEffect(() => {
    gsap.set(`.${styles.header}`, { y: -200 })
    gsap.to(`.${styles.header}`, {
      y: 0,
      duration: 1,
      ease: "circ.out",
      delay: 3
    })
  }, [])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.el}>
            <a
              href="#about"
              onClick={e => {
                e.preventDefault()
                const about = document.querySelector("#about")
                if (about) {
                  const y = about.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              About
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#services"
              onClick={e => {
                e.preventDefault()
                const services = document.querySelector("#services")
                if (services) {
                  const y = services.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Services
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#experiences"
              onClick={e => {
                e.preventDefault()
                const experiences = document.querySelector("#experiences")
                if (experiences) {
                  const y = experiences.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Experiences
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#testimonials"
              onClick={e => {
                e.preventDefault()
                const testimonials = document.querySelector("#testimonials")
                if (testimonials) {
                  const y = testimonials.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Testimonials
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                const contact = document.querySelector("#contact")
                if (contact) {
                  const y = contact.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Contact
            </a>
          </div>
        </div>

        <div className={styles.logo}>
          <p>IZZY PRIOR</p>
        </div>

        <div className={styles.icons}>
          <Image onClick={() => window.open("https://www.linkedin.com/in/izzyprior", "_blank")} src="/linkedin.svg" width={16} height={16} alt="linkedin icon" />
          <Image onClick={() => window.open("https://www.instagram.com/izzypriortalks/", "_blank")} src="/instagram.svg" width={22} height={22} alt="instagram icon" />
        </div>
      </div>
    </>
  )
}
