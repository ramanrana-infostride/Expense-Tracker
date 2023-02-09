import React, { useState } from "react";

import "./AddForm.css";
const AddForm = (props) => {
  const [transaction, setTransaction] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    let valueAmount = e.target.value;
    setAmount(valueAmount);
  };
  const handleTitleChange = (e) => {
    let valueTitle = e.target.value;
    setTitle(valueTitle);
  };

  const onOptionChange = (e) => {
    setTransaction(e.target.value);
  };

  function submitForm(event) {
    const transactionInput = {
      id: Date.now(),
      title: title,
      amount: amount,
      transaction: transaction,
    };

    props.onAdd(transactionInput);

    setAmount("");
    setTitle("");
    setTransaction("");
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={submitForm} className="main-form">
        <div className="form-group row p-4">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            <h4>Title</h4>
          </label>
          <div className="col-sm-10">
            <input
              className="h-75 "
              type="text"
              id="title"
              name="title"
              placeholder="Enter title ?"
              onChange={handleTitleChange}
              value={title}
            />
          </div>
        </div>
        <div className="form-group row p-4">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            <h4>Amount</h4>
          </label>
          <div className="col-sm-10">
            <input
              className="h-75"
              type="number"
              id="number"
              name="amount"
              placeholder="Enter Amount"
              onChange={handleAmountChange}
              value={amount}
            />
          </div>
        </div>

        <fieldset className="form-group p-3">
          <legend className="col-form-label col-sm-10">
            <h4>Transaction Type ?</h4>
          </legend>
          <div className="row">
            <div className="col-sm-10 ">
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="transaction"
                  value="Income"
                  id="Income"
                  checked={transaction === "Income"}
                  onChange={onOptionChange}
                />
                <label className="form-check-label" htmlFor="Income">
                  <h6>Income</h6>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="transaction"
                  value="Expense"
                  id="Expense"
                  checked={transaction === "Expense"}
                  onChange={onOptionChange}
                />
                <label className="form-check-label" htmlFor="Expense">
                  <h6>Expense</h6>
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary h-100 w-100">
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddForm;
