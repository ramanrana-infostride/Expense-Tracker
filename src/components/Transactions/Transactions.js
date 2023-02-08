import React from "react";

const Transactions = (props) => {
  function handleClick() {
    console.log(props.id);
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="card m-1 w-50 ">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <h5 className="card-title">{props.amount}</h5>
          <p className="card-text">
          {props.transaction}
          </p>
          <button className="btn btn-danger" onClick={handleClick}>Delete</button>
        
        </div>
      </div>
  
    </>
  );
};

export default Transactions;
