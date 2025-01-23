import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer.jsx'
import About from './Components/About/About.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Notfound from './Components/NotFound/Notfound.jsx'
import Layout from './Components/Layout/Layout.jsx'

function App() {

  let routers = createBrowserRouter([
    {path: '/', element: <Layout/>, children:[
      {path:'about', element: <About/> },
      {path:'portfolio', element: <Portfolio/>},
      {path:'contact', element: <Contact/> },
      {index: true, element: <Home/>},
      {path:'*', element: <Notfound/>}
    ]}
  ])

  return (
    <>
      {<RouterProvider router={routers}></RouterProvider>}
    </>
  )
}

export default App
