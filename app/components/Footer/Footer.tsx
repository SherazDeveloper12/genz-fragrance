'use client'
import React from 'react'
import FacebookFillIcon from '@iconify-react/akar-icons/facebook-fill';
export default function Footer() {
  return (
    <div className='bg-black text-white p-6 text-center flex flex-col  '>
       <div className='flex '>
        
        <div className="max-w-sm  text-justify ">
            <h1 className="text-2xl font-bold flex justify-start items-baseline gap-2 cursor-pointer">
                {/* gradient color */}
                <p className=" text-red-500 font-serif">GenZ</p>
                <p className='text-white font-extralight  dark:text-gray-300 font-serif'>Fragrance</p>
            </h1>
            <p className="text-white text-lg mt-2">
                Discover the perfect scent for every moment with us. Love and fragrance can't be hidden.
            </p>
        </div>
        <div>
          <p>Follow us on social media!</p>
          <div className='flex gap-4 mt-2'>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <FacebookFillIcon height="2em" style={{ color: '#fff' }} />
            </a>
            {/* Add more social media icons here */}
          </div>
        </div>
        <div className="max-w-sm text-justify ml-8">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-white text-lg">
                Email: info@genzfragrance.com
            </p>
        </div>
        <div>

        </div>
        
       </div>
       <p>
            &copy; {new Date().getFullYear()} GenZ Fragrance. All rights reserved.
        </p>
    </div>
  )
}
