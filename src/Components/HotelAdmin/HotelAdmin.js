import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, Col, Row } from 'reactstrap'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { GiCancel } from 'react-icons/gi'
import {AiFillEye} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HotelService from '../../services/hotelService'
import alertify from 'alertifyjs'

export default function HotelAdmin() {
    const navigate = useNavigate()
    const {adminId} = useParams()
    const url = `/hotel/create/${adminId}`
    const [hotel, setHotel] = useState()
    useEffect(() => {
        const hotelService = new HotelService()
        hotelService.getByEmployeeId(adminId)
        .then(result=>{
            if(result.data.code === 200){
                setHotel(result.data.data)
            }else{
                alertify.error(result.data.message)
            }
        })
    }, [])
    
    return (
        <div>
            <Row>
                <Col>
                   {
                    hotel == null
                    ? <div>
                        <h5>Qeydiyyatda olan otel yoxdur</h5>
                        <Link to={url}>Otel elave et</Link>
                    </div>
                    :  <Card>{console.log(hotel)}
                    <Row>
                        <Col md='6'>
                            {console.log(hotel)}
                            <CardImg src={require('../../assets/img/'+hotel.images[0].path)} alt='Hotel Image' />
                        </Col>
                        <Col md='6'>
                            <CardBody>
                                <h5>{hotel.name}</h5>
                                <p>Azerbaijan,{hotel.address.city.name},{hotel.address.addressLine}</p>
                                <p>{hotel.contact.phone}</p>
                            </CardBody>
                            <CardFooter className='d-flex'>
                                <Button onClick={() => navigate(`/hotel/${hotel.id}/room/add`)} color='primary'>Add Room</Button>&nbsp;
                                <Button onClick={() => navigate(`/hotel/${hotel.id}/rooms`)} color='primary'>Room List</Button>
                                <AiFillEye size='23' className='ms-auto' color='green' title='view' />
                                <AiFillEdit size='23' className='ms-3' title='edit' color='blue' />
                                <RiDeleteBin6Fill size='23' className='ms-3' color='red' title='delete' />
                            </CardFooter>
                        </Col>
                    </Row>
                </Card>
                   }
                </Col>
            </Row>
        </div>
    )
}
