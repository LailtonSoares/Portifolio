import React from 'react'
import ProjectItem from './ProjectItem'
import PropertyImg from '../assets/Calculadora.jpg'
import PropertyImg1 from '../assets/AdivinhandoPalavras.jpg'
import PropertyImg2 from '../assets/Monsters.jpg'
import PropertyImg3 from '../assets/PersonalWebsite.jpg'

function Projects() {
  return (
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projetos</h1>
          <p className='text-justify text-[#001b5e] py-8'>
          Esses são os meus projetos Full Stack. Embora eu ainda não tenha experiência profissional, apresento uma forte compreensão de várias tecnologias, incluindo React, MongoDB, Node.js, Express, JavaScript, .NET, Entity Framework e MVC. Eu me dediquei a aprender e praticar essas habilidades por meio de projetos pessoais e cursos online.
          </p>
          <div className='grid sm:grid-cols-2 gap-12'>
              <ProjectItem img={PropertyImg} title="Calculadora APP" url="https://calculadora-impostos.netlify.app/" />
              <ProjectItem img={PropertyImg1} title="Adivinhar as palavras"  url="https://adivinhando-palavras.netlify.app/" />
              <ProjectItem img={PropertyImg2} title="Escolha seu monstro" url="https://monster-app-reactjs.netlify.app/" />
              <ProjectItem img={PropertyImg3 } title="PersonalWebsite" url="https://lailtonsoares.github.io/Personal-website/" />
          </div>
      </div>
  )
}

export default Projects