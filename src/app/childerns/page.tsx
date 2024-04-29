// components/OverlayImage.js
import Image from 'next/image'
import React from 'react'
import child from '../../../public/child1.webp'
import Link from 'next/link'
import LogoSlider from '../components/logoslide'
import Footer from '../components/footer'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '> Children’s Eye Care </div> 
     <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded w-[35rem] h-[30rem]  -mt-6"
        alt="eye clinic bradford"
        src={child}
        width={500}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className=" sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
      Get Your Child's
        Eyes Tested
      </h1>
      <ul className="mb-8 leading-relaxed text-lg font-serif list-disc ">
        <li className='hover:text-black transition duration-300 ease-in-out transform hover:scale-95  ' >
      You can't always tell when there is a problem with a child's vision, since they rarely complain about their sight but children often display behaviour that suggests there may be problems with their vision. They may rub their eyes regularly, blink a lot or hold objects close to their face. These are all signs that there may be a problem with the child's vision.

        </li>
        <li className='hover:text-black transition duration-300 ease-in-out transform hover:scale-95 ' >

      Regular eye check are extremely important as problems can develop at any time. Children may not realise they have problems with their vision, so it is important for eyes to be tested regularly even if the child isn’t showing any obvious signs of any problems.
      
        </li>
        <li  className='  hover:text-black transition duration-300 ease-in-out transform hover:scale-95 ' >

      If this is the case, it is imperative for your child to visit an optometrist as soon as possible. Early diagnosis of problems can prevent serious long-term difficulties with vision. And because eye health check are free for children under 16, there really is no reason not to get tested.
        </li>
      </ul>
      <div className="flex justify-center -mt-12">
      <Link href={"/contact"}>

<button className="hover:bg-blue-700 bg-black text-white  font-bold py-2 px-4 rounded
  mt-11 transition duration-300 ease-in-out transform border-blue-700 hover:scale-105">
  Book an Appoinment
</button>
</Link>
      </div>
    </div>
  </div>
</section>
<LogoSlider/>
<Footer/>


    </div>
  )
}

export default page


