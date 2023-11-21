/* eslint-disable react/prop-types */
// import React from 'react'
// import { useState } from 'react';

const Friends = ({ item, handleSelection, selectedFriend}) => {
  // const isSelected = item.id === selectedFriend && item.id selectedFriend.id;
  const isSelected = selectedFriend && item.id === selectedFriend.id;
  console.log(isSelected);
  return (
    <ul >
      {/* {data.map((item) => ( */}
        <li key={item.id} className={isSelected ? "selected" : ""}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          {item.balance < 0 && (
            <p className="red">
              You owe {item.name} €{Math.abs(item.balance)}
            </p>
          )}
          {item.balance > 0 && (
            <p className="green">
              {item.name} owes you €{Math.abs(item.balance)}
            </p>
          )}
          {item.balance === 0 && <p>You and {item.name} are even</p>}
          <button
            type="button"
            className="button"
            id={item.id}
            onClick={() => handleSelection(item)}
          >
            {selectedFriend && selectedFriend.name === item.name ? "Close" : "Select"}
          </button>
        </li>
      {/* ))} */}
    </ul>
  );
};

export default Friends;
