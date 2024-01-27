import React from 'react';
import Navbar from '../components/navbar';
import arrow from '../assets/Arrow 1.png';
import speaker from '../assets/image 1.png';
import landing from '../assets/image 2.png';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-start px-8 py-10 gap-8 h-screen bg-[#121212]'>
                <div className='flex'>
                    <div className='flex gap-8 items-center justify-center'>
                        <img className='h-10' src={speaker} />
                        <img className='' src={arrow} />
                        <div className='text-[#FD6219] font-semibold text-xl'>Ensuring Food Safety</div>
                    </div>
                </div>
                <div className='text-white font-bold text-5xl'>
                    Food safety just got social. Join the FoodRadar movement.<br /> Blockchain + you = safer bites.
                </div>
                <div className='p-10 flex gap-20 items-center justify-center'>
                    <img className='h-80' src={landing} />
                    <div className='flex flex-col gap-10 px-8'>
                        <div className='text-white'>A decentralized platform that makes it easy for consumers to report food safety issues to the authorities without  having to meet them in person.</div>
                        <div className='text-white font-semibold text-lg flex gap-10 items-center'>
                            <div className=''>Learn More</div>
                            <button className='text-white border-[#FD6219] border-2 font-bold px-2 py-1 lg:px-5 lg:py-2 rounded-lg'>File a Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;