import Image from 'next/image'
import React from 'react'
import eyetest2 from '../../../public/eyetest2.jpg'
import Footer from '../components/footer'
import LogoSlider from '../components/logoslide'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
     <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '> eye test</div> 
     <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg   overflow-hidden ">
      <div className="w-full md:w-1/2 p-7">
        <Image className="object-cover w-full h-full rounded-xl" src={eyetest2} alt="eye clinic bradford" />
      </div>
      <div className="w-full md:w-1/2 p-8 h-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center  mb-4">TAKE AN EYE TEST</h2>
        <ul className="text-lg text-gray-700 list-disc font-serif -ml-8">
          <li className='hover:text-black'>
        Regular check-ups are crucial for healthy vision at any age. Your eye examination will help us see whether you need glasses or contact lenses and will allow us to diagnose any underlying problems. Problems that are diagnosed early are easier to treat and can prevent any long-term damage.   </li> 
<li className='hover:text-black'>
As part of our standard eye examinations we include Digital Retinal Photography, a simple and painless procedure which takes an image of the back of the eye. This procedure is extremely useful for monitoring eye health and can be used to detect serious problems such as glaucoma and tumours. Your wellbeing is our priority, which is why we believe the use of this technology is absolutely essential.
</li>
<li className='hover:text-black'>
You can check your eligibility for a free NHS eye examination  here . For further enquiries or to book an appointment, use the form below or give us a call on 01274 772 787.
</li>
        </ul>
        <Link href={"/contact"}>

<button className="mt-[12rem] md:mt-5 transition duration-300 ease-in-out transform border-blue-700 hover:scale-105 md:ml-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl    ">
  Book an Appoinment
</button>
</Link>
      </div>
      
    </div>
    <LogoSlider/>

   <Footer/>
    </div>

  )
}

export default Page