import React from 'react'
import Friends from './Friends';
import NewFriendForm from '../newFriendForm/NewFriendForm';


const ListFriends = () => {
  return (
    <div className='sidebar'>
      <Friends />
      <NewFriendForm />
      <button className='button'>Add friend</button>
    </div>
  )
}

export default ListFriends;
