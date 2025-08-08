import React from 'react'
import SkillCard from './SkillCard.jsx'

    const skillList = [
        {title: 'Web Development', 
        description: 'I thrive in competitive environments where challenges push me to deliver my best. I see every task as an opportunity to improve, innovate, and exceed expectations.',
        image: '/assets/images/ImagePlaceholder.png' },      
        {title: 'Desktop Development',
        description: 'I am a self-driven individual who takes initiative and follows through with purpose. I believe in lifelong learning and consistently push myself to grow beyond my comfort zone.',
        image: '/assets/images/ImagePlaceholder.png' },
        {title: 'Figma', 
        description: 'My faith plays a central role in who I am. It grounds my values, guides my decisions, and motivates me to serve others with integrity and compassion.',
        image: '/assets/images/ImagePlaceholder.png' },
        {title: 'Hardware', 
        description: 'My faith plays a central role in who I am. It grounds my values, guides my decisions, and motivates me to serve others with integrity and compassion.',
        image: '/assets/images/ImagePlaceholder.png' },
        {title: 'Microsoft Office', 
        description: 'My faith plays a central role in who I am. It grounds my values, guides my decisions, and motivates me to serve others with integrity and compassion.',
        image: '/assets/images/ImagePlaceholder.png' },
    ];

function SkillsCard() {
  return (
    <>
        <div className="carousel carousel-center rounded-box space-x-4 mb-10 md:w-full">
            {skillList.map((e,i) => (
                <div className="carousel-item" key={i}>
                    <SkillCard skillTitle={e.title} skillDescription={e.description} skillImage={e.image} />
                </div>
            ))}
        </div>
    </>
  )
}

export default SkillsCard
