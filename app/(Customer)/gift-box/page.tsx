'use client'
import { usePathname } from 'next/dist/client/components/navigation';
import ProductShowCase from '@/app/components/ProductShowCase/ProductShowCase';
import React from 'react'


export default function pags() {
   const category = 'Gift Box'
      
      return (
        <div className='min-h-screen bg-neutral-900'>
       <ProductShowCase category={category} />
    
        </div>
      )
}
