// pages/video.js

// pages/video.tsx

// pages/video.tsx

import Head from 'next/head';
import LogoSlider from '../components/logoslide';
import Footer from '../components/footer';
import Link from 'next/link';

const VideoPage: React.FC = () => {
  return (
    <div className='overflow-hidden '>
          <div className=' uppercase text-center text-4xl text-white mx-2 rounded-es-2xl rounded-ee-2xl font-bold bg-black py-1 px-2 shadow-lg '>what is myopia ?</div>
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* <Head>
        <title>Embedded YouTube Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className="max-w-screen-lg mx-auto bg-whit p-8 rounded-xl shadow-m w-full -mt-3">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          {/* 16:9 aspect ratio (9 / 16 * 100) */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/O8M_zbdlCmc?si=9f9t61G9YdPURBcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>
      </div>
    </div>
    <div className='bg-black py-16 mt-3 rounded-xl '>
        <p className='text-white text-lg mx-11 '>
          Get in contact on 01274 772787 or <Link className='hover:text-blue-500' href={"/contact"}>
contact@eyeclinicopticians.co.uk </Link> to find out more or to book an appointment.</p>
      </div>
    <LogoSlider/>
    <Footer/>
    </div>
  );
};

export default VideoPage;