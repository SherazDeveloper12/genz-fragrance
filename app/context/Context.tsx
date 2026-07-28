'use client';
import {createContext, useContext, useState} from 'react';

export const AppContext = createContext<any>(null);

export const useAppDataProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({children, }: {children: React.ReactNode; }) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const value = {
        cartIsOpen,
        setCartIsOpen,
        // Add any values you want to provide to the context here
    };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}