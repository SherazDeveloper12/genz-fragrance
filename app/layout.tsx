
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "./components/ClientShell/ClientShell";
import favicon from '../favicon.ico'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "Genz Fragrance",
  description: "Discover the perfect scent for every moment with us. Love and fragrance cannot be hidden.",
  metadataBase: new URL("https://genz-fragrance.vercel.app/"),
  openGraph: {
    title: "Genz Fragrance",
  description: "Discover the perfect scent for every moment with us. Love and fragrance cannot be hidden.",
  images: [favicon.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genz Fragrance",
    description: "Discover the perfect scent for every moment with us. Love and fragrance cannot be hidden.",
    images: [favicon.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <ClientShell>

          {children}
        </ClientShell>

      </body>
    </html>
  );
}

