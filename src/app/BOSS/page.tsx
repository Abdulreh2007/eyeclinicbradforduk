"use client"
import React from "react";
import { useState } from 'react';
import ImageViewerModal1 from '../gucci/imageveiwer';
// pages/index.js
import Image from 'next/image';
import logo from '../../../public/boss-logo.png'
import Footer from "../components/footer";
import LogoSlider from "../components/logoslide";

const images = [
 '/boss6.jpg',
 '/boss2.jpg',
 '/boss3.jpg',
 '/boss10.jpg',
 '/boss4.jpg',
 '/boss1.jpg',
 '/boss7.jpg',
 '/boss8.jpg',
 '/boss9.jpg',
 '/boss5.jpg',
 '/boss11.jpg',
 '/boss12.jpg',

     
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
                <Image src={logo} alt="eye clinic bradford" className=""/>
            </div>
      <div className=" mx-[4rem] rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 -mt-12">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative" onClick={handleImageClick}>
            <Image src={imageUrl} alt={`Image ${index + 1}`} width={300} height={200} className="object-cover cursor-pointer rounded-xl bg-black" />
          </div>
        ))}
        {showModal && <ImageViewerModal1 images={images} onClose={handleCloseModal} />}
      </div>
      <LogoSlider/>
      <Footer/>
      </div>
    );
  }
