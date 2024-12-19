import React from 'react'
import { assets } from '../assets/frontend/assets'

const About = () => {
    return (
        <div>
            <div id="" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20 bg-[#f4f8f9] items-center">
                {/* Left Section */}
                <div className="relative flex justify-center items-center">
                    {/* Image */}
                    <img
                        src={assets.doctorimg}
                        className="w-full max-w-md  object-cover rounded-md"
                        alt="Doctor"
                    />

                </div>

                {/* Right Section */}
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-[#021b67] font-bold text-3xl md:text-4xl">
                        My Background
                    </h1>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-justify md:w-[75%] leading-6 ">
                            A trusted, patient focused and experienced locum homeopathic doctor with a long history of  serving patients by successfully diagnosing, treating and also managing their illnesses and diseases. She has been a team player, able to get along with other healthcare professionals and also research professionals.

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

                </div>
            </div>

            <div id="" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20 bg-[#f4f8f9] items-center ">
                {/* Left Section */}


                {/* Right Section */}
                <div className="space-y-6 text-center md:text-right">
                    <h1 className="text-[#021b67] font-bold text-3xl md:text-4xl">
                        My Approach
                    </h1>
                    <div className="space-y-3 md:grid grid-cols-4">
                        <div className='col-span-1'></div>
                        <p className="text-gray-700 col-span-3 text-justify leading-6 ">
                            I seek a way of being with my patients that includes relational depth and connection, enabling my patients to benefit from a whole person therapeutic approach that pays attention to context, this I believe empowers people to focus generatively on what they can change or come to terms with to enhance tranquillity, acceptance and inner peace


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

                </div>

                <div className="relative flex justify-center items-center">
                    {/* Image */}
                    <img
                        src={assets.approachimg}
                        className="w-full max-w-md md:max-w-md object-cover rounded-md"
                        alt="Doctor"
                    />

                </div>
            </div>

            <div id="" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20 bg-[#f4f8f9] items-center">
                {/* Left Section */}
                <div className="relative flex justify-center items-center">
                    {/* Image */}
                    <img
                        src={assets.practiceimg}
                        className="w-full max-w-md  object-cover rounded-md"
                        alt="Doctor"
                    />

                </div>

                {/* Right Section */}
                <div className="space-y-6 text-center justify-items-center md:justify-items-start md:text-left">
                    <h1 className="text-[#021b67] font-bold text-3xl md:text-4xl">
                        Areas of Practice
                    </h1>
                    <div className="space-y-3">
                        <ul className="text-gray-700 text-justify font-semibold list-disc space-y-2">
                            <li>Long term Illness</li>
                            <li>Mental Health</li>
                            <li>Bereavement & Trauma</li>
                            <li>Children and adolescent</li>
                            <li>Women's Health</li>
                            <li>Skin Conditions</li>
                            <li>Infectious disease</li>
                            <li>Rehabilitation</li>
                        </ul>


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

                </div>
            </div>

            <div id="" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20 bg-[#f4f8f9] items-center ">
                {/* Left Section */}


                {/* Right Section */}
                <div className="space-y-6 text-center justify-items-center  md:justify-items-end ">
                    <h1 className="text-[#021b67] font-bold text-3xl md:text-4xl">
                        Expertise
                    </h1>
                    <div className="space-y-3 md:justify-items-end">
                        <ul className="text-gray-700 text-justify  md:text-left font-semibold list-disc space-y-2">
                            <li>Homeopathy</li>
                            <li>Diet and Nutrition</li>
                            <li>Vedic Counselling</li>
                            <li>Psychotheraputics</li>
                            <li>CBT</li>
                            <li>Meditative therapies</li>
                            <li>Infectious disease</li>
                            <li>Breathwork</li>
                        </ul>
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

                </div>

                <div className="relative flex justify-center items-center">
                    {/* Image */}
                    <img
                        src={assets.approachimg}
                        className="w-full max-w-md md:max-w-md object-cover rounded-md"
                        alt="Doctor"
                    />

                </div>
            </div>
        </div>
    )
}

export default About