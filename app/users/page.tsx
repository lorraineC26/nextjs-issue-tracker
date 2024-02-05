// convention: file name should be in lowercases
// everything here will be render at "/users" page

import React from 'react'

// define the shape of the user objects
interface User {
  id: number,
  name: string;
}

const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}}); // fetch fresh data every 10 sec
  const users: User[] = await res.json(); // annotate the type as a User array


  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage

