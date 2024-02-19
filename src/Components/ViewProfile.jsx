import React, { useEffect } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
function ViewProfile({placeData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[addReviewLength,setAddReviewLength]=useState(0)
  const username=sessionStorage.getItem("username")
  const email=sessionStorage.getItem("email")
  useEffect(()=>{
    setAddReviewLength(placeData.length)
  },[addReviewLength])
  return (
    <div>
        <button  className='btn text-black rounded bg-white '  onClick={handleShow}>View Profile</button>


        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button className='btn shadow disabled text-black'>{username}</button></p>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button className='btn shadow disabled text-black'>{email}</button></p>
        <p className='text-center fs-4 p-2 fw-bolder ' ><button className='btn shadow disabled text-black'>Added Review :{addReviewLength}</button></p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default ViewProfile