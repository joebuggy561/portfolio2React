import React, {useState} from 'react'
import { fadeIn } from "../ultils/motion";
import { motion } from "framer-motion";

const Pricing = () => {

    const hour = 1

    const [numberHours, setProductCount] = useState(1)

    // calculte the pricce base on product count
   
    const priceHourBasic = Math.round(numberHours * 20)
    const priceHourStandard = Math.round(numberHours * 30)
    const priceHourPremium = Math.round(numberHours * 50)
  return (
    <section className='py-20 px-4'  id='price'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Pricing</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md-12'>
                <motion.div 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView="show"
                className='bg-white p-8 rounded-lg shadow-lg'>
                    <h3 className='text-xl text-gray-600 mb-4'>PerHourBasic</h3>
                    <p className='text-3xl font-bold mb-6'>${priceHourBasic} /perhour</p>
                </motion.div>
            
        
                <motion.div 
                 variants={fadeIn("up",0.3)}
                 initial="hidden"
                 whileInView="show"
                className='bg-white p-8 rounded-lg shadow-lg'>
                    <h3 className='text-xl text-gray-600 mb-4'>PerHourStandard</h3>
                    <p className='text-3xl font-bold mb-6'>${priceHourStandard} /perhour</p>
                </motion.div>

                <motion.div 
                 variants={fadeIn("up",0.4)}
                 initial="hidden"
                 whileInView="show"
                className='bg-white p-8 rounded-lg shadow-lg'>
                    <h3 className='text-xl text-gray-600 mb-4'>PerHourPreimum</h3>
                    <p className='text-3xl font-bold mb-6'>${priceHourPremium} /perhour</p>
                </motion.div>
            </div>

            <div className='max-w-xl mx-auto'>
                <motion.p
                 variants={fadeIn("up",0.5)}
                 initial="hidden"
                 whileInView="show"
                className='text-center text-gray-600 mb-4 mt-8'>{numberHours}Hours</motion.p>

                <motion.div 
                 variants={fadeIn("up",0.6)}
                 initial="hidden"
                 whileInView="show">
                    <div className='flex items-center gap-2'>
                        <span className='text-xs sm:text-sm text-gray-600'>1</span>
                        <input className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                         type="range" min="1" max="8" value={numberHours} onChange={(e) => setProductCount(e.target.value)} />
                        <span className='text-xs sm:text-sm text-gray-600'>8</span>
                    </div>
                </motion.div>

                <motion.div 
                 variants={fadeIn("up",0.7)}
                 initial="hidden"
                 whileInView="show"
                className='text-center mt-12'>
                    <p className='text-xl text-gray-600 mb-4'>Let's start today</p>
                    <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700 cursor-pointer'><a href='https://docs.google.com/forms/d/e/1FAIpQLSd_n0ZKu-OUlJkmCk04Tf-0ArgbFAmkyEK0lq-WoxFRBFQ4sA/viewform?usp=header'>Get Started</a></button>
                </motion.div>
            </div>

        </div>
      
    </section>
  )
}

export default Pricing
