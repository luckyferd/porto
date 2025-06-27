import React from 'react'
import ProjectCard from '../sub/ProjectCard'


const Projects = () => {
  return (
   
        <div className='flex flex-col items-center justify-center py-20'
        id='projects'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
        src='/NextWebsite.png'    
        title='Modern Next.js Portofolio'
        description='A modern portfolio website built with Next.js, showcasing my projects and skills in a sleek design.'
        />        

        <ProjectCard
        src='/CardImage.png'    
        title='Interactive Website Cards'
        description='A modern portfolio website built with Next.js, showcasing my projects and skills in a sleek design.'
        />        
        <ProjectCard
        src='/spaceWebsite.png'    
        title='Space Themed Website'
        description='A modern portfolio website built with Next.js, showcasing my projects and skills in a sleek design.'
        />  
    </div>
</div>
  )
}

export default Projects