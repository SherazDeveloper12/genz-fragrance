'use client'
import ProductShowCase from '@/app/components/ProductShowCase/ProductShowCase';
import { usePathname } from 'next/dist/client/components/navigation';
import React from 'react'

export default function bestSellings() {
  const params = usePathname();
    const category = 'Best Sellings'

    return (
     <div className='min-h-screen bg-neutral-900'>
     <ProductShowCase category={category} />
  
      </div>
    )
}
