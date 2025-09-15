import React from 'react';

const Promo = () => {
    return (
        <section>
            <a href="#" className='flex justify-center items-center gap-[10px] p-[10px] text-[white] text-[14px] font-medium no-underline cursor-pointer bg-yellow-950 '>
        <span className='px-[8px] py-[2px] rounded-[4px] font-bold text-[11px] text-yellow-950 bg-yellow-200'>PROMO</span>
        Obtenez 40% de remise immédiate avec le code <strong className='font-[bolder]'>CHICKENRUN40</strong>
    </a>
        </section>
    );
};

export default Promo;