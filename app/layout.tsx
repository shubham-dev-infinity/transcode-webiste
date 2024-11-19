

"use client";

import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import "../public/Assets/vender/aos/css/aos.css"
import NavSocialMedia from './components/NavSocialMedia';
import BackToTopButton from './components/BackToTopButton';
declare global {
  interface Window {
    AOS: any;
  }
}
const inter = Inter({ subsets: ['latin'] });
interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
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
      <body className={inter.className}>
        <NavSocialMedia />
        <header className='sticky top-0 bg-white z-50'>
          <Navbar />
        </header>
        {children}
        <Footer />
        <BackToTopButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3MKRRY6798"
          strategy="afterInteractive"
        />
        <Script id="ga-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3MKRRY6798');
          `}
        </Script>
        {/* <Script src="/Assets/vender/aos/js/aos.js"></Script>*/}
        <Script
          src="/Assets/vender/aos/js/aos.js"
          onLoad={() => {
            // Dispatch custom event once AOS script is loaded
            document.dispatchEvent(new Event('AOSLoaded'));
          }}
        />
        <Script src="https://cdn.emailjs.com/dist/email.min.js" />
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />

        <Script id="metricool-script" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
                  c=document.createElement("script");
              c.type="text/javascript";
              c.src="https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange=a;
              c.onload=a;
              b.appendChild(c);
            }
            loadScript(function(){
              beTracker.t({hash:"7778e1652859ec3406ae0696f45efbf9"});
            });
          `}
        </Script>

      </body>
    </html>
  );
}

export default RootLayout;