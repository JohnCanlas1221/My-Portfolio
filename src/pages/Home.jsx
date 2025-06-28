import React from 'react'
import TechSkills from '../components/techskills.jsx';
import AboutMe from '../components/aboutme.jsx'
import SkillsCard from '../components/SkillsCard.jsx';

    const meList = [
        {title: 'COMPETITVE', 
        description: 'I thrive in competitive environments where challenges push me to deliver my best. I see every task as an opportunity to improve, innovate, and exceed expectations.',
        image: './src/assets/images/running.png' },      
        {title: 'SELF-MOTIVATED',
        description: 'I am a self-driven individual who takes initiative and follows through with purpose. I believe in lifelong learning and consistently push myself to grow beyond my comfort zone.',
        image: './src/assets/images/self-confidence.png' },
        {title: 'RELIGOUS', 
        description: 'My faith plays a central role in who I am. It grounds my values, guides my decisions, and motivates me to serve others with integrity and compassion.',
        image: './src/assets/images/pray.png' },
    ];

function Home() {
  return (
    <>
      <div className="hero pl-20 pr-20 pt-50 pb-50 size-full flex justify-between content-center m-auto bg-[url(./src/assets/images/Background.jpg)] bg-center bg-size-[auto_1080px] bg-no-repeat">
        <div className="section">
          <div className="top">
            <h3 className='text-white text-4xl font-semibold'>Hi, <span className='text-white text-xl'>I'm John Francis Canlas</span></h3>
            <h3 className='text-white text-4xl font-semibold'>ASPIRING <span className='text-indigo-700'>WEB DEVELOPER</span></h3>
          </div>
          <p className='text-white text-sm/6 w-115'>Passionate for building user-friendly websites. I enjoy turning ideas into interactive digital experiences and continuously learning new technologies to improve my skills in front-end and back-end development.</p>
          
          <div className="flex mt-3 gap-6">
            <div className="flex items-center gap-2">
              <img src="./src/assets/images/Facebook.png" className='hover:scale-130 duration-400 ease-in-out' />
              <img src="./src/assets/images/LinkIn.png" className='hover:scale-130 duration-400 ease-in-out' />
              <img src="./src/assets/images/Github.png" className='hover:scale-130 duration-400 ease-in-out' />
              <img src="./src/assets/images/Instagram.png" className='hover:scale-130 duration-400 ease-in-out' />
            </div>
            <a href="./JohnCanlasCV.pdf" target='_blank' download className='text-white pr-7 pl-7 pt-2 pb-2 rounded-2xl border-1 text-xs hover:text-black hover:bg-white'>Download CV</a>
          </div>
        </div>
          <img src="./src/assets/images/Seminar.png" alt="" className="w-4xs min-w-2xs rounded-tr-3xl drop-shadow-lg hover:drop-shadow-neutral-50/50 duration-300 ease-out" />
      </div>

      <div className='p-20'>
        <header>
          <div className='flex gap-2'>   
            <hr className='w-9 text-white'/><hr className='w-3 text-white' />
          </div>

          <h3 className='text-white text-2xl font-semibold'>About <span className='text-indigo-700'>Me</span></h3>
        </header>

        <div className='grid grid-cols-3 gap-10 mt-10 mb-10 '>
          {meList.map((e,i) => (
            <div key={i} className='text-center rounded-xl border-2 border-solid border-cyan-500 p-10 bg-gray-900 shadow-md shadow-cyan-500 hover:-translate-y-4 duration-400'>
              <AboutMe title={e.title} description={e.description} image={e.image}/>
            </div>

          ))}
        </div>


      </div>

      <TechSkills />

      <div className='flex justify-center content-center'>
        <SkillsCard />
      </div>

      
    </>
  )
}

export default Home
