import React from 'react'

import coverimage from '../../assets/cover-image.jpeg'

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${coverimage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
      className=" w-full h-screen bg-zinc-50 font-sans dark:bg-black  flex items-center"
    >
      <div className="flex flex-col items-start justify-center ml-4  lg:ml-12 max-w-xl lg:max-w-3xl p-1 lg:p-4  text-justify ">
        <p className="text-2xl lg:text-6xl font-bold text-white ">GenZ Fragrance</p>
        <p className="text-white w-xs lg:w-full text-md lg:text-3xl mt-4">Discover the perfect scent for every moment with us. love and fragrance can't be hidden.</p>
     <div className='w-full flex items-center'>
      <button className="bg-red-500 text-white cursor-pointer px-4 lg:px-8 py-1 lg:py-3 font-bold rounded-lg mt-4 lg:mt-8 ml-4 lg:ml-8 hover:bg-red-600 transition-colors">
        Shop Now
      </button>
     <button className="bg-transparent border-2 cursor-pointer border-white text-white  px-4 lg:px-8 py-1 lg:py-3  font-bold rounded-lg mt-4 lg:mt-8 ml-4 lg:ml-8 hover:bg-white hover:text-red-500 transition-colors">
        Contact Us
      </button>
     </div>
      </div>
      
    </div>
  )
}
