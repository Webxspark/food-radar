import React from 'react';
import Aside from '../components/aside';
import { GoPersonFill } from 'react-icons/go';
import Admin from './admin';

const Dashboard = () => {
    return (
        <Admin>
            <div className='bg-[#121212] flex flex-col gap-10'>
                <div className='flex flex-col items-start px-12'>
                    <div className='flex'>
                        <div className='flex items-center gap-3 pt-16'>
                            <GoPersonFill className='text-white h-10' />
                            <div className='text-[#FD6219] font-bold'>Account Verification</div>
                        </div>
                    </div>
                    <div className='border-[0.5px] border-white w-[17%]'></div>
                </div>
                <form className='bg-[#000] m-20 text-white flex flex-col gap-6 items-start justify-center w-full'>
                    <div className='flex items-center gap-10 justify-center'>
                        <div className='flex flex-col gap-2 items-start justify-center'>
                            <div className=''>Full Name</div>
                            <input className='bg-[#000] border-white px-3 py-1 border-[0.5px] rounded-sm' placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col gap-2 items-start justify-center'>
                            <div>Phone Number</div>
                            <input className='bg-[#000] border-white px-3 py-1 border-[0.5px] rounded-sm' placeholder='Enter your phone number' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-start justify-center'>
                        <div>Email</div>
                        <input className='bg-[#000] border-white px-3 py-1 border-[0.5px] rounded-sm w-full' placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col gap-2 items-start justify-center'>
                        <div>Aadhar Card number</div>
                        <input className='bg-[#000] border-white px-3 py-1 border-[0.5px] rounded-sm w-full' placeholder='Enter your Aadhar number' />
                    </div>
                </form>
            </div>
        </Admin>
    );
};

export default Dashboard;