import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

const ManageRole = () => {
    return (
        <div className="container-fluid">
            <div className="row">
            <LeftSidebar/>
            <div className="col-md-7 d-flex justify-content-center">
                <div className="text-center m-auto">
                <h2>This Page still in maintainance mood</h2>
                <Link to="/">Return to Home Page</Link>
                </div>
            </div>
            <RightSidebar/>
            </div>
        </div>
    );
};

export default ManageRole;