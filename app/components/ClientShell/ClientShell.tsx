'use client'

import { Provider,  } from 'react-redux'
import Cart from '@/app/components/Cart/Cart'
import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import React from 'react'
import { store } from '@/app/store/store'

export default function ClientShell({children}: {children: React.ReactNode}) {

    return (
    <Provider store={store}>
   {children}
        </Provider>
  )
}
