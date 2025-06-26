import React from 'react'
import TechSkills from '../components/techskills.jsx';
import AboutMe from '../components/aboutme.jsx'

    const meList = [
        {title: 'Competitive', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aliquam tenetur distinctio qui ipsa quasi culpa ullam. Iusto voluptas iure repudiandae, dolor, aliquam reprehenderit fuga minus est similique voluptatum deleniti?'},
        {title: 'Self-motivated', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aliquam tenetur distinctio qui ipsa quasi culpa ullam. Iusto voluptas iure repudiandae, dolor, aliquam reprehenderit fuga minus est similique voluptatum deleniti?'},
        {title: 'Religous', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aliquam tenetur distinctio qui ipsa quasi culpa ullam. Iusto voluptas iure repudiandae, dolor, aliquam reprehenderit fuga minus est similique voluptatum deleniti?'},
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
              <img src="./src/assets/images/Facebook.png" className='hover:scale-120 duration-200 ease-in-out' />
              <img src="./src/assets/images/LinkIn.png" className='hover:scale-120 duration-200 ease-in-out' />
              <img src="./src/assets/images/Github.png" className='hover:scale-120 duration-200 ease-in-out' />
              <img src="./src/assets/images/Instagram.png" className='hover:scale-120 duration-200 ease-in-out' />
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

        <div className='grid grid-cols-3 gap-10 mt-10 mb-10'>
          {meList.map((e,i) => (
            <div key={i} className='text-center rounded-xl border-2 border-solid border-cyan-500 p-10'>
              <AboutMe title={e.title} description={e.description}/>
            </div>

          ))}
        </div>


      </div>

      {/* <TechSkills /> */}
    </>
  )
}

export default Home
