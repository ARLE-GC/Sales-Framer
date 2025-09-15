// src/App.jsx
import React from 'react';
import Promo from './components/Promo';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SolutionSteps from './components/SolutionSteps';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Promo/>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <SolutionSteps />
        <Pricing />
        <FAQ />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;