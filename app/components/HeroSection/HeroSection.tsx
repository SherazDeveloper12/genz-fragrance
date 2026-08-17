import React from 'react'

import coverimage from '../../assets/cover-image.jpeg'

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={coverimage.src}
        alt="GenZ Fragrance cover"
        className="h-[62vh] min-h-90 w-full object-cover md:h-[86vh] lg:h-screen"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-black/35 to-black/70 md:bg-linear-to-r md:from-black/70 md:via-black/45 md:to-transparent" />

      <div className="absolute inset-x-4 bottom-16 z-10 rounded-2xl border border-white/20 bg-black/10 p-4 shadow-2xl backdrop-blur-xs sm:inset-x-6 sm:bottom-6 sm:p-5 md:inset-x-8 md:bottom-8 md:max-w-2xl md:rounded-3xl md:p-8 lg:left-12 lg:bottom-12 lg:max-w-3xl lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm">
          Signature Collection
        </p>
        <h1 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
          GenZ Fragrance
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base md:mt-4 md:text-lg lg:text-2xl">
          Discover the perfect scent for every moment with us. Love and fragrance
          cannot be hidden.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6 md:mt-8 md:gap-4">
          <button className="cursor-pointer rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:px-6 sm:py-3 sm:text-base lg:px-8">
            Shop Now
          </button>
          <button className="cursor-pointer rounded-xl border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-red-600 sm:px-6 sm:py-3 sm:text-base lg:px-8">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
