import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import StoreLocator from './components/StoreLocator'
import Footer from './components/Footer'
import './App.css'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Philosophy />
      <StoreLocator />
      <Footer />
    </div>
  )
}

export default App
