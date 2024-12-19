import React from "react";
import { assets } from "../assets/frontend/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:h-screen overflow-hidden justify-between px-6 md:px-24 py-10 bg-[#f7faff] text-black font-sans">
      {/* Text Content */}
      <div className="w-full md:w-1/2 max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold text-[#021b67] mb-4">
        Relax, Refresh, Revitalize
        </h1>
        <p className="text-gray-600 mb-6 md:mb-12">
        Begin Your Journey to Healthy & Happy Life.

.
        </p>
        <button onClick={()=>{navigate('/services')}} className="px-6 py-3 text-white bg-[#021b67] rounded-full hover:bg-[#3f72af] transition duration-300">
          View Services
        </button>
        {/* <div className="flex justify-between mt-8">
          <div className="text-center">
            <h3 className="text-xl md:text-4xl font-bold text-[#021b67]">25+</h3>
            <p className="text-gray-600">Experiences</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-4xl font-bold text-[#112d4e]">120+</h3>
            <p className="text-gray-600">Expert Doctors</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-4xl font-bold text-[#021b67]">400+</h3>
            <p className="text-gray-600">Employees</p>
          </div>
        </div> */}
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center">
        <img
          className="w-full shadow-lg shadow-gray-500/30 max-w-md md:max-w-5xl mx-auto my-5"
          src={assets.homeopathy} // Replace with the actual image URL
          alt="Doctor"
        />
      </div>
    </section>
  );
};

export default Hero;
