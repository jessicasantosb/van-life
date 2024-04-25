import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <h1>dashboard</h1>   
        <Outlet />   
    </>
  )
}

export default Dashboard
