import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with:</h2>
          <p className='pt-2'>I am a web developer skilled with HTML, Tailwind CSS, Typescript and 
            Next Js. I enjoy creating responsive and user friendly websites. With 
            a focus on clean code and design, I aim to build high quality web applications
            that meet client's needs.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Next.Js</h2>
              <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
              <h2 data-aos="zoom-in-up">Node.Js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills