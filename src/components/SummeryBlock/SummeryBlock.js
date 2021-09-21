import React from 'react';

const SummeryBlock = (props) => {
    props = props.summeryInfo;
    return (
        <div className="summery-block d-flex align-items-center">
            <div className="summery-icon">
                <span className={`${props.icon} me-2 text-success`}></span>
            </div>
            <div className="summery-info">
                <h4>{props.title}</h4>
                <p>{props.number}</p>
            </div>
        </div>
    );
};

export default SummeryBlock;