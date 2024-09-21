import React from 'react'
import Slides from '../Components/Slides'

const Project =()=> {
  return (
    <>
     <section className='container mx-auto flex flex-col justify-between gap-2 pb-[20rem]'>
      <div className=' px-[2.5rem]'>
        <div className='about-cards flex gap-10 flex-col p-20 md:flex-row'>
          <Slides/>
        </div>
      </div>

     </section>
    </>
  )
}

export default Project