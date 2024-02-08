// convention: file name should be in lowercases
// everything here will be render at "/users" page

import React from 'react'
import UserTable from './UserTable';

const UsersPage = async() => {


  return (
    <>
      <h1>Users</h1>
      <UserTable/>
    </>
  )
}

export default UsersPage

