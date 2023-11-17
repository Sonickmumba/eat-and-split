import React from "react";

const NewFriendForm = () => {
  return (
    <form className="form-add-friend">
      <label>👫 Friend Name</label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />

      <button className="button">Add</button>
    </form>
  );
};

export default NewFriendForm;
