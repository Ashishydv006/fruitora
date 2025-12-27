import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import WhatWeOffer from './components/WhatWeOffer'

export default function App(){
  return (
    <div className='min-h-screen flex flex-col bg-cream-white text-gray-800'>
      <Header />
      <WhatWeOffer/>
      <main className='flex-grow container mx-auto px-6 py-10'>
        <Home />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
