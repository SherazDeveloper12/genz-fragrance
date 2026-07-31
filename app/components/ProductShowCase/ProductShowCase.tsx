'use client'
import React from 'react'
import image1 from '../../assets/1.png'
import replacingimage1 from '../../assets/Image1.png'
import replacingimage2 from '../../assets/Image2.png'
import replacingimage3 from '../../assets/Image3.png'
import replacingimage4 from '../../assets/Image4.png'
import replacingimage5 from '../../assets/Image5.png'
import replacingimage6 from '../../assets/Image6.png'
import replacingimage7 from '../../assets/Image7.png'
import replacingimage8 from '../../assets/Image8.png'
import replacingimage9 from '../../assets/Image9.png'
import replacingimage10 from '../../assets/Image10.png'
import replacingimage11 from '../../assets/Image11.png'
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
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/components/navigation'

export default function ProductShowCase({ category }: { category: string }) {
    const products = useSelector((state: any) => state.products.Products);
    const filteredProducts = category ? products.filter((product: any) => product.Category === category) : products;
    const [hoveredProductId, setHoveredProductId] = React.useState<number | null>(null);
    console.log('Filtered Products:', filteredProducts);
    const  router = useRouter();
    return (
        <div className="  w-full bg-neutral-900 h-full p-8 flex flex-col gap-4 ">\
        {category ? 
                        <h1 className="text-3xl  text-white dark:text-zinc-50 text-center ">Our {category.charAt(0).toUpperCase() + category.slice(1)}</h1>

         : 
                        <h1 className="text-3xl  text-white dark:text-zinc-50 text-center ">Our Products</h1>

        }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {filteredProducts.map((product: any) => (
                    <motion.div
                    onClick={() => {
                        router.push(`/${product.id}`);
                    }}
                        onHoverStart={() => {
                            setHoveredProductId(product.id);
                        }}
                        onHoverEnd={() => {
                            setHoveredProductId(null);
                        }}
                        key={product.id} className="bg-black  border-2 border-neutral-700 p-4 rounded-lg  hover:scale-105 transition-transform duration-300 hover:border-red-500 cursor-pointer">
                        <div className="relative">
                            {hoveredProductId === product.id && (
                                <div className="absolute z-10 top-0 left-0 w-full h-full transition-opacity duration-300">
                                    <Image src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-md bg-neutral-800 p-2 " />
                                </div>
                            )}

                            <Image src={product.replacingimage} alt={product.name} className="w-full h-48 object-contain rounded-md bg-neutral-800 p-2 " />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-200 dark:text-zinc-50 mt-2">{product.name}</h3>
                        <Stars rating={product.Rating} />
                        <p className="text-zinc-400 dark:text-zinc-400">{product.description.substring(0, 100)}...</p>
                        <p className="text-lg font-bold text-red-600 dark:text-zinc-50">{product.price}</p>
                        <div className="flex flex-col ">
                            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Buy Now</button>
                            <button className="mt-4 bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition-colors duration-300">Add to Cart</button>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}
