import React from 'react'
import TechSkills from '../components/techskills.jsx';
import AboutMe from '../components/aboutme.jsx'
import SkillsCard from '../components/SkillsCard.jsx';
import SkillCard from '../components/SkillCard.jsx';


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
    <div className="hero pl-10 pr-10 pt-20 pb-20 grid grid-cols-1 bg-[url(./src/assets/images/Background.jpg)] bg-center bg-no-repeat">
        <div className="grid lg:grid-cols-2 ">
          <div className="lg:mt-10">
            <h3 className='text-white text-2xl font-semibold mb-1'>Hi, <span className='text-white text-lg'>I'm John Francis Canlas</span></h3>
            <h3 className='text-white text-4xl font-semibold mb-1'>ASPIRING <span className='text-indigo-700 mb-1'>WEB DEVELOPER</span></h3>

                      <p className='text-white text-sm text-justify mb-1'>Passionate for building user-friendly websites. I enjoy turning ideas into interactive digital experiences and continuously learning new technologies to improve my skills in front-end and back-end development.</p>
          
          <div className="flex mt-3 gap-10">
            <div className="flex items-center gap-2">
              <img src="./src/assets/images/Facebook.png" className='hover:scale-130 duration-400 ease-in-out' />
              <img src="./src/assets/images/LinkIn.png" className='hover:scale-130 duration-400 ease-in-out' />
              <img src="./src/assets/images/Github.png" className='hover:scale-130 duration-400 ease-in-out' />
              <img src="./src/assets/images/Instagram.png" className='hover:scale-130 duration-400 ease-in-out' />
            </div>
            <a href="./JohnCanlasCV.pdf" target='_blank' download className='text-white ink link-hover'>Download CV</a>
          </div>
          </div>

          <img src="./src/assets/images/Seminar.png" alt="" className="drop-shadow-lg hover:drop-shadow-neutral-50/50 duration-300 ease-out mt-10 md:m-auto md:mt-10 lg:w-90 sm:m-auto sm:mt-10" />
        </div>

      </div>

      <div className='p-10'>
        <header>
          <div className='flex gap-2'>   
            <hr className='w-9 text-white'/><hr className='w-3 text-white' />
          </div>

          <h3 className='text-white text-2xl font-semibold'>About <span className='text-indigo-700'>Me</span></h3>
        </header>

        <div className='grid grid-cols-1 gap-10 mt-10 mb-10 lg:grid-cols-3 2xl:grid-cols-1'>
            {meList.map((e,i) => (
                <div key={i} className='text-center p-10 bg-base-100 w-fit shadow-sm rounded-md hover:-translate-y-4 duration-400 lg:w-70 lg:h-90 lg:m-auto xl:w-80 xl:h-90 xl:m-auto 2xl:w-full 2xl:h-auto'>
                <AboutMe title={e.title} description={e.description} image={e.image}/>
                </div>
            ))}
        </div>


      </div>

        {/* TechSkills */}

        <TechSkills />

        {/* Skills */}
        <div className='grid grid-col-1 p-10'>
            <header>
                <div className='flex gap-2'>   
                <hr className='w-9 text-white'/><hr className='w-3 text-white' />
                </div>

                <h3 className='text-white text-2xl font-semibold mb-5'>Skills</h3>
            </header>
            <SkillsCard />
        </div>


        {/* Feedback */}
        <div className='p-10'>
            <header className='text-white text-center mb-10'>
                <h3 className='text-3xl mb-5'>Let's Make This Better — Together</h3>
                <p>Thank you for visiting my portfolio! I'm always looking to grow and improve, and your feedback plays a big part in that. Whether you spotted something that could be better, have suggestions for new features, or just want to say hello — I’d love to hear from you.</p>
            </header>
        </div>
        
    </>
  )
}

export default Home
