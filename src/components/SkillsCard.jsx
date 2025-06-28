import React from 'react'
import SkillCard from './SkillCard.jsx'

function SkillsCard() {
  return (
    <>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-gray-900 border-2 border-solid border-cyan-500 p-10 text-white">
                <SkillCard img={image} />
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-gray-900 border-2 border-solid border-cyan-500 p-10 text-white">asd </div>
            <div className="col-start-3 col-end-4 row-start-1 row-end-3 bg-gray-900 border-2 border-solid border-cyan-500 p-10 text-white">asd </div>
            <div className="col-start-1 col-end-3 row-start-2 row-end-3 bg-gray-900 border-2 border-solid border-cyan-500 p-10 text-white">asd </div>
        </div>
    </>
  )
}

export default SkillsCard
