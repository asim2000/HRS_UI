import { Button, Card, CardBody, CardFooter, CardImg, Col, Input, InputGroup, Row, Table } from 'reactstrap'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillCopy } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import {AiFillEye} from 'react-icons/ai'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Rooms() {
    const navigate = useNavigate()

    return (
        <div>
            <Row>
                <Col>
                    <h5>Rooms</h5>
                </Col>
                <Col>
                    <Button className='d-flex ms-auto' color='primary' onClick={() => navigate('/hotel/room/add')}>Add Room</Button>
                </Col>
            </Row>
            <Row className='mt-3 mb-5'>
                <Col>
                    <InputGroup className='d-flex ms-auto' style={{width:"350px"}}>
                        <Input type='text' className='d-flex ms-auto'/>
                        <Button>Search room</Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Type</th>
                                <th>Room</th>
                                <th>Adult</th>
                                <th>Childreen</th>
                                <th>Twin Bed</th>
                                <th>Single Bed</th>
                                <th>Pet</th>
                                <th>Breakfast</th>
                                <th>Parking</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123</td>
                                <td>Deluxe</td>
                                <td>1</td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                                <td>0</td>
                                <td>Yes</td>
                                <td>Yes,free</td>
                                <td>Yes,free</td>
                                <td>50</td>
                                <td>
                                    <AiFillEye title='view' color='green' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='blue' className='ms-3' />
                                    <GiCancel color='red' title='cancel' className='ms-3' />
                                </td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Deluxe</td>
                                <td>1</td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                                <td>0</td>
                                <td>Yes</td>
                                <td>Yes,free</td>
                                <td>Yes,free</td>
                                <td>50</td>
                                <td>
                                    <AiFillEye title='view' color='green' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='blue' className='ms-3' />
                                    <GiCancel color='red' title='cancel' className='ms-3' />
                                </td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Deluxe</td>
                                <td>1</td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                                <td>0</td>
                                <td>Yes</td>
                                <td>Yes,free</td>
                                <td>Yes,free</td>
                                <td>50</td>
                                <td>
                                    <AiFillEye title='view' color='green' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='blue' className='ms-3' />
                                    <GiCancel color='red' title='cancel' className='ms-3' />
                                </td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Deluxe</td>
                                <td>1</td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                                <td>0</td>
                                <td>Yes</td>
                                <td>Yes,free</td>
                                <td>Yes,free</td>
                                <td>50</td>
                                <td>
                                    <AiFillEye title='view' color='green' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='blue' className='ms-3' />
                                    <GiCancel color='red' title='cancel' className='ms-3' />
                                </td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Deluxe</td>
                                <td>1</td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                                <td>0</td>
                                <td>Yes</td>
                                <td>Yes,free</td>
                                <td>Yes,free</td>
                                <td>50</td>
                                <td>
                                    <AiFillEye title='view' color='green' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='blue' className='ms-3' />
                                    <GiCancel color='red' title='cancel' className='ms-3' />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
