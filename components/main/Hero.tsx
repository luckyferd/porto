import React from 'react'
import HeroContent from '@/components/sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
  <video 
    autoPlay 
    muted 
    loop 
    className='rotate-0 absolute top-0 w-full h-full left-0 z-[1] object-cover scale-x-[-1]'>
    <source src='/neko.webm' type='video/webm'/>
  </video>

  {/* Overlay layer */}
  <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-[2]' />

  {/* Logo + content */}
  <div className='relative z-[3]'>
    <HeroContent />
  </div>
</div>
    );
};

export default Hero