/* eslint-disable react/prop-types */
// import React from "react";

const BillForm = ({
  selectedFriend,
  splitBill,
  whoToPay,
  toPay,
  totalBill,
  ownBill,
  bill,
  myExpense,
}) => {

  return (
    <form className="form-split-bill" onSubmit={splitBill}>
      <h2>Split a bill with {selectedFriend.name} </h2>
      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={totalBill} />

      <label>🧍🏻‍♀️ Your expense</label>
      <input type="text" value={Number(myExpense) > Number(bill) ? bill : myExpense} onChange={ownBill} />

      <label>👫 {selectedFriend.name}&apos;s expense</label>
      <input type="text" value={Number(myExpense) > Number(bill) ? 0 : Number(bill) - Number(myExpense)} disabled />

      <label>🤑 Who is paying</label>
      <select name="" id="" value={toPay} onChange={whoToPay}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button" type="submit">
        Split bill
      </button>
    </form>
  );
};

export default BillForm;
