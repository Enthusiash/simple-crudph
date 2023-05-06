import React from 'react'
import SideNav from '../SideNav'
import  Box  from '@mui/material/Box'

import '../Style/ManageEmployee.css';

import { DataGrid } from '@mui/x-data-grid';

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
}
const handleCellClick = (param, event) => {
  event.stopPropagation();
}
const handleRowClick = (param, event) => {
  event.stopPropagation();
}

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'fullname', headerName: 'Full Name', width: 120 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'position', headerName: 'Position', width: 120 },
  { field: 'username', headerName: 'Username', width: 120 },
  { field: 'role', headerName: 'Role', width: 100 },
  { field: 'isActive', headerName: 'isActive', width: 100 },
  { field: 'action', headerName: 'Action', width: 120,
  renderCell: (cellValues) => {
    return (
      <div className="btn-action">
      <button onClick={(event) => {
        handleClick(event, cellValues);
      }}
      id="edit-btn">Edit</button>

      <button onClick={(event) => {
        handleClick(event, cellValues);
      }}
      id="delete-btn">Delete</button>
      </div>
    )
  }
  },
  
];

const rows = [
  { id: 1, fullname: "Ashley", gender: 'Male', position: 'Web Developer', username: 'Syntax', role: 'Admin', isActive: 'true', action: '/edit' }
 
];


const ManageEmployee = () => {
  return (  
    <>
      <Box sx={{ display: 'flex' }}>
      <SideNav />
        <Box id='dashboard-contents' component="main" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <div style={{ height: 400, width: '100%' }}>
            <h1>Manage Employee</h1>
            <DataGrid className="table-tbl"
              rows={rows}
              columns={columns}
              paginationModel={{ page: 0, pageSize: 5 }}
              onCellClick={handleCellClick}
              onRowClick={handleRowClick}
            />
          </div>
        </Box>
      </Box>
    </>
  )
}

export default ManageEmployee
