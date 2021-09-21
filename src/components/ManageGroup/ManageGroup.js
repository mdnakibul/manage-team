import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import '../ManageUser/ManageUser.css'
import SummeryBlock from '../SummeryBlock/SummeryBlock';

const ManageGroup = () => {

    const GroupSummery = [
        {
            title: 'Total Group',
            number: 25
        },
        {
            title: 'This Year',
            number: 15
        },
        {
            title: 'This Month',
            number: 9
        },
        {
            title: 'This Week',
            number: 4
        }
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
                                GroupSummery.map(group => <SummeryBlock summerInfo={group}></SummeryBlock>)
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

                    <table className="table table-striped table-responsive mt-4">
                        <thead className="thead-success" style={{background:'006838'}}>
                            <tr>
                                <th scope="col">Group Id</th>
                                <th scope="col">Group Name</th>
                                <th scope="col">Creation Date </th>
                                <th scope="col">Group Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td>Support Live customer</td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td>Support Live customer</td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td>Support Live customer</td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td>Support Live customer</td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td>Support Live customer</td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            
                            
                            
                        </tbody>
                    </table>
                </div>
                <RightSidebar />
            </div>
        </div>
    );
};

export default ManageGroup;