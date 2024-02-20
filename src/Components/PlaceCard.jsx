
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Server_URL } from '../../Services/ServerURL';

function PlaceCard({place}) {
    const [value, setValue] = useState(5)
    const [show, setShow] = useState(false);

   
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <div className='d-flex '>
                    <Card className='btn me-5' onClick={handleShow} style={{ width: '17rem',height:'300px' }}>
                        <Card.Img variant="top" src={`${Server_URL}/uploads/${place.placeImage}`} />
                        <Card.Body>
                            <Card.Title>{place.placeName}</Card.Title>
                            <Card.Text >

                                <div className='d-flex justify-content-center flex-column'>
                                   <div className='d-flex justify-content-center'>
                                        <h6>Review by :</h6>
                                        <p className='ms-3'>{place.username}</p>
                                   </div>
                                    <div>
                                        <Box
                                            sx={{
                                                '& > legend': { mt: 2 },
                                            }}
                                        >
                                             <Rating name="read-only" value={place.placeRating}readOnly />
                                             </Box>
                                    </div>
                                </div>

                            </Card.Text>
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
                                <h6>Review by : <span>{place.username}</span></h6>
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

export default PlaceCard