import React from 'react';
import LogoSlider from '../components/logoslide';
import Footer from '../components/footer';
import Link from 'next/link';

function VideoComponent() {
  return (
    <div className=''>
      <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '>what is myopia ?</div>
      <iframe
       
        src="https://www.youtube.com/embed/O8M_zbdlCmc?si=9f9t61G9YdPURBcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className='mx-[10rem] mt-12 rounded-xl  sm: sm:h-[3rem] md:w-[50rem] md:h-[27rem] lg:w-[50rem] h-[25rem] xl:w-10  '
      ></iframe>
      <div className='bg-black py-16 mt-9 rounded-xl '>
        <p className='text-white text-lg mx-11 '>
          Get in contact on 01274 772787 or <Link className='hover:text-blue-500' href={"/contact"}>
contact@eyeclinicopticians.co.uk </Link> to find out more or to book an appointment.</p>
      </div>
      <div className='overflow-hidden m-10'>
      <LogoSlider/>
      <Footer/>
      </div>
    </div>
  );
}

export default VideoComponent;