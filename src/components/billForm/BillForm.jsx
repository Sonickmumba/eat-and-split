import React from "react";

const BillForm = ({ name }) => {
  if (!name) "";
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name} </h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍🏻‍♀️ Your expense</label>
      <input type="text" />

      <label>👫 (X)'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
};

export default BillForm;
