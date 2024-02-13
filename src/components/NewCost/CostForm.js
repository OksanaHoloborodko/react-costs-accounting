import './CostForm.css';
import React, { useState } from 'react';

const CostForm = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    /*
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    });*/

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
        /*setUserInput({
            ...userInput,
            name: e.target.value
        })
        setUserInput((prevState) => {
            return {
                ...prevState,
                name: e.target.value
            };
        })*/
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
        /*setUserInput({
            ...userInput,
            amount: 'e.target.value'
        })*/
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
        /*setUserInput({
            ...userInput,
            date: 'e.target.value'
        })*/
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const costData = {
            description: description,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveCostData(costData);
        setDescription('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={description} onChange={descriptionChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2024-12-31" value={date} onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions"> 
            <button type="submit">Add Cost</button>
            <button type="button" onClick={props.onCansel}>Cancel</button>
            </div>
        </div>
    </form>
}

export default CostForm;