// components/ImageRight.tsx

import Image from "next/image";
import bg from '../../../public/bgglasses.avif'
import LogoSlider from "../components/logoslide";
import Footer from "../components/footer";
import Link from "next/link";

const ImageRight: React.FC = () => {
    return (
      <div className="overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="lg:w-1/2 p-4">
          <Image
            src={bg}
            alt="Your Image"
            className="w-full h-full rounded-xl"
            width={800} height={800}
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center py-2  " > 
Find Your Perfect Pair…</h1>
          
          <ul className="text-lg text-center list-disc font-serif lg:text-left text-gray-600">
           <li className="hover:text-black">Eye Clinic Opticians believe glasses are not just to see in, but are a statement of who you are.</li>
           <li className="hover:text-black">We are the official stockist of Gucci, Tom Ford, Jimmy Choo, Saint Laurent, Hugo Boss and Ted Baker.</li>
           <li className="hover:text-black">Also offer styling appointments to make sure we get the right glasses for you.</li>
           <li className="hover:text-black">We offer budget glasses which are free with an NHS voucher.</li>
           <li className="hover:text-black">Glasses can be an expensive cost and therefore we offer a payment plan with Klarna where you can be pay in 3 instalments with 0% interest.
          </li>
          </ul>
          <Link href={"/contact"}>

<button className="hover:bg-blue-700 bg-black text-white  font-bold py-2 px-4 rounded  mt-11 transition duration-300 ease-in-out transform border-blue-700 hover:scale-105">
  Book an Appoinment
</button>
</Link>
        </div>
       
      </div>
      
      
       
      </div>
    );
  };
  
  export default ImageRight;
  