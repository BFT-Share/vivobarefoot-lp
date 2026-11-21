import Header from './components/Header';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Lineup from './components/Lineup';
import Activity from './components/Activity';
import Benefits from './components/Benefits';
import FitFeelFlex from './components/FitFeelFlex';
import Store from './components/Store';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LineButton from './components/LineButton';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <Lineup />
        <Activity />
        <Benefits />
        <FitFeelFlex />
        <Store />
        <FAQ />
      </main>
      <Footer />
      <LineButton />
    </>
  );
}
