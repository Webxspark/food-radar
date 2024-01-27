import React from 'react';
import Aside from '../components/aside';

const Admin = ({children}) => {
    return (
        <div className='flex'>
            <Aside />
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default Admin;