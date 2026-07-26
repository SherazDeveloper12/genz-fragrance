import React from 'react'
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'
import image6 from '../../assets/6.png'
import image7 from '../../assets/7.png'
import image8 from '../../assets/8.png'
import image9 from '../../assets/9.png'
import image10 from '../../assets/10.png'
import image11 from '../../assets/11.png'
import Image from 'next/image';
import Stars from '../Stars/Stars'

export default function ProductShowCase() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for Product 1.',
            image: image1,
            price: '$19.99',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is the description for Product 2.',
            image: image2,
            price: '$29.99',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is the description for Product 3.',
            image: image3,
            price: '$39.99',
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'This is the description for Product 4.',
            image: image4,
            price: '$49.99',
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'This is the description for Product 5.',
            image: image5,
            price: '$59.99',
        },
        {
            id: 6,
            name: 'Product 6',
            description: 'This is the description for Product 6.',
            image: image6,
            price: '$69.99',
        },
        {
            id: 7,
            name: 'Product 7',
            description: 'This is the description for Product 7.',
            image: image7,
            price: '$79.99',
        },
        {
            id: 8,
            name: 'Product 8',
            description: 'This is the description for Product 8.',
            image: image8,
            price: '$89.99',
        },
        {
            id: 9,
            name: 'Product 9',
            description: 'This is the description for Product 9.',
            image: image9,
            price: '$99.99',
        },
        {
            id: 10,
            name: 'Product 10',
            description: 'This is the description for Product 10.',
            image: image10,
            price: '$109.99',
        },
        {
            id: 11,
            name: 'Product 11',
            description: 'This is the description for Product 11.',
            image: image11,
            price: '$119.99',
        },
    ];
    return (
        <div className="  w-full bg-neutral-900 h-full p-8 flex flex-col gap-4 ">
            <h1 className="text-3xl  text-white dark:text-zinc-50 text-center ">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-black  border-2 border-neutral-700 p-4 rounded-lg  hover:scale-105 transition-transform duration-300 hover:border-red-500 cursor-pointer">
                        <Image src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-md bg-neutral-800 p-2 " />
                        <h3 className="text-lg font-semibold text-gray-200 dark:text-zinc-50 mt-2">{product.name}</h3>
                        <Stars rating={Math.floor(Math.random() * 5) + 1} />
                        <p className="text-zinc-400 dark:text-zinc-400">{product.description}</p>
                        <p className="text-lg font-bold text-red-600 dark:text-zinc-50">{product.price}</p>
                        <div className="flex flex-col ">
                            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Buy Now</button>
                            <button className="mt-4 bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition-colors duration-300">Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
