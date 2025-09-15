import React from 'react';


const FAQ = () => {
    return (
                <section id="FAQ"className='px-[0] py-[60px] m-0 box-border block text-zinc-950 text-center w-screen'>
            <div className='max-w-[800px] mx-[auto] my-[0] px-[20px] py-[0] block'>
                <h2 className='text-[32px] mb-[20px] uppercase text-center leading-[1.2] text-yellow-950 font-bold block'>Vous avez des questions ?<br/>Nous avons les réponses.</h2>
                
                <div className='[rotate:none]  opacity-100 block animate__animated animate__fadeIn'>
                    <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Qu'est-ce que Sales Farmer ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Sales Farmer est conçu pour aider les professionnels à automatiser la prospection sur LinkedIn, à améliorer la génération de leads et à gagner du temps.</p>
                    </details>
                     <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Comment Sales Farmer automatise-t-il la prospection sur LinkedIn ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Sales Farmer utilise des algorithmes avancés pour envoyer des demandes de connexion, des messages de suivi et s'engager avec des prospects ciblés sur LinkedIn, tout en respectant les directives de LinkedIn.</p>
                    </details>
                    <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Comment Sales Farmer protège-t-il mon compte LinkedIn ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Sales Farmer utilise des mesures de sécurité comme des limites d'envoi personnalisables et des délais aléatoires pour imiter le comportement humain et protéger votre compte.</p>
                    </details>
                    <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Sales Farmer fournit-il des analyses de performance ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Oui, Sales Farmer offre des rapports détaillés sur les performances de votre campagne, y compris les taux d'acceptation, les taux de réponse et d'autres mesures clés pour évaluer l'efficacité de votre prospection.</p>
                    </details>
                    <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Quelles sont les fonctionnalités de l'essai gratuit de 5 jours ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Pendant les 5 jours d'essai, vous pouvez tester toutes les fonctionnalités principales : demandes de connexion automatisées, messages de suivi personnalisés et tableaux de bord analytiques.</p>
                    </details>
                     <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Disposez-vous d'un service d'assistance à la clientèle ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Oui, nous offrons un support client dédié par email et chat en direct pour vous aider à optimiser vos campagnes.</p>
                    </details>
                    <details className='border-[2px] border-[solid] border-yellow-950 rounded-[16px] mb-[15px] bg-yellow-200 block'>
                        <summary className='p-[20px] font-bold cursor-pointer flex justify-between items-center text-[18px] text-yellow-950 [content-increment:list-item_0] [list-style:inside_disclosure-closed]'>Puis-je obtenir de l'aide pour ma configuration technique ? <p>+</p></summary>
                        <p className='pl-[20px] pr-[20px] py-[0] mb-[15px] block text-yellow-950'>Tout à fait ! Notre équipe d'assistance peut vous guider tout au long du processus d'installation, y compris la connexion de votre compte LinkedIn, la configuration de vos campagnes, et s'assurer que tout fonctionne correctement. Nous proposons également des tutoriels et des guides dans notre Centre d'aide.</p>
                    </details>
                </div>
            </div>
        </section>

    );
};

export default FAQ;