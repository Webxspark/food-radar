import React, { useEffect, useRef, useState } from 'react';
import { Tooltip, DatePicker, Checkbox, message } from 'antd';
import { TbZoomCancel } from 'react-icons/tb';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Dragger from 'antd/es/upload/Dragger';
import AdminPage from './admin-page';
import { useAccount } from 'wagmi';
import { Editor } from '@tinymce/tinymce-react';
import { waitForTransaction, writeContract } from '@wagmi/core';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker

const IncidentForm = () => {
    const isMounted = useRef(false);
    const editorRef = useRef(null);
    const [hotelName, setHotelName] = useState('');
    const [hotelLocation, setHotelLocation] = useState('');
    const [incidentDate, setIncidentDate] = useState('');
    const [evidence, setEvidence] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [consent, setConsent] = useState(false);
    const [legalDisclaimer, setLegalDisclaimer] = useState(false);
    const navigate = useNavigate();

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const { address } = useAccount();

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;

        }
    }, [])

    async function handleFormSubmit(e) {
        e.preventDefault();
        //validate
        if (consent == false || legalDisclaimer == false) {
            message.error('Please accept the terms and conditions')
            return;
        }
        if (hotelName == '' || hotelLocation == '' || incidentDate == '' || additionalInfo == '') {
            message.error('Please fill all the fields')
            return;
        }
        if (editorRef.current.getContent() == '') {
            message.error('Please enter the description')
            return;
        }
        if (document.getElementById('evidence').files[0] == undefined) {
            //do nothing
        } else {
            //get the evidence from the input and convert it to base64
            const file = document.getElementById('evidence').files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                console.log(reader.result);
                setEvidence(reader.result);
            };
        }
        message.loading("Submitting your report", 0)
        var data = JSON.stringify({
            "hotelName": hotelName,
            "hotelLocation": hotelLocation,
            "incidentDate": incidentDate,
            "description": editorRef.current.getContent(),
            "evidence": evidence,
            "additionalInfo": additionalInfo
        })
        var rand_token = Math.random().toString(36).substring(7);
        //submit the form
        var { hash } = await writeContract({
            abi: CONTRACT_ABI,
            address: CONTRACT_ADDRESS,
            functionName: 'newReport',
            args: [address, data, rand_token]
        })
        var transaction = await waitForTransaction({
            hash: hash
        })
        message.destroy()
        message.success('Report submitted successfully')
        navigate('/reported-cases')
    }

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
                    <form onSubmit={handleFormSubmit} className='my-10 bg-[#000] py-10 px-12'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center gap-10 w-[80%]'>
                                <div className='flex flex-col gap-3 w-[80%]'>
                                    <div className='font-semibold'>Name of Hotel</div>
                                    <input value={hotelName} onChange={e => setHotelName(e.target.value)} className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='Enter your name' />
                                </div>
                                <div className='flex flex-col gap-3 w-[80%]'>
                                    <div className='font-semibold'>Location of Hotel</div>
                                    <input value={hotelLocation} onChange={e => setHotelLocation(e.target.value)} className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='Enter hotel location' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='flex items-center gap-2 font-semibold'>Date of Incident
                                    <Tooltip placement='rightBottom' title='Approximate'><AiOutlineInfoCircle className='cursor-pointer mt-1 text-lg' /></Tooltip>
                                </div>
                                <RangePicker onChange={e => setIncidentDate(e)} value={incidentDate} className=' focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Detailed description of incident</div>
                                {/* <textarea className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='What is wrong with the food' /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue=""
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                        skin: 'oxide-dark',
                                        content_css: 'dark'
                                    }}
                                />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Supporting Evidence</div>
                                {/* <Dragger
                                    className=''
                                    placeholder='upload evidence'
                                /> */}
                                <input id="evidence" type='file' className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='upload evidence' />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Additional Information or Comments</div>
                                <input value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)} className='bg-transparent focus:outline-none border-[#453e3e] focus:border-white w-full px-3 py-2 border-[0.5px] rounded-sm' placeholder='' />
                            </div>
                            <div className='flex flex-col gap-3 w-[80%]'>
                                <div className='font-semibold'>Consent and Legal Disclaimer</div>
                                <Checkbox onChange={
                                    e => setConsent(e.target.checked)
                                } checked={consent}>I hereby declare that all information provided is true and accurate to the best of my knowledge.</Checkbox>
                                <Checkbox onChange={
                                    e => setLegalDisclaimer(e.target.checked)
                                } checked={legalDisclaimer}>I understand that sharing fake information will result in legal repercussions, including but not limited to fines,
                                    penalties, or civil liabilities, depending on the jurisdiction and severity of the misinformation.</Checkbox>
                            </div>
                        </div>
                        <div className='w-[80%] flex justify-end'>
                            <button disabled={
                                legalDisclaimer == false || consent == false
                            } type='submit' className='bg-[#fe570b] disabled:cursor-not-allowed text-white  font-semibold rounded-full my-10 px-8 py-3'>
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