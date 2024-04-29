// pages/index.js
"use client"
import React from "react";
import { useState } from 'react';
import ImageViewerModal1 from './imagemodel';
// pages/index.js
import Image from 'next/image';
import logo from '../../../public/tom-ford-logo.png'
import Footer from "../components/footer";
import LogoSlider from "../components/logoslide";

const images = [
 '/tom6.jpg',
 '/tom2.jpg',
 '/tom3.jpg',
 '/tom4.jpg',
 '/tom5.jpg',
    '/tom1.jpg',
    '/tom7.jpg',
    '/tom8.jpg',
    '/tom9.jpg',
     '/tom10.jpg',
     
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
            <div className="flex justify-center -mt-[4rem] ">
                <Image src={logo} alt="logo" className=""/>
            </div>
      <div className=" mx-[4rem] rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 -mt-12">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative" onClick={handleImageClick}>
            <Image src={imageUrl} alt={`eye clinic bradford ${index + 1}`} width={300} height={200} className="object-cover cursor-pointer rounded-xl bg-black" />
          </div>
        ))}
        {showModal && <ImageViewerModal1 images={images} onClose={handleCloseModal} />}
      </div>
      <LogoSlider/>
      <Footer/>
      </div>
    );
  }

  