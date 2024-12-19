import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import Appointment from './pages/Appointments.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: []
//   },
//   {
//     path: '/book',
//     element: <Appointment/>,
//     children: []
//   },
//   {
//     path: '/contact',
//     element: <Contact/>,
//     children: []
//   },
//   {
//     path: '/blogs',
//     element: <Blogs/>,
//     children: []
//   },
// ])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={router}/>
  // </StrictMode>,
  <BrowserRouter>
    <App />
  </BrowserRouter>

)

