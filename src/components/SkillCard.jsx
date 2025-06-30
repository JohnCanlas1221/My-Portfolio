import React from 'react'

function SkillCard( { skillImage, skillTitle, skillDescription } ) {
  return (
    <>
        <div className="card bg-base-100 w-70 shadow-sm">
            <figure className="px-5 pt-5">
                <img
                src={skillImage}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{skillTitle}</h2>
                <p>{skillDescription}</p>
                <div className="card-actions">
                <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillCard
