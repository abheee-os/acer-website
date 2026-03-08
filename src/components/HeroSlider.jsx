import { useState, useEffect } from "react"

import image1 from "../images/image1.avif"
import image2 from "../images/image2.avif"
import video1 from "../images/video1.mp4"
import video2 from "../images/video2.mp4"

export default function HeroSlider() {

  const slides = [
    { type: "video", src: video1 },
    { type: "image", src: image1 },
    { type: "image", src: image2 },
    { type: "video", src: video2 }
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
      <div className="absolute left-16 top-1/2 -translate-y-1/2 text-black max-w-[500px]">
        <p className="text-lg mb-3">
          Acer Aspire 14 AI | Acer Aspire 16 AI
        </p>

        <h1 className="text-6xl font-bold mb-5 leading-tight">
          Explore. Evolve. Aspire.
        </h1>

        <p className="text-xl mb-6">
          Copilot+ PCs are the fastest, most intelligent Windows PCs ever.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
            Copilot+ PC
          </button>

          <button className="bg-white px-6 py-3 rounded-full font-semibold">
            Learn More
          </button>
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