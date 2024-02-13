import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from 'react';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'iPhone',
    amount: 1499.59 
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 1247.99 
  },
  {
    id: 'c3',
    date: new Date(2021, 3, 1),
    description: 'Skirt',
    amount: 49.99 
  }
];

const App = () => {
const [costs, setCosts] = useState(INITIAL_COSTS);

const addCostHandler = (cost) => {
  setCosts((prevCosts) => {
    return [cost, ...prevCosts];
  });
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;