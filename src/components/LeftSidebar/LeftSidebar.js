import React from 'react';
import logo from '../../image/shopkpr logo.jpg';
import './LeftSidebar.css'

const LeftSidebar = () => {
    // Color codes 
    // #006838 Deep green 
    // #9BD6AB light green
    // #FF514F light red
    // #C1C1C1 black font 

    return (
        <div className="col-md-2">
            <img className="img-fluid" src={logo} alt="Logo" />
            <div className="sidebar-nav">
                <ul>
                    <li className="active"> <span className="fas fa-user-friends me-2"></span>Admin</li>
                    <li> <span className="fas fa-heart"></span> Products</li>
                    <li> <span className="fas fa-cog"></span> Settings</li>
                    <li> <span className="fas fa-question-circle"></span> Help</li>
                </ul>
                <button className="log-out ms-5"> <span className="fas fa-sign-out-alt me-2"></span> Logout</button>
            </div> 
        </div>
    );
};

export default LeftSidebar;