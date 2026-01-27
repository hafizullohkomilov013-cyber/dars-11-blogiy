import React from 'react'
import { Link } from 'react-router-dom'
import BlogyLogo from "../assets/img/Link.svg"
import BarLink from './BarLInk'
import { useState } from 'react'

function Navbar() {
  let [open, setOpen] = useState(false)

  return (
    <nav className='z-30  fixed left-0 right-0 bg-white/70  top-0'>
      <div className='flex container backdrop-blur-md border-b border-gray-200  justify-between py-3.5 items-center'>
        <Link to={"/"}><img src={BlogyLogo} alt="" /></Link>
        <div className='hidden  md:flex  gap-8 items-center'>
            <Link className='text-[16px] text-[#0F1729] font-medium' to={"/"}>Home</Link>
            <Link className='text-[16px] text-[#0F1729] font-medium' to={"/PostPage"}>Post</Link>
            <Link className='text-[16px] text-white font-medium bg-[#4346EF] py-2 px-4 rounded-2xl' to={"/Login"}>Login</Link>
        </div>
        <div onClick={() => setOpen(!open)} className='md:hidden text-2xl'>
          {open? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
        </div>
      </div>
      {open && <BarLink/>}
    </nav>
  )
}

export default Navbar
