import React from "react"

const Index = () => {
  return (
    <section id="contact" className="relative min-h-screen overflow-x-hidden mt-15 lg:mt-40">
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="max-w-[90%] h-[550px] 2xl:max-w-[1291px] md:min-h-[653px] w-full rounded-[20px] bg-[linear-gradient(181.64deg,#E64A84_-63.77%,#ED5D78_4.85%,#F4706D_37.79%,#F77967_71.64%,#FE8B5C_100.01%)] flex flex-col gap-15 items-center">
          <h3 className="text-[35px] sm:text-[40px] font-instrument-serif text-center mt-20">Need an unfair advantage?</h3>
          <p className="text-[60px] sm:text-[15vw] lg:text-[150px] font-bodoni-moda uppercase leading-[100%] tracking-[-1%] max-w-[900px] text-center">Let's make it happen</p>
          <button onClick={() => window.open("https://www.linkedin.com/in/izzyprior?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} className="font-noto-serif text-[18px] xl:text-[25px] bg-white px-7 xl:px-10 py-1 rounded-full cursor-pointer hover:bg-white/80 transform ease-in-out duration-500">
            DM ME!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Index

/* btn */
