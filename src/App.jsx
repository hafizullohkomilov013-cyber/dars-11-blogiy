import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Public from './Layouts/Public'
import HomePage from './Pages/Public/HomePage'
import PostPage from './Pages/Public/PostPage'
import PostDetailsPage from './Pages/Public/PostDetailsPage'
import LoginPage from './Pages/Auth/LoginPage'
import AuthLayouts from './Layouts/AuthLayouts'
import DashboardPage from './Pages/Admin/DashboardPage'
import CreatedPost from './Pages/Admin/CreatedPost'
import AdminLayout from './Layouts/AdminLayout'

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/PostPage",
          element: <PostPage />,
        },
        {
          path: "/PostDetailsPages/:hi",
          element: <PostDetailsPage />,
        },
      ],
    },
    {
      path:"/Login",
      element:<AuthLayouts/>,
      children:[
        {
          index:true,
          element:<LoginPage/>
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children:[
        {
          path:"dashboard",
          element:<DashboardPage/>,
        },
        {
          path:"createdPosts",
          element:<CreatedPost/>
        }
      ]
    }
  ]);


  return ( <RouterProvider router={routes}/> )
}

export default App
