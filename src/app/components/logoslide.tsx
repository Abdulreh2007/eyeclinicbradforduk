"use client"
import React, { useState, useEffect } from 'react';


const logos  = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    
  ];

  const LogoSlider: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide(prevSlide => (prevSlide === logos.length - 1 ? 0 : prevSlide + 1));
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [logos.length]); // Re-run effect when number of logos changes
  
    return (
      <div className="relative  w-auto h-auto">
        <div
          className="flex absolute top-0 left-0 transition-transform duration-1000"
          style={{
            transform: `translateX(-${activeSlide * (100 / 4)}%)`,
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/4   ">
              <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto " />
            </div>
          ))}
          {/* Duplicate logos to ensure continuous loop */}
          {logos.length > 4 && logos.slice(0, 4).map((logo, index) => (
            <div key={index + logos.length} className="flex-shrink-0 w-1/4  ">
              <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto " />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoSlider;
