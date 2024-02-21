import React, { useContext, useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyReview from '../Components/MyReview';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import AddReview from '../Components/AddReview';
import { useEffect } from 'react';
import { getUserPlaceAPI } from '../../Services/allAPI';
import { addPlaceResponseContext, editPlaceContextResponse, removePlaceContextResponse } from '../ContextAPI/ContextShare';
import ViewProfile from '../Components/ViewProfile';
import { Link } from 'react-router-dom';
function Dashboard() {

  const {editPlaceResponse,setEditPlaceResponse}=useContext(editPlaceContextResponse)
  const {addPlaceResponse,setAddPlaceResponse}=useContext(addPlaceResponseContext)
  const {removePlaceResponse,setRemovePlaceResponse}=useContext(removePlaceContextResponse)
  
  const [placeData,setPlaceData]=useState([])
  const[addReviewLength,setAddReviewLength]=useState(0)
  const username=sessionStorage.getItem("username")


  useEffect(()=>{
      getuserPlace()
      if(placeData.length>0){
        setAddReviewLength(placeData.length)
      }else{
        setAddReviewLength(0)
      }
  },[addPlaceResponse,editPlaceResponse,removePlaceResponse,placeData.length])
  
 


  const getuserPlace=async()=>{
      const token=sessionStorage.getItem("token")
        if(token){
           const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          const result=await getUserPlaceAPI(reqHeader)
            if(result.status==200){
              setPlaceData(result.data)
              setAddReviewLength(placeData.length)
            }else{
              setPlaceData([])
              console.log("here");
            }
         
        }
      
    }
console.log(placeData);
  return (
    <div>
      <Header insidereview />
      <div className='w-100  p-3 rounded-bottom d-flex justify-content-between' style={{ backgroundColor: '#424242'}}>
        <h4 className='text-white ms-5 ps-5'>Hey,{username.split(" ")[0]}</h4>
        <div>
          <Link to={'/'}><button className='btn btn-info'>Home</button></Link>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row mt-2 '>
          <div className='col-lg-3 rounded-end' style={{ backgroundColor: '#424242' ,height:'100vh'}}>
            <div className='d-flex flex-column justify-content-center align-items-center mt-5 ' >
              <div className='mb-4 mt-5'>
                <AddReview/>
              </div>
              <div className='mb-4'>
                <ViewProfile addReviewLength={addReviewLength}/>
              </div>
            </div>
          </div>
          <div className='col-lg-9 '>
            <div className='text-center'>
              <h5 className='mt-3'>Your Review</h5>
              <div className='mt-5 row'>
                {placeData?.length>0?placeData.map(place=>(
                  <div className='col-lg-4 mb-3'>
                  <div>
                    <MyReview place={place} />
                  </div>
                </div>
                )): <div className='w-100 text-center'>
                  <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" alt="" />
                </div>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard