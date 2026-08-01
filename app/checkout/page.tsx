'use client'

import { useParams } from 'next/navigation';
import React from 'react';

export default function Page() {
  const params = useParams();
  const productId = params.id; 
  {productId ? console.log('Product ID:', productId) : console.log('No Product ID found in the URL')}
  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-red-500/20 bg-gradient-to-br from-black via-neutral-900 to-red-950/80 p-6 shadow-2xl shadow-red-950/40 sm:p-8 lg:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Secure Checkout</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Complete Your Order</h1>
          </div>
          <div className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
            Free shipping over $50
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-zinc-800 bg-black/60 p-6">
              <h2 className="text-xl font-semibold text-white">Contact Information</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="Full Name"
                />
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="Email Address"
                />
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500 md:col-span-2"
                  placeholder="Phone Number"
                />
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-black/60 p-6">
              <h2 className="text-xl font-semibold text-white">Shipping Address</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500 md:col-span-2"
                  placeholder="Street Address"
                />
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="City"
                />
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="ZIP Code"
                />
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="Country"
                />
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-black/60 p-6">
              <h2 className="text-xl font-semibold text-white">Payment Method</h2>
              <div className="mt-4 space-y-3">
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="Cardholder Name"
                />
                <input
                  className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  placeholder="Card Number"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                    placeholder="MM/YY"
                  />
                  <input
                    className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </section>
          </div>

          <aside className="rounded-2xl border border-red-500/20 bg-black/70 p-6 shadow-inner shadow-red-950/30">
            <h2 className="text-xl font-semibold text-white">Order Summary</h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3">
                <div>
                  <p className="font-medium text-white">Obsession for Men</p>
                  <p className="text-sm text-zinc-400">1 x 100ml</p>
                </div>
                <p className="font-semibold text-red-400">$19.99</p>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3">
                <div>
                  <p className="font-medium text-white">Shipping</p>
                  <p className="text-sm text-zinc-400">Express delivery</p>
                </div>
                <p className="font-semibold text-red-400">Free</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-zinc-800 pt-4">
              <div className="flex items-center justify-between text-sm text-zinc-300">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex items-center justify-between text-sm text-zinc-300">
                <span>Tax</span>
                <span>$2.00</span>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold text-white">
                <span>Total</span>
                <span className="text-red-400">$21.99</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              Place Order
            </button>
            <p className="mt-3 text-center text-xs text-zinc-500">
              Your payment is secured and encrypted.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
