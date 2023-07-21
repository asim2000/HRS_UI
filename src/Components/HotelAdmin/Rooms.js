import { Button, Card, CardBody, CardFooter, CardImg, Col, Input, InputGroup, Row, Table } from 'reactstrap'
import { AiFillEdit, AiOutlineArrowLeft } from 'react-icons/ai'
import { AiFillCopy } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import {AiFillEye} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RoomService from '../../services/roomService'
import alertify from 'alertifyjs'

export default function Rooms() {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const roomService = new RoomService()
        roomService.getAllByHotelId(id)
        .then(result=>{
            if(result.data.code === 200){
                setRooms(result.data.data)
            }else{
                alertify.error(result.data.message)
            }
        })
    }, [])
    
    return (
        <div>
            <Row>
                <Col>
                <Button onClick={()=>navigate('/hotel/admin/'+id)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Home</Button>
                </Col>
                <Col>
                    <Button className='d-flex ms-auto' color='primary' onClick={() => navigate('/hotel/room/add')}>Add Room</Button>
                </Col>
            </Row>
           {
            rooms.length === 0
            ?
            <Row>
                <h5>Elave olunmus otaq yoxdur</h5>
            </Row>
            :
            <Row>
                <Col>
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
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
                                    <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                    <AiFillEye title='view' color='blue' className='ms-3' />
                                    <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                    <AiFillEdit title='edit' color='aqua' className='ms-3' />
                                    <GiCancel color='red' title='cancel' className='ms-3' />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
                </Col>
            </Row>
           }
        </div>
    )
}
