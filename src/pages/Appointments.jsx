import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookAppointment from '../components/BookAppointment'
import FAQ from '../components/FAQ'
import Review from '../components/Review'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { assets } from '../assets/frontend/assets'




function Appointment() {


  const reviews = [
    {
      name: "Arjun Mehta",
      review: "The staff was very professional and caring. The facilities were top-notch and clean. I felt well taken care of during my visit.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Priya Sharma",
      review: "I had a wonderful experience here. The doctors took the time to explain my condition and the treatment options thoroughly.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Ravi Kapoor",
      review: "The waiting time was minimal, and the staff ensured that everything went smoothly. Highly recommended for quality care.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Neha Verma",
      review: "The emergency department is well-equipped, and the response time was excellent. Truly lifesaving service!",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Kunal Singh",
      review: "I appreciate the efforts of the nurses and administrative staff. They were polite, attentive, and efficient.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Aditi Rao",
      review: "The doctors here are very knowledgeable and patient. They ensured I was comfortable and informed throughout my treatment.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Vikram Joshi",
      review: "Impressive infrastructure and state-of-the-art technology. This is the best facility I have visited in the city.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Ritika Malhotra",
      review: "The pediatric department was very child-friendly, and my kid felt at ease. Great care for families.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Sanjay Patil",
      review: "The physiotherapy unit helped me recover from my injury faster than I expected. The therapists were encouraging and skilled.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Meera Iyer",
      review: "The billing process was transparent and hassle-free. Great to see a facility that values its patients' time and trust.",
      image: "https://via.placeholder.com/300"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
  };

  

  return (

    <div>
       
        <BookAppointment/>
        <div className='py-16 text-center space-y-4  md:mx-0 bg-[#f4f8f9]'>
        <h1 className='text-3xl md:text-5xl font-bold text-[#021b67]'>Frequently Asked Questions</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo facere a quaerat exercitationem harum! <br className='md:block' /> Beatae fugiat perferendis nihil laborum?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          <div className='md:pl-10 order-2 md:order-1'>
            <FAQ ques = 'How many services provided from here?' ans = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae doloremque dolorem numquam ut. Cum quibusdam, doloremque, harum necessitatibus minima, quam iure corporis dolor nobis molestiae esse ducimus! Quas, facere.' />
            <FAQ ques = 'How many services provided from here?' ans = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae doloremque dolorem numquam ut. Cum quibusdam, doloremque, harum necessitatibus minima, quam iure corporis dolor nobis molestiae esse ducimus! Quas, facere.' />
            <FAQ ques = 'How many services provided from here?' ans = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae doloremque dolorem numquam ut. Cum quibusdam, doloremque, harum necessitatibus minima, quam iure corporis dolor nobis molestiae esse ducimus! Quas, facere.' />
            <FAQ ques = 'How many services provided from here?' ans = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae doloremque dolorem numquam ut. Cum quibusdam, doloremque, harum necessitatibus minima, quam iure corporis dolor nobis molestiae esse ducimus! Quas, facere.' />
            <FAQ ques = 'How many services provided from here?' ans = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae doloremque dolorem numquam ut. Cum quibusdam, doloremque, harum necessitatibus minima, quam iure corporis dolor nobis molestiae esse ducimus! Quas, facere.' />
            <FAQ ques = 'How many ser vices provided from here?' ans = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae doloremque dolorem numquam ut. Cum quibusdam, doloremque, harum necessitatibus minima, quam iure corporis dolor nobis molestiae esse ducimus! Quas, facere.' />
            
          </div>

          <div className='flex items-center justify-center  order-1 md:order-2'>
            <img src={assets.faq} className='w-full max-w-[400px]' alt="" />
          </div>
        </div>


      <div className=' pt-20'>

x
      </div>
      

        </div>
      
    </div>
  )
}

export default Appointment