'use client'
import React from 'react'
import { store } from '../store/store'
import { Provider,  } from 'react-redux'
import ClientShell from '../components/ClientShell/ClientShell'
export default function layout({children}: {children: React.ReactNode}) {
  return (
 
     <Provider store={store}>
       <ClientShell>
        {children}
        </ClientShell> 
        </Provider>
  )
}
