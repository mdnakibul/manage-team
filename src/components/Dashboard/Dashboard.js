import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <LeftSidebar />
                <RightSidebar />
            </div>
        </div>
    );
};

export default Dashboard;