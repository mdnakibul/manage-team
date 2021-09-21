
import management from '../../image/management.jpg';
import './RightSidebar.css';
import products from '../../image/products.jpg'
import deals from '../../image/deals.jpg'
import tickets from '../../image/tickets.jpg'
import leads from '../../image/leads.jpg'
import { useHistory } from 'react-router';

const RightSidebar = () => {
    const currentURL = window.location.href;
    console.log(currentURL);
    const userURL = 'http://localhost:3000/dash-board/admin/manage-user';
    const groupURL = 'http://localhost:3000/dash-board/admin/manage-group';
    const roleURL = 'http://localhost:3000/dash-board/admin/manage-role';
    console.log(currentURL === userURL);

    const history = useHistory();

    const pushToUser = () => {
        history.push('/dash-board/admin/manage-user');
    }

    const pushToGroup = () => {
        history.push('/dash-board/admin/manage-group')
    }
    const pushToRole = ()=>{
        history.push('/dash-board/admin/manage-role')
    }
    return (
        <div className="col-md-3" style={{ position: 'relative' }}>
            {/* Header Part  */}
            <div className="header d-flex align-items-center justify-content-between pt-5">
                <div className="d-flex">
                    <img src={management} alt="management" />
                    <h4>Management</h4>
                </div>
                <span className="fas fa-user-cog" style={{ color: '#ef947b' }}></span>
            </div>
            <h4>Manage</h4>
            <p style={{ color: '#C1C1C1' }}>
                Add, edit, delete, users, groups and roles
            </p>

            {/* Manage Blocks  */}
            <div className="manage-block d-flex align-items-center mb-4" onClick={pushToUser}>
                <div className="number" style={{background:currentURL===userURL || currentURL === 'http://localhost:3000/'? '#FF514F': '#9BD6AB'}}>1</div>
                <div className="manage-block-description">
                    <h4>Manage Users</h4>
                    <p>Let's you manage users</p>
                </div>
            </div>

            <div className="manage-block d-flex align-items-center mb-4" onClick={pushToGroup}>
                <div className="number" style={{background:currentURL===groupURL? '#FF514F': '#9BD6AB'}}>2</div>
                <div className="manage-block-description">
                    <h4>Manage Groups</h4>
                    <p>Let's you manage groups</p>
                </div>
            </div>

            <div className="manage-block d-flex align-items-center mb-4" onClick={pushToRole}>
                <div className="number" style={{background:currentURL===roleURL? '#FF514F': '#9BD6AB'}}>3</div>
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