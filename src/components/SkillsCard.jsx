import React from 'react'
import SkillCard from './SkillCard.jsx'

    const skillList = [
        {
            title: "Web Development",
            description:
                "Develops responsive and dynamic websites with clean, efficient code, ensuring both functionality and an engaging user experience.",
            image: "/assets/images/webdev.jpg",
        },
        {
            title: "Desktop Development",
            description:
                "Designs and builds reliable, high-performance desktop applications tailored to specific user needs.",
            image: "/assets/images/desktopdev.png",
        },
        {
            title: "Figma",
            description:
                "Creates modern, intuitive UI/UX designs and interactive prototypes that enhance usability and visual appeal.",
            image: "/assets/images/figmaedits.png",
        },
        {
            title: "Hardware",
            description:
                "Experienced in diagnosing, repairing, upgrading, and maintaining computer hardware to ensure peak performance.",
            image: "/assets/images/hardware.jpg",
        },
        {
            title: "Microsoft Office",
            description:
                "Proficient in Word, Excel, and PowerPoint, producing professional documents, detailed reports, and impactful presentations.",
            image: "/assets/images/micro-office.jpg",
        },
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
