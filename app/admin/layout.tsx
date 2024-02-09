import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const AdminLayout = ({children}: Props) => {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
     {/* children refers to the content that will be rendered inside the <AdminLayout> component  */}
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout