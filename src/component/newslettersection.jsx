import React, {useState} from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { fadeIn, textVariant } from "../ultils/motion";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com'


const Newslettersection = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault ();

        if(!email){
            setMessage('Please enter a valid email!');
            return;
        }

        const templateParams = {
            user_email: email,
          };
      
          emailjs.send("service_4grklhy", "template_ufvkrai", templateParams, "fQumWAVplS6YHb3Dv")
            .then(() => {
              setMessage("Email sent successfully!");
              setEmail("");
            })
            .catch(() => {
              setMessage("Failed to send email. Try again.");
            });
        };
    
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div 
         variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView="show"
        className='bg-gray-600 rounded-2xl overflow-hidden'>
            <div className='relative md:px-16 px-6 md:py-24'>
               {/* gradient bg */}
               <div className='absolute top-0 right-0 w-1/2 h-1/2 h-full bg-gray-700 clip-path-slant hidden md:block'>

               </div>

               <div className="">
                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                    About the Founder
                </h2>
                <p className="text-blue-100 text-sm sm:text-base leading-8">
                    Kartiqo Tech was founded by <strong>Joseph Nwani</strong>, a passionate
                    Frontend Developer, Python Developer, and Data Analyst dedicated to
                    helping businesses grow through modern technology. With expertise in web
                    development, automation, data-driven solutions, and virtual assistance,
                    the vision behind Kartiqo Tech is to deliver innovative, reliable, and
                    user-focused digital experiences that help businesses thrive.
                </p>
               </div>

               
               
               
               <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg-gap-12'>

                
                
                    {/* left content */}
                    <div className='text-white max-w-lg text-center md:text-left'>
                            <h2 className='text-1xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe to newsletter</h2>
                            <p className='text-blue-100 text-sm sm:text-base'>Get the latest updates and offers from our team</p>
                    </div>


                    {/* right content */}
                    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <input type="email" placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none'/>
                        <button 
                        className='w-full sm:w-auto cursor-pointer bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2'>
                            <span>Discover</span>
                            <HiArrowRight className='size-5'/>
                        </button>
                        {message && <p className="text-center mt-2 text-sm">{message}</p>}
                    </form>
               </div>
            </div>
        </motion.div>
        {/* About the Founder */}

        {
            <style>
                {
                    `.clip-path-slant {
                        clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0 100%);
                    }`
                }
            </style>
        }
    </section>
    
  )
}

export default Newslettersection
