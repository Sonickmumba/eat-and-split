import React, { useState } from "react";
import Friends from "./Friends";
import NewFriendForm from "../newFriendForm/NewFriendForm";

const ListFriends = ({
  data,
  handleSelect,
  addFriend,
  addFriendName,
  addFriendImage,
  friendName,
  friendImage,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleAddFriend = (e) => {
    e.preventDefault();
    setClicked((clicked) => !clicked);
  };

  return (
    <div className="sidebar">
      <Friends data={data} handleSelect={handleSelect} />
      {clicked && (
        <NewFriendForm
          addFriend={addFriend}
          addFriendName={addFriendName}
          addFriendImage={addFriendImage}
          friendName={friendName}
          friendImage={friendImage}
        />
      )}
      <button className="button" onClick={handleAddFriend}>
        {clicked ? "close" : "Add friend"}
      </button>
    </div>
  );
};

export default ListFriends;
