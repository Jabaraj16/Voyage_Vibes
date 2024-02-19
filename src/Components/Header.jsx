import { useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Spinner from 'react-bootstrap/Spinner';

function Header({insidereview,insideHome}) {
  const [SpinnerStatus,setSpinnerStatus]=useState(false)
  const navigate=useNavigate()
  const handleLogout=()=>{
    setSpinnerStatus(true)
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
   
    setTimeout(()=>{
      navigate('/')
    },3000)

  }
  return (
    <div className='   '>
        <div className='p-3 w-100 text-center shadow d-flex justify-content-between' >
            <Link to={'/'} style={{textDecoration:'none'}}><h6 className='mainFont fs-1 text-info animate__animated animate__zoomInDown ' >Voyage Vibes</h6></Link>
           <div className='d-flex '>
              {
                insidereview&&<div><button onClick={handleLogout} className='btn btn-danger'>Logout</button></div>
              }
               {
              SpinnerStatus &&
              <div className='ms-2'><Spinner animation="border" variant="danger" /></div>
            }
           </div>
            {/* {
              insideHome&&
              <div>
                <button className='btn'>Login</button>
                <button>SignUp</button>
              </div>
            } */}
        </div>
        <ToastContainer autoClose={3000} theme='colored' />
    </div>
  )
}

export default Header