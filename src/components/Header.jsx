// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className='m-0 p-0 box-border text-zinc-950 px-[0] py-[20px] bg-[rgba(255,_255,_249,_0.9)] backdrop-filter backdrop-blur-[5px] border-b-[1px_solid_#eee] sticky top-[0] block w-screen'>
      <a href="#" className='flex justify-center items-center gap-[10px] p-[10px] text-[white] text-[14px] font-medium no-underline cursor-pointer bg-yellow-950'>
        <span className='px-[8px] py-[2px] rounded-[4px] font-bold text-[11px] text-yellow-950 bg-yellow-200'>PROMO</span>
        Obtenez 40% de remise immédiate avec le code <strong className='font-[bolder]'>CHICKENRUN40</strong>
    </a>
        <div  className='flex space-x-6 gap-[20px] flex justify-between items-center max-w-[1200px] mx-[auto] my-[0] px-[20px] py-[0]'>
            <a href="#top" className='flex items-center no-underline gap-2 cursor-pointer text-red-500'>
                <img src="./images/image7.avif" alt="Logo Sales Farmer" className='h-[40px] block cursor-pointer text-red-500 font-bold'/>
                <h3 className='m-0 text-[1.2rem] [color:inherit] leading-none text-left font-[var(--font-display)] uppercase block font-bold'>Sales <br/> Framer</h3>
            </a>
            <nav className='block'>
                <ul className='gap-[15px] flex-wrap justify-center flex [list-style:none] list-disc'>
                    <li className='list-item'>
                      <a href="#SolutionSteps" className='font-semibold [transition:color_0.3s] no-underline cursor-pointer text-zinc-950'>Solution</a>
                    </li>
                    <li className='list-item'>
                      <a href="#Pricing" className='font-semibold [transition:color_0.3s] no-underline cursor-pointer text-zinc-950'>Tarifs</a>
                    </li>
                    <li className='list-item'>
                      <a href="#FAQ" className='font-semibold [transition:color_0.3s] no-underline cursor-pointer text-zinc-950'>FAQ</a>
                    </li>
                    <li className='list-item'>
                      <a href="#About" className='font-semibold [transition:color_0.3s] no-underline cursor-pointer text-zinc-950'>À propos</a>
                    </li>
                </ul>
            </nav>
            <samp className='font-[monospace]'>connexion</samp>
            <a href="#Pricing" className='text-[white] px-[24px] py-[12px] rounded-[12px] font-bold border-[3px] border-[solid] border-[white] [box-shadow:0_4px_10px_black] [transition:transform_0.2s,_box-shadow_0.2s] inline-block no-underline cursor-pointer bg-red-500'>Essai gratuit 5 jours</a>
        </div>
    </header>

  );
};

export default Header;