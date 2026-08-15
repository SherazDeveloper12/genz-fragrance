'use client'
import React from 'react'
import Image from 'next/image';
import Stars from '../Stars/Stars'
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/components/navigation'
import { addItemToCart, toggleCart } from '@/app/store/slices/cart';

export default function ProductShowCase({ category }: { category?: string }) {

    const products = useSelector((state: any) => state.products.Products);
    console.log(products, "products in showcase");
    const filteredProducts = category ? products.filter((product: any) => product.category === category) : products;
    const [hoveredProductId, setHoveredProductId] = React.useState<number | null>(null);
    const router = useRouter();
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
                            router.push(`/${product._id}`);
                        }}
                        onHoverStart={() => {
                            setHoveredProductId(product._id);
                        }}
                        onHoverEnd={() => {
                            setHoveredProductId(null);
                        }}
                        key={product._id} className="bg-black  border-2 border-neutral-700 p-4 rounded-lg  hover:scale-105 transition-transform duration-300 hover:border-red-500 cursor-pointer">
                        <div className="relative">
                            {hoveredProductId === product._id && (
                                <div className="absolute z-10 top-0 left-0 w-full h-full transition-opacity duration-300">
                                    <img src={product.img[1] ? product.img[1] : product.img[0]} alt={product.heading} className="w-full h-48 object-contain rounded-md bg-neutral-800 p-2 " />
                                </div>
                            )}
                            <img src={product.img[0]} alt={product.heading} className="w-full h-48 object-contain rounded-md bg-neutral-800 p-2 " />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-200 dark:text-zinc-50 mt-2">{product.heading}</h3>
                        <Stars rating={product.rating} />
                        <p className="text-zinc-400 dark:text-zinc-400">{product.description.substring(0, 100)}...</p>
                        <div className="flex gap-4 items-center mt-2">
                            {product.discount > 0 ?
                                <>
                                    <p className="text-lg font-bold text-red-600 dark:text-zinc-50">PKR {product.price - Math.round((product.discount / 100) * product.price)}</p>
                                    <p className="text-lg font-bold text-red-700 dark:text-zinc-50 line-through decoration-2">PKR {product.price}</p>
                                </>
                             : 
                            <p className="text-lg font-bold text-red-700 dark:text-zinc-50 ">PKR {product.price}</p>
                            }

                        </div>
                        <div className="flex flex-col ">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`checkout/${product._id}`);
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
