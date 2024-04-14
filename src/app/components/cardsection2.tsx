"use client"
import Link from 'next/link'
import React from 'react'

const Cardsection2 = () => {
  return (
    <div className='"text-gray-600 body-font mt-[-12rem]'>
        <div className='container px-5 py-24 mx-auto'>
          <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
          <div className="h-[85%] bg-gray-100 hover:bg-amber-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-xl shadow-xl overflow-hidden text-center relative transition duration-300 ease-in-out transform border-black hover:scale-105 focus:border-black focus:ring-2 focus:ring-black hover:shadow-2xl ">
            
            <h1 className="text-2xl font-bold text-gray-700 title-font mb-2 -mt-6">
            Eyecare Specialists
            </h1>
            <p className="leading-relaxed  mt-6 text-gray-600 ">
            We understand that everyone eyes are unique which is why we deliver a truly personal service to cater to your own individual needs.
            </p>
            <Link href={"/contact"}>
                  <button className="hover:bg-blue-700 bg-black text-white font-bold py-2 px-4 rounded mt-[9rem] transition duration-300 ease-in-out transform border-blue-700 hover:scale-105">
                    Book an Appointment
                  </button>
                </Link>
           
          </div>
        </div>
        
    
        {/* card2 */}

        <div className="p-4 lg:w-1/3">
          <div className="h-[85%] bg-gray-100 hover:bg-amber-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-xl shadow-xl overflow-hidden text-center relative transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 ">
            
            <h1 className="text-2xl font-bold text-gray-700 title-font  -mt-6">
            NHS Service Available
            </h1>
            <p className="leading-relaxed  mt-6">
            Vision is an extremely important factor that strongly can affect your quality of life. NHS services are available at our clinic.
                  <br />
                  <Link href={"https://web.archive.org/web/20161016065732/http://www.nhs.uk/chq/Pages/895.aspx?CategoryID=68&SubCategoryID=157"} target='_blank' className='inline-block text-blue-700 mt-2 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:underline'>
                    Check your availability here
                  </Link>
            </p>
            <Link href={"/contact"}>
                  <button className="hover:bg-blue-700 bg-black text-white font-bold py-2 px-4 rounded mt-[6rem] transition duration-300 ease-in-out transform border-blue-700 hover:scale-105">
                    Book an Appointment
                  </button>
                </Link>
           
          </div>
        </div>
        {/* card3 */}

        <div className="p-4 lg:w-1/3">
          <div className="h-[85%] bg-gray-100 hover:bg-amber-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-xl shadow-xl overflow-hidden text-center relative transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 ">
            
            <h1 className="text-2xl font-bold text-gray-700 title-font  -mt-6">
            Childrens Eyecare 
            </h1>
            <p className="leading-relaxed mb-3 mt-6">
            It is thought that over a million children up to the age of 16 in the UK could have undiagnosed eye conditions. Get your childrens eyes tested free.
            </p>
            <Link href={"/contact"}>
                  <button className="hover:bg-blue-700 bg-black text-white font-bold py-2 px-4 rounded  transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 mt-[8.5rem]">
                    Book an Appointment
                  </button>
                </Link>
           
          </div>
        </div>
        
       
      </div>
          
          
        </div>
    </div>
  )
}

export default Cardsection2