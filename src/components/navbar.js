import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='flex bg-[#121212] py-5 items-center justify-between'>
                <div className='flex gap-10'>
                    <div className='text-2xl font-bold px-8'>
                        <span className='text-white'>Food</span>
                        <span className='text-[#FD6219]'>Radar</span>
                    </div>
                </div>
                <div className='flex lg:mr-7 gap-3 lg:gap-6 items-center'>
                    <Link to="/auth"><button className='text-sm text-white border-[#FD6219] border-2 font-bold px-2 py-1 lg:px-5 lg:py-2 rounded-lg'>Connet Wallet</button></Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;