import React, { useEffect } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { deleteUserAPI } from '../../Services/allAPI';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function ViewProfile({addReviewLength}) {
  const [show, setShow] = useState(false);
  const [SpinnerStatus,setSpinnerStatus]=useState(false)
  const navigate=useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const username=sessionStorage.getItem("username")
  const email=sessionStorage.getItem("email")
  
  const handleDelete=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const Deleteresult=confirm("Are you sure want to delete account?")
        console.log(Deleteresult);
        if(Deleteresult){
          try{
        
            const result=await deleteUserAPI(reqHeader)
    
            if(result.status==200){
              setSpinnerStatus(true)
    
              setTimeout(()=>{
                navigate('/register')
              },3000)
            }
          }catch(err){
            console.log(err);
          }
        }else{
          console.log("nothing");
        }
      
    }
  }

  
  return (
    <div>
        <button  className='btn text-black rounded bg-white fw-bold'  onClick={handleShow}>View Profile</button>


        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button className='btn shadow disabled text-black w-100'>{username}</button></p>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button className='btn shadow disabled text-black  w-100'>{email}</button></p>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button className='btn shadow disabled text-black w-100'>Added Review :{addReviewLength}</button></p>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button onClick={handleDelete} className='btn shadow  text-black bg-danger me-2'>Delete Account</button>
        {
            SpinnerStatus &&
            <div  className='mt-2'><Spinner animation="border" variant="black" /></div>
          }
        </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default ViewProfile