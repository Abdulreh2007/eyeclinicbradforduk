import { useState } from 'react';
import Image from 'next/image';

interface ImageViewerModalProps {
  images: string[]; // Specify the type of the array elements
  onClose: () => void;
}

const ImageViewerModal2: React.FC<ImageViewerModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
      <div className="max-w-3xl bg-white rounded-lg overflow-hidden">
        <button className="absolute  mt-[28rem]  hover:bg-gray-900 hover:text-white text-black bg-white p-2 rounded-full" onClick={onClose}>
          Close
        </button>
        <div className="relative w-[23rem] h-[25rem]">
          <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} layout="fill" objectFit="contain" className='bg-black' />
        </div>
        <div className="flex justify-between px-4  py-2">
          <button onClick={handlePrev} className="text-gray-700 hover:text-gray-900">&#8592; Prev</button>
          <button onClick={handleNext} className="text-gray-700 hover:text-gray-900">Next &#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewerModal2;

