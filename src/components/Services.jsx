  import React from 'react'
  import ServiceCard from './ServiceCard'
  import { assets } from '../assets/frontend/assets'
  import { useNavigate } from 'react-router-dom'

  function Services() {
    const navigate = useNavigate();
    return (
      <div className='bg-[#f4f8f9] text-center  py-10 space-y-3'>
          <h1 className='text-3xl md:text-5xl font-bold text-[#021b67]'>Services</h1>    
          <div className='grid md:w-[75%] m-auto md:grid-cols-3 gap-x-5 gap-y-5 px-20 py-10  items-center'>
              <ServiceCard title = 'Counselling and Psychotherapy' />
              <ServiceCard title = 'Diet and Nutrition Consultancy' />
              <ServiceCard title = 'Homeopathy and Consultation'  />
              {/* <ServiceCard title = 'Scan' content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repellat.' image = {assets.scan} /> */}
          </div>
          <button onClick={()=>{navigate('/services')}} className='text-white text-lg px-5 py-2 bg-[#021b67] hover:bg-opacity-90 rounded-md'>Know More</button>
      </div>
    )
  }

  export default Services