'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Stars from '@/app/components/Stars/Stars';
import ReviewsShowCase from '@/app/components/ReviewsShowCase/ReviewsShowCase';
import { addItemToCart, toggleCart } from '@/app/store/slices/cart';

export default function Page() {
  const products = useSelector((state: any) => state.products.Products);
  const params = useParams();
  const productId = Number(params.productid);
  const dispatch = useDispatch();

  const product = Array.isArray(products)
    ? products.find((p: any) => Number(p.id) === productId)
    : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-500/30 bg-black/80 p-8 text-center shadow-2xl shadow-red-950/40">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Product Not Found</p>
          <h1 className="mt-4 text-3xl font-semibold">This fragrance is not available right now.</h1>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-red-500/20 bg-gradient-to-br from-black via-neutral-900 to-red-950/80 p-6 shadow-2xl shadow-red-950/40 sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div>
              <p className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.3em] text-red-400">
                   {product.Category}
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
             
              <span>
               <Stars rating={product.Rating} />
              </span>
              <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300">
                Rating: {product.Rating}/5
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="text-4xl font-bold text-red-500">{product.price}</div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
                  Buy Now
                </button>
                <button 
                onClick={() => {
                
                  dispatch(addItemToCart({
                    product: product,
                    quantity: 1
                  }));
                    dispatch(toggleCart());
                }}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-red-500 hover:text-red-400">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-red-500/20 bg-black/60 p-4 shadow-inner shadow-red-950/40">
            <div className="relative overflow-hidden rounded-[20px] bg-zinc-900 p-4">
              <Image
                src={product.replacingimage || product.image}
                alt={product.name}
                width={900}
                height={900}
                className="h-full w-full rounded-[16px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
     <ReviewsShowCase/>
     </>
  );
}
