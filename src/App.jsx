import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Public from './Layouts/Public'
import HomePage from './Pages/Public/HomePage'
import PostPage from './Pages/Public/PostPage'
import PostDetailsPage from './Pages/Public/PostDetailsPage'

function App() {
  let routes =  createBrowserRouter([
    {
      path:'/',
      element:<Public/>,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:"/PostPage",
          element:<PostPage/>
        },
        {
          path:"/PostDetailsPage",
          element:<PostDetailsPage/>
        }
      ]
    }
  ])


  return ( <RouterProvider router={routes}/> )
}

export default App
