import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import PlaceCard from '../Components/PlaceCard';
import PlaceCard from '../Components/PlaceCard'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function LandingPage() {
  const [profileStatus,setProfileStatus]=useState(true)
  useEffect(() => {
    Aos.init();
  }, [])

  const token=sessionStorage.getItem("token")
  return (
    <>
      <div className='w-100' style={{height:'100vh'}}>
        <Header/>
        <div className='container-fluid mt-1' style={{height:'100vh'}}>
          <Row>
            <Col sm="12" lg="6" className=' d-flex align-items-center' >
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='ms-4'>
                  <h4 style={{lineHeight:"40px"}}>Voyage of Discovery: Embarking on a Journey Through Travel</h4>
                </div>
               <div className='w-100'>
                  <p className='ms-4'>
                  Connecting Journeys, Inspiring Adventures:  Share Your Story,<br /> Explore the World Together.”
                  </p>
               </div>
                <div className='w-100 ms-5 text-start'>
                
                {
                  token?<Link to={'/dashboard'}><Button className='shadow'  variant="primary">Share your Experience <i className="ms-2 fa-solid fa-star"></i></Button></Link>
                  :<Link to={'/register'}><Button className='shadow'  variant="primary">Explore  the world...</Button></Link>
                  

                }
              </div>
              </div>
              
            </Col>
            <Col sm="12" lg="6" className='mt-4'>
              <img data-aos="flip-left" data-aos-duration="2000"  className='ms-3 rounded shadow' width={'250px'} src="https://wallpapercave.com/wp/wp8738941.jpg" alt="" />
              <img data-aos="flip-right" data-aos-duration="2000" className='rounded ms-5 shadow' width={'250px'} src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <img data-aos="flip-up" data-aos-duration="2000" className='ms-3 rounded shadow'  width={'250px'} height={'270px'} src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <img data-aos="flip-up" data-aos-duration="2000" className='rounded ms-5 shadow mt-4' width={'250px'} height={'270px'}  src="https://images.unsplash.com/photo-1552039431-11d2a516d0d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Col>
          </Row>
          
        </div>
      </div>
      <div>
      <div className='w-100' style={{height:'100vh'}}>
      <div className='container shadow'> <hr /></div>
        <div className='w-100'>
          <p className='text-center fs-4 p-2 fw-bolder animate__animated animate__backInUp animate__delay-3  ' ><button className='btn shadow disabled text-black'>User's Review</button></p>
          </div>
         
         <marquee >
            <div className='w-100 mt-5 container-fluid'>
            <div><PlaceCard/></div>
            </div>
         </marquee>
         <div className='w-100 text-center'>
                <Link to={'/allreview'}><p className='btn border  mt-4'>view more</p></Link>
            </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default LandingPage