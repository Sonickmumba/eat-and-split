/* eslint-disable react/prop-types */
import { useState } from "react";
import Friends from "./Friends";
import NewFriendForm from "../newFriendForm/NewFriendForm";

const ListFriends = ({
  data,
  handleSelection,
  addFriend,
  addFriendName,
  addFriendImage,
  friendName,
  friendImage,
  selectedFriend,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleAddFriend = (e) => {
    e.preventDefault();
    setClicked((clicked) => !clicked);
  };

  return (
    <div className="sidebar">
      <>
        {data.map((item) => (
          <Friends item={item} handleSelection={handleSelection} selectedFriend={selectedFriend} key={item.id}/>
        ))}
      </>
      {/* <Friends data={data} handleSelection={handleSelection} selectedFriend={selectedFriend}/> */}
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
