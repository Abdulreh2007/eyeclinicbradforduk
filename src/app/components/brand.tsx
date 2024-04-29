import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gucci from '../../../public/gucci.jpeg'
import tom from '../../../public/tom.jpeg'
import jimmy from '../../../public/jimmy.jpeg'
import sany from '../../../public/sainy.jpeg'
import boss from '../../../public/booss.jpeg'
import ted from '../../../public/ted.jpeg'

const Brand = () => {

  return (
    <div className='mt-2'> 
     
  <div className="container px-5 py-4 mx-auto" 
  >
    <div className="flex flex-wrap -m-5  ">
      <div className="p-4 lg:w-1/3  ">
      <Link href={"/gucci"}>
      
        <Image className='rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl'  priority src={gucci} alt='eye clinic bradford gucci'
        />
        </Link>
        
        
      </div>
      <div className="p-4 lg:w-1/3">

        <Link href={"Tomford"}>

      <Image className='rounded-xl shadow-2xl transition duration-300 ease-in-out transform hover:scale-105' priority src={tom} alt='eye clinic bradford' />
        </Link>
        
      </div>


      <div className="p-4 lg:w-1/3">
      <Link href={"/BOSS"}>
          
      <Image className='rounded-xl shadow-2xl transition duration-300 ease-in-out transform hover:scale-105' priority src={boss} alt='eye clinic bradford' />
          </Link>
       
      </div>
      <div className="p-4 lg:w-1/3">
      <Link href={"/ted-baker"}>
          
      <Image className='rounded-xl transition shadow-2xl duration-300 ease-in-out transform hover:scale-105' priority src={ted} alt='eye clinic bradford' />
          </Link>
       
      </div>
      <div className="p-4 lg:w-1/3">
      <Link href={"/saint-laurent"}>
      <Image className='rounded-xl transition duration-300 ease-in-out shadow-2xl transform hover:scale-105' priority src={sany} alt='eye clinic bradford' />
      </Link>
      </div>
      <div className="p-4 lg:w-1/3">
      <Link href={"/jimmy-choo"}>
      <Image className='shadow-2xl rounded-xl transition duration-300 ease-in-out transform hover:scale-105' priority src={jimmy} alt='eye clinic bradford' />
       
      </Link>
      </div>
      
    </div>
  </div>
{/* </section> */}

    
    </div>
  )
}

export default Brand