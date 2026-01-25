import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Public() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <header>
        <Navbar/>
      </header>
      <main className='grow'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Public
