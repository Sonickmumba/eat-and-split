import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ListFriends from './components/listFriends/ListFriends';
import BillForm from './components/billForm/BillForm';
// import NewFriendForm from './components/newFriendForm/NewFriendForm';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <ListFriends />
        <BillForm />
        {/* <NewFriendForm /> */}
      </div>
    </>
  )
}

export default App
