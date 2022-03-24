interface IProps {
    headingData: string[]
}
const TableHead = (props:IProps) => {
    const headingData = props.headingData;
    return (
        <thead className="thead-success" style={{ background: '006838' }}>
            <tr>
                {
                    headingData.map(heading => <th key={heading} scope="col">{heading}</th>)
                }
            </tr>
        </thead>
    );
};

export default TableHead;