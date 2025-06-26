import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      
        <header className='p-4'>
            <nav className='flex justify-around items-center text-sm'>
                <h3 className='text-white '>My Portfolio</h3>

                <ul className='flex justify-between content-center gap-10'>
                    <li className='text-white'><Link to={'Home'}>Home</Link></li>
                    <li className='text-white'><Link to={'Projects'}>Projects</Link></li>
                    <li className='text-white'><Link to={'Contact'}>Contact</Link></li>
                </ul>
            </nav>
        </header>

    <Outlet />

    </div>


  )
}

export default Header
