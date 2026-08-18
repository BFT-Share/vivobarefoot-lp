import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import LineupSlider from './components/LineupSlider'
import StoreLocator from './components/StoreLocator'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Philosophy />
      <LineupSlider />
      <StoreLocator />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
