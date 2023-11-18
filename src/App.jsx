import { useState } from 'react'

import './App.css'
import ListFriends from './components/listFriends/ListFriends';
import BillForm from './components/billForm/BillForm';

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
  const [name, setName] = useState('')
  const toUseData = initialFriends;
  const handleSelect = (e) => {
    setName(e.target.id);
  }

  return (
    <>
      <div className='app'>
        <ListFriends data={toUseData} handleSelect={handleSelect}/>
        {name !== "" && <BillForm name={name}/>}
      </div>
    </>
  )
}

export default App
