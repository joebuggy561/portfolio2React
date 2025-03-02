import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Ashley',
            title: 'CEO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 2,
            name: 'John',
            title: 'CTO',  
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 3,
            name: 'Jane',
            title: 'CFO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 4,
            name: 'Bob',
            title: 'COO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }, 
        {
            id: 5,
            name: 'Alice',
            title: 'COO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 6, 
            name: 'David',
            title: 'COO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 7,
            name: 'Emily',
            title: 'COO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 8,
            name: 'Michael',
            title: 'COO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            id: 9,
            name: 'Jessica',
            title: 'COO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }
    ]
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto' id='testimonials'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold md:text-4xl mb-4'>What my happy client says</h2>
            <p className='text-gray-600'>Things that make me the best to hire for a job!</p>

        </div>

        {/* testimonials card */}
        <div className='realative '>

            {/* swiper cards */}

            <>
                <Swiper
                    navigation={
                        {
                            nextEl: '.swiper-button-next-custom', 
                            prevEl: '.swiper-button-prev-custom'
                        }
                    }
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    0: {
                        slidesPerView: 1,
                        
                    },
                    768: {
                        slidesPerView: 2,
                        
                    },
                    1024: {
                        slidesPerView: 3,
                        
                    },
                    }}
                    modules={[Navigation]}
                    className="testimonials-swiper md:mb-12"
                >
                    {
                        testimonials.map((testimonial, index)=>(
                            <SwiperSlide key={index} className='h-full md:py-12 py-4'>
                                <div className='text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col'>
                                    <div className='w-24 h-24 mx-auto mb-4'>
                                        <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full'/>
                                    </div>
                                    <div className='flex items-center mb-2 justify-center'>
                                        {
                                            [...Array(5)].map((_, starIndex) => (
                                                <span key={starIndex} className='text-yellow-400'>⭐</span>
                                            ))
                                        }
                                    </div>
                                    <h3 className='text-xl font-sembold mb-3'>{testimonial.name}</h3>
                                    <p className='text-gray-600'>{testimonial.text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </>


            {/* navigational button */}

           <div className='flex justify-center gap-4 md:mt-8 mt-4'>
                <button className='swiper-button-prev-custom w-12 h-12 rounded-full cursor-pointer border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200'>
                    <BsChevronLeft className='w-6 h-6'/>
                </button>
                <button className='swiper-button-next-custom w-12 h-12 rounded-full cursor-pointer border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200'>
                    <BsChevronRight className='w-6 h-6'/>
                </button>
           </div>

        </div>
    </section>
     
   
  )
}

export default Testimonials
