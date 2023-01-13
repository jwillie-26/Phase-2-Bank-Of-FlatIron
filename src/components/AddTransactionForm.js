import React, { useState } from "react";

function AddTransactionForm(props) {
 // const props=transactions;
  const transactions = props.transactions;
  const setTransactions = props.setTransactions;
  const [state,setState] = useState({});
  
  
  function handleSubmitForm(e){
    e.preventDefault();
    fetch("http://localhost:8001/transactions", 
    {
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
    "accept":"application/json"
    },
    body: JSON.stringify(state)
  })
    .then(res=>res.json())
    .then(data=>{
      setTransactions([
        ...transactions,data
      ])
    }) 
  }
  function handleChange(e){
  setState({
    ...state,
    [e.target.name]:
     e.target.value
  });
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmitForm}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" name="category" placeholder="Category"onChange={handleChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
