type Summery = {
 icon: string;
 title: string;
 number: number
}
interface IProps {
    summeryInfo: Summery
}
const SummeryBlock = (props: IProps) => {
    console.log("Summery Block Props", props)
    const summerInfo = props.summeryInfo;
    return (
        <div className="summery-block d-flex align-items-center">
            <div className="summery-icon">
                <span className={`${summerInfo.icon} me-2 text-success`}></span>
            </div>
            <div className="summery-info">
                <h4>{summerInfo.title}</h4>
                <p>{summerInfo.number}</p>
            </div>
        </div>
    );
};

export default SummeryBlock;