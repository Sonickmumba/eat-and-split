import React from 'react'

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
const Friends = () => {
  return (
    <ul>
      {initialFriends.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          {item.balance < 0 && (<p className='red'>You owe {item.name} €{Math.abs(item.balance)}</p>)}
          {item.balance > 0 && (<p className='green'>{item.name} owes you €{Math.abs(item.balance)}</p>)}
          {item.balance === 0 && (<p>You and {item.name} are even</p>)}
          <button className='button'>Select</button>
        </li>
      ))}
    </ul> 
  )
}

export default Friends
