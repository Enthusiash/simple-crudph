import React, { useEffect, useState } from 'react'
import SideNav from '../SideNav'
import  Box  from '@mui/material/Box'
import Swal from "sweetalert2";

import '../Style/ManageEmployee.css';

import { DataGrid } from '@mui/x-data-grid';

import http from '../Utils/http'
import { SignalCellularNullTwoTone } from '@mui/icons-material';

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
}
const handleCellClick = (param, event) => {
  event.stopPropagation();
}
const handleRowClick = (param, event) => {
  event.stopPropagation();
}


const ManageEmployee = () => {

  const handleEditModal = (_id) => {
    const editedProduct = {
      category:document.getElementById("editCategory").value,
      unitOfMeasure:document.getElementById("editUnitOfMeasure").value,
      manufacturer:document.getElementById("editManufacturer").value,
      supplier:document.getElementById("editSupplier").value,
      itemName: document.getElementById("editName").value,
      itemType: document.getElementById("editType").value,
      itemDescription: document.getElementById("editDescription").value,
      quantity: document.getElementById("editQuantity").value,
      expDate: document.getElementById("editExpDate").value,
      dateAdded: document.getElementById("editDateAdded").value,
    };
  
    http
      .put(`/inventory/edit/${editProduct._id}`, editedProduct)
      .then((res) => {
        const updatedProducts = products.map((product) =>
          product._id === editProduct._id ? { ...product, ...editedProduct } : product
        );
        setProducts(updatedProducts);
        setEditDialogOpen(false);
        Swal.fire('Success', 'Product updated successfully!', 'success');
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'User will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        http
          .delete(`/users/delete/${_id}`)
          .then((res) => {
            console.log(res);
            Swal.fire('Deleted!', 'User has been deleted.', 'success');
            getUsersData(); // Refresh the products list
          })
          .catch((err) => console.log(err));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'User is safe :)', 'error');
      }
    });
  };

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
        <button onClick={() => handleEdit(cellValues.row._id)}
        id="edit-btn">Edit</button>
  
        <button onClick={() => handleDelete(cellValues.row._id)}
        id="delete-btn">Delete</button>
        </div>
      )
    }
    },
    
  ];
  
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    await http.get('/users/view')
    .then((res) => {
      const users = res.data.map((user, key) => ({
        id: key+1,
        _id: user._id,
        fullname: user.fullname,
        gender: user.gender,
        position: user.position,
        username: user.username,
        role: user.role,
        isActive: user.isActive,
        action: user.action,
      }));
      setUsersData(users);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUsersData();
  }, []) //For other page

  // const rows = [
  //   { id: 1, fullname: "Ashley Otchengco", gender: 'Male', position: 'Web Developer', username: 'Syntax', role: 'Admin', isActive: 'true', action: '/edit' }
   
  // ];

  return (  
    <>
      <Box sx={{ display: 'flex' }}>
      <SideNav />
        <Box id='dashboard-contents' component="main" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <div style={{ height: 400, width: '100%' }}>
            <h1>Manage Employee</h1>
            <DataGrid className="table-tbl"
              rows={usersData}
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
