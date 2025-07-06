"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center pt-[150px]'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#ce8a258b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b1341f] mr-[10px]  h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-[15px]">
          Explore, Build, Learn — One Stack at a Time
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Fullstack Developer in Training | Game Dev Enthusiast
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='kaushan-script-regular text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           Saya senang membangun aplikasi web dan mobile menggunakan teknologi modern 
           seperti Laravel, Next.js, dan Flutter. Saat ini saya sedang mendalami pengembangan fullstack dan juga 
           tertarik mengeksplorasi dunia game development.
        </motion.div>
    </div>
  )
}

export default SkillText