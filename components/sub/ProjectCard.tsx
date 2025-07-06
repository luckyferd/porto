import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface Props {
  src: string
  title: string
  description: string
  link: string
  isVideo?: boolean
}

const ProjectCard = ({ src, title, description, link, isVideo = false }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#9e4f0e]'>
      {isVideo ? (
        // 🎬 Iframe Video Langsung Diputar di Web
        <div className='w-full aspect-video'>
          <iframe
            src={link}
            title={title}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='rounded-t-lg'
          ></iframe>
        </div>
      ) : (
        // 📷 Gambar + Link untuk Proyek Biasa
        <Link href={link} target='_blank' rel='noopener noreferrer'>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className='w-full object-contain'
          />
        </Link>
      )}

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='text-gray-300 mt-2'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
