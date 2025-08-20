"use client"
import React from "react"
import Image from "next/image"

export default function Index() {
  return (
    <section id="home" className="relative min-h-screen overflow-x-hidden flex flex-col md:flex-row gap-[8%]">
      <div className="relative w-full sm:w-auto">
        <Image src="/img-hero.png" width={720} height={917} alt="hero image" className="w-full h-screen md:max-w-[720px] md:h-[917px]" />

        <div className="absolute inset-0 flex flex-col justify-end mb-10 items-center md:hidden bg-black/40">
          <h2 className="text-[18px] font-noto-serif mb-4 text-white">BRAND & G2M STRATEGIST</h2>
          <h1 className="text-[30px] leading-[110%] font-instrument-serif text-center max-w-[65%] sm:max-w-[45%] text-white">Izzy Prior, Brand Strategist in Femtech, Wellness and Social Impact</h1>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center pr-10 2xl:pr-0">
        <h2 className="text-[18px] lg:text-[20px] font-noto-serif mb-4">BRAND & G2M STRATEGIST</h2>
        <h1 className="text-[30px] lg:text-[50px] xl:text-[60px] leading-[110%] font-instrument-serif text-center max-w-[500px] xl:max-w-[550px]">Izzy Prior, Brand Strategist in Femtech, Wellness and Social Impact</h1>
      </div>

      <div className="absolute bottom-15 right-2 hidden md:flex flex-col items-center gap-7">
        <p className="text-[16px] font-cutive-mono transform rotate-[-270deg]">SCROLL</p>
        <Image src="/arrow.svg" width={12} height={16} alt="arrow icon" />
      </div>
    </section>
  )
}
