import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      
        <header>
            <nav>
                <h3>My Portfolio</h3>

                <ul>
                    <li><Link to={'Home'}>Home</Link></li>
                    <li><Link to={'Projects'}>Projects</Link></li>
                    <li><Link to={'Contact'}>Contact</Link></li>
                </ul>
            </nav>
        </header>

    <Outlet />

    </div>


  )
}

export default Header
