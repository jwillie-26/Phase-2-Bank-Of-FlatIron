import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import { useState, useEffect } from "react";;


function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  function getTransactions() {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then(setTransactions);
  }

  useEffect(getTransactions, []);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }
  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  }

  function handleSearch(searchTerm) {
    if (searchTerm === "") {
      getTransactions()
    } else {

      const updatedTransactions = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTransactions(updatedTransactions);
    }
  }
  return (
    <div>
      <Search search={handleSearch}/>
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
