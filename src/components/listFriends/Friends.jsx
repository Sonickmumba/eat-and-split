import React from 'react'


const Friends = ({data,handleSelect}) => {
  
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          {item.balance < 0 && (<p className='red'>You owe {item.name} €{Math.abs(item.balance)}</p>)}
          {item.balance > 0 && (<p className='green'>{item.name} owes you €{Math.abs(item.balance)}</p>)}
          {item.balance === 0 && (<p>You and {item.name} are even</p>)}
          <button className='button' id={item.name} onClick={handleSelect}>Select</button>
        </li>
      ))}
    </ul> 
  )
}

export default Friends
