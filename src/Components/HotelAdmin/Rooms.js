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
    const {hotelId} = useParams()

    useEffect(() => {
        const roomService = new RoomService()
        roomService.getAllByHotelId(hotelId)
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
                <Button onClick={()=>navigate(`/hotel/admin/1`)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Home</Button>
                </Col>
                <Col>
                    <Button className='d-flex ms-auto' color='primary' onClick={() => navigate(`/hotel/${hotelId}/room/add`)}>Add Room</Button>
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
                                <th>Price</th>
                                <th>Room Style</th>
                                <th>Floor</th>
                                <th>Room Count</th>
                                <th>Adult</th>
                                <th>Childreen</th>
                                <th>Twin Bed</th>
                                <th>Single Bed</th>
                                <th>Shower Count</th>
                                <th>Room Status</th>
                                <th>Clean</th>
                                <th>Pet allow</th>
                                <th>Room Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(rooms)}
                            {
                                rooms.map(room=>(
                                    <tr>
                                        <td>{room.roomNumber}</td>
                                        <td>{room.pricePerNight}</td>
                                        <td>{room.roomStyle}</td>
                                        <td>{room.floor}</td>
                                        <td>{room.roomCount}</td>
                                        <td>{room.adultCount}</td>
                                        <td>{room.childreenCount}</td>
                                        <td>{room.twinBedCount}</td>
                                        <td>{room.singleBedCount}</td>
                                        <td>{room.showerCount}</td>
                                        <td>{room.roomStatus}</td>
                                        <td>{room.isClean?"Yes":"No"}</td>
                                        <td>{room.isPetAllowed?"Yes":"No"}</td>
                                        <td>{room.roomSize}</td>
                                        <td>
                                            <AiFillCheckCircle onClick={()=>navigate('/hotel/room/book')} title='book' color='green'/>
                                            <AiFillEye title='view' color='blue' className='ms-3' />
                                            <AiFillCopy title='copy' color='lime' className='ms-3'/>
                                            <AiFillEdit title='edit' color='aqua' className='ms-3' />
                                            <GiCancel color='red' title='cancel' className='ms-3' />
                                        </td>
                                </tr>
                                ))
                            }
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
