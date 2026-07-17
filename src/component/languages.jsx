import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import office from '../assets/office-365.png'
import { HiDuplicate } from 'react-icons/hi'

const Languages = () => {
    const logos = [python, react, js, html, css, tailwind, office]  

  return (

    <div className="w-full overflow-hidden mx-auto container gap-8 py-20 flex sm:flex-row flex-col sm:items-center items-start">
  {/* Left Side Text */}
  <div className="w-[300px] px-5 shrink-0 text-gray-600 border-l-4 border-black bg-white py-2 sm:text-base z-10 text-xl font-semibold text-left">
    Tools we <br /> work with;
  </div>

  {/* Scrolling Logos */}
  <div className="relative flex w-full overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {logos.concat(logos).map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="language-logo"
          className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
        />
      ))}
    </div>
  </div>
</div>


   
  )
}

export default Languages
