import React, { useEffect, useRef } from 'react';
import Aside from '../components/aside';
import AdminNav from '../components/adminNav';
import {useAccount} from 'wagmi';
import { useNavigate } from 'react-router-dom';
const AdminPage = ({children}) => {
    const {address, isConnected} = useAccount();
    const navigate = useNavigate();
    useEffect(() => {
        if (isConnected == false || address == undefined) {
            navigate('/');
        }
    }, [address, isConnected])
    return (
        <div className='flex'>
            <div className='overflow-auto h-screen sticky top-0 hide-scrollbar'>
                <Aside />
            </div>
            <div className='w-full'>
                <AdminNav />
                {children}
            </div>
        </div>
    );
};

export default AdminPage;