import React from 'react';
import management from '../../image/management.jpg';
import './RightSidebar.css';
import products from '../../image/products.jpg'
import deals from '../../image/deals.jpg'
import tickets from '../../image/tickets.jpg'
import leads from '../../image/leads.jpg'

const RightSidebar = () => {
    return (
        <div className="col-md-3" style={{position:'relative'}}>
            {/* Header Part  */}
            <div className="header d-flex align-items-center justify-content-between mt-2">
                <div className="d-flex">
                    <img src={management} alt="management" />
                    <h4>Management</h4>
                </div>
                <span className="fas fa-user-cog" style={{color:'#FF514F'}}></span>
            </div>
            <h4>Manage</h4>
            <p style={{ color: '#C1C1C1' }}>
                Add, edit, delete, users, groups and roles
            </p>

            {/* Manage Blocks  */}
            <div className="manage-block d-flex align-items-center mb-4">
                <div className="number">1</div>
                <div className="manage-block-description">
                    <h4>Manage Users</h4>
                    <p>Let's you manage users</p>
                </div>
            </div>

            <div className="manage-block d-flex align-items-center mb-4">
                <div className="number">2</div>
                <div className="manage-block-description">
                    <h4>Manage Groups</h4>
                    <p>Let's you manage groups</p>
                </div>
            </div>

            <div className="manage-block d-flex align-items-center mb-4">
                <div className="number">3</div>
                <div className="manage-block-description">
                    <h4>Manage Roles</h4>
                    <p>Let's you manage Roles</p>
                </div>
            </div>

            {/* quick links  */}

            <div className="quick-links d-flex">
                <div className="quick-link-block me-2">
                    <img src={products} alt="products" />
                    <p>PRODUCTS</p>
                    <p>CTRL+ALT+P</p>
                </div>
                <div className="quick-link-block me-2">
                    <img src={deals} alt="deals" />
                    <p>DEALS</p>
                    <p>CTRL+ALT+D</p>
                </div>
                <div className="quick-link-block me-2">
                    <img src={tickets} alt="tickets" />
                    <p>TICKETS</p>
                    <p>CTRL+ALT+T</p>
                </div>
                <div className="quick-link-block me-2">
                    <img src={leads} alt="leads" />
                    <p>LEADS</p>
                    <p>CTRL+ALT+D</p>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;