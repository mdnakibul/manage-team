import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import '../ManageUser/ManageUser.css'
import SummeryBlock from '../SummeryBlock/SummeryBlock';
import DataTable from '../DataTable/DataTable';

const ManageGroup = () => {

    const GroupSummery = [
        {
            icon:'fas fa-users',
            title: 'Total Group',
            number: 25
        },
        {
            icon:'fas fa-user-friends',
            title: 'This Year',
            number: 15
        },
        {
            icon:'fas fa-user-friends',
            title: 'This Month',
            number: 9
        },
        {
            icon:'fas fa-user-friends',
            title: 'This Week',
            number: 4
        }
    ];
    const groupTableHeadings = ['User ID', 'Name', 'Username', 'Email', 'Creation Date', 'User Details', 'Action'];
    const groupTableData = [
        {
            id: 545345,
            name: 'frontend',
            date: '4:44 AM 12 August,2020',
            description: 'Development'
        },
        {
            id: 545345,
            name: 'frontend',
            date: '4:44 AM 12 August,2020',
            description: 'Development'
        },
        {
            id: 545345,
            name: 'frontend',
            date: '4:44 AM 12 August,2020',
            description: 'Development'
        },
        {
            id: 545345,
            name: 'frontend',
            date: '4:44 AM 12 August,2020',
            description: 'Development'
        },
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <LeftSidebar />
                {/* Dashboard Content  */}
                <div className="col-md-7" style={{ background: '#9bd6ab24' }}>
                    <div className="top d-flex align-items-center justify-content-between pt-5">
                        <div>
                            <h2>Dashboard//Admin</h2>
                            <p>Add, Edit, Delete Users</p>
                        </div>
                        <div className="dashboard-btn">
                            <span className="fas fa-user-lock me-2"></span>
                            Dashboard
                        </div>
                    </div>
                    {/* Summery  */}

                    <div className="summery group-summery pt-4">
                        <h2>Group Summery</h2>
                        <div className="d-flex summery-blocks justify-content-between mt-3">
                            {
                                GroupSummery.map(group => <SummeryBlock summeryInfo={group}></SummeryBlock>)
                            }
                        </div>
                    </div>

                    {/* Actions  */}

                    <div className="actions d-flex justify-content-between mt-5">
                        <div className="export">
                            <button type="button" className="btn btn-outline-success me-2"> <span className="fas fa-download me-1"></span> Download CSV</button>
                            <button type="button" className="btn btn-outline-success"><span className="fas fa-download me-1"></span> Download PDF</button>
                        </div>
                        <button type="button" className="btn btn-success me-2"> <span className="fas fa-plus-circle me-1"></span> Add User</button>
                    </div>

                    {/* Seach bar  */}

                    <form action="" className="mt-3 ms-auto" style={{ maxWidth: '250px' }}>
                        <div className="input-group">
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control" placeholder="Search...." />
                            </div>
                        </div>
                    </form>


                    {/* Data Table  */}
                    <DataTable userData={groupTableData} headings={groupTableHeadings}></DataTable>

                </div>
                <RightSidebar />
            </div>
        </div>
    );
};

export default ManageGroup;