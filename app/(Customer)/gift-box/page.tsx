'use client'
import { usePathname } from 'next/dist/client/components/navigation';
import ProductShowCase from '@/app/components/ProductShowCase/ProductShowCase';
import React from 'react'


export default function pags() {
  const params = usePathname();
      const category = params.split('/').filter(Boolean)[0];
      console.log('Category:', category);
      return (
        <div>
       <ProductShowCase category={category} />
    
        </div>
      )
}
