import React from 'react';
import Aside from '../components/aside';
import AdminNav from '../components/adminNav';

const Admin = ({children}) => {
    return (
        <div className='flex'>
            <Aside />
            <div className='w-full'>
                <AdminNav />
                {children}
            </div>
        </div>
    );
};

export default Admin;