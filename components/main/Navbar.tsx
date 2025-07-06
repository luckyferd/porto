import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#df884e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'> 
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
            <Image
            src="/nekoVector.jpg"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
            />

            <span className='font-bold ml-[10px] hideen md:block text-gray-300'>
            Maneki-neko
            </span>
        </a>
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
        <div className='flex items-center justify-between w-full h-auto border border-[#df884e61] bg-[#3d2d185e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
    <a href="#about-me" className='cursor-pointer'>About Me</a>
    <a href="#skills" className='cursor-pointer'>Skills</a>
    <a href="#projects" className='cursor-pointer'>Projects</a>
        </div>
        </div>
       <div className='flex flex-row gap-5'>
       <a
  href="https://drive.google.com/drive/u/1/folders/1BE_e9VqhKs-y0ftw6aGce_N6BDdBre99"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm px-4 py-2 h-auto border bg-[#3d2d185e] border-[#ee721f61] text-white rounded-full hover:bg-[#df884e61] transition-all duration-300"
>
  CV
</a>
       {Socials.map((social) => (
  <a
    key={social.name}
    href={social.link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-200"
  >
  
    <Image
      src={social.src}
      alt={social.name}
      width={24}
      height={24}
    />
    
  </a>
  
))}

        </div> 
        </div>    
    </div>
  
)
}

export default Navbar