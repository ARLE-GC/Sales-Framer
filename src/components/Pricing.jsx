import React from 'react';


const Pricing = () => {
    return (
         <section id="Pricing" className='text-zinc-950 text-center  m-0 p-0 box-border bg-[#f0f0f0] px-[0] py-[60px] block w-screen'>
            <div className='max-w-[1200px] mx-[auto] my-[0] px-[20px] py-[0] block'>
                <h2 className='text-[32px] mb-[20px] uppercase text-center leading-[1.2] text-yellow-950 block text-[1.5em] font-bold'>L’outil de prospection LinkedIn <br/>le plus abordable du marché</h2>
                <p className='mb-[15px] block'>Sans engagement. Sans surprise. Juste des prospects qualifiés sur LinkedIn.</p>

                <div className='[rotate:none] translate-x-0 translate-y-0 opacity-100 max-w-[500px] ml-[auto] mr-[auto] my-[40px] border-[5px] border-[solid] border-[white] rounded-[24px] p-[40px] [box-shadow:0_10px_30px_black] block bg-yellow-50'>
                    <div className='m-0 p-0 box-border block'>
                        <img src="./images/image7.avif" alt="Logo Sales Farmer" className='h-[50px] mb-[20px] px-40'/>
                        <h3 className='text-[32px] text-left mb-[25px] text-yellow-950 uppercase leading-[1.2] block text-[1.17em] font-bold'>Formule unique</h3>
                        <p className='mb-[15px] block'>Tout ce dont vous avez besoin pour récolter des ventes.</p>
                        <div className='font-bold px-[20px] py-[10px] rounded-[8px] text-[24px] mx-[0] my-[20px] inline-block bg-yellow-500'>9,99€ HT / MOIS, tout inclus</div>
                    </div>
                    <ul className='[list-style:none] block list-disc'>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Economisez en moyenne 50€ / mois</li>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Scrapping illimité LinkedIn et Sales Navigator</li>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Campagnes illimitées et sur-mesure</li>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Envoi illimité de messages personnalisés</li>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Suivi des campagnes et analyse des performances</li>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Support client ultra-réactif</li>
                        <li className='px-[0] py-[12px] font-bold border-b-[1px_solid_black] list-item text-yellow-950'><p className='text-green-500 absolute'>✔</p>Sans engagement</li>
                    </ul>
                    <div className='[rotate:none] opacity-100 translate-x-0 translate-y-0 mt-[40px] block'>
                        <a href="#" className='text-[19px] px-[36px] py-[18px] text-[white] px-[24px] py-[12px] rounded-[12px] font-bold border-[3px] border-[solid] border-[white] [box-shadow:0_4px_10px_black] [transition:transform_0.2s,_box-shadow_0.2s] inline-block bg-red-500 no-underline cursor-pointer'>Prospecter gratuitement pendant 5 jours</a>
                        <div className='flex justify-center gap-[20px] mt-[15px] text-[14px]'>
                            <span>✔ Pas de CB requise</span>
                            <span>✔ Sans engagement</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Pricing;