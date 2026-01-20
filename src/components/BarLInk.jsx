import React from 'react'
import { Link } from 'react-router-dom'

function BarLInk() {
  return (
    <div className='flex pt-3 flex-col gap-7  items-start'>
            <Link className='text-[16px] pl-2 text-[#0F1729] font-medium' to={"/"}>Home</Link>
            <Link className='text-[16px] pl-2 text-[#0F1729] font-medium' to={"/PostPage"}>Post</Link>
            <Link className='text-[16px] w-full text-center text-white font-medium bg-[#4346EF] py-2.5 px-4 rounded-2xl' to={"#"}>Login</Link>
        </div>
  )
}

export default BarLInk
