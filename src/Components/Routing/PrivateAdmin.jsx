import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateAdmin = ({admin}) => {
  return (
    admin ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateAdmin