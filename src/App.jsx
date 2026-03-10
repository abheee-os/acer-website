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

   <div className="px-6 md:px-16">

  <div className="flex justify-center text-center mt-10 py-6">
    <h1 className="text-3xl md:text-5xl font-semibold">
      Discover More with Acer
    </h1>
  </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
        
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
      </div>
      
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="w-full py-4 mt-7 bg-gray-200 text-center font-medium"
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
 <div className='w-full h-15 flex gap-7 mt-5 justify-center items-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>

</div>

<ul className='flex flex-wrap justify-center py-6 divide-x divide-gray-300 gap-y-2 '>
  <li class="px-4">Privacy Policy </li>
  <li class="px-4">Cookie Policy </li>
  <li class="px-4">Legal Notice </li>
  <li class="px-4">Additional Legal Information </li>
  <li class="px-4">Accessibility Policy </li>
  <li class="px-4">Cookies Settings </li>
</ul>

<div className='flex justify-center gap-2 '>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
<p className='font-semibold'>India - English</p>


</div>

<div className='flex justify-center mt-4 text-sm'>
<p>© 2026 Acer Inc.</p>
</div>
</div>



      
    </>
  )
}

export default App
