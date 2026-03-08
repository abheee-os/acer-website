import laptops from "../images/laptops.avif"
import desktops from "../images/desktops.avif"
import monitors from "../images/monitors.avif"
import projectors from "../images/projectors.avif"
import acerChromebooks from "../images/acer-chromebooks.avif"
import graphicCards from "../images/graphic-cards.avif"

export default function CategorySlider() {

  const items = [
    { name: "Laptops", img: laptops },
    { name: "Desktops", img: desktops },
    { name: "Monitors", img: monitors },
    { name: "Projectors", img: projectors },
    { name: "Acer Chromebooks", img: acerChromebooks },
    { name: "Graphic Cards", img: graphicCards }
  ]

  return (
    <div className="w-full py-20 bg-gray-100 text-center">

      {/* Title */}
      <h2 className="text-4xl font-semibold mb-16">
        Browse Popular Categories
      </h2>

      {/* Horizontal Scroll Row */}
  <div className="w-full overflow-x-auto lg:overflow-visible">
  <div className="flex flex-nowrap lg:justify-center gap-10 px-6">

    {items.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mb-3"
        />

        <p className="text-gray-700 text-sm sm:text-base text-center font-medium">
          {item.name}
        </p>
      </div>
    ))}

  </div>
</div>

      {/* Progress Bar (only mobile + tablet) */}
      <div className="mt-16 flex justify-center lg:hidden">
        <div className="w-[300px] h-[3px] bg-gray-300 relative">

          <div className="absolute left-0 top-0 h-full w-[100px] bg-black"></div>

        </div>
      </div>

    </div>
  )
}