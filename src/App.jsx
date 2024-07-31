import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/home/Home'
import Navbar from './component/home/Navbar/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import About from './component/home/about/About'
import Portfolio from './component/home/portfolio/Portfolio'
import Contact from './component/home/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/home/Layout/Layout'


function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
    ]
    }
  ])

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    








   




 
    
    </>
  )
}

export default App
