import { useState, useEffect } from "react"

import image1 from "../images/image1.avif"
import image2 from "../images/image2.avif"
import video1 from "../images/video1.mp4"
import video2 from "../images/video2.mp4"

export default function HeroSlider() {

 const slides = [
  {
    type: "video",
    src: video1,
    subtitle: "Acer Aspire 3D 15 SpatialLabs™ Edition",
    title: "Dive into the Depths of Immersive 3D",
    desc: "",
    textColor: "text-white",
    button1: "Explore",
    buttonStyle: "bg-green-500 text-black"
  },

  {
    type: "image",
    src: image1,
    subtitle: "Acer Swift Edge 14 AI",
    title: "Light as a Feather, Swift as an Arrow",
    desc: "",
    textColor: "text-white",
    button1: "Explore",
    buttonStyle: "bg-green-500 text-black"
  },

  {
    type: "image",
    src: image2,
    subtitle: "Acer Aspire 14 AI | Acer Aspire 16 AI",
    title: "Explore. Evolve. Aspire.",
    desc: "Copilot+ PCs are the fastest, most intelligent Windows PCs ever.",
    textColor: "text-white",
    button1: "Copilot+ PC",
    button2: "Learn More",
    buttonStyle: "bg-green-500 text-black"
  },

  {
    type: "video",
    src: video2,
    subtitle: "",
    title: "Smarter. Faster. Acer.",
    desc: "Meet our 2026 lineup of AI PCs and more!",
    textColor: "text-white",
    button1: "Explore",
    buttonStyle: "bg-white text-black"
  }
]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[550px] overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              className="w-full h-full object-cover"
              alt=""
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* OVERLAY CONTENT */}
<div
  className={`absolute left-6 lg:left-25 md:left-16 top-20 md:top-1/2 md:-translate-y-1/2 w-[90%] md:max-w-[500px] ${slides[current].textColor}`}
>
  {/* subtitle */}
  <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-3">
    {slides[current].subtitle}
  </p>

  {/* title */}
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-5">
    {slides[current].title}
  </h1>

  {/* description */}
  {slides[current].desc && (
    <p className="text-sm md:text-lg lg:text-xl mb-5 md:mb-6 max-w-[420px]">
      {slides[current].desc}
    </p>
  )}

  {/* buttons */}
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">

  {slides[current].button1 && (
    <button
      className={`w-fit px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold ${slides[current].buttonStyle}`}
    >
      {slides[current].button1}
    </button>
  )}

  {slides[current].button2 && (
    <button className="w-fit bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold">
      {slides[current].button2}
    </button>
  )}

</div>
</div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/70 flex items-center justify-center backdrop-blur hover:bg-white transition "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8BC34A"
          strokeWidth="2.5"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/70 flex items-center justify-center backdrop-blur hover:bg-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8BC34A"
          strokeWidth="2.5"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 ${
              index === current ? "bg-green-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>

    </div>
  )
}