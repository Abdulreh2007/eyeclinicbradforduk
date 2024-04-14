// components/HeroSlider.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
// components/HeroSlider.js


import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/hero1.png',
    title: 'WHY US!',
    description: '',
    titleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black text-left mx-3 ',
    descriptionClass: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    animation: 'fade-in-slide ls ease-out'
  },
  {
    image: '/hero2.jpg',
    title: 'Want to look your best? ',
    smdescription:' Arrival 2024',
    description: 'Eye Clinic Opticians was established in 2016 to bring a personalised tailored eye care service to the public, where every customer requirements are taken into account as we believe two eyes are never the same.',
    titleClass: 'text-4xl text-left font-bold text-black mx-3',
    smdescriptionClass:'text-6xl font-bold text-left mx-4  ',
    descriptionClass: 'text-2xl text-left',
    animation: 'fade-in-slide 1s ease-out'
  },
  {
    image: '/hero3.jpg',
    title: 'Official Stockist',
    description: 'Gucci ,Tom Ford ,Jimmy Choo ,Saint Laurent ,Hugo Boss and Ted Baker',
    titleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ',
    descriptionClass: 'text-3xl ',
    animation: 'fade-in-slide 1s ease-out'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-1' : 'opacity-0'
          } ${slide.animation}`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-cente text-white">
        <div className="max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <h1 className={`${slides[currentSlide].titleClass} mb-4`}>
            {slides[currentSlide].title}
          </h1>
          <h2 className={`${slides[currentSlide].smdescriptionClass}mb-2`}>
            {slides[currentSlide].smdescription}

          </h2>
          <p className={`${slides[currentSlide].descriptionClass} mb-8`}>
            {slides[currentSlide].description}
          </p>
          {currentSlide === 0 && (
            <ul className="text-base md:text-lg lg:text-xl font-medium mb-4 text-left  list-disc mx-3">
              <li>Comprehensive Eye Exams</li>
              <li>Digital Retinal Photography Technology</li>
              <li>NHS Services Available</li>
              <li>Urgent MECS Appointments Available</li>
              <li>Contact lenses assessment/aftercare available</li>
              <li>Styling appointments</li>

            </ul>
          )}
          <div>
            <Link
              href="/contact"
              className="hover:bg-white hover:text-black bg-black text-white  font-bold py-3 px-4 rounded transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 "
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;