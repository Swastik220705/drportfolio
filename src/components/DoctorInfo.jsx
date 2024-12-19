import { useRef } from "react";
import React from "react";
import { assets } from "../assets/frontend/assets";
import { useNavigate } from "react-router-dom";

const DoctorInfo = () => {
  const navigate = useNavigate()

  return (
    <section id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20 bg-[#f4f8f9] items-center">
      {/* Left Section */}
      <div className="relative flex justify-center items-center">
        {/* Image */}
        <img
          src={assets.homeimg}
          className="w-full max-w-md  object-cover rounded-md"
          alt="Doctor"
        />

      </div>

      {/* Right Section */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-[#021b67] font-bold text-3xl md:text-4xl">
          About
        </h1>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#021b67]">Dr. Sadhana Sharma</h3>
          <h3 className="text-lg font-bold text-[#021b67]">Homeopathy Physician and Counsellor</h3>
          <p className="text-gray-700 md:w-[75%] leading-6 ">
            Dr. Sadhana Sharma is retired Senior Medical Officer (Homeopath) and diet therapist. She is also trained in cognitive behavioural theory and Life coaching and counselling. <br />
            She is passionate about working with people and have over 35 years’ experience of patient care in relation to personal and emotional well-being, both in the public and private sectors.She also has donated substantially of her time and professional skills to organisations such as the NMP Medical Research Institute, Gyan Sanjeevani and was the co-founder of Homeopathy Research Institute, India. <br />
            Dr. Sharma is passionate about research and has authored numerous articles, abstracts and presentations.
          </p>
        </div>
        {/* <div>
          <h3 className="text-lg font-bold text-[#021b67]">What we do?</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sed quas at nulla, placeat error eaque, fugiat ad veniam
            perspiciatis, voluptas in maxime repellendus facere. Iusto nulla ab
            mollitia velit consequuntur vel voluptatibus facilis perspiciatis.
          </p>
        </div> */}
        <button onClick={()=>{navigate('/about')}} className="bg-[#021b67] text-white px-6 py-3 rounded-lg hover:bg-[#324b94]">
          Read More
        </button>
      </div>
    </section>
  );
};

export default DoctorInfo;
