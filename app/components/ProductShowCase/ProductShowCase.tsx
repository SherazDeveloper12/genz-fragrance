'use client'
import React from 'react'
import Image from 'next/image';
import Stars from '../Stars/Stars'
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/components/navigation'
import { addItemToCart, toggleCart } from '@/app/store/slices/cart';

export default function ProductShowCase({ category }: { category: string }) {

    const products = useSelector((state: any) => state.products.Products);
    const filteredProducts = category ? products.filter((product: any) => product.Category === category) : products;
    const [hoveredProductId, setHoveredProductId] = React.useState<number | null>(null);
x    const  router = useRouter();
    const dispatch = useDispatch();
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
                        <p className="text-lg font-bold text-red-600 dark:text-zinc-50">PKR {product.price}</p>
                        <div className="flex flex-col ">
                            <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`checkout/${product.id}`);
                            }}
                            className="mt-4 cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Buy Now</button>
                            <button
                            onClick={(e) => {
                                e.stopPropagation();
                               
                                dispatch(addItemToCart({
                                    product: product,
                                    quantity: 1
                                }));
                                dispatch(toggleCart());
                            }}
                            className="mt-4 bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition-colors duration-300">Add to Cart</button>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}
