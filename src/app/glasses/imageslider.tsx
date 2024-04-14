"use client"
// components/GlassesSlider.js
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';

const glasses = [
  {
    id: 1,
    image: '/gucci1.jpg',
    name: 'Eyeglasses 1',
    brand: 'GUCCI',
  
  },
  {
    id: 2,
    image: '/gucci2.jpg',
    name: 'Eyeglasses 2',
    brand: 'GUCCI',
  },
  {
    id: 3,
    image: '/gucci12.jpg',
    name: 'Eyeglasses 3',
    brand: 'GUCCI',
  },
  {
    id: 4,
    image: '/gucci3.jpg',
    name: 'Eyeglasses 4',
    brand: 'GUCCI',
  }
];
const GlassesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === glasses.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? glasses.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={glasses[activeSlide].image}
          alt={glasses[activeSlide].name}
          className="w-full object-cover transition-transform duration-500 transform-gpu scale-100 hover:scale-105"
        />
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-gray-900 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-700"
        >
          <BsArrowLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-gray-900 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-700"
        >
          <BsArrowRight className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white p-2">
        <h3 className="text-sm font-semibold">{glasses[activeSlide].name}</h3>
        <p className="text-xs">{glasses[activeSlide].brand}</p>
        
      </div>
    </div>
  );
};

export default GlassesSlider;
