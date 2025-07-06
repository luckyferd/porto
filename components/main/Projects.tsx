import React from 'react'
import ProjectCard from '../sub/ProjectCard'


const Projects = () => {
  return (
   
        <div className='flex flex-col items-center justify-center py-20'
        id='projects'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
             
        <ProjectCard
        src='/arkaAdventure.png'  
          
        title='Arka Adventure Game'
        description='Sebuah Game 2D platformer dengan style pixel, yang saya Kembangkan bersama teman-teman saya sebagai Tugas Akhir Pemrograman Game, dengan memanfaatkan Unity Engine dan kumpulan asset 2d gratis yang beredar di internet.'
        link='https://www.youtube.com/embed/ZR3B8Hp8tR0
'
        isVideo={true}
        />  
        <ProjectCard
        src='/absensi2.png'    
        title='sistem absensi berbasis web'
        description='sebuah salah satu fitur proyek yang saya buat untuk matakuliah proyek penlitian, sistem ini dibuat dengan laravel dan bootsrap 5'
        link='https://github.com/luckyferd/sitemAbsensi'
        />        
        <ProjectCard
        src='/rental.png'    
        title='rental and service web'
        description='Sebuah proyek Tugas Akhir dari mata kuliah Pemrograman Web II, yang saya buat dengan menggunakan Laravel. Proyek ini bertujuan untuk menyediakan platform untuk menyewa dan layanan kendaraan.'
       link='https://github.com/luckyferd/carRental'
       />  
        <ProjectCard
        src='/webneko.png'    
        title='Neko Themed Website'
        description='sebuah portofolio sederhana yang saya buat dengan Next.js, menampilkan berbagai proyek dan keterampilan saya dalam desain yang ramping.'
        link='https://github.com/luckyferd/porto'
        />  
        
    </div>
</div>
  )
}

export default Projects