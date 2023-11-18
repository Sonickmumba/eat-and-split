import React from 'react'
import Friends from './Friends';
import NewFriendForm from '../newFriendForm/NewFriendForm';


const ListFriends = ({data, handleSelect}) => {
  return (
    <div className='sidebar'>
      <Friends data={data} handleSelect={handleSelect}/>
      <NewFriendForm />
      <button className='button'>Add friend</button>
    </div>
  )
}

export default ListFriends;
