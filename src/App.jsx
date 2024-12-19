import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Appointments from './pages/Appointments'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Research from './pages/Research'
import Services from './pages/Services'

function App() {
  // const [count, setCount] = useState(0)
  const servicesRef = useRef(null);

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <>
      <Navbar onScrolltoServices={handleScrollToServices} />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/book' element = {<Appointments/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/research' element = {<Research/>}/>
        <Route path='/services' element = {<Services/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
