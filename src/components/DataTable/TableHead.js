import React from 'react';

const TableHead = (props) => {
    return (
        <thead className="thead-success" style={{ background: '006838' }}>
            <tr>
                {
                    props.headingData.map(heading => <th scope="col">{heading}</th>)
                }
            </tr>
        </thead>
    );
};

export default TableHead;