import React from 'react'
import logo from '../../../public/eye.png'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import facelogo from '../../../public/Facebook_Logo_Primary.png'
import xlogo from '../../../public/xlogo.jpg'

const Footer = () => {
  return (
    <div className=''>
        <footer className="text-gray-600 body-font mt-11">
  <div className="container px-5 py-24 mx-3 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <Image src={logo} alt='eye clinic bradford' width={100} height={100}/>
      <p className="mt-2 text-sm  text-gray-500">
        <p className='-mx-8 sm:mx-2'>
       📋 738, Great Horton Road
        </p>
      
      <p className='flex mx-2 mt-1 gap-1 text-blue-500 hover:text-gray-500'>
      <IoLocationOutline className='mt-1' />
       <Link href={"https://www.google.com/maps/place/738+Great+Horton+Rd,+Bradford+BD7+4EE,+UK/@53.778752,-1.788806,9z/data=!4m6!3m5!1s0x487be6e86c2e8709:0x6b5de143fac9efeb!8m2!3d53.7787521!4d-1.7888058!16s%2Fg%2F11c2d25bk8?hl=en-US&entry=ttu"}
       target='blank'>
       Bradford, BD7 4EE
      </Link>
      </p>
      <p className='flex gap-1 mx-2 mt-1'>
      
      <FaPhoneAlt className='flex mt-1' />01274 772 787
      </p>
      <p className='flex gap-1 flex-initial mx-2 mt-1'>   
      
      <HiOutlineMail className='mt-1 ' /> contact@eyeclinicopticians.co.uk
    
      </p>
         </p>
{/* timings */}
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 -mt-0 md:text-left text-center">
     
      <div className="lg:w-1/2 md:w-1/2 w-full ">
        <div className=' rounded-xl hover:shadow-md w-[13rem] transition duration-300 ease-in-out transform hover:scale-105'>
        <h2 className="title-font text-lg font-bold  text-gray-900 tracking-widest mx-1  mb-3">
          TIMINGS
        </h2>
       <ul className='list-disc list-inside -mx-3 font-sans cursor-grab'>
        <li className='hover:text-black'>Monday: 9:30-17:00</li>
        <li className='hover:text-black'>Tuesday: 9:30-19:30</li>
        <li className='hover:text-black'>Wednesday: 9:30-17:00</li>
        <li className='hover:text-black'>Thursday: 9:30-17:00</li>
        <li className='hover:text-black'>Friday: 9:30-17:30</li>
        <li className='hover:text-black'>Saturday: 9:30-14:30</li>
        <li className='hover:text-black'>Sunday: Closed</li>

       </ul>
      </div>
      </div>
      {/* menu */}
      <div className="lg:w-1/2 md:w-1/2  px-4  rounded-xl hover:shadow-lg w-[13rem] transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
          Menu  </h2>
        <div className="list-none mb-10">
          <li>
            <Link href={"/"} className="text-gray-600 hover:text-black">Home</Link>
          </li>
          <li>
            <Link href={"/eyetest"} className="text-gray-600 hover:text-black">Eye Test</Link>
          </li>
          <li>
            <Link href={"/glasses"} className="text-gray-600 hover:text-black">Glasses</Link>
          </li>
          <li>
            <Link href={"/contact-lenses"} className="text-gray-600 hover:text-black">Contact lanses</Link>
          </li>
          <li>
            <Link href={"/childerns"} className="text-gray-600 hover:text-black">Childern</Link>
          </li>
          <li>
            <Link href={"/myopia"} className="text-gray-600 hover:text-black">Myopia</Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-gray-600 hover:text-black">Contact us</Link>
          </li>
        </div>
      </div>
    </div>
  </div>
  <div className="-mt-16 bg-black py-3 rounded-ee-xl rounded-es-xl">
    <div className="container mx-auto py-4 px-5 flex flex-wrap justify-center flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left  ">
         Copyright © 2024 Eye Clinic Opticians Ltd is a company registered in England and Wales with company registration number 10055619
      
      </p>
    </div>
  <div className='mx-[30rem] -mt-2 flex justify-center gap-3 '>
  <div className=' text-xl '>
    <Link href={'#'}>
  <Image src={facelogo} alt='eye clinic bradford' className='w-6'/>
  </Link>
  </div>
  <div className=' text-2xl text-gray-400 hover:text-gray-800'>
    <Link href={'#'}>
    <FaSquareXTwitter />
  </Link>

  </div>
  <div className=' text-2xl  hover:text-gray-800'>
    <Link href={'#'}>
    <FaSquarePinterest className='text-red-700 hover:text-red-400' />
  </Link>
  
  </div>
  </div>
  </div>
</footer>

    </div>
  )
}

export default Footer