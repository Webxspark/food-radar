import React from 'react';
import Aside from '../components/aside';
import AdminNav from '../components/adminNav';

const AdminPage = ({children}) => {
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