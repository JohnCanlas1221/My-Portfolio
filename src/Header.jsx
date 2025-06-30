import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <header className='p-5'>
        <nav className='flex justify-between items-center text-sm text-white'>
          <h3 className='text-white text-lg font-semibold'>My Portfolio</h3>

          {/* Desktop Links */}
          <ul className='hidden md:flex gap-10'>
            <li><Link to='Home'>Home</Link></li>
            <li><Link to='Projects'>Projects</Link></li>
            <li><Link to='Contact'>Contact</Link></li>
          </ul>

          {/* Hamburger Icon */}
          <div className='md:hidden'>
            <button onClick={() => setSidebarOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        // strokeLinecap="round"
                        // strokeLinejoin="round"
                        // className="text-white"
                    >
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                        <path d="M4 6h16" />
                    </svg>
                </button>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#010101] text-white p-6 z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-between items-center mb-8'>
          <h3 className='text-lg font-semibold'>Menu</h3>
          <button onClick={() => setSidebarOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <ul className='flex flex-col gap-6'>
          <li><Link to='Home' onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to='Projects' onClick={() => setSidebarOpen(false)}>Projects</Link></li>
          <li><Link to='Contact' onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Page Content */}
        <Outlet />
    </div>
  );
}

export default Header;
