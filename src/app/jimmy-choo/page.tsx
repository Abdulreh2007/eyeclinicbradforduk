"use client"
import React from "react";
import { useState } from 'react';
import ImageViewerModal from '../gucci/imageveiwer';
// pages/index.js
import Image from 'next/image';
import logo from '../../../public/jimmy-choo.png'
import Footer from "../components/footer";
import LogoSlider from "../components/logoslide";

const images = [
'/jimmy1.jpg',
'/jimmy2.jpg',
'/jimmy3.jpg',
'/jimmy4.jpg',
'/jimmy5.jpg',
'/jimmy6.jpg',
'/jimmy7.jpg',
'/jimmy8.jpg',
'/jimmy9.jpg',
'/jimmy10.jpg',
'/jimmy11.jpg',
'/jimmy12.jpg',
 '/jimmy13.jpg',
 '/jimmy14.jpg',
 '/jimmy15.jpg',
 '/jimmy16.jpg',

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

  

  
 
 
