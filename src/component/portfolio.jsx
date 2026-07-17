import React from 'react'
import portfolio from '../assets/portfolo.webp'
import { MdOutlineArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../ultils/motion";

const Portfolio = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24' id="portfolio">

        <div className=' flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24'>

            {/* left */}
            <motion.div 
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
            className="md:w-1/2 w-full">
                <img src={portfolio} alt="portfolio" className='w-full h-auto' />
            </motion.div>




            {/* right */}
            <div className='md:w-1/2 w-full'>
                <motion.p 
                 variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView="show"
                className='text-amber-500 font-semibold'>PORTFOLIO</motion.p>
                <motion.h2
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                 className='text-3xl md:text-4xl font-bold text-neutral-900'>
                Explore our portfolio and discover projects showcasing our expertise in Python, React, JavaScript, and more. ⭐
                </motion.h2>
                <a href='https://guileless-madeleine-f797ff.netlify.app/' className='text-blue-500 font-semibold flex items-center gap-3 hover:gap-4'>
                    Explore Portfolio 
                    <MdOutlineArrowForward className='w-5 h-5'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
