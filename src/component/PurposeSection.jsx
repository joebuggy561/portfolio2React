import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn} from "../ultils/motion";

const PurposeSection = () => {
const features = [
    {
        icon: '🟣',
        title: 'Virtual Assistance',
        description: "Efficient virtual assistant managing tasks, emails, leads, and daily business operations. ✅"
    },
    {
        icon: '🔴',
        title: 'Frontend Development',
        description: "Creative developers crafting responsive, user-friendly, and interactive web experiences.🚀"
    }
]

  return (
    <div>
      <section className='w-full bg-gray-50 py-16 px-4 md:px-8 sm:px-6' id='about'>
        <div className="max-w-6xl mx-auto">
            <motion.div 
             variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                {/* heading text */}

                <div className='mx-auto'>
                    <p className='text-sm text-purple-600 font-medium mb-2'>Our Purpose</p>
                    <h2 className-="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900 py-2">
                    ⭐ We believe in leveraging technology, automation, and analytics to help businesses scale efficiently.</h2>
                </div>

                {/* bullet points */}

                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className=' flex items-start sapce-x-4'>
                                <div className='w-12 h-12 flex  justify-start rounded-lg'>{feature.icon}</div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600 py-2'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PurposeSection
