import React, { useEffect,useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import PlaceCard from '../Components/PlaceCard'
import { getAllPlaceAPI } from '../../Services/allAPI'
function ViewAll() {
  const [placeData,setPlaceData]=useState([])
  const [searchKey,setSearchKey]=useState("")
  useEffect(()=>{
    getAllPlace()
    
  },[searchKey])

  const getAllPlace=async()=>{
    const token=sessionStorage.getItem("token")
      if(token){
         const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result=await getAllPlaceAPI(searchKey,reqHeader)
          if(result.status==200){
            setPlaceData(result.data)
          }else{
            setPlaceData([])
            console.log("here");
          }
       
      }
    
  }
  console.log(placeData);
  return (
    <div>

      <div className='container-fluid'>
        <Header />
        <div className='w-100 pe-5 text-end  mt-3'><Link to={'/'}> <button className='btn btn-primary shadow'><i className="fa-solid fa-house me-2"></i>Home</button></Link></div>
        <div className='w-100 d-flex justify-content-between'>
          <div>
            <h4 className='ms-5 '>All Review</h4>
          </div>
          <div class=" mt-3 ">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search by place" onChange={e=>setSearchKey(e.target.value)} />
          </div>
        </div>
        <div className='pt-5'>
          <Row className='mt-5'>
          {placeData?.length>0?placeData.map(place=>(
              <Col className='mb-3 ' lg={3}>
                <PlaceCard place={place} />
            </Col>
            )):<div className='w-100 text-center'>
              <img className='text-center' src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-486.jpg" alt="" />
            </div>
                }
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ViewAll