import React from 'react'
import lence from '../../../public/contactlence3.jpg'
import Image from 'next/image'
import LogoSlider from '../components/logoslide';
import Footer from '../components/footer';
import Link from 'next/link';

const page = () => {
    return(
        <div className='overflow-hidden bg-white'>
         <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '> Children’s Eye Care </div> 
         <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl p-8">
      <div className="md:w-1/2">
        <Image src={lence} alt="Your Image" className="w-full  rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 md:ml-8">
        <h1 className="text-xl md:text-4xl font-bold mb-4 -mt-[rem]">
Contact Lenses Are An Extremely Popular Option For Vision Correction. They Provide Freedom Without The Need To Wear Glasses.</h1>
        <p className="text-xl md:text-xl mb-4 hover:text-black">
        Like spectacles, there are a number of options when it comes to contact lenses. You can opt for daily disposables or re-useable contact lenses depending on your needs. There are toric contact lenses for astigmatic prescription, in which the eye is shaped more oval, and there are multifocal lenses available to help vision at any distance.
        </p>
        <Link href={"/contact"}>

          <button className="hover:bg-blue-700 bg-black text-white  font-bold py-2 px-4 rounded
            mt-11 transition duration-300 ease-in-out transform border-blue-700 hover:scale-105">
            Book an Appoinment
          </button>
         </Link>
      </div>
    </div>
       
       <LogoSlider/>
      <Footer/> 
      </div>

  );
};        

export default page