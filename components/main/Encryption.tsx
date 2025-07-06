"use client"
import React from 'react'
import {motion}from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import ReactPlayer from 'react-player'




function Encryption() {
  return (
    <div className='flex flex-row relative items-center justify-center min-h-screen w-full h-full'>
      <div className='absolute w-auto h-auto top-0 z-[5]'>
        <motion.div 
        variants={slideInFromTop}
        className='text-[40px] font-medium text-center text-gray-200'
        >
          Digital Core
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>
    {" "}
    &{" "}
    </span>
    Creativity
      </motion.div>
      </div>

      <div className='flex flex-col items-centers justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto '>
        <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
      

    <Image
      src= "/LockMain.png"
      alt="Lock Main"
      width={70}
      height={70}
      className="z-10"
      />
       </div>
       
       <div className='Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#db79378b] bg-[#3b220f]'>
  <h1 className='Welcome-text text-[16px] font-semibold text-white'>
    Logic & Creativity
  </h1>
</div>
     </div>
     <div className="absolute z-[20] bottom-[10px] px-[5px]">
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IDjaPn9ZTTo?si=pdJ9uCp9btGrrd5B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"   allowFullScreen></iframe>
      <div className='cursive text-[20px] font-medium text-center text-gray-300' >
      From concept to creation — powered by technology.
      </div>
      <div className='cursive text-[20px] font-medium text-center text-gray-300' >
      Made with Twinmotion and Archicad.
      </div>
     </div>
      
<div className='w-full flex items-start justify-center absolute'>
  <video
    loop
    muted
    autoPlay
      playsInline
    preload='false'
    className='w-full h-auto'
    src='/cards-video.webm'
    />
    </div>
  </div>

    
  )
}

export default Encryption