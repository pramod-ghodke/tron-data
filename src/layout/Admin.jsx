import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminFooter from '../Pages/Admin/AdminFooter';
import "../App.css";


const Admin = () => {
   
  return (
    <>
  
    <Outlet/>
    <AdminFooter/>
    
    </>
  )
}

export default Admin;