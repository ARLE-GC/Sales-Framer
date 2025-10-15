// src/App.jsx
import React, {useEffect} from 'react';
import Promo from './components/Promo';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import SolutionSteps from './components/SolutionSteps';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




function App() {

  useEffect(()=>{
   

    const elements = document.querySelectorAll(
      "section, div, img, h1, h2, h3, h4, h5, p, span, button, li"
    );

    elements.forEach((el) => {
     gsap.fromTo(
  el,
  { opacity: 0, y: 50 },
  {
    opacity: 1.8,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 113%",
      toggleActions: "play none none reverse",
    },
  

      });
    });
  }, []);

  return (
    <div  className="App">
      <Promo />
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