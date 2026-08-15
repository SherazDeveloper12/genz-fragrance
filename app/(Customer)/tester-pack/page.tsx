'use client'
import ProductShowCase from '@/app/components/ProductShowCase/ProductShowCase';
import { usePathname } from 'next/dist/client/components/navigation';
import React from 'react'

export default function testerpack() {
  const category = 'Tester Pack'
    
    return (
      <div className='min-h-screen bg-neutral-900'>
     <ProductShowCase category={category} />
  
      </div>
    )
}
