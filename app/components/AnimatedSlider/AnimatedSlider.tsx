import React from 'react'

export default function AnimatedSlider() {
    const slides = [
        {
            id: 1,
            text: "Get 10% off your first purchase!",
        },
        {
            id: 2,
            text: "Free shipping on orders over $50!",
        },
        {
            id: 3,
            text: "New arrivals are here! Check them out!",
        },
        {
            id: 4,
            text: "Limited Stock! Grab your favorite fragrance now!",
        }
    ];
  return (
    <div className='bg-red-700 w-full'>
        <div className='w-full overflow-hidden'>
            <div className='flex w-max gap-6 whitespace-nowrap animate-lefttoright'>
        {slides.map((slide) => (
                        <div key={slide.id} className='bg-red-700 text-white p-4 text-center font-bold text-xl'>
                <p>{slide.text}</p>
            </div>
        ))}
            </div>
    </div>
    </div>
  )
}
