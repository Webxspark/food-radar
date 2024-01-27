import { Table, Tag } from 'antd';
import React from 'react';
import AdminPage from './admin-page';

const ReportedCases = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            abuse_type: 'Physical',
            location: 'New York No. 1 Lake Park',
            status: <Tag color="warning">Under Investigation</Tag>,
            date: '2023-07-10',
            // action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: <>Location</>,
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: <>Status</>,
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: <>Date</>,
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: <>Action</>,
            dataIndex: 'action',
            key: 'action',
        },
    ];
    return (
        <>
            <AdminPage>
                <div className="overflow-x-auto relative p-12">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </AdminPage>
        </>
    );
};

export default ReportedCases;