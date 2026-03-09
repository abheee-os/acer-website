import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import acerlogo from "./images/logo-acer.avif"
import HeroSlider from "./components/HeroSlider"
import CategorySlider from './components/CategorySlider'
import windows11 from "./images/Banner_Windows11.avif"
import pc from "./images/PCGamePass_2.png"
import vero from "./images/vero-family.png"
import windows from "./images/Windows-11-Pro_1.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="w-full h-10 bg-[#222222] flex items-center justify-between text-white text-sm font-bold px-6">

  {/* LEFT */}
  <div className="hidden lg:flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>

    Acer Brands
  </div>

  {/* CENTER */}
  <div className="text-center flex-1">
    Discover the Best Deals at Acer Store – Shop Now!
  </div>

  {/* RIGHT */}
  <div className="hidden lg:flex items-center gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

  </div>

</nav>
      
      {/* leftside */}
      <div className='w-full h-14 bg-white flex items-center justify-between px-5 pr-5'>
        <div className='h-12 flex  items-center overflow-hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<img className='h-30 ' src={acerlogo} alt="" />
        </div>

{/*center*/}        

<div className='h-14 lg:flex justify-center items-center flex-1 hidden'>
  <ul className='flex text-center text-xl gap-10 '>
    <li>Store</li>
    <li>AI</li>
    <li>Products</li>
    <li>Business</li>
    <li>Education</li>
    <li>Support</li>
    <li>Events</li>
  </ul>

</div>

{/* rightside */}
<div className='flex items-center gap-4'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 lg:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</div>


      </div>
      <HeroSlider />

      <CategorySlider />

      <div className='w-full h-15 bg-white flex justify-center items-center text-center mt-10 '>
        <h1 className='text-4xl font-semibold'>Discover More with Acer</h1> 

      </div>

      <div className='w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-8 gap-10 px-16'>
        
        <div>
          <img src={windows11} alt="" />
          <h2 className=' text-xl font-semibold mt-4'>Windows 11</h2>
          <p className='mt-1'>Introducing Windows 11</p>
          <p className='mt-7 text-green-700 font-semibold'>Learn More</p>
        </div>

        <div>
          <img src={pc} alt="" />
          <h2 className=' text-xl font-semibold mt-4'>PC GAME PASS</h2>
          <p className='mt-1'>Three-month trial included with your new Acer laptop.</p>
          <p className='mt-7 text-green-700 font-semibold'>Learn More</p>
        </div>

        <div>
          <img src={vero} alt="" />
          <h2 className=' text-xl font-semibold mt-4'>Acer Vero</h2>
          <p className='mt-1'>Green PC Products</p>
          <p className='mt-7 text-green-700 font-semibold'>Learn More</p>
        </div>

        <div>
          <img src={windows} alt="" />
          <h2 className=' text-xl font-semibold mt-4'>Windows 11 Pro</h2>
          <p className='mt-1'>Windows 11 Pro for Acer business laptops</p>
          <p className='mt-7 text-green-700 font-semibold'>Learn More</p>
        </div>


      </div>
      
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="w-full py-4 bg-gray-200 text-center font-medium"
>
  Back To Top
</button>

{/* footer grid section */}
<div className='bg-gray-100 w-full py-5'>

  <div className='w-full hidden lg:grid grid-cols-4 gap-10 '>

    <div className='px-16'>
       <h3 className="text-2xl font-semibold mb-4">Products</h3>
      <ul className='space-y-4 text-lg'>
        <li>Laptops</li>
        <li>Desktops</li>
        <li>Acer Chromebooks</li>
        <li>Tablet and Phones</li>
        <li>Monitors</li>
        <li>Projectors</li>
        <li>Digital Signage</li>
        <li>Electronics & Accessories</li>
        <li>Networking</li>
        <li>eMobility</li>
        <li>Handheld Gaming</li>
        <li>Appliances</li>
        <li>Sustainable Products</li>
      </ul>
    </div>

     <div>
      <h3 className="text-2xl font-semibold mb-4">Support</h3>
      <ul className="space-y-3 text-lg">
        <li>Acer ID</li>
        <li>Register a Product</li>
        <li>Acer Community</li>
        <li>Drivers and Manuals</li>
        <li>Acer Answers</li>
        <li>Contact Support</li>
      </ul>
    </div>

     <div>
      <h3 className="text-2xl font-semibold mb-4">Resources</h3>
      <ul className="space-y-3 text-lg">
        <li>Acer Corner</li>
        <li>Acer Global Account Portal</li>
        <li>Find a Store</li>
        <li>Acer Technologies</li>
        <li>McAfee</li>
      </ul>
    </div>


     <div>
      <h3 className="text-2xl font-semibold mb-4">About Acer</h3>
      <ul className="space-y-3 text-lg">
        <li>Contact Us</li>
        <li>Investor Relations</li>
        <li>Press</li>
        <li>Awards</li>
        <li>Events</li>
      </ul>

      <div className='py-12'>
        <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
        <ul className="space-y-3 text-lg">
        <li>Corporate Social Responsibility</li>
        <li>Product Carbon Footprint</li>
        <li>Project Humanity</li>
        <li>Earthion</li>
        
      </ul>
        
      </div>


    </div>

    




  </div>

  <div className="w-full lg:hidden">

  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
      Products
      <span>⌄</span>
    </summary>

    <ul className="bg-white pl-4 pb-4 pt-3 space-y-3 text-sm">
      <li>Laptops</li>
        <li>Desktops</li>
        <li>Acer Chromebooks</li>
        <li>Tablet and Phones</li>
        <li>Monitors</li>
        <li>Projectors</li>
        <li>Digital Signage</li>
        <li>Electronics & Accessories</li>
        <li>Networking</li>
        <li>eMobility</li>
        <li>Handheld Gaming</li>
        <li>Appliances</li>
        <li>Sustainable Products</li>
    </ul>
  </details>

  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
      Support
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
     <li>Acer ID</li>
        <li>Register a Product</li>
        <li>Acer Community</li>
        <li>Drivers and Manuals</li>
        <li>Acer Answers</li>
        <li>Contact Support</li>
    </ul>
  </details>


  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
      Resources
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
       <li>Acer Corner</li>
        <li>Acer Global Account Portal</li>
        <li>Find a Store</li>
        <li>Acer Technologies</li>
        <li>McAfee</li>
    </ul>
  </details>


  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
    About Acer
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
      <li>Acer ID</li>
      <li>Register a Product</li>
      <li>Acer Community</li>
    </ul>
  </details>

  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
   Sustainability
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
      <li>Corporate Social Responsibility</li>
        <li>Product Carbon Footprint</li>
        <li>Project Humanity</li>
        <li>Earthion</li>
    </ul>
  </details>

</div>



 <div className="w-[95%] mx-auto border-t border-gray-300 mt-5 lg:mt-15 "></div>
</div>
      
    </>
  )
}

export default App
