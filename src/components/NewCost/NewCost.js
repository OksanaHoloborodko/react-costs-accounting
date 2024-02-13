import React, { useState } from 'react';
import CostForm from "./CostForm";
import './NewCost.css';

const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-cost">
            {!isFormVisible && <button onClick={inputCostDataHandler}>Add New Cost</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCansel={cancelCostHandler} />}
        </div>
    );
}

export default NewCost;