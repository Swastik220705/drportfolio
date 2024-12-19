import React, { useRef } from 'react'
import Hero from '../components/Hero'
import DoctorInfo from '../components/DoctorInfo'
import Services from '../components/Services'
import Doctors from '../components/Doctors'

const Home = () => {
    return (
        <div>
            <Hero />
            <DoctorInfo />
            <Services />
            {/* <Doctors /> */}
            <section className='flex flex-col items-center'>
            <h1 className="text-[#021b67] font-bold text-3xl py-10 text-center md:text-4xl">
                Testimonials
            </h1>
                <div className='grid grid-cols-1   md:grid-cols-3 gap-10 p-10'>
                    <div className='p-5 shadow-md w-80 space-y-6 text-gray-600 shadow-black/20'>
                        <p className='font-light'>She made me feel like me again. No one could understand, she believed me & supported me to road to recovery. </p>
                        <p>Mrs. N Sharma</p>
                    </div>
                    <div className='p-5 shadow-md w-80 space-y-6 text-gray-600 shadow-black/20'>
                        <p className='font-light'>Best physician I have met, she takes time to listen, understand and find solution with is feasible for me. 
                        </p>
                        <p>Mr. S Jain</p>
                    </div>
                    <div className='p-5 shadow-md w-80 space-y-6 text-gray-600 shadow-black/20'>
                        <p className='font-light'>Her comfort and support treats half the problem, remaining her command on homeopathy, truly amazing.</p>
                        <p>Ms. P. Khan</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home