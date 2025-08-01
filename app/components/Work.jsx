import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8 }}
      id='work' 
      className='max-w-3xl mx-auto px-4 py-16 scroll-mt-20'
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.5 }}
        className='text-2xl font-bold mb-4'
      >
        My Work
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[16px] text-gray-700 dark:text-gray-300 mb-12"
      >
        I am a software engineer who is a passionate academic transitioning to be a robotics engineer. I dream to contribute to the body of science and technology through designing search and rescue robots.
      </motion.p>

      {/* Programming Skills Section */}
      <section className="mb-16">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-6"
        >
          Programming Skills
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <h4 className="text-[16px] font-semibold mb-3">Languages</h4>
            <p className="text-gray-700 dark:text-gray-300">C#, Java & PHP</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <h4 className="text-[16px] font-semibold mb-3">Technologies</h4>
            <p className="text-gray-700 dark:text-gray-300">ASP.NET, .NET Framework, Android Programming, SolidWorks, Matlab, Arduino UNO, Laravel</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <h4 className="text-[16px] font-semibold mb-3">Tools</h4>
            <p className="text-gray-700 dark:text-gray-300">Bitbuckect, Jira & GitHub for Git version control, SmarterASP.NET for cloud hosting, POSTMAN for API testing endpoints and documentation</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <h4 className="text-[16px] font-semibold mb-3">Machine Learning</h4>
            <p className="text-gray-700 dark:text-gray-300">Tensorflow, Keras, OpenCV, Scikit-Learn</p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-6"
        >
          Experience
        </motion.h3>
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-[16px] font-semibold">Software Developer</h4>
              <p className="text-gray-500 dark:text-gray-400">Jun 2024 - Present</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Axis Solutions, Zimbabwe</p>
            <p className="text-[14px] mb-0">Developed WhatsApp chatbots for municipalities, APIs for syncing online transactions, and IPSAS-compliant accounting modules for government schools in Zimbabwe.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-[16px] font-semibold">Graduate Trainee Software Developer</h4>
              <p className="text-gray-500 dark:text-gray-400">Jul 2023 - Jun 2024</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Axis Solutions, Zimbabwe</p>
            <p className="text-[14px] mb-0">Optimized performance using stored procedures, converted PHP to C# with N-tier architecture, designed REST APIs, and developed WhatsApp payment systems with payment gateway integrations.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-[16px] font-semibold">Intern Software Developer</h4>
              <p className="text-gray-500 dark:text-gray-400">Oct 2021 - Oct 2022</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Axis Solutions, Zimbabwe</p>
            <p className="text-[14px] mb-0">Integrated point of sale systems with fiscal APIs, created documentation, developed N-tier architecture systems for taxpayers, and designed solutions for barcode printing and license management.</p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-6"
        >
          Education
        </motion.h3>
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-[16px] font-semibold">MSc in Mechatronics & Artificial Intelligence</h4>
              <p className="text-gray-500 dark:text-gray-400">Aug 2023 - Dec 2024</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">University of Zimbabwe</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-[16px] font-semibold">BSc Honors in Computer Science</h4>
              <p className="text-gray-500 dark:text-gray-400">Aug 2019 - Jun 2023</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">University of Zimbabwe</p>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="mb-16">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-6"
        >
          Publications
        </motion.h3>
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <p className="text-gray-500 dark:text-gray-400">2024</p>
            </div>
            <h4 className="text-[16px] font-semibold mb-2">Design of a Modular Snake Robot with Computer Vision for Real-Time Navigation in Mine Collapse Search & Rescue Operations</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Journal Article | International Journal of Computing and Digital Systems | 2024</p>
            <p className="text-[14px] mb-0">Munyaradzi Matindike, Abid Yahya, Hilton Maverengo, Ravi Samikannu, Basem Abu Izneid, Lory Liza Bulay-og, Santhi Krishnan</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <p className="text-gray-500 dark:text-gray-400">2023</p>
            </div>
            <h4 className="text-[16px] font-semibold mb-2">Energy-Efficient Design and Control Mechanisms for Mechatronic Systems: An Optimization Approach</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Journal Article | University of Zimbabwe, Department of Industrial & Mechatronics Engineering | 2023</p>
            <p className="text-[14px] mb-0">Munyaradzi Matindike</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <p className="text-gray-500 dark:text-gray-400">2023</p>
            </div>
            <h4 className="text-[16px] font-semibold mb-2">Improving Student Grade Prediction: Machine Learning Algorithm Comparison with Enhanced Parameters and Datasets</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Conference Paper | University of Zimbabwe Research, Innovation and Industrialization Week 2023 | 2023</p>
            <p className="text-[14px] mb-0">Munyaradzi Matindike</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <div className="flex flex-wrap justify-between mb-2">
              <p className="text-gray-500 dark:text-gray-400">2022</p>
            </div>
            <h4 className="text-[16px] font-semibold mb-2">Deep Learning Web Application for Distinguishing COVID-19 Virus from Pneumonia Positive Patients from MRI Scans: COVID-19, Pneumonia Positive, and No Pneumonia Classes</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Journal Article | University of Zimbabwe, Department of Computer Science | 2022</p>
            <p className="text-[14px] mb-0">Munyaradzi Matindike</p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}

export default Work
