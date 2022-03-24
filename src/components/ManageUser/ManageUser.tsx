import DataTable from '../DataTable/DataTable';
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
    ];

    const userTableHeading = ['User ID', 'Name', 'Username', 'Email', 'Creation Date', 'User Details', 'Action'];

    const userData = [
        {
            id: 54345,
            name: 'Ifaz',
            username: 'ifaz',
            email: 'ifaz@gmail.com',
            date: '4:44 Am, 17 August 2020',
        },
        {
            id: 54335,
            name: 'Ifaz',
            username: 'ifaz',
            email: 'ifaz@gmail.com',
            date: '4:44 Am, 17 August 2020',
        },
        {
            id: 54325,
            name: 'Ifaz',
            username: 'ifaz',
            email: 'ifaz@gmail.com',
            date: '4:44 Am, 17 August 2020',
        },
        {
            id: 54355,
            name: 'Ifaz',
            username: 'ifaz',
            email: 'ifaz@gmail.com',
            date: '4:44 Am, 17 August 2020',
        },
        {
            id: 54346,
            name: 'Ifaz',
            username: 'ifaz',
            email: 'ifaz@gmail.com',
            date: '4:44 Am, 17 August 2020',
        },
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
                                UserSummery.map(user => <SummeryBlock summeryInfo={user} key={user.title}></SummeryBlock>)
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
                    <DataTable userData={userData} headings={userTableHeading}/>
                </div>
                <RightSidebar />
            </div>
        </div>
    );
};

export default ManageUser;