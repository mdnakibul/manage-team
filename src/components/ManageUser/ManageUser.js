import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import SummeryBlock from '../SummeryBlock/SummeryBlock';
import './ManageUser.css'

const ManageUser = () => {
    const UserSummery = [
        {
            icon: 'fas fa-user-shield',
            title: 'Admin',
            number: 25
        },
        {
            icon: 'fas fa-user-friends',
            title: 'Users',
            number: 15
        },
        {
            icon: 'fas fa-users',
            title: 'Groups',
            number: 9
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Roles',
            number: 4
        }
    ]

    return (
        <div className="container-fluid">
            <div className="row">
                <LeftSidebar />

                {/* Manage User Content  */}
                <div className="col-md-7" style={{ background: '#f7f9fd' }}>
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

                    <div className="summery pt-3">
                        <h2>Summery</h2>
                        <div className="d-flex summery-blocks justify-content-between mt-3">
                            {
                                UserSummery.map(user => <SummeryBlock summeryInfo={user}></SummeryBlock>)
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
                        <thead className="thead-success" style={{ background: '006838' }}>
                            <tr>
                                <th scope="col">User Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">User Details</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>Ifaz Ahmed</td>
                                <td>ifaz@gmail.com</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td><Link to="/">View Details</Link></td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>Ifaz Ahmed</td>
                                <td>ifaz@gmail.com</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td><Link to="/">View Details</Link></td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>Ifaz Ahmed</td>
                                <td>ifaz@gmail.com</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td><Link to="/">View Details</Link></td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#534531</td>
                                <td>Ifaz Ahmed</td>
                                <td>Ifaz Ahmed</td>
                                <td>ifaz@gmail.com</td>
                                <td>@4:44 Am, 17 August 2020</td>
                                <td><Link to="/">View Details</Link></td>
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

export default ManageUser;