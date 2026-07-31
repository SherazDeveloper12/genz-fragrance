export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(127,29,29,0.2),_transparent_28%),linear-gradient(180deg,_#0a0a0a_0%,_#000000_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

        <div className="relative w-full max-w-6xl">
          <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-red-500/20 bg-white/5 p-8 shadow-2xl shadow-red-950/30 backdrop-blur-xl sm:p-10 lg:p-12">
              <p className="mb-4 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium tracking-[0.24em] text-red-200 uppercase">
                Contact Us
              </p>

              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let us know what you need and we&apos;ll get back to you quickly.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                Send us your email and message below. Whether you need help with an order,
                have a question about our fragrances, or want product guidance, we&apos;re here
                to help.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 ">
                  <p className="text-sm font-medium tracking-[0.2em] text-red-300 uppercase">
                    Email support
                  </p>
                  <p className="mt-2  text-md text-white">support@genzfragrance.com</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-sm font-medium tracking-[0.2em] text-red-300 uppercase">
                    Response time
                  </p>
                  <p className="mt-2 text-lg text-white">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-red-500/25 bg-[#0d0d0d]/95 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-sm font-medium tracking-[0.25em] text-red-300 uppercase">
                  Send a message
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">We&apos;re listening</h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-200"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-red-900/40 transition duration-200 hover:from-red-500 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
