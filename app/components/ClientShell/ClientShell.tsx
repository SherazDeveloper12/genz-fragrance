'use client'

import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector,  } from 'react-redux'


import { fetchStorePaymentMethods, fetchStorePaymentMethodsLocally, setUser } from '@/app/store/slices/auth';
import { fetchProducts } from '@/app/store/slices/product';

export default function ClientShell({children}: {children: React.ReactNode}) {
   const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setUser());
      dispatch(fetchProducts());
      dispatch(fetchStorePaymentMethodsLocally());
      dispatch(fetchStorePaymentMethods());
    }, []);
    return (
    <>
   {children}
        </>
  )
}
