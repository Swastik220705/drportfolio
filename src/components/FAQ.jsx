import React, { useState } from "react";

function FAQ({ ques, ans }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="text-left mx-10 border-b-2 py-4 cursor-pointer flex justify-between items-start"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Question Text */}
      <div>
        <h2
          className={`text-[#021b67] text-lg ${
            expanded ? "font-bold" : "font-semibold"
          }`}
        >
          {ques}
        </h2>
        <p className={`${expanded ? "block mt-2 text-gray-600" : "hidden"}`}>
          {ans}
        </p>
      </div>

      {/* Arrow Icon */}
      <div
        className={`transform transition-transform duration-300 ${
          expanded ? "rotate-180" : "rotate-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#021b67]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default FAQ;
