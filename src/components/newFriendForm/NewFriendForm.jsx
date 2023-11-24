/* eslint-disable react/prop-types */

const NewFriendForm = ({addFriend, addFriendName, addFriendImage, friendName, friendImage}) => {
  return (
    <form className="form-add-friend" onSubmit={addFriend}>
      <label>👫 Friend Name</label>
      <input type="text" value={friendName} onChange={addFriendName} required/>

      <label>🌄 Image URL</label>
      <input type="text" value={friendImage} onChange={addFriendImage} required/>

      <button className="button" type="submit">Add</button>
    </form>
  );
};

export default NewFriendForm;
