import React from 'react';


const ProblemSolution = () => {
    return (
        <section className='text-center text-zinc-950 px-[0] py-[60px] block m-0 p-0 box-border w-screen'>
            <div className='max-w-[1200px] mx-[auto] my-[0] px-[20px] py-[0] block'>
                <h2 className='text-[32px] mb-[20px] block font-bold'>"Pourquoi Prospecter sur LinkedIn"<br />"devrait coûter une fortune ?"</h2>
                <p className='mb-[15px] block'>"Dites adieu aux solution bullshit hors de prix et lancez-vous en 5 minutes chrono."</p>
                <div className='flex justify-center gap-[30px] mt-[40px] flex-col lg:flex-row lg:items-center space-y8 p-2 items-center'>
                    <div className='[rotate:none]  opacity-100 w-full max-w-[450px] bg-[white] rounded-[20px] p-[30px] text-left border-[3px] border-[solid] border-[black] [box-shadow:8px_8px_0_black] block '>
                        <h3 className='text-center text-[24px] mb-[25px] uppercase text-yellow-950 font-bold'>Outils concurrents...</h3>
                        <ul className='mt-[20px] [list-style:none] block '>
                            <li className='text-red-500 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item [list-style:none]'>X Tarifs exorbitants (50 à 150€ / mois)</li>
                            <li className='text-red-500 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item [list-style:none]'>X Courbe d’apprentissage longue</li>
                            <li className='text-red-500 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item [list-style:none]'>X Trop de fonctionnalités inutiles</li>
                            <li className='text-red-500 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item [list-style:none]'>X Automatisations complexes</li>
                            <li className='text-red-500 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item [list-style:none]'>X Risques pour le compte LinkedIn</li>
                        </ul>
                    </div>
                    <div className='[rotate:none]   w-full max-w-[450px] bg-[white] rounded-[20px] p-[30px] text-left border-[3px] border-[solid] border-[black] [box-shadow:8px_8px_0_black] block '>
                        <h3 className='text-center text-[24px] mb-[25px] uppercase text-yellow-950 font-bold'>Sales Farmer</h3>
                        <ul className='block list-disc mt-[20px] [list-style:none]'>
                            <li className='text-yellow-950 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item'>✔ 9,99€/mois, soit 70% moins cher</li>
                            <li className='text-yellow-950 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item'>✔ Prêt en 5 minutes chrono</li>
                            <li className='text-yellow-950 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item'>✔ Focalisé sur ce qui fonctionne</li>
                            <li className='text-yellow-950 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item'>✔ 1 automatisation à personnaliser</li>
                            <li className='text-yellow-950 font-bold pl-[30px] pr-[0] py-[10px]  border-b-[1px_solid_#eee] list-item'>✔ Sécurisé pour votre compte</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='[rotate:none] opacity-100  mt-[40px] block '>
            <a href="#" className='text-[19px] px-[36px] py-[18px] bg-red-500 text-[white] rounded-[12px] font-bold border-[3px] border-[solid] border-red-50 [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)] [transition:transform_0.2s,_box-shadow_0.2s] inline-block no-underline cursor-pointer'>Prospecter gratuitement pendant 5 jours</a>
            <div className='flex justify-center gap-[20px] mt-[15px] text-[14px]'>
                <span>✔ Pas de CB requise</span>
                <span>✔ Sans engagement</span>
            </div>
            </div>
        </section>


    );
};

export default ProblemSolution;