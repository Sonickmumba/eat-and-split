import { useState } from 'react'

import './App.css'
import ListFriends from './components/listFriends/ListFriends';
import BillForm from './components/billForm/BillForm';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <ListFriends />
        <BillForm />
      </div>
    </>
  )
}

export default App
