import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineFileText } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { TbLogout } from 'react-icons/tb';
import { MdOutlineNoteAdd, MdOutlineAdminPanelSettings } from 'react-icons/md';

const Aside = () => {
    return (
        <>
            <div className='py-6 text-white bg-[#171717] h-screen'>
                <div className='w-48 h-auto flex justify-between items-center'>
                    <Link to={'/dashboard'} className='flex justify-center w-full'>
                        <div className='text-2xl font-bold px-8'>
                            <span className='text-[#FD6219]'>Food</span>
                            <span className='text-white'>Radar</span>
                        </div>
                    </Link>
                    <div className='mr-3 md:hidden p-2 rounded-md cursor-pointer'>
                        <AiOutlineClose className='text-xl' />
                    </div>
                </div>
                <div className='flex flex-col gap-9 mt-8 px-4 justify-between h-[65dvh]'>
                    <div className='flex flex-col justify-between '>
                        <div className='flex flex-col gap-3'>
                            <Link to="/dashboard" className="hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent">
                                <div className='flex items-center gap-2 ml-2'>
                                    <FaHome />
                                    Dashboard
                                </div>
                            </Link>
                            <Link className="hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent">
                                <div className='flex items-center gap-2 ml-2'>
                                    <AiOutlineFileText />
                                    Reported{'\u00A0'}Cases
                                </div>
                            </Link>
                            <Link className="hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent">
                                <div className='flex items-center gap-2 ml-2'>
                                    <MdOutlineNoteAdd />
                                    Submit{'\u00A0'}your{'\u00A0'}statement
                                </div>
                            </Link>
                            <Link className="hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent">
                                <div className='flex items-center gap-2 ml-2'>
                                    <BiSupport />
                                    Resources{'\u00A0'}&{'\u00A0'}support
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-4 h-[15dvh] justify-end gap-3'>
                    <Link className="hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent">
                        <div className='flex items-center gap-2 ml-2'>
                            <MdOutlineAdminPanelSettings />
                            Admin
                        </div>
                    </Link>
                    <div className='hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent cursor-pointer flex items-center gap-2 ml-2'>
                        <TbLogout />
                        Logout
                    </div>
                </div>

            </div>
        </>
    );
};

export default Aside;