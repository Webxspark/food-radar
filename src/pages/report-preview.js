import { Select, Table } from 'antd';
import React from 'react';
import AdminPage from './admin-page';

const ReportPreview = () => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const columns = [
        {
            title: 'Info',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Details',
            dataIndex: 'abuse_type',
            key: 'abuse_type',
        },
    ];
    const dataSource = [
        {
            key: '1',
            name: <div className="font-semibold">Hotel Name</div>,
            abuse_type: 'Ryle',

        },
        {
            key: '2',
            name: '',
            name: <div className="font-semibold">Location of Hotel</div>,
            abuse_type: 'Thendral Avenue Chennai-600054',
        },
        {
            key: '2',
            name: <div className="font-semibold">Date of Incident</div>,
            abuse_type: '10/6/23 to 15/6/23',
        },
        {
            key: '2',
            name: <div className="font-semibold">Description of Incident</div>,
            abuse_type: 'My dog stepped on a beee',
        },
        {
            key: '2',
            name: <div className="font-semibold">Supporting Evidence (opt)</div>,
            abuse_type: 'img.jpg',
        },
        {
            key: '2',
            name: <div className="font-semibold">Additional Info/comments (opt)</div>,
            abuse_type: '',
        },
    ];

    const dataSourceTwo = [
        {
            key: '1',
            name: <div className="font-semibold">Full Name</div>,
            abuse_type: 'Physical',

        },
        {
            key: '2',
            name: <div className="font-semibold">Phone Number</div>,
            abuse_type: 'Physical',
        },
        {
            key: '2',
            name: <div className="font-semibold">Email</div>,
            abuse_type: 'Physical',
        },
        {
            key: '2',
            name: <div className="font-semibold">Aadhar Number</div>,
            abuse_type: 'Physical',
        }
    ];
    return (
        <>
            <AdminPage>
                <div className="grid-cols-12 grid gap-3 p-12">
                    <div className="col-span-8">
                        <Table pagination={false} dataSource={dataSource} columns={columns} />

                    </div>
                    <div className="col-span-4 flex flex-col gap-5">
                        <div className="flex flex-col gap-5 mt-4">
                            <div className="text-xl font-bold text-[#FD6219]">Reporter's Info</div>
                            <Table pagination={false} dataSource={dataSourceTwo} columns={columns} />
                        </div>
                        <div className='flex gap-4 justify-between'>
                            <Select
                                placeholder="Update Status"
                                onChange={onChange}
                                onSearch={onSearch}
                                className='border-[1px] rounded-lg w-[80%]'
                                options={[
                                    {
                                        value: 'Under Investigation',
                                        label: 'Under Investigation',
                                    },
                                    {
                                        value: 'In Progess',
                                        label: 'In Progess',
                                    },
                                    {
                                        value: 'Resolved',
                                        label: 'Resolved',
                                    },
                                ]}
                            />
                            <button className='text-white border-[#FD6219] border-2 px-1 lg:px-2 rounded-lg'>Update</button>
                        </div>
                    </div>
                </div>
            </AdminPage>
        </>
    );
};

export default ReportPreview;