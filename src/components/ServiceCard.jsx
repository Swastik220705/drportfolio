import React, { useState } from 'react';

function ServiceCard({ title, content }) {
    const [isHover, setisHover] = useState(false);

    return (
        <div
            className={`flex flex-col items-center py-8 px-5 rounded-lg transition shadow-black/20 space-y-5 ${
                isHover ? 'bg-[#021b67] shadow-xl' : 'shadow-md bg-white'
            }`}
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
        >
            {/* <img
                src={image}
                alt=""
                className="h-[50px] w-auto"
                style={{
                    filter: isHover
                        ? 'invert(1) brightness(2)' // Makes the image white
                        : 'invert(0)',
                }}
            /> */}
            <h2
                className={`text-xl font-bold ${
                    isHover ? 'text-white' : 'text-[#021b67]'
                }`}
            >
                {title}
            </h2>
            {/* <p
                className={`text-md ${
                    isHover ? 'text-white' : 'text-gray-700'
                }`}
            >
                {content}
            </p> */}
        </div>
    );
}

export default ServiceCard;
