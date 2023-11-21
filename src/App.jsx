import { useState } from "react";

import "./App.css";
import ListFriends from "./components/listFriends/ListFriends";
import BillForm from "./components/billForm/BillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [dataUse, setDataUse] = useState(initialFriends);
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");

  const handleSelection = (friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
  };

  const addFriendName = (e) => {
    setFriendName(e.target.value);
  };

  const addFriendImage = (e) => {
    setFriendImage(e.target.value);
  };

  const addFriend = (e) => {
    e.preventDefault();
    const id = Date.now();
    setDataUse((prev) => [
      ...prev,
      {
        id: id,
        name: friendName,
        image: `${friendImage}?=${id}`,
        balance: 0,
      },
    ]);
    setFriendName("");
    setFriendImage("https://i.pravatar.cc/48");
  };

  // Bill form now
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [toPay, setToPay] = useState("user");

  const handleSplitBill = (value) => {
    setDataUse((prev) =>
      prev.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  const whoToPay = (e) => {
    setToPay(e.target.value);
  };

  const totalBill = (e) => {
    setBill(e.target.value);
  };

  const ownBill = (e) => {
    setMyExpense(e.target.value);
  };

  return (
    <>
      <div className="app">
        <ListFriends
          data={dataUse}
          handleSelection={handleSelection}
          addFriendName={addFriendName}
          addFriendImage={addFriendImage}
          addFriend={addFriend}
          friendName={friendName}
          friendImage={friendImage}
          selectedFriend={selectedFriend}
        />
        {selectedFriend && (
          <BillForm
            selectedFriend={selectedFriend}
            handleSplitBill={handleSplitBill}
            whoToPay={whoToPay}
            toPay={toPay}
            ownBill={ownBill}
            totalBill={totalBill}
            bill={bill}
            myExpense={myExpense}
          />
        )}
      </div>
    </>
  );
}

export default App;
