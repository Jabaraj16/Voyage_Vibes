import React, { useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyReview from '../Components/MyReview';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import AddReview from './AddReview';

function Dashboard() {

  return (
    <div>
      <Header insidereview />
      <div className='w-100 bg-success  p-3'>
        <h4 className='text-white ms-5 ps-5'>Hey,Jabaraj</h4>
      </div>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-3 ' style={{ backgroundColor: '#424242' ,height:'100vh'}}>
            <div className='d-flex flex-column justify-content-center align-items-center mt-5' >
              <div className='mb-4 mt-5'>
                <AddReview/>
              </div>
             
            </div>
          </div>
          <div className='col-lg-9 '>
            <div className='text-center'>
              <h5>Your Review</h5>
              <div className='mt-5'>
                <MyReview />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard