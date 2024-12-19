import React from 'react'
import Service from '../components/Service'
import { assets } from "../assets/frontend/assets";


const Services = () => {
  return (
    <div className='flex flex-col items-center space-y-4 my-20'>
      <h1 className="text-[#021b67] font-bold text-3xl mb-10 text-center md:text-4xl">
        Services
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        <Service name={'Medical Yoga'} role={'45 Min'} desc={'₹300'} image={assets.yoga} />
        <Service name={'Diet and Nutrition Consultancy'} role={'45 Min'} desc={'₹300'} image={assets.diet} />
        <Service name={'Psychotherapy'} role={'45 Min'} desc={'₹300'} image={assets.psychotherapy} />
        <Service name={'Homeopathy'} role={'45 Min'} desc={'₹300'} image={assets.homeopathy} />
        <Service name={'Support Groups'} role={''} desc={'₹300'} image={assets.support} />
        <Service name={'Integrative Therapy'} role={'45 Min'} desc={'₹300'} image={assets.integrative} />
      </div>
    </div>
  )
}

export default Services