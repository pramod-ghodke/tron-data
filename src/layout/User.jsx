import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Navmenu from '../Component/Navmenu'

const User = () => {
  return (
    <>
   <Navmenu/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default User;