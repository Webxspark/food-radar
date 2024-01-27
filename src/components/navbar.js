import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='flex my-6 items-center mx-5 justify-between'>
                <div className='flex gap-10'>
                    FoodRadar
                    {/* <Link to="/"><img className='w-40 h-auto lg:w-16 lg:h-auto lg:mt-1 lg:mx-10' src={logo} /></Link> */}
                </div>
                <div className='flex lg:mr-7 gap-3 lg:gap-6 items-center'>
                    <Link to="/auth"><button className='bg-[#fe570b] text-sm text-white font-bold px-2 py-1 lg:px-5 lg:py-2 rounded-full'>Connet Wallet</button></Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;