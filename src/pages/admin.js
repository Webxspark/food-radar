import React from 'react';
import { useEffect, useRef } from "react";
import { Select, Table, Tabs, Tag } from "antd";
import { Link } from "react-router-dom";
import AdminPage from './admin-page';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: <>Hotel Name</>,
        dataIndex: 'hotel_name',
        key: 'hotel_name',
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
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
        },
        {
            key: '2',
            name: 'John',
            abuse_type: 'Physical',
            location: 'New York No. 1 Lake Park',
            status: <Tag color="default">New</Tag>,
            date: '2023-07-10',
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
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
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
        },
        {
            key: '2',
            name: 'Randy',
            abuse_type: 'Emotional',
            location: 'New York No. 1 Lake Park',
            status: <Tag color="blue">In-progress</Tag>,
            date: '2023-07-10',
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
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
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
        },
        {
            key: '2',
            name: 'Quinn',
            abuse_type: 'Physical',
            location: 'New York No. 1 Lake Park',
            status: <Tag color="warning">Under Investigation</Tag>,
            date: '2023-07-10',
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
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
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
        },
        {
            key: '2',
            name: 'Pamela',
            abuse_type: 'Physical',
            location: 'New York No. 1 Lake Park',
            status: <Tag color="success">Resolved</Tag>,
            date: '2023-07-10',
            action: <Link to='/report-preview' className="px-3 py-2 text-white duration-200 ease-in-out hover:text-[#f1f1f1] hover:bg-[#232323] bg-[#121212]">View</Link>,
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

const AdminHome = () => {
    const isMounted = useRef(false);

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        }
    }, []);

    const items = [
        {
            key: '1',
            label: 'New',
            children: <><NewTab /></>
        },
        {
            key: '2',
            label: 'In Progress',
            children: <><InProgressTab /></>
        },
        {
            key: '3',
            label: 'Under Investigation',
            children: <><UnderInvestigationTab /></>
        },
        {
            key: '4',
            label: 'Resolved',
            children: <><ResolvedTab /></>
        },

    ];
    return (
        <>
            <AdminPage>
                <div className='p-12'>
                    <Tabs
                        defaultActiveKey="1"
                        onChange={(key) => console.log(key)}
                        items={items}
                    />
                </div>
                
            </AdminPage>
        </>
    )
}
export default AdminHome;