import React from 'react'
import BlogyLink from "../assets/img/Link.svg"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t-2  border-gray-200">
      <div className="container">
        <div className="mt-12 border-b-2 border-gray-300 pb-8 flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex flex-col gap-4 items-start w-full max-w-148">
            <img src={BlogyLink} alt="" />
            <p className="text-[#6B7280] text-[14px] w-full max-w-85">
              Create, read, and inspire. Discover amazing stories written by
              talented creators from around the world.
            </p>
          </div>
          <div className='w-full max-w-70'>
            <h2 className='text-[24px] font-semibold text-[#0F1729] mb-4 '>Quick Links</h2>
            <div className='flex flex-col gap-2 text-gray-700 '>
              <Link className='hover:text-blue-700 transition' to={"/"}>Home</Link>
              <Link className='hover:text-blue-700 transition' to={"/PostPage"}>Posts</Link>
              <Link className='hover:text-blue-700 transition' to={"/PostDetailsPage"}>Login</Link>
            </div>
          </div>
          <div className='w-full max-w-70'>
            <h2 className='text-[#0F1729] text-[24px] font-semibold mb-4'>Connect</h2>
            <div className='flex gap-3'>
                <i className ="text-[20px] fa-brands fa-twitter"></i>
                <i className ="text-[20px] fa-brands fa-github"></i>
                <i className ="text-[20px] fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
        <p className='text-center mb-12 text-[#6B7280]'>© 2025 Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer
