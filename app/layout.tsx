"use client";
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
// import "../public/Assets/vender/aos/css/animate.css"
import "../public/Assets/vender/aos/css/aos.css"
import NavSocialMedia from './components/NavSocialMedia';
declare global {
  interface Window {
    AOS: any; // Adjust the type as needed, using `any` for simplicity here
  }
}
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [wowInitialized, setWowInitialized] = useState(false);
  useEffect(() => {
    // Check if AOS is available on window, then initialize
    if (window.AOS) {
      window.AOS.init();
    } else {
      // If AOS is not available, add an event listener to initialize it once it's loaded
      document.addEventListener('AOSLoaded', () => {
        window.AOS.init();
      });
    }
  }, []);
  
  
  return (
    <html lang="en">
      <head>
        {/* <link href="/Assets/vender/aos/aos.css" rel="stylesheet" />
        <link href="/Assets/vender/aos/animate.css" rel="stylesheet" /> */}
        {/* Additional Head Content */}
      </head>
      <body className={inter.className}>
        <NavSocialMedia/>
        <header className='sticky top-0 bg-white z-50'>
          <Navbar />
        </header>
          {children}
        <Footer />
        {/* <Script src="/Assets/vender/aos/js/aos.js"></Script>*/}
        <Script
          src="/Assets/vender/aos/js/aos.js"
          onLoad={() => {
            // Dispatch custom event once AOS script is loaded
            document.dispatchEvent(new Event('AOSLoaded'));
          }}
        />      
      </body>
    </html>
  );
}
