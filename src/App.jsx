import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import ProductRail from './components/ProductRail';
import Lineup from './components/Lineup';
import Activity from './components/Activity';
import Benefits from './components/Benefits';
import FitFeelFlex from './components/FitFeelFlex';
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
        <BrandIntro />
        <ProductRail tab={tab} setTab={setTab} />
        <Lineup />
        <Activity setTab={setTab} />
        <Benefits />
        <FitFeelFlex />
        <Store />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
