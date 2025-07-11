import { Backend_skill, Frontend_skill, Full_stack, Game_dev, Other_skill } from '@/constants'
import { section } from 'framer-motion/client'
import { transform } from 'next/dist/build/swc'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

function Skills() {
  return (
    <section
    id='skills'
    className='flex flex-col items-center gap-3 h-full relative overflow-hidden pb-80 py-20'
    style={{transform:"scale(0.9)"}}
    >
        <SkillText />
        
       
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
            <SkillDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
         
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) => (
            <SkillDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
         
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((image, index) => (
            <SkillDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
         
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Game_dev.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[10] opacity-30 absolute flex items-center justify-center bg cover'>
        <video
        className='w-full h-auto'
        preload='false'
        playsInline
        loop
        muted
        autoPlay
        src='/encryption.webm'
        />
            </div>
        </div>
    </section>
  )
}

export default Skills