import { Link } from 'react-router-dom';
import TableHead from './TableHead';

type User = {
    date: string;
    email?: string;
    id: number;
    name: string;
    username?: string;
    description?: string;
}

interface IProps {
    headings: string[]
    userData: User[]
}

const DataTable = (props: IProps) => {
    return (
        <table className="table table-striped table-responsive mt-4">
            <TableHead headingData={props.headings} />
            <tbody>
                {
                    props.userData.map(data => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.date}</td>
                                <td><Link to="/">View Details</Link></td>
                                <td className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-success me-1"><span className="fas fa-edit"></span>edit</button>
                                    <button className="btn btn-danger"><span className="fas fa-trash"></span>delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default DataTable;