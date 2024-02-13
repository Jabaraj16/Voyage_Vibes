import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PlaceCard from '../Components/PlaceCard'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function ViewAll() {
  return (
    <div>

      <div className='container-fluid'>
        <Header />
        <div className='w-100 pe-5 text-end  mt-3'><Link to={'/'}> <button className='btn btn-primary shadow'><i className="fa-solid fa-house me-2"></i>Home</button></Link></div>
        <div className='w-25 float-end'>
          <div class=" mt-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search by place" />
          </div>
        </div>
        <div className='pt-5'>
          <Row className='mt-5'>
            <Col className='mb-3 ' lg={3}>
              <PlaceCard />
            </Col>
  
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ViewAll