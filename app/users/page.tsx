// convention: file name should be in lowercases
// everything here will be render at "/users" page

import React from 'react'
import UserTable from './UserTable';

interface Props {
  searchParams: {sortOrder: string}; // query string in the browser address 
}

const UsersPage = async({searchParams: {sortOrder}}: Props) => {

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage

