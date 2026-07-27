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

export default function ProductShowCase() {
   const [hoveredProductId, setHoveredProductId] = React.useState<number | null>(null);
        const products = [
        {
            id: 1,
            name: 'Obsession for Men Calvin Klein',
            description: 'Obsession for Men by Calvin Klein is a Oriental Woody fragrance for men. Obsession for Men was launched in 1986. The nose behind this fragrance is Robert Slattery. Top notes are Cinnamon, Lavender, Coriander, Mandarin Orange, Lime, Bergamot and Grapefruit; middle notes are Myrhh, Nutmeg, Carnation, Brazilian Rosewood, Pine Tree, Sage, Jasmine and Red Berries; base notes are Amber, Vanilla, Sandalwood, Musk, Patchouli and Vetiver.',
            image: image1,
            replacingimage: replacingimage1,
            price: '$19.99',
            Rating: 4,
        },
        {
            id: 2,
            name: 'Kayali Yum Pistachio Gelato',
            description: 'Yum Pistachio Gelato | 33 Eau de Parfum is a delicious explosion of irresistible and edible notes including pistachio, voluptuous whipped cream, roasted hazelnut, sweet rum, fluffy marshmallow, and fizzy cotton candy. A truly yummy fragrance that charms with an unforgettably intense, gourmand scent trail that will have you smelling good enough to eat.',
            image: image2,
            price: '$29.99',
            Rating: 3,
            replacingimage: replacingimage2,
        },
        {
            id: 3,
            name: 'Cherry Delight Flavia',
            description: 'Cherry Delight by Flavia is a fragrance for women and men. Cherry Delight was launched in 2024. Top notes are Cherry and Bitter Almond; middle notes are Sour Cherry, Plum, Rose and Jasmine; base notes are Vanilla, Sandal, Tonka, Cedar and Patchouli.',
            image: image3,
            price: '$39.99',
            Rating: 5,
            replacingimage: replacingimage3,
        },
        {
            id: 4,
            name: 'Orientica Azure Fantasy',
            description: 'Como gotas de lluvia que atraviesan la niebla que envuelve la tierra, salpicando con alegría, Exclusive Azure Fantasy se apresura a envolverte con la fragancia que da vida a tus sueños turquesas. Refrescantes ráfagas de jengibre, menta, bergamota y nuez moscada te sumergen lentamente en la alegría mientras el geranio y el jazmín elevan aún más tu espíritu hacia el crescendo creado por el ámbar gris, el almizcle y la madera de gaiac. Una experiencia nunca antes vista te espera en el momento en que tengas en tus manos esta obra maestra. Elimina tu tristeza con Exclusive Azure Fantasy.',
            image: image4,
            price: '$49.99',
            replacingimage: replacingimage4,
            Rating: 4,
        },
        {
            id: 5,
            name: 'Aventus Creed',
            description: 'Aventus by Creed is a fragrance for men and women. This is a new fragrance. Aventus was launched in 2025. The nose behind this fragrance is Olivier Creed. Top notes are Bergamot, Black Currant, Apple and Pineapple; middle notes are Birch, Patchouli, Rose and Jasmine; base notes are Musk, Oakmoss, Ambergris and Vanilla.',
            image: image5,
            price: '$59.99',
            Rating: 5,
            replacingimage: replacingimage5,
        },
        {
            id: 6,
            name: 'Dior Sauvage Parfum',
            description: 'Dior Sauvage Parfum 100ml is one of the most iconic Amber Fougère fragrances for men, known for its bold, wild character and exceptional longevity. Its a signature scent choice for those who want a powerful, confident presence. This is the description for Product 6.',
            image: image6,
            price: '$69.99',
            Rating: 4,
            replacingimage: replacingimage6,
        },
        {
            id: 7,
            name: 'Molten Caramel by Paris Corner',
            description: 'Molten Caramel by Paris Corner– an olfactory indulgence that melts away inhibitions and drapes the skin in a veil of decadent sweetness. This is the ultimate dessert of perfumery – luxurious, opulent, irresistible – and most importantly, calorie-free. It doesn’t add inches, it adds allure.',
            image: image7,
            price: '$79.99',
            Rating: 4,
            replacingimage: replacingimage7,
        },
        {
            id: 8,
            name: 'Matcha Cloud Perfume by Aroma Essence',
            description: 'A perfume by Mochiglow for women, released in 2023. The scent is gourmand-sweet. It is still in production. The perfume is vegan according to the manufacturer.',
            image: image8,
            price: '$89.99',
            Rating: 5,
            replacingimage: replacingimage8,
        },
        {
            id: 9,
            name: 'Eternal Vanille Lattafa Perfumes',
            description: 'Eternal Vanille by Lattafa Perfumes is a fragrance for women and men. This is a new fragrance. Eternal Vanille was launched in 2025. The nose behind this fragrance is Jordi Fernández. Top note is Blackberry; middle notes are Cocoapulse™, Vanilla Caviar and Cacao; base notes are Akigalawood, Tonka Bean, Ambrofix™, Benzoin, Cedarwood and Musk.',
            image: image9,
            price: '$99.99',
            Rating: 3,
            replacingimage: replacingimage9,
        },
        {
            id: 10,
            name: 'Milky Way MAISON ASRAR',
            description: 'Milky Way by MAISON ASRAR is a Oriental Vanilla fragrance for women and men. This is a new fragrance. Milky Way was launched in 2025. Top notes are Milk, Plum and Caramel; middle notes are Cashmere Wood, Orris, Jasmine and Ylang Ylang; base notes are Sandalwood, Vanilla and Tonka.',
            image: image10,
            price: '$109.99',
            Rating: 4,
            replacingimage: replacingimage10,
        },
        {
            id: 11,
            name: 'Light Blue By Dolce & Gabbana',
            description: 'Light Blue by Dolce & Gabbana, Light Blue is a manly scent for enterprising and sophisticated males looking to round out their style and presence with urbane charm. Musk wood, incense, and oak moss provide the base for this aroma. Strength and suave are carried through to the middle tones of Szechuan pepper, rosemary, and rosewood. These tantalizing hints of masculinity all act to support the front notes of unique citrus, bergamot, and juniper. Woodsy yet clean, this aroma gives those experiencing it a primal sense of confidence.',
            image: image11,
            price: '$119.99',
            Rating: 5,
            replacingimage: replacingimage11,
        },
    ];
    return (
        <div className="  w-full bg-neutral-900 h-full p-8 flex flex-col gap-4 ">
            <h1 className="text-3xl  text-white dark:text-zinc-50 text-center ">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {products.map((product) => (
                    <motion.div 
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
