import React from "react";

function DoctorsCard({name, role, desc, image}) {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="h-48 bg-gray-200">
        <img
          src={image} // Replace with your image URL
          alt="Doctor"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-4 text-left">
        <div className="flex items-end">
        <div>
        {/* Doctor Name */}
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        {/* Role */}
        <p className="text-sm text-gray-500">{role}</p>
        </div>
        {/* Stars */}
        
        </div>
        {/* Description */}
        <p className="mt-2 text-sm border-t-2 border-gray-100 py-1 text-gray-700">
          {desc}
        </p>
        <button className="px-4 rounded py-1 bg-[#021b67] text-white mt-5 hover:bg-opacity-85 text-lg font-light">Book Now</button>
      </div>
    </div>
  );
}

export default DoctorsCard;
