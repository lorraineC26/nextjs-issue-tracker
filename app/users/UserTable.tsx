import React from 'react'

// define the shape of the user objects
interface User {
  id: number;
  name: string;
  email:string;
}

const UserTable = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); //disable caching
  const users: User[] = await res.json(); // annotate the type as a custom User array

  return (
    <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th> 
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td></tr>)}
        </tbody>
    </table>
  )
}

export default UserTable