// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className='text-zinc-950 flex items-center justify-between gap-8 flex-wrap text-center px-[0] py-[60px] m-0 p-0 box-border  w-screen bg-yellow-100'>
        <div className='max-w-[1200px] mx-[auto] my-[0] px-[20px] py-[0] block'>
            <div className='  inline-flex justify-center items-center gap-[15px] bg-[white] border-[2px] border-[solid] border-[black] px-[15px] py-[8px] rounded-[50px] ml-[auto] mr-[auto] my-[0] [box-shadow:0_4px_0_black] '>
            <div className='flex'>
                <img src="./images/image2.avif" alt="Avatar utilisateur 1" className='h-[35px] w-[35px] rounded-[50%] border-[2px] border-[solid] border-[white] -ml-[10px] max-w-[500px] object-cover flex-[1_1_400px]'/>
                <img src="./images/image3.avif" alt="Avatar utilisateur 2" className='h-[35px] w-[35px] rounded-[50%] border-[2px] border-[solid] border-[white] -ml-[10px] max-w-[500px] object-cover flex-[1_1_400px]'/>
                <img src="./images/image4.avif" alt="Avatar utilisateur 3" className='h-[35px] w-[35px] rounded-[50%] border-[2px] border-[solid] border-[white] -ml-[10px] max-w-[500px] object-cover flex-[1_1_400px]'/>
                <img src="./images/image5.avif" alt="Avatar utilisateur 4" className='h-[35px] w-[35px] rounded-[50%] border-[2px] border-[solid] border-[white] -ml-[10px] max-w-[500px] object-cover flex-[1_1_400px]'/>
                <img src="./images/image6.avif" alt="Avatar utilisateur 5" className='h-[35px] w-[35px] rounded-[50%] border-[2px] border-[solid] border-[white] -ml-[10px] max-w-[500px] object-cover flex-[1_1_400px]'/>
            </div>
            <span>⭐ +45 solopreneurs conquis</span>
            </div>

            <h1 className='[rotate:none] opacity-100  text-[40px] text-[black] mb-[20px] uppercase text-center leading-[1.2] block font-bold '>La prospection <br/> LinkedIn automatisée <br/> 
            <span className='px-[15px] py-[0]  inline-block bg-yellow-300'>pour 9,99€/mois</span></h1>

            <p className='[rotate:none] opacity-100  text-[18px] mt-[20px] mb-[15px] block '>
            Oubliez les outils hors de prix et allez à l’essentiel. <br/>
            Semez vos demandes de connexions et récoltez des ventes, sans vous épuiser.
            </p>

            <div className='[rotate:none] opacity-100  mt-[40px] block '>
            <a href="#" className='text-[19px] px-[36px] py-[18px] text-[white] rounded-[12px] font-bold border-[3px] border-[solid] border-[white] [box-shadow:0_4px_10px_black] [transition:transform_0.2s,_box-shadow_0.2s] inline-block no-underline cursor-pointer bg-red-500'>Prospecter gratuitement pendant 5 jours</a>
            <div className='flex justify-center gap-[20px] mt-[15px] text-[14px]'>
                <span>✔ Pas de CB requise</span>
                <span>✔ Sans engagement</span>
            </div>
            </div>
        </div>

        <img src="./images/image1.avif" alt="Illustration prospection" className='w-full max-w-[500px] rounded-[2000px] object-cover flex-[1_1_400px]'/>
        </section>
  );
};

export default Hero;