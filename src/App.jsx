import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductRail from './components/ProductRail';
import Activity from './components/Activity';
import Benefits from './components/Benefits';
import FitFeelFlex from './components/FitFeelFlex';
import PromoCards from './components/PromoCards';
import Store from './components/Store';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [tab, setTab] = useState('all');

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductRail tab={tab} setTab={setTab} />
        <Activity setTab={setTab} />
        <Benefits />
        <FitFeelFlex />
        <PromoCards />
        <Store />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
