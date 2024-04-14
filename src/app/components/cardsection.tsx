"use client"
import Image from 'next/image';
import Link from 'next/link';

const CardSection = () => {
  return (
    <div className="text-gray-600 body-font -mt-6 ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
          <div className="h-[85%] bg-gray-100 hover:bg-amber-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-xl shadow-xl overflow-hidden text-center relative transition duration-300 ease-in-out transform border-black hover:scale-105 focus:border-black focus:ring-2 focus:ring-black hover:shadow-2xl ">
            
            <h1 className="text-2xl font-bold text-gray-700 title-font mb-2 -mt-6">
            Designer Eyewear
            </h1>
            <p className="leading-relaxed mb-3 mt-6 text-gray-600 hover:text-black">
            We at Eye Clinic Opticians believe glasses are not just to see in, but are a statement of who you are. We are the official stockist of Gucci, Tom Ford, Jimmy Choo, Saint Laurent, Hugo Boss, and Ted Baker.
            </p>
            <Link href={"/contact"}>
                  <button className="hover:bg-blue-700 bg-black text-white font-bold py-2 px-4 rounded mt-11 transition duration-300 ease-in-out transform border-blue-700 hover:scale-105">
                    Book an Appointment
                  </button>
                </Link>
           
          </div>
        </div>
        
    
        {/* card2 */}

        <div className="p-4 lg:w-1/3">
          <div className="h-[85%] bg-gray-100 hover:bg-amber-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-xl shadow-xl overflow-hidden text-center relative transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 ">
            
            <h1 className="text-2xl font-bold text-gray-700 title-font mb-2 -mt-6">
            0% Interest Payment Plan
            </h1>
            <p className="leading-relaxed mb-3 mt-6">
            We know glasses can be an expensive cost and therefore we offer a payment plan with Klarna which can be paid in 3 installments with 0% interest.
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
            
            <h1 className="text-2xl font-bold text-gray-700 title-font mb-2 -mt-6">
            Styling Appointment
            </h1>
            <p className="leading-relaxed mb-3 mt-6">
            We offer styling appointments to make sure we get the right glasses for you.
            </p>
            <Link href={"/contact"}>
                  <button className="hover:bg-blue-700 bg-black text-white font-bold py-2 px-4 rounded  transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 mt-[9.3rem]">
                    Book an Appointment
                  </button>
                </Link>
           
          </div>
        </div>
        
       
      </div>
    </div>
  </div>
  
  )}
export default CardSection;
