'use client'
import { AnimatePresence, motion } from 'motion/react';
import React, { useContext, useEffect } from 'react'

import { Delete, Trash, Trash2, X } from 'lucide-react';
import { useAppDataProvider } from '@/app/context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartFromStorage, removeItemFromCart, toggleCart } from '@/app/store/slices/cart';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/components/navigation';


export default function Cart() {
  useEffect(() => {
    dispatch(fetchCartFromStorage());
  }, [])
  const items = useSelector((state: any) => state.cart.items);

  
  
  const dispatch = useDispatch()
  const router = useRouter();
  const cartIsOpen = useSelector((state: any) => state.cart.cartIsOpen);


  const handleCheckoutClick = () => {
    dispatch(toggleCart());
    router.push('/checkout');
  }
  
  return (
    <div className={'fixed right-0 top-0  w-full z-400   '}>

      <div
        onClick={() => {
          dispatch(toggleCart())
        }}
        className=' bg-black/75 h-screen w-full z-4002'></div>
      <AnimatePresence>
        {cartIsOpen &&

          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.5 }
            }
            className='bg-neutral-800 text-white  fixed right-0 top-0 h-screen w-80 lg:w-100 shadow-lg '>
            <div className='w-full h-full flex flex-col'>
              <div className='flex justify-between items-center p-2 lg:p-4 border-b border-neutral-600'>
                <h2 className='text-xl lg:text-2xl font-bold '>Your Cart</h2>
                <X size={20} onClick={() => dispatch(toggleCart())} className=' cursor-pointer' />
              </div>
              {items.length > 0 ? <div className='flex-1 flex flex-col gap-1 lg:gap-2 px-1 lg:px-2 pt-3 lg:pt-6 pb-4 lg:pb-8 bg-black overflow-auto'>
                {items.map((item: any) => (
                  <div key={item.product.id} className='flex justify-between items-center bg-neutral-800 rounded-xl shadow-md gap-1 lg:gap-2  border-collapse p-1 lg:p-2 hover:translate-y-1 duration-300 ease-in'>
                    <div className='p-1 lg:p-2 border border-neutral-500'>
                      <Image src={item.product.image} alt={item.product.name} className='w-12 lg:w-16 h-12 lg:h-16 object-cover' />
                    </div>
                    <div className='flex-1 flex flex-col justify-center'>
                      <h3 className='lg:font-semibold'>{item.product.name}</h3>
                      <div className='flex  items-center gap-1'> <p>{item.quantity}</p> <p>X</p>
                        <p className=''>{item.product.price} =</p>
                        <p className='font-semibold text-amber-600'>{item.quantity * item.product.price} PKR</p>

                      </div>
                    </div>
                    <div
                      onClick={() => dispatch(removeItemFromCart(item.product.id))}
                      className='flex justify-center items-center size-8 lg:size-10'>
                      <Trash2 size={20} className=' cursor-pointer ' />
                    </div>
                  </div>
                ))}
              </div> :
                <div className='flex flex-col justify-center items-center h-full gap-1 lg:gap-2'>
                  <p className='text-gray-500'>Your cart is currently empty.</p>
                  <button onClick={() => dispatch(toggleCart())}
                    className='cursor-pointer px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Start Shopping</button>
                </div>
              }

              <div className='p-2 lg:p-4 border-t border-neutral-600 flex flex-col gap-2 lg:gap-4'>
                <div>
                  <p>Total Items: {items.length}</p>
                  <div className='flex gap-1 lg:gap-2'>
                    <p>Items Cost:</p>
                    <p className='font-semibold text-amber-600'>{items.reduce((total, item) => total + item.quantity * item.product.price, 0)} PKR</p>

                  </div>
                </div>
                <button
                  onClick={() => handleCheckoutClick()}
                  className='w-full px-2 lg:px-4 py-1 lg:py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700'>Proceed to Checkout</button>
              </div>

            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>)
}
