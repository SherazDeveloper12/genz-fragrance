'use client'
import Cart from '@/app/components/Cart/Cart'
import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ClientShell({children}: {children: React.ReactNode}) {
    const cartIsOpen = useSelector((state: any) => state.cart.cartIsOpen);

    return (
    <>
   <Header  />
    {cartIsOpen && <Cart />}
      {children}
        <Footer />
        </>
  )
}
