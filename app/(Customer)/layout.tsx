'use client'
import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector,  } from 'react-redux'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import { fetchProducts } from '../store/slices/product';
import { setUser } from '../store/slices/auth';
export default function layout({children}: {children: React.ReactNode}) {
      const cartIsOpen = useSelector((state: any) => state.cart.cartIsOpen);
      const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setUser());
      dispatch(fetchProducts());
    }, []);
  return (
    <>
     <Header  />
    {cartIsOpen && <Cart />}
      {children}
        <Footer />
        </>
  )
}
