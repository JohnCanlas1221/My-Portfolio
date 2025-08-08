import React from 'react'
function aboutme({ title, description, image}) {

  return (
    <>
      <div className='bg-base-100'>
        <img src={image} className='w-auto h-15 m-auto mb-3 border-2 border-solid border-cyan-500 p-2 rounded-[50%] '></img> 
        <h3 className='text-indigo-700 font-semibold mb-3'>{title}</h3>
        <p className='text-white'>{description}</p>
      </div>
    </>
  )



}

export default aboutme
