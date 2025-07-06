"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
    id="about-me" 
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] scroll-mt-[160px]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
  variants={slideInFromTop}
  className="Welcome-box flex items-center py-2 px-3 border border-[#b16f198b] bg-white/10 backdrop-blur-sm opacity-[0.9] rounded-md"
>
  <SparklesIcon className="text-[#a12e19] mr-[10px] h-5 w-5" />
  <h1 className="Welcome-text text-[20px] text-[#634918] font-semibold ">
    My Portofolio
  </h1>
</motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto text-left"
        >
          <span>
          Learning to build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              {" "}
              Great{" "}
            </span>
            Project exprience 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              {" "}
              one step at a time.{" "}
            </span>
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-justify leading-relaxed indent-8"
        >
       Halo, saya Lucky Ferdiansyah, mahasiswa Teknik Informatika di Universitas Dinamika Bangsa, Jambi. Saya memiliki ketertarikan besar pada dunia teknologi, mulai dari perangkat keras komputer,
        gadget, hingga video game. Saat ini saya fokus pada pengembangan web fullstack (Laravel, Next.js) dan sedang mempelajari pengembangan aplikasi mobile/hybrid menggunakan Flutter. Selain itu, 
        saya juga mulai mendalami game development dengan Unity dan 3D modeling sebagai bagian dari minat saya di bidang kreatif dan interaktif.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={700}
          width={700}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;