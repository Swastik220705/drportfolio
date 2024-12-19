import React from 'react';
import { assets } from '../assets/frontend/assets';

const BookAppointment = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 p-10 items-center justify-center bg-[#f4f8f9]">
      {/* Left Image Section */}
      <div className="w-full h-full overflow-hidden flex">
        <img
          src={assets.appoinment}
          alt="Book Appointment"
          className="object-cover w-auto h-full"
        />
      </div>

      {/* Right Appointment Form */}
      <div className="w-full  bg-[#021b67] text-white p-8 shadow-lg flex flex-col justify-center h-full">
        <h2 className="text-3xl font-bold mb-4">Schedule Appointment</h2>
        <p className="text-sm text-slate-200 mb-6 leading-relaxed">
          Book your consultation easily by filling out the form below. Select
          the type of appointment, date, and time convenient for you.
        </p>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Appointment Type */}
          <div className="flex flex-col">
            <label htmlFor="type" className="text-md mb-2">
              Type:
            </label>
            <select
              id="type"
              className="w-full bg-[#021b67] text-slate-300 p-3 border border-slate-400 focus:outline-none focus:border-white"
            >
              <option>General Consultation</option>
              <option>Specialist Visit</option>
              <option>Follow-up</option>
            </select>
          </div>

          {/* Appointment Date */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-md mb-2">
              Date:
            </label>
            <input
              id="date"
              type="date"
              className="w-full bg-[#021b67] text-slate-300 p-3 border border-slate-400 focus:outline-none focus:border-white"
            />
          </div>

          {/* Appointment Time */}
          <div className="flex flex-col">
            <label htmlFor="time" className="text-md mb-2">
              Time:
            </label>
            <input
              id="time"
              type="time"
              className="w-full bg-[#021b67] text-slate-300 p-3 border border-slate-400 focus:outline-none focus:border-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-[#021b67] font-bold py-3 hover:bg-gray-200 transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
