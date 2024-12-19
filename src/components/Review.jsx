import React from 'react';

const Review = ({ name, image, review }) => {
  return (
    <div className="max-w-[90%] mx-auto md:grid md:grid-cols-4 bg-white shadow-lg shadow-black/20 my-5 rounded-lg overflow-hidden">
      {/* Text Section */}
      <div className="md:col-span-3 flex flex-col items-center p-6 space-y-4 justify-center text-center md:order-1 order-2">
        <h1 className="font-bold text-2xl md:text-3xl text-[#021b67]">{name}</h1>
        <h2 className="font-semibold text-lg md:text-xl text-gray-400">Our Client</h2>
        <p className="max-w-[90%] md:max-w-[75%] text-sm md:text-lg text-[#021b67]">
          {review}
        </p>
      </div>

      {/* Image Section */}
      <div className="md:col-span-1 flex justify-center items-center p-4 md:order-2 order-1">
        <img
          src={image}
          className="h-32 w-32 md:h-64 md:w-64 object-cover rounded-full md:rounded-none object-center  "
          alt={`${name}'s image`}
        />
      </div>
    </div>
  );
};

export default Review;
