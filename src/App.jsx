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
  const [name, setName] = useState("");
  const [dataUse, setDataUse] = useState(initialFriends);
  const [friendName, setFriendName] = useState('');
  const [friendImage, setFriendImage] = useState('https://i.pravatar.cc/48');

  const handleSelect = (e) => {
    setName(e.target.id);
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
    setDataUse((prev) => [...prev, {
      id: id,
      name: friendName,
      image: `${friendImage}?=${id}`,
      balance: 0,
    }])
    setFriendName('');
    // setFriendImage('');
  };

  return (
    <>
      <div className="app">
        <ListFriends
          data={dataUse}
          handleSelect={handleSelect}
          addFriendName={addFriendName}
          addFriendImage={addFriendImage}
          addFriend={addFriend}
          friendName={friendName}
          friendImage={friendImage}
        />
        {name !== "" && <BillForm name={name} />}
      </div>
    </>
  );
}

export default App;
