import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 pt-24 pb-6 flex flex-col justify-start items-center'>
      <div className="flex flex-col items-center gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[150px]"
        >
          <Image 
            src={assets.profile_img} 
            alt='Munya Matindike' 
            className='rounded-lg w-full h-auto mx-auto' 
            width={100} 
            height={100} 
            objectFit="cover"
          />
        </motion.div>
      </div>

      <div className='flex flex-wrap gap-4 mt-4 justify-center'>
        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4}}
          href='#contact' 
          className='px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium text-[14px]'
        >
          Contact Me
        </motion.a>
        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5}}
          href='/Munya Matindike CV.pdf' 
          className='px-5 py-2 bg-white text-black dark:bg-black dark:text-white rounded-md border dark:border-gray-700 font-medium text-[14px]'
          target='_blank'
        >
          Download CV
        </motion.a>
      </div>
    </div>
  )
}

export default Header
