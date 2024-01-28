import React, { useEffect, useRef, useState } from 'react';
import { GoPersonFill } from 'react-icons/go';
import AdminPage from './admin-page';
import { readContract, writeContract } from "@wagmi/core";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';
import { useAccount } from 'wagmi';
import Preloader from '../components/preloader';


const Dashboard = () => {
    const isMounted = useRef(false);
    const [view, setView] = useState('loading');
    const [userData, setUserData] = useState(false);
    const [loaderText, setLoaderText] = useState('Please wait');
    const { address } = useAccount();
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            (async () => {
                const check = await readContract({
                    address: CONTRACT_ADDRESS,
                    abi: CONTRACT_ABI,
                    functionName: 'isUserExists',
                    args: [address]
                })
                if(check == false){
                    setLoaderText('Setting up your account');
                    const newUser = await writeContract({
                        address: CONTRACT_ADDRESS,
                        abi: CONTRACT_ABI,
                        functionName: 'createUser',
                        args: [address]
                    })
                    if(newUser){
                        fetchUserData()
                    }
                } else {
                    fetchUserData()
                }
            })()
        }
    }, [])

    async function fetchUserData(){
        setLoaderText('Loading');
        const data = await readContract({
            address: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            functionName: 'fetchUser',
            args: [address]
        })
        setView('content');
        console.log(data);
        setUserData(data);
    }
    return (
        <AdminPage>
            {
                view == 'loading' && <Preloader text={loaderText} />
                || view == 'content' && <div className='bg-[#121212] flex flex-col gap-10'>
                    <div className='flex flex-col items-start px-8'>
                        <div className='flex'>
                            <div className='flex items-center gap-3'>
                                <GoPersonFill className='text-white h-10' />
                                <div className='text-[#FD6219] font-bold'>Account Verification</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] flex items-center justify-center'>
                        <form className='bg-[#000] w-[80%] text-white flex py-10 px-12 flex-col items-center justify-center'>
                            <div className='w-full flex flex-col gap-y-5'>
                                <div className='flex items-center gap-x-4 justify-center w-full'>
                                    <div className='flex flex-col gap-2 items-start justify-center w-full'>
                                        <div className='font-semibold'>Full Name</div>
                                        <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='Enter your name' />
                                    </div>
                                    <div className='flex flex-col gap-2 items-start justify-center w-full'>
                                        <div className='font-semibold'>Phone Number</div>
                                        <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white px-3 w-full py-2 border-[0.5px] rounded-sm' placeholder='Enter your phone number' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 items-start justify-center'>
                                    <div className='font-semibold'>Email</div>
                                    <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white px-3 py-2 border-[0.5px] rounded-sm w-full' placeholder='Enter your email' />
                                </div>
                                <div className='flex flex-col gap-2 items-start justify-center'>
                                    <div className='font-semibold'>Aadhar Card number</div>
                                    <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white px-3 py-2 border-[0.5px] rounded-sm w-full' placeholder='Enter your Aadhar number' />
                                </div>
                                <div>
                                    <button className='bg-[#FD6219] w-full py-2 px-4 uppercase rounded-sm font-semibold'>Update Info</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </AdminPage>
    );
};

export default Dashboard;