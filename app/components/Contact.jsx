import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
       whileInView={{opacity: 1}}
       transition={{ duration: 1 }}
    
    
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <div className='mx-auto py-5 md:py-10 md:max-w-7xl'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-2xl font-bold mb-6 text-center'>
            Contact me
          </h2>

          <div className='py-3 max-w-xl mx-auto'>
            <p className='text-[16px] mb-8 text-center'>
              Feel free to reach out to me for collaboration or if you have any questions.
            </p>
            
            <div className='space-y-6'>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-black rounded-full'>
                  <Image src={assets.project_icon} width={24} height={24} alt='Location' />
                </div>
                <div>
                  <h3 className='text-[16px] font-semibold'>Location</h3>
                  <p className='text-[14px]'>Harare, Zimbabwe</p>
                </div>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-black rounded-full'>
                  <Image src={assets.mail_icon} width={24} height={24} alt='Email' />
                </div>
                <div>
                  <h3 className='text-[16px] font-semibold'>Email</h3>
                  <a href='mailto:mmatindike@outlook.com' className='text-[14px] text-blue-600'>mmatindike@outlook.com</a>
                </div>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-black rounded-full'>
                  <Image src={assets.send_icon} width={24} height={24} alt='Phone' />
                </div>
                <div>
                  <h3 className='text-[16px] font-semibold'>Phone</h3>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-1'>
                      <a href='tel:+263774984359' className='text-[14px] text-blue-600'>+263 774 984 359</a>
                      <a href='https://wa.me/263774984359' target='_blank' rel='noopener noreferrer' className='inline-flex items-center'>
                        <FaWhatsapp className='text-green-500 ml-1' size={16} />
                      </a>
                    </div>
                    <div className='flex items-center gap-1'>
                      <a href='tel:+263713493975' className='text-[14px] text-blue-600'>+263 713 493 975</a>
                      <a href='https://wa.me/263713493975' target='_blank' rel='noopener noreferrer' className='inline-flex items-center'>
                        <FaWhatsapp className='text-green-500 ml-1' size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
