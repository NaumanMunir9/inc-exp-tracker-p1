import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="text">Transaction</label>
          <br />
          <input type="text" placeholder="Enter Transaction" />
        </div>

        <div>
          <label htmlFor="text">Amount</label>
          <br />
          <input type="number" placeholder="Enter Amount" />
        </div>
      </form>

      <button>Add Transaction</button>
    </div>
  );
};

export default AddTransaction;
