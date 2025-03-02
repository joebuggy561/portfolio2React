import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from "../ultils/motion";

const Features = () => {
    const features = [
        {
            icon:'🔎',
            title:'Find out what you need',
            description:'I present you with a proposal and discuss all necessary details'
        },
        {
            icon:'📋',
            title:'We work out on the details',
            description:'I use various communication protocols to ensure smooth and secure interactions across different platforms.'
        },
        {
            icon:'🚀',
            title:'I get the job done',
            description:'I the job done As soon as possible and efficiently.'
        }
    ]
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        {/* heading text */}

            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold mb-4'>My Key Features & Services</h2>
                <p className='text-gray-600'> I specialize in delivering efficient, tech-driven solutions to help businesses 
                grow, streamline operations, and enhance their digital presence.</p>
            </div>

        {/*  features box */}

        <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView="show" className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                features.map((feature, index) =>(
                    <div key={index} className='flex flex-col text-center items-center p-6'>
                        <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4"}}>
                            <div className='text-3xl'>{feature.icon}
                            </div>
                        </div>
                        <h3 className='text-2xl font-medium mb-3'>{feature.title}</h3>
                        <p className='text-gray-500 text-center'>{feature.description}</p>
                    </div>))
            }
        </motion.div>


        {/* button */}
        <div className='text-center mt-12'>
        <button
            className="bg-black text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
            onClick={() => window.open("https://github.com/joebuggy561/portfolio/blob/main/Joseph%20Nwani%20(3).pdf", "_blank")}
            >
            Download CV
            </button>
            {/* <button className='bg-black text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors relative' onclick="window.location.href='https://github.com/joebuggy561/portfolio/blob/main/Joseph%20Nwani%20(3).pdf'">Download CV</button> */}
            <div className='absolute -z-10 w-full h-full rounded-full blur-xl top-0 left-0'></div>
        </div>

    </section>
      
    
  )
}

export default Features
