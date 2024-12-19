import React from 'react';
import DoctorsCard from './Service';
import { assets } from '../assets/frontend/assets';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Doctors() {
  const doctors = [
    {
      name: "Dr. Asha Sharma",
      role: "Cardiologist",
      description: "Expert in diagnosing and treating heart-related diseases and conditions.",
      rating: 5,
      image: assets.rani
    },
    {
      name: "Dr. Rajiv Kumar",
      role: "Orthopedic Surgeon",
      description: "Specializes in bone and joint surgeries, including fractures and arthritis.",
      rating: 4,
      image: assets.dev
    },
    {
      name: "Dr. Priya Mehta",
      role: "Dermatologist",
      description: "Specializes in skin, hair, and nail care with expertise in acne treatments.",
      rating: 5,
      image: assets.manisha
    },
    {
      name: "Dr. Anil Gupta",
      role: "Neurologist",
      description: "Focuses on brain and nervous system disorders like strokes and epilepsy.",
      rating: 4,
      image: assets.abhinav
    },
    {
      name: "Dr. Suman Reddy",
      role: "Pediatrician",
      description: "Provides medical care for infants, children, and adolescents.",
      rating: 5,
      image: assets.manisha
    },
    {
      name: "Dr. Ravi Singh",
      role: "Gastroenterologist",
      description: "Specializes in digestive system diseases and gastrointestinal disorders.",
      rating: 4,
      image: assets.dev
    },
    {
      name: "Dr. Meena Patel",
      role: "Endocrinologist",
      description: "Treats hormonal imbalances, diabetes, and metabolic disorders.",
      rating: 5,
      image: assets.rani
    },
    {
      name: "Dr. Vikram Joshi",
      role: "Oncologist",
      description: "Specializes in diagnosing and treating different types of cancer.",
      rating: 4,
      image: assets.dev
    },
    {
      name: "Dr. Shilpa Nair",
      role: "Psychiatrist",
      description: "Expert in mental health, helping patients with anxiety and depression.",
      rating: 5,
      image: assets.manisha
    },
    {
      name: "Dr. Arun Verma",
      role: "Ophthalmologist",
      description: "Specializes in eye care, including surgeries and vision correction.",
      rating: 4,
      image: assets.abhinav
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="py-10 bg-[#e2eaf9] space-y-6 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#021b67] text-center">
        Meet Our Expert Doctors
      </h1>
      {/* Description */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet
        quaerat corrupti in tempore perferendis enim aspernatur et eius temporibus!
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ">

        {doctors.slice(0,4).map((doctor) => {
          return <DoctorsCard name={doctor.name} role={doctor.role} desc={doctor.description} image={doctor.image} rating={doctor.rating} />
        })}

      </div>

    </section>
  );
}

export default Doctors;
