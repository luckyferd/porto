'use client';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo
} from 'react-icons/rx'



const Footer = () => {
    
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
            <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
  <div className='font-bold text-[16px]'>
    Social Media
  </div>

  <a
    href="https://www.instagram.com/lucferd_/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
  >
    <FaInstagram />
    <span className="text-[15px] ml-[6px]">Instagram</span>
  </a>

  <a
    href="https://www.facebook.com/share/19BkFcrbNp/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
  >
    <FaFacebook />
    <span className="text-[15px] ml-[6px]">Facebook</span>
  </a>

  <a
    href="https://www.linkedin.com/in/lucky-ferdiansyah-a23a96303"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
  >
    <RxLinkedinLogo />
    <span className="text-[15px] ml-[6px]">LinkedIn</span>
  </a>

  <a
    href="https://discordapp.com/users/sky2786"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
  >
    <RxDiscordLogo />
    <span className="text-[15px] ml-[6px]">Discord</span>
  </a>
</div>

            </div >

          


            <div
            className='mb-[20px] text-[15px] text-center'>
                &copy; 2025 MifWebChain.Inc All rights reserved. <br />
            </div>
        </div>
    </div>
  )
}

export default Footer