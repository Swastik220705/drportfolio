import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { assets } from '../assets/frontend/assets';

function Contact() {
    return (
        <div>

            <section className="flex flex-col md:flex-row items-center md:h-auto overflow-hidden justify-between px-6 md:px-24 py-20 bg-[#f7faff] text-black font-sans">
                {/* Form Content */}
                <div className="w-full md:w-1/2 max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#021b67] mb-4">
                        Contact Me
                    </h2>
                    <p className="text-gray-600 mb-6">
                        +91 93585 05134 | drsadhanasharma@mail.com
                    </p>
                    <p className="text-gray-600 mb-6">
                        59 A Mahadev Nagar, Bais Godam, Jaipur, Rajasthan, India
                    </p>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter your first name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#021b67] focus:border-[#021b67]"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter your last name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#021b67] focus:border-[#021b67]"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#021b67] focus:border-[#021b67]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message here..."
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#021b67] focus:border-[#021b67]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-white bg-[#021b67] rounded-full hover:bg-[#3f72af] transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Image Content */}
                <div className="w-full hidden md:block md:w-1/2 mt-8 md:mt-0 text-center">
                    <img
                        className="w-full max-w-lg md:max-w-5xl mx-auto my-5"
                        src={assets.doctorContact} // Replace with your actual image URL
                        alt="Contact"
                    />
                </div>
            </section>

        </div>
    );
}

export default Contact;
