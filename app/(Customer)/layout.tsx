'use client'
import React from 'react'
import { Provider, useSelector,  } from 'react-redux'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
export default function layout({children}: {children: React.ReactNode}) {
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
