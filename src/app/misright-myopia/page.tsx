import React from 'react'
import Image from 'next/image'
import myopia from '../../../public/myopia2.jpeg'
import LogoSlider from '../components/logoslide'
import Footer from '../components/footer'
const Page = () => {
  return (
    <div className='overflow-hidden'>

    <div className='uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg'>
        MiSight®️ 1 Day Contact Lenses
    </div>
<div>
<div className="max-w-full flex justify-center">
      <Image
        src={myopia}
        alt="Description of your image"
        width={500}
        height={300} // Provide the actual dimensions of your image here
        className="block sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto"
        />
    </div>
</div>

<LogoSlider/>
<Footer/>
       
        </div>
  )
}

export default Page