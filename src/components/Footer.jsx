import React from "react";

function Footer() {
  return (
    <footer className="bg-[#021b67] text-white py-10">
      <div className="container mx-auto  gap-8 px-6">
        {/* Column 1: Logo and Address */}
        <div>
          <h2 className="text-xl font-bold">Dr. Sadhna Sharma</h2>
          <p className="mt-2 text-sm text-white">
            +91 93585 05134    |   drsadhanasharma@mail.com


        </p>
      </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-8 text-center pt-4 ">
      © 2024 by Dr Sadhana Sharma. 
      </div>
    </footer>
  );
}

export default Footer;
