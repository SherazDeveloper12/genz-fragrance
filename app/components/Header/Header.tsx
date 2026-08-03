'use client'
import React from 'react'
import ShoppingCartSignIcon from '@iconify-react/el/shopping-cart-sign';
import UserSolidIcon from '@iconify-react/mynaui/user-solid';
import { useAppDataProvider } from '@/app/context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/app/store/slices/cart';
import { useRouter } from 'next/dist/client/components/navigation';
export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
  return (
    <header className="flex h-12 lg:h-24 w-full items-center justify-between border-b bg-black px-4 lg:px-8 dark:border-zinc-700 dark:bg-black sticky top-0 z-50">
        <div
            onClick={() => router.push('/')}>
            <h1 className="text-md lg:text-2xl font-bold flex justify-between items-baseline gap-1 lg:gap-2 cursor-pointer">
                {/* gradient color */}
                <p className=" text-red-500 font-serif">GenZ</p>
                <p className='text-white font-extralight  dark:text-gray-300 font-serif'>Fragrance</p>
            </h1>
        </div>
        <div className="hidden lg:flex" ><Navigation /></div>
        <div className="flex gap-2 lg:gap-4">
            <button className="flex justify-between items-center gap-1 lg:gap-2 cursor-pointer" h-12 onClick={() => dispatch(toggleCart())}>
                <ShoppingCartSignIcon height='2em' style={{ color: '#fff' }} />
            </button>
            <button className="flex justify-between items-center gap-2 cursor-pointer">
                <UserSolidIcon height="2em" style={{ color: '#fff' }} />
            </button>
        </div>
    </header>
  )
}

function Navigation() {
    const router = useRouter();
    const navItems = [
        {"label": "HOME", "href": "/"},
        {"label": "GIFT BOX", "href": "/gift-box"},
        {"label": "BEST SELLINGS", "href": "/best-sellings"},
        {"label": "TESTER PACK", "href": "/tester-pack"},
        {"label": "ATTAR", "href": "/attar"},
        {"label": "CONTACT", "href": "/contact"}
    ];
  return (
    <div className="flex">
        {navItems.map((item, index) => (
            <div onClick={()=>router.push(item.href)} key={index} className="flex items-center justify-center  hover:bg-red-500">
            <a href={item.href} className="dark:text-gray-700 text-white p-5  text-2xl"  >
                {item.label}
            </a>
            </div>
        ))}
    </div>
  )
}
