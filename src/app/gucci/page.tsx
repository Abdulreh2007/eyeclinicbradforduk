"use client"
import React from "react";
import { useState } from 'react';
import ImageViewerModal from './imageveiwer';
// pages/index.js
import Image from 'next/image';
import logo from '../../../public/logo2.png'
import Footer from "../components/footer";
import LogoSlider from "../components/logoslide";

const images = [
 '/gucci1.jpg',
 '/gucci2.jpg',
 '/gucci3.jpg',
 '/gucci4.jpg',
 '/gucci5.jpg',
    '/gucci6.jpg',
    '/gucci7.jpg',
    '/gucci8.jpg',
    '/gucci9.jpg',
     '/gucci10.jpg',
     '/gucci11.jpg',
     '/gucci12.jpg',
  ];


  export default function Home() {
    const [showModal, setShowModal] = useState(false);
  
    const handleImageClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
        <div className="overflow-hidden" >
            <div className="sticky top-0 z-50">

            {/* <Nav /> */}
            </div>
            <div className="flex justify-center mt-4 ">
                <Image src={logo} alt="logo" className=""/>
            </div>
      <div className=" mx-[4rem] rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative" onClick={handleImageClick}>
            <Image src={imageUrl} alt={`Image ${index + 1}`} width={300} height={200} className="object-cover cursor-pointer rounded-xl" />
          </div>
        ))}
        {showModal && <ImageViewerModal images={images} onClose={handleCloseModal} />}
      </div>
      <LogoSlider/>
      <Footer/>
      </div>
    );
  }

  

  
 
 
