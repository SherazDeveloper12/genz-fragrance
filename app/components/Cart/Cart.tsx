'use client'
import { AnimatePresence, motion } from 'motion/react';
import React, { useContext } from 'react'

import { Delete, Trash, Trash2, X } from 'lucide-react';
import { useAppDataProvider } from '@/app/context/Context';
import { useDispatch } from 'react-redux';



export default function Cart() {
  const { cartIsOpen, setCartIsOpen } = useAppDataProvider();
  const dispatch = useDispatch()
  
  const items = [
    {
      product: {
        _id: '1',
        title: 'Product 1',
        price: 100,
        img: ['https://via.placeholder.com/150'],
      },
      quantity: 2,
    },
    
  ]
  const handleCheckoutClick = () => {
    setCartIsOpen(false);
    
  }
  const handleDelete = (id: string) => {
  
  }
  return (
    <div  className={'fixed right-0 top-0  w-full z-400   '}>
     
      <div
        onClick={() => {
          setCartIsOpen(false)
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
            className='bg-neutral-800 text-white  fixed right-0 top-0 h-screen w-80 shadow-lg '>
              <div className='w-full h-full flex flex-col'>
            <div className='flex justify-between items-center p-4 border-b border-neutral-600'>
              <h2 className='text-2xl font-bold '>Your Cart</h2>
              <X size={20} onClick={() => setCartIsOpen(false)} className=' cursor-pointer' />
            </div>
            {items.length > 0 ? <div className='flex-1 flex flex-col gap-2 px-2 pt-6 pb-8 bg-black overflow-auto'>
              {items.map((item) => (
                <div key={item.product._id} className='flex justify-between items-center bg-neutral-800 rounded-xl shadow-md gap-2  border-collapse p-2 hover:translate-y-1 duration-300 ease-in'>
                  <div className='p-2 border border-neutral-500'>
                  <img src={item.product.img[0]} alt={item.product.title} className='w-16 h-16 object-cover' />
                  </div>
                  <div className='flex-1 flex flex-col justify-center'>
                    <h3 className='font-semibold'>{item.product.title}</h3>
                    <div className='flex  items-center gap-1'> <p>{item.quantity}</p> <p>X</p> 
                    <p  className=''>{item.product.price} =</p>
                    <p className='font-semibold text-amber-600'>{item.quantity * item.product.price} PKR</p>

                    </div>
                  </div>
                  <div
                  onClick={()=>handleDelete(item.product._id)}
                  className='flex justify-center items-center size-10'>
                    <Trash2 size={20} className=' cursor-pointer ' />
                  </div>
                </div>
              ))}
            </div> :
              <div className='flex flex-col justify-center items-center h-full gap-2'>
                <p className='text-gray-500'>Your cart is currently empty.</p>
                <button onClick={() => setCartIsOpen(false)}
                  className='cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Start Shopping</button>
              </div>
            }

  <div className='p-4 border-t border-neutral-600 flex flex-col gap-4'>
    <div>
      <p>Total Items: {items.length}</p>
      <div className='flex gap-2'>
        <p>Items Cost:</p>
         <p className='font-semibold text-amber-600'>{items.reduce((total, item) => total + item.quantity * item.product.price, 0)} PKR</p>
   
      </div>
      </div>
    <button 
    onClick={()=>handleCheckoutClick()}
    className='w-full px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700'>Proceed to Checkout</button>
  </div>

</div>
          </motion.div>
        }
      </AnimatePresence>
    </div>)
}
