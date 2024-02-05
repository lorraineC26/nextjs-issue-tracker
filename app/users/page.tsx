// convention: file name should be in lowercases
// everything here will be render at "/users" page

import React from 'react'

// define the shape of the user objects
interface User {
  id: number,
  name: string;
}

const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); //disable caching
  const users: User[] = await res.json(); // annotate the type as a User array


  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage

