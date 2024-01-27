import React from 'react';
import { Tooltip, DatePicker, Checkbox } from 'antd';
import { TbZoomCancel } from 'react-icons/tb';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Dragger from 'antd/es/upload/Dragger';
import AdminPage from './admin-page';

const { RangePicker } = DatePicker

const IncidentForm = () => {
    return (
        <>
            <AdminPage>
                <div className='ml-8 text-white'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-2'>
                            <TbZoomCancel />
                            Incident Info
                        </div>
                        <div className='bg-gray-200 w-32 h-[2px]'></div>
                    </div>
                    <form className='my-10 bg-[#000] py-10 px-12'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center gap-10 w-[80%]'>
                                <div className='flex flex-col gap-3 w-[80%]'>
                                    <div className='font-semibold'>Name of Hotel</div>
                                    <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='Enter your name' />
                                </div>
                                <div className='flex flex-col gap-3 w-[80%]'>
                                    <div className='font-semibold'>Location of Hotel</div>
                                    <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='Enter hotel location' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='flex items-center gap-2 font-semibold'>Date of Incident
                                    <Tooltip placement='rightBottom' title='Approximate'><AiOutlineInfoCircle className='cursor-pointer mt-1 text-lg' /></Tooltip>
                                </div>
                                <RangePicker className=' focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Detailed description of incident</div>
                                <textarea className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='What is wrong with the food' />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Supporting Evidence</div>
                                <Dragger
                                className=''
                                placeholder='upload evidence'
                                />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Additional Information or Comments</div>
                                <input className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='' />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Consent and Legal Disclaimer</div>
                                <Checkbox>I hereby declare that all information provided is true and accurate to the best of my knowledge.</Checkbox>
                                <Checkbox>I understand that sharing fake information will result in legal repercussions, including but not limited to fines,
                                    penalties, or civil liabilities, depending on the jurisdiction and severity of the misinformation.</Checkbox>
                            </div>
                        </div>
                        <div className='w-[80%] flex justify-end'>
                            <button type='submit' className='bg-[#fe570b] text-white  font-semibold rounded-full my-10 px-8 py-3'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </AdminPage>
        </>
    );
};

export default IncidentForm;