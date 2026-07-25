'use client'
import React from 'react'
import ShoppingCartSignIcon from '@iconify-react/el/shopping-cart-sign';
import UserSolidIcon from '@iconify-react/mynaui/user-solid';
export default function Header() {
  return (
    <div className="flex h-24 w-full items-center justify-between border-b bg-black px-8 dark:border-zinc-700 dark:bg-black sticky top-0 z-50">
        <div>
            <h1 className="text-2xl font-bold flex justify-between items-baseline gap-2 cursor-pointer">
                {/* gradient color */}
                <p className=" text-red-500 font-serif">GenZ</p>
                <p className='text-white font-extralight  dark:text-gray-300 font-serif'>Fragrance</p>
            </h1>
        </div>
        <div><Navigation /></div>
        <div className="flex gap-4">
            <button className="flex justify-between items-center gap-2 cursor-pointer">
                <ShoppingCartSignIcon height="3em" style={{ color: '#fff' }} />
            </button>
            <button className="flex justify-between items-center gap-2 cursor-pointer">
                <UserSolidIcon height="3em" style={{ color: '#fff' }} />
            </button>
        </div>
    </div>
  )
}

function Navigation() {
    const navItems = ["HOME", "GIFT BOX", "BEST SELLINGS", "TESTER PACK", "ATTAR", "CONTACT"];
  return (
    <div className="flex">
        {navItems.map((item) => (
            <div key={item} className="flex items-center justify-center p-5 hover:bg-red-500">
            <a href="#" className="dark:text-gray-700 text-white  text-2xl hover:border-b-2 border-red-500" bg-red-500  key={item}>
                {item}
            </a>
            </div>
        ))}
    </div>
  )
}
