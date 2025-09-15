import React from 'react';


const Footer = () => {
    return (
         <footer className='m-0 p-0 box-border block text-zinc-950 text-center w-screen'>
        <div className='flex items-center justify-between flex-wrap px-8 py-4 gap-4 max-w-[1200px] mx-[auto] my-[0]'>
            <a href="#top" className='flex items-center no-underline gap-2 cursor-pointer text-red-500'>
            <img src="./images/image7.avif" alt="Logo Sales Farmer" className='h-[40px] block cursor-pointer text-red-500'/>
            <h3 className='m-0 text-[1.2rem] [color:inherit] leading-none text-left uppercase block font-bold'>Sales <br/> Framer</h3>
            </a>
            <p className='mb-[15px] block'>Developpé par Guy-Mosley </p>
            <p className='mb-[15px] block'>© 2025 Sales Farmer. Tous droits réservés.</p>
        </div>
   </footer>

    );
};

export default Footer;