import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
const AdminNav = () => {
    const {address, isConnected} = useAccount();
    return (
        <div className='flex py-6 px-8 justify-between items-center'>
            <h1 className='text-white text-lg font-semibold'>Welcome</h1>
            <div className='flex items-center gap-x-2'>
                <div>
                    {/* <ConnectButton /> */}
                    {/* <div className='text-white text-sm'>0xd156D...eCfDB</div> */}
                    <div className='text-white text-sm'>{address}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;