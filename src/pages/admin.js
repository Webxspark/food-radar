import { Table, Tag } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: <>Abuse&nbsp;Type</>,
            dataIndex: 'abuse_type',
            key: 'abuse_type',
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

    const NewTab = () => {
        const dataSource = [
            {
                key: '1',
                name: 'Mike',
                abuse_type: 'Physical',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="default">New</Tag>,
                date: '2023-07-10',
                // action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
            {
                key: '2',
                name: 'John',
                abuse_type: 'Physical',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="default">New</Tag>,
                date: '2023-07-10',
                // action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
        ];

        return (
            <>
                <div className="overflow-x-auto relative">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </>
        )
    }

    const InProgressTab = () => {
        const dataSource = [
            {
                key: '1',
                name: 'Bryan',
                abuse_type: 'Financial',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="blue">In-progress</Tag>,
                date: '2023-07-10',
                // action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
            {
                key: '2',
                name: 'Randy',
                abuse_type: 'Emotional',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="blue">In-progress</Tag>,
                date: '2023-07-10',
                // action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
        ];

        return (
            <>
                <div className="overflow-x-auto relative">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </>
        )
    }

    const UnderInvestigationTab = () => {
        const dataSource = [
            {
                key: '1',
                name: 'Zack',
                abuse_type: 'Sexual',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="warning">Under Investigation</Tag>,
                date: '2023-07-10',
                action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
            {
                key: '2',
                name: 'Quinn',
                abuse_type: 'Physical',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="warning">Under Investigation</Tag>,
                date: '2023-07-10',
                action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
        ];

        return (
            <>
                <div className="overflow-x-auto relative">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </>
        )
    }

    const ResolvedTab = () => {
        const dataSource = [
            {
                key: '1',
                name: 'Sara',
                abuse_type: 'Physical',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="success">Resolved</Tag>,
                date: '2023-07-10',
                action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
            {
                key: '2',
                name: 'Pamela',
                abuse_type: 'Physical',
                location: 'New York No. 1 Lake Park',
                status: <Tag color="success">Resolved</Tag>,
                date: '2023-07-10',
                action: <Link to='/dashboard/admin/view' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
            },
        ];

        return (
            <>
                <div className="overflow-x-auto relative">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </>
        )
    }
    
}

export default Admin;