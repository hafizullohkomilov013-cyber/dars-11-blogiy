import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <div>sidebar</div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
