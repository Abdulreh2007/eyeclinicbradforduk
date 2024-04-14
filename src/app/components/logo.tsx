import React from 'react';
import LogoSlider from './logoslide'; // Import the LogoSlider component

const HomePage: React.FC = () => {
  const logos: string[] = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
  ];

  return (
    <div className="relative ">
      <h1>Welcome to My Website</h1>
      <div className="relative z-10"> {/* Ensure the slider is positioned above other content */}
        <LogoSlider  /> {/* Render the LogoSlider component */}
      </div>
    </div>
  );
};

export default HomePage;
