import React from 'react'

function SkillCard( image, Name, Feedback) {
  return (
    <>
        <div>
            <img src={image} />
            <h3>{Name}</h3>
            <p>{Feedback}</p>
        </div>
    </>
  )
}

export default SkillCard
