import React, { useEffect, useState } from "react";
import AddForm from "../AddForm/AddForm";
import "./Tracker.css";

import Transactions from "../Transactions/Transactions";

const Tracker = () => {
  const [balance, setBalance] = useState([]);

  const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

  const [transactions, setTransactions] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (titem) => {
    setTransactions((prevState) => {
      return [...prevState, titem];
    });
    console.log(transactions);
  };

  function deleteTransaction(id) {
    setTransactions((prevState) => {
      return prevState.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function calculateBalance() {
    var total = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].transaction === "Income") {
        total = total + Number(transactions[i].amount);
      } else if (transactions[i].transaction === "Expense") {
        total = total - Number(transactions[i].amount);
      }
    }

    setBalance(total);
  }

  return (
    <div className="tracker-container">
      <AddForm onAdd={addTransaction} />

      <div className="transaction-container">
        {transactions.map((transactionItem, index) => {
          return (
            <Transactions
              key={index}
              id={index}
              title={transactionItem.title}
              amount={transactionItem.amount}
              transaction={transactionItem.transaction}
              onDelete={deleteTransaction}
            />
          );
        })}
      </div>

      <button
        className="btn btn-primary  balance-btn"
        onClick={calculateBalance}
      >
        {" "}
        Check Balance
      </button>
      <h2 className="balance-display">{balance}</h2>
    </div>
  );
};

export default Tracker;

/// add Edit functonality

//add delete via other method
