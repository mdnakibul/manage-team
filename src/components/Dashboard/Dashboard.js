import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <LeftSidebar />
                <div className="col-md-7"></div>
                <RightSidebar />
            </div>
        </div>
    );
};

export default Dashboard;