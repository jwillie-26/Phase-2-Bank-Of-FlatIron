import React from "react";

function AddTransactionForm({addTransaction}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const description = formData.get("description");
    const amount = formData.get("amount");
    const category = formData.get("category");
    const date = formData.get("date");
    const transaction = { description, amount, category, date };
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    }).then((response) => response.json())
    .then(() => addTransaction(transaction));
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
