import './CostFilter.css';

const CostFilter = (props) => {
    const changeYearHandler = (e) => {
        const year = e.target.value;
        props.onYearChange(year);
    }

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Choose year</label>
                <select value={props.year} onChange={changeYearHandler}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
}

export default CostFilter;