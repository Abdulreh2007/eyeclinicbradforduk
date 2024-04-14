import Link from 'next/link'
import React from 'react'
import { IoMdCall } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5'
import { MdHeadsetMic } from "react-icons/md";
import LogoSlider from '../components/logoslide';
import Footer from '../components/footer';

const Page = () => {
  return (
    <div className='overflow-hidden'>
           <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '> CONTACT</div> 
           <p className=' flex text-center mt-5 mx-1 text-black '>Get in touch either by phone (01274 772787), email (contact@eyeclinicopticians.co.uk) or by using the form below to arrange an appointment. We will get back to you as soon as possible to confirm your booking.</p>
      <section className="text-gray-600 body-font relative -mt-6">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <div className='hover:grayscale-1'>
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 hover:grayscale"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d75415.221385794!2d-1.76855!3d53.79437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be6e86c2e8709%3A0x6b5de143fac9efeb!2s738%20Great%20Horton%20Rd%2C%20Bradford%20BD7%204EE%2C%20UK!5e0!3m2!1sen!2sus!4v1709739235305!5m2!1sen!2sus"
          style={{ filter: " contrast(1.2) opacity(0.9) " }}
          />
          </div>
        <div className="bg-white  relative flex flex-wrap py-6 rounded shadow-2xl">
          <div className="lg:w-1/2  px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">
              ADDRESS
            </h2>
            <p className="mt-1 flex hover:text-gray-600 text-blue-700 ">
            <IoLocationOutline className='text-lg mt-1' />
       <Link href={"https://www.google.com/maps/place/738+Great+Horton+Rd,+Bradford+BD7+4EE,+UK/@53.778752,-1.788806,9z/data=!4m6!3m5!1s0x487be6e86c2e8709:0x6b5de143fac9efeb!8m2!3d53.7787521!4d-1.7888058!16s%2Fg%2F11c2d25bk8?hl=en-US&entry=ttu"}
       target='blank'>
        
      738 Great Horton Road
       Bradford, BD7 4EE
      
      </Link>

            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">
              EMAIL
            </h2>
            <p className="hover:text-gray-600 text-blue-700 leading-relaxed flex gap-1 "> <MdHeadsetMic  className='mt-1 space-x-1'/> Pckeycallout@yahoo.com</p>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed  ">Custumer Service Number <p className='flex gap-1'>  <IoMdCall className='mt-1 gap-1 ' /><p>01274 772 787</p> </p>   </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-black text-2xl mb-1 flex justify-center -mt-2  font-bold">
          Sand Us A Message
        </h2>
        <form 
        action="https://formspree.io/f/moqgkwoz"
        method="POST"
         >
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required />
        </div>
        <div className="relative mb-4">
          <label htmlFor="Subject" className="leading-7 text-sm text-gray-600">
            subject
          </label>
          <input
            type="text"
            id="Subject"
            name="Subject"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
         required />
        </div>
        <button className="hover:bg-black  bg-blue-700 text-white  font-bold py-2 px-4 rounded
            transition duration-300 ease-in-out transform hover:scale-105 flex justify-center border-gray-300 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-200 ">
          Submit
        </button>
        </form>
        
      </div>
    </div>
  </section>
   <div className=' mx-4  p-4'>
    <h1 className='text-3xl font-bold mb-4  hover:underline '>Return Policy</h1>
    <p className=' text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:text-black text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl     hover:rounded-xl '>In the unlikely event of not being happy with non-prescription frames or non-prescription sunglasses, we will be happy to exchange or refund the full amount within 14 days of purchase. It should be noted that this applies only to unworn products, returned in their original condition and packaging and accompanied by a valid receipt. For further details please contact customer service on <p className='flex gap-1 '> <MdHeadsetMic className='flex mt-1 gap-1 text-black '/> 01274 772 787.</p></p>
   </div>
   <LogoSlider/>
   <Footer/>
  </div>
  )
}

export default Page