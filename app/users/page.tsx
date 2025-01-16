import React from 'react'

interface User {
    id:number;
    name:string;
}

const usersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div><h1>usersPage</h1>
    <ul>
        {users.map(user => <li key={user.id}>{user.id}{user.name}</li>)}
    </ul>
    </div>
  )
}

export default usersPage;