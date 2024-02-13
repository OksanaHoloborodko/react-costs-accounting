import './Costs.css';
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostFilter from './CostFilter';
import CostsDiagram from './CostsDiagram';
import React, { useState } from 'react';

const Costs = (props) => {
    const [year, setYear] = useState('2023');

    const onYearChangeHandler = (costYear) => {
        setYear(costYear);
    }

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === year;
    });

    let costsContent = <p>You didn't have costs on this year!</p>;

    if(filteredCosts.length > 0) {
        costsContent = filteredCosts.map(cost => <CostItem key={cost.id} date={cost.date} description={cost.description} amount={cost.amount} />);
    }

    return (
        <div>
            <Card className='costs'>
                <CostFilter year={year} onYearChange={onYearChangeHandler}/>
                <CostsDiagram costs={filteredCosts}/>
                {costsContent}
            </Card>
        </div>
    );
}

export default Costs;