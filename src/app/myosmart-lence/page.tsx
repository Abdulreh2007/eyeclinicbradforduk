import Image from 'next/image'
import React from 'react'
import myo from '../../../public/myopia-pic2.png'
import LogoSlider from '../components/logoslide'
import Footer from '../components/footer'
const page = () => {
  return (
    <div className='overflow-hidden'>
        <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '> Miyosmart Lenses </div>
      <div className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-6 flex justify-center '>
      <Image src={myo} alt='myopia' 
      className='w-auto h-auto rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105  '
      width={800}
      height={800}
      />
       </div>
       
      <div className="max-w-screen-lg mx-auto bg-whit p-8 rounded-2xl shadow-m w-full  mt-7">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          {/* 16:9 aspect ratio (9 / 16 * 100) */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/2Q0Duwpp1MQ?si=Iqoivdao2uSo4ThN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>
      </div>
     <LogoSlider/>
     <Footer/>

    </div>
  )
}

export default page