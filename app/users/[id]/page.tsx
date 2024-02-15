import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
  params: { id: number}
}

// destructure props and grab params --> furthure destructure params
const UserDetailPage = ({ params: { id }}: Props) => {
  if (id > 10) notFound();
  
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage