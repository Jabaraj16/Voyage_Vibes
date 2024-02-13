import { Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import EditPlace from './EditPlace';

function MyReview() {
    const [value, setValue] = useState(5)
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <div className='row'>
                <div className='col-lg-4 mb-2'>
                    <Card  style={{ width: '18rem' }}>
                        <Card.Img className='btn' onClick={handleShow} variant="top" src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <Card.Body>
                            <Card.Title>Taj Mahal</Card.Title>
                            <Card.Text >
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <div className='d-flex justify-content-center'>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                </Box>
                            </Card.Text>
                            <div>
                            <button className='btn'><i class="fa-solid fa-trash"></i></button>
                            <EditPlace/>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
            


            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Taj Mahal</Modal.Title>
                </Modal.Header>
                <Row>
                    <Col md={6} >
                        <Modal.Body>
                            <img width={'100%'} src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </Modal.Body>
                    </Col>

                    <Col md={6} >
                        <Modal.Body>
                            <div>
                                <h6>Review by : jabaraj</h6>
                                <h6>Review:</h6>
                                <p>
                                    Truly a Wonder of the world. Had a lovely visit with kids and family.
                                    Crowds were manageable for a Saturday and we were able to complete the visit in 2.5 hours.
                                    Work a trip to Agra to just see this marvel
                                </p>
                                <a href='https://maps.app.goo.gl/igDQDDdx8DdaAiaf8' target='_blank'><i class="fa-solid fa-map-location"></i></a>
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