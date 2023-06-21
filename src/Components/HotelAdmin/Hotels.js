import React from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, Col, Row } from 'reactstrap'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { GiCancel } from 'react-icons/gi'
import {AiFillEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Hotels() {
    const navigate = useNavigate()
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Row>
                            <Col md='6'>
                                <CardImg src={require('../../assets/img/hotel.jpg')} alt='Hotel Image' />
                            </Col>
                            <Col md='6'>
                                <CardBody>
                                    <h5>Hilton</h5>
                                    <p>Azerbaijan,Baku</p>
                                    <p>Address Line</p>
                                    <p>+994 5454 54 54</p>
                                </CardBody>
                                <CardFooter className='d-flex'>
                                    <Button onClick={() => navigate('/hotel/room/add')} color='primary'>Add Room</Button>
                                    <AiFillEye size='23' className='ms-auto' color='green' title='view' />
                                    <AiFillEdit size='23' className='ms-3' title='edit' color='blue' />
                                    <RiDeleteBin6Fill size='23' className='ms-3' color='red' title='delete' />
                                </CardFooter>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
