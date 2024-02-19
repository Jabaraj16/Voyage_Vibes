import { Rating, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import EditPlace from './EditPlace';
import { Server_URL } from '../../Services/ServerURL';
import { removePlaceAPI } from '../../Services/allAPI';
import { removePlaceContextResponse } from '../ContextAPI/ContextShare';

function MyReview({place}) {
    const {removePlaceResponse,setRemovePlaceResponse}=useContext(removePlaceContextResponse)
    const [value, setValue] = useState(5)
    const [show, setShow] = useState(false);

    const handleRemove=async(pid)=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const reqHeader={
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
              }
             try{
                const result=await removePlaceAPI(pid,reqHeader)  
                if(result.status==200){
                    setRemovePlaceResponse(result.data)
                }
                console.log(result);
             }catch(err){
                console.log(err);
             }
        }
         
    }
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>

            <div className=''>
                    <Card className='me-5'  style={{ width: '18rem' }}>
                        <Card.Img className='btn' onClick={handleShow} variant="top" src={`${Server_URL}/uploads/${place.placeImage}`} />
                        <Card.Body>
                            <Card.Title>{place.placeName}</Card.Title>
                            <Card.Text >
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <div className='d-flex justify-content-center'>
                                        <Rating name="read-only" value={place.placeRating} readOnly />
                                    </div>
                                </Box>
                            </Card.Text>
                            <div>
                            <button className='btn text-danger' onClick={()=>handleRemove(place?._id)}><i class="fa-solid fa-trash"></i></button>
                            <EditPlace place={place}/>
                            </div>
                        </Card.Body>
                    </Card>

            </div>

            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{place.placeName}</Modal.Title>
                </Modal.Header>
                <Row>
                    <Col md={6} >
                        <Modal.Body>
                            <img width={'100%'} src={`${Server_URL}/uploads/${place.placeImage}`} alt="" />
                        </Modal.Body>
                    </Col>

                    <Col md={6} >
                        <Modal.Body>
                            <div>
                                <h6>Review by :{place.username}</h6>
                                <h6>Review:</h6>
                                <p>
                                   {place.review}
                                </p>
                                <a href={place.placeLocation} target='_blank'><i class="fa-solid fa-map-location"></i></a>
                            </div>
                        </Modal.Body>
                    </Col>
                </Row>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default MyReview