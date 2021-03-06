import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Friend from './component/Friend/Friend';

function App() {
  const [friends, setFriends] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    })

  return (
    <div>
      <h3>Friend : {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  );
}

export default App;
