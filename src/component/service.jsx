import React from 'react'
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { IoIosCloudDone } from "react-icons/io";
import { fadeIn } from "../ultils/motion";
import { motion } from "framer-motion";
const Service = () => {

  const services = [
    {
      icon: <SiCanva className="w-8 h-8 text-indigo-600" />,
      title: 'Canva Designing',
      description:'Canva simplifies design with templates, drag-and-drop, and creative tools.🎨🚀'
    },
    {
      icon: <FaFigma className="w-8 h-8 text-indigo-400"/>,
      title: 'Figma Designing',
      description:'Figma is a cloud-based design tool for seamless team collaboration.🎨🚀'
    },
    {
      icon: <AiOutlineGooglePlus className="w-8 h-8 text-indigo-400"/>,
      title: 'Google Suite',
      description:'Google Workspace offers cloud tools for productivity, collaboration, and efficiency.☁️💼🚀'
    },
    {
      icon: <IoIosCloudDone className="w-8 h-8 text-indigo-400"/>,
      title: 'Cloud Services',
      description:'Cloud services offer scalable, managed access to apps and resources.☁️🚀'
    }
  ]
  return (
    <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8' id='services'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>

          {/* first div */}

            <div className='md:w-1/2 w-full'>
              <motion.h2
              variants={fadeIn("right",0.2)}
              initial="hidden"
              whileInView="show"
               className='text-3xl md:text-4xl font-bold mb-6 md:x-4/5'>Our Services</motion.h2>
              <motion.p 
              variants={fadeIn("right",0.3)}
              initial="hidden"
              whileInView="show"
              className='text-gray-600 text-lg mb-4 md:w-4/5'>We provide virtual assistance, web development, and data analysis.🛠️</motion.p>
              <div className='space-y-3'>
                <motion.div 
                variants={fadeIn("right",0.4)}
                initial="hidden"
                whileInView="show"
                className='flex items-center gap-2'>
                  <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                    <div className='w-2.5 h-2.5 rounded-full  bg-indigo-600'></div>
                  </div>
                  
                  <span className='text-gray-600'>Virtual Assistance Services 🖥️</span>
                </motion.div>


                <motion.div 
                variants={fadeIn("right",0.5)}
                initial="hidden"
                whileInView="show"
                className='flex items-center gap-2'>
                  <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                    <div className='w-2.5 h-2.5 rounded-full  bg-indigo-600'></div>
                  </div>
                  
                  <span className='text-gray-600'>Web Design & Development 🌐</span>
                </motion.div>

                <motion.div 
                variants={fadeIn("right",0.6)}
                initial="hidden"
                whileInView="show"
                className='flex items-center gap-2'>
                  <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                    <div className='w-2.5 h-2.5 rounded-full  bg-indigo-600'></div>
                  </div>
                  
                  <span className='text-gray-600'>Data Analysis & Python Development 📊</span>
                </motion.div>
              </div>
              <button className='mt-8 bg-black text-white px-8 py-3 cursor-pointer rounded-full hover:bg-amber-500 transition-color '><a href='https://docs.google.com/forms/d/e/1FAIpQLSd_n0ZKu-OUlJkmCk04Tf-0ArgbFAmkyEK0lq-WoxFRBFQ4sA/viewform?usp=header'>Get Started</a></button>
            </div>




          {/* second div (service card) */}
          <motion.div 
          variants={fadeIn("left",0.7)}
          initial="hidden"
          whileInView="show"
          className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                {

                services.map((service, index) => (
                 <div className='bg-white max-w-70 cursor-painter rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105' key={index}>
                 <div className='mb-4'>{service.icon}</div>
                 <div className='text-xl font-semibold mb-2'>{service.title}</div>
                 <p className='text-gray-600 mb-4'>{service.description}</p>
                 <a href='#' className='text-indigo-600 font-medium hover:text-indigo-700 transition-colors'>Learn More</a>
                 </div>
                ))
                }
          </motion.div>
        </div>
    </section>
      
  )
}

export default Service
