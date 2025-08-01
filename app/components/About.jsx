import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8 }}
      id='about' 
      className='max-w-3xl mx-auto px-4 pt-0 pb-10 scroll-mt-0'
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.5 }}
        className='text-3xl font-bold mb-8'
      >
        About Me
      </motion.h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
        <div className='lg:col-span-1'>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.6 }}
            className='aspect-square w-full max-w-[280px] mx-auto'
          >
            <Image src={assets.user_image} alt='Munya Matindike' className='w-full h-full object-cover rounded-lg'/>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.6 }}
          className='lg:col-span-2'
        >

          
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <div 
                key={index}
                className='p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 h-6 mb-3'/>
                <h3 className='font-semibold mb-2'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
