'use client'

import Navbar from '@/components/Navbar/navbar';
import Hero from '@/components/Hero/hero';
import { motion } from "framer-motion";
import { Suspense, lazy } from 'react';

const Meet = lazy(() => import('@/components/Meet/Meet'));
const Numbers = lazy(() => import('@/components/Numbers/numbers'));
const Defi_Unlocked = lazy(() => import('@/components/Defi/Defi_Unlocked'));
const GHO = lazy(() => import('@/components/GHO/gho'));
const Aave_Everywhere = lazy(() => import('@/components/Aave_Everywhere/Aave_Everywhere'));
const Trusted_By = lazy(() => import('@/components/Trusted_By/Trusted_by'));
const Governed_Card = lazy(() => import('@/components/Governed_Card/Governed_Card'));
const Security = lazy(() => import('@/components/Security/Security'));
const Faqs = lazy(() => import('@/components/FAQs/Faqs'));
const Footer = lazy(() => import('@/components/Footer/Footer'));

export default function Home() {

  const pageload = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeIn', once: true }
    },
  }

  return (
    <div>
      <Navbar />
      <motion.main initial='hidden' animate='visible' variants={pageload} className='h-full min-h-[100dvh]'>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Meet />
          <Numbers />
          <Defi_Unlocked />
          <GHO />
          <Aave_Everywhere />
          <Trusted_By />
          <Governed_Card />
          <Security />
          <Faqs />
          <Footer />
        </Suspense>
      </motion.main>
    </div>
  );
}
