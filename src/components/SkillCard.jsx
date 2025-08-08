import React from 'react'

function SkillCard( { skillImage, skillTitle, skillDescription } ) {
  return (
      <>
          <div className="card bg-slate-900 w-69 shadow-sm">
              <figure className="px-5 pt-5">
                  <img src={skillImage} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center tracking-wide">
                  <h2 className="card-title">{skillTitle}</h2>
                  <p>{skillDescription}</p>
                  <div className="card-actions">
                      {/* <button className="btn btn-primary">View</button> */}
                  </div>
              </div>
          </div>
      </>
  );
}

export default SkillCard
