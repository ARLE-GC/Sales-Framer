import React from 'react';


const About = () => {
    return (
        <section id="About" className='text-zinc-950 bg-yellow-50 text-center px-[0] py-[60px] m-0 p-0 box-border block w-screen'>
            <div className='max-w-[800px] mx-[auto] my-[0] px-[20px] py-[0] block'>
                <h2 className='text-[32px] mb-[20px] uppercase text-center leading-[1.2] text-yellow-950 block text-[1.5em] font-bold'>La prospection efficace <br/>ne devrait pas être un luxe</h2>
                <p className='mb-[15px] block'>Dans un monde où tout va plus vite, les outils numériques sont devenus essentiels. Mais pourquoi devraient-ils être hors de prix ?</p>
                <div className='flex items-center gap-8 max-w-[1000px] mx-[auto] my-[0] p-8 flex-wrap'>
                    <img src="src/assets/images/image20.avif" alt="a-propos" className='w-[300px] h-auto rounded-[2000px] object-cover'/>
                    
                    <div className='flex-[1] block'>
                        <p className='ml-[0] mr-[0] my-[0] block'>
                            <strong className='font-[bolder]'>Comme un agriculteur qui laboure son champ avec les bons outils, les entrepreneurs ont besoin d’outils simples et accessibles pour faire grandir leur activité.</strong>
                            </p><br/>
                        <p className='ml-[0] mr-[0] my-[0] block'>C’est avec cette vision que nous avons créé Sales Farmer :</p>

                        <ul className='ml-[0] mr-[0] my-[0] pl-4 text-left mt-[20px] inline-block [list-style:none] list-disc'>
                        <li className='pl-[25px] relative mb-[10px] list-item text-yellow-950'>
                            <p className='text-green-500 absolute left-[0]'>✔</p>
                            <strong className='font-[bolder]'>Un outil sans fioritures</strong> qui va droit à l’essentiel.</li>
                        <li className='pl-[25px] relative mb-[10px] list-item text-yellow-950'>
                            <p className='text-green-500 absolute left-[0]'>✔</p>
                            <strong className='font-[bolder]'>Un prix juste</strong> pour que chacun puisse automatiser sa prospection sans se ruiner.</li>
                        <li className='pl-[25px] relative mb-[10px] list-item text-yellow-950'>
                            <p className='text-green-500 absolute left-[0]'>✔</p>
                            <strong className='font-[bolder]'>Une solution pensée pour vous,</strong> les solopreneurs, indépendants et TPE qui veulent récolter des résultats, pas des factures salées.</li>
                        </ul>
                    </div>
                    <div className='block'>
                        <p className='ml-[0] mr-[0] my-[0] block'> Notre mission ? Vous donner les moyens de cultiver votre business, sans tracas et sans budget démesuré. Rejoignez-nous et récoltons le succès ensemble ! 🚀</p>
                    </div>
                    </div>
                 <div className='[rotate:none] opacity-100 translate-x-0 translate-y-0 mt-[40px] block'>
                    <a href="#" className='text-[19px] px-[36px] py-[18px] text-[white] rounded-[12px] font-bold border-[3px] border-[solid] border-[white] [box-shadow:0_4px_10px_black] [transition:transform_0.2s,_box-shadow_0.2s] inline-block bg-red-500 no-underline cursor-pointer'>Prospecter gratuitement pendant 5 jours</a>
                    <div className='flex justify-center gap-[20px] mt-[15px] text-[14px]'>
                        <span>✔ Pas de CB requise</span>
                        <span>✔ Sans engagement</span>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default About;