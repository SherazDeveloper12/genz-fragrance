import React from 'react'

import perfumeWaterRed from '../../assets/perfume-water-red.png'

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${perfumeWaterRed.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className=" w-full h-screen bg-zinc-50 font-sans dark:bg-black  flex items-center"
    >
      <div className="flex flex-col items-start justify-center   ml-12 max-w-3xl p-4  text-justify ">
        <p className="text-6xl font-bold text-white ">GenZ Fragrance</p>
        <p className="text-white text-3xl mt-4">Discover the perfect scent for every moment with us. love and fragrance can't be hidden.</p>
     <div className='w-full flex items-center'>
      <button className="bg-red-500 text-white cursor-pointer px-8 py-3 font-bold rounded-lg mt-8 ml-8 hover:bg-red-600 transition-colors">
        Shop Now
      </button>
     <button className="bg-transparent border-2 cursor-pointer border-white text-white px-8 py-3 font-bold rounded-lg mt-8 ml-8 hover:bg-white hover:text-red-500 transition-colors">
        Contact Us
      </button>
     </div>
      </div>
      
    </div>
  )
}
