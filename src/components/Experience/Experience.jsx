import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px[16vw] font-sans bg-skills-gradient">
      {/* Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-dark-text'>
          EXPERIENCE
        </h2>
        <div className='w-44 h-1 bg-accent-light mx-auto mt-2'></div>
        <p className='text-dark-para mt-4 text-lg font-semibold'>A collection of my work experience and the roles I have taken in various organizations</p>
      </div>

      {/* Experience Timeline */}
      <div className='relative'>
        {/* Vertical Line */}
        <div></div>
      </div>
    </section>
  )
}

export default Experience
