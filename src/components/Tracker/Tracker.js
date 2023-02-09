import React, { useEffect, useState } from "react";
import AddForm from "../AddForm/AddForm";
import "./Tracker.css";

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
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Amount</td>
              <td>Transaction</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.amount}</td>
                  <td>{item.transaction}</td>
                  {console.log(item.transaction)}
                  <td>
                    <a href="/#"
                      onClick={() => {
                        deleteTransaction(index);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="total-balance">
        <div className="card">
          <div className="card-header"><h2>Total Balance</h2></div>
          <div className="card-body">
            <h5 className="card-title"> {balance}</h5>
            <btn onClick={calculateBalance} class="btn btn-primary">
              Check Balance
            </btn>
          </div>  
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Tracker;
