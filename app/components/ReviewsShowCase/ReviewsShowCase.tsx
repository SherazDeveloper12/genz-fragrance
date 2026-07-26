import React from 'react'
import Stars from '../Stars/Stars'
import Image from 'next/image'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

export default function ReviewsShowCase() {
    const reviews = [
        {
            name: 'John Doe',
            review: 'I absolutely love the fragrances from this store! The scents are unique and long-lasting. Highly recommend!',
            rating: 4,
            pic: avatar1
        },
        {
            name: 'Jane Smith',
            review: 'The customer service is top-notch. They helped me find the perfect fragrance for my needs. Will definitely be coming back!',
            rating: 3,
            pic: avatar2
        },
        {
            name: 'Alex Johnson',
            review: 'Fast shipping and great packaging. The fragrances arrived in perfect condition and smell amazing!',
            rating: 5,
            pic: avatar3
        }
        
    ]
    
  return (
    <div className='bg-black w-full p-4 py-12  text-white flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-2xl font-bold text-center'>Customer Reviews</h1>
        {/* Review Cards showcasing dummy people Reviews about our store */}
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            {reviews.map((review, index) => (
                <div key={index} className='bg-zinc-800 p-4 rounded-lg w-full md:w-1/3 flex  justify-between items-center gap-4'>
                    <div>
                        <Image
                        src={review.pic}
                        alt={review.name}
                        
                        className='rounded-full w-60 h-30'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>{review.name} <Stars rating={review.rating} /></h3>
                    <p className='text-sm'>"{review.review}"</p>
                    </div>
                    
                </div>
            ))}
            
          
        </div>
    </div>
  )
}
  