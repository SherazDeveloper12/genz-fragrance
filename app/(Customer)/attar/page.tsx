'use client'
import ProductShowCase from '@/app/components/ProductShowCase/ProductShowCase';
import {  usePathname,  } from 'next/dist/client/components/navigation';
import React from 'react'

export default function Attar() {
  const params = usePathname();
  const category = params.split('/').filter(Boolean)[0];
  console.log('Category:', category);
  return (
    <div>
   <ProductShowCase category={category} />

    </div>
  )
}
